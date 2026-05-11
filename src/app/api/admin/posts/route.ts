/**
 * POST /api/admin/posts
 * Designed for N8N automation: accepts a JSON post payload, writes it to
 * content/posts/<slug>.json, and triggers ISR revalidation for the new page.
 *
 * AUTH: requires Authorization: Bearer <CONTENT_INGEST_TOKEN> header.
 * Set CONTENT_INGEST_TOKEN as an env var in Coolify.
 */
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";

type PostPayload = {
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  date?: string;
  modified?: string;
  image_url?: string;
  permalink?: string;
  /** "page" or "post" — defaults to "post". */
  type?: "page" | "post";
};

function safeSlug(s: string): string {
  return (s || "").trim().replace(/[\\/\x00]/g, "-");
}

export async function POST(req: Request) {
  const auth = req.headers.get("authorization") || "";
  const expected = process.env.CONTENT_INGEST_TOKEN;
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "Server not configured: CONTENT_INGEST_TOKEN missing" },
      { status: 500 }
    );
  }
  if (auth !== `Bearer ${expected}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let payload: PostPayload;
  try {
    payload = (await req.json()) as PostPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const slug = safeSlug(payload.slug);
  const title = (payload.title || "").trim();
  const content = payload.content || "";
  if (!slug || !title) {
    return NextResponse.json({ ok: false, error: "slug and title are required" }, { status: 400 });
  }

  const type: "page" | "post" = payload.type === "page" ? "page" : "post";
  const dir = path.join(process.cwd(), "content", type === "page" ? "pages" : "posts");
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch {/* */}

  const record = {
    slug,
    title,
    content,
    excerpt: payload.excerpt || "",
    date: payload.date || new Date().toISOString().slice(0, 10),
    modified: payload.modified || new Date().toISOString().slice(0, 10),
    image_url: payload.image_url || "",
    permalink: payload.permalink || "",
    type,
  };

  const file = path.join(dir, `${slug}.json`);
  try {
    fs.writeFileSync(file, JSON.stringify(record, null, 2), "utf8");
  } catch (e) {
    return NextResponse.json({ ok: false, error: `Failed to write file: ${String(e)}` }, { status: 500 });
  }

  // Revalidate the new page + sitemap + homepage related-content list
  try {
    revalidatePath(`/${slug}`);
    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");
  } catch {/* */}

  return NextResponse.json({ ok: true, slug, type, route: `/${slug}` });
}
