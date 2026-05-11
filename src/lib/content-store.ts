/**
 * Content store: reads JSON files from /content/{posts,pages}/.
 * Every page (incl. legal, contact, sitemap, homepage, and 920 blog posts) lives here.
 * The shared chrome is the same; only `title` and `content` vary per record.
 *
 * For N8N automation: new posts arrive via POST /api/admin/posts (server runtime
 * appends a record to disk OR proxies to the same content directory).
 */
import "server-only";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "content");

export type ContentRecord = {
  id?: string;
  slug: string;
  title: string;
  content: string;
  date?: string;
  modified?: string;
  type: "page" | "post";
  permalink?: string;
  excerpt?: string;
  image_url?: string;
  /** Optional override for routing — for "home" we want / instead of /home. */
  route?: string;
};

/** Cache parsed records during the same SSG/build run. */
const cache = new Map<string, ContentRecord | null>();
const listCache = new Map<string, ContentRecord[]>();

function readDir(kind: "pages" | "posts"): string[] {
  try {
    return fs.readdirSync(path.join(ROOT, kind)).filter((f) => f.endsWith(".json"));
  } catch {
    return [];
  }
}

function readFile(kind: "pages" | "posts", file: string): ContentRecord | null {
  const cacheKey = `${kind}/${file}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey)!;
  try {
    const raw = fs.readFileSync(path.join(ROOT, kind, file), "utf8");
    const parsed = JSON.parse(raw) as ContentRecord;
    cache.set(cacheKey, parsed);
    return parsed;
  } catch {
    cache.set(cacheKey, null);
    return null;
  }
}

/** Decode WP HTML entities in titles (&quot; → ", etc.) */
export function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export function getHome(): ContentRecord | null {
  return readFile("pages", "home.json");
}

export function getPageBySlug(slug: string): ContentRecord | null {
  // The slug might arrive as URL-encoded (%d7...) or as decoded Hebrew (אוכל...).
  // Files on disk are URL-encoded lowercase (WP convention).
  const decoded = (() => {
    try { return decodeURIComponent(slug); } catch { return slug; }
  })();
  const encodedLower = encodeURIComponent(decoded).toLowerCase();
  const encodedUpper = encodeURIComponent(decoded);
  const candidates = [
    `${slug}.json`,
    `${decoded}.json`,
    `${encodedLower}.json`,
    `${encodedUpper}.json`,
  ];
  for (const fn of candidates) {
    const r = readFile("pages", fn);
    if (r) return r;
  }
  for (const fn of candidates) {
    const r = readFile("posts", fn);
    if (r) return r;
  }
  return null;
}

export function listAllPosts(): ContentRecord[] {
  if (listCache.has("posts")) return listCache.get("posts")!;
  const files = readDir("posts");
  const out: ContentRecord[] = [];
  for (const f of files) {
    const r = readFile("posts", f);
    if (r) out.push(r);
  }
  out.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  listCache.set("posts", out);
  return out;
}

export function listAllPages(): ContentRecord[] {
  if (listCache.has("pages")) return listCache.get("pages")!;
  const files = readDir("pages");
  const out: ContentRecord[] = [];
  for (const f of files) {
    const r = readFile("pages", f);
    if (r) out.push(r);
  }
  listCache.set("pages", out);
  return out;
}

/** Slugs we expose as static routes — used for sitemap.xml and generateStaticParams. */
export function listAllRoutableSlugs(): { slug: string; type: "page" | "post"; date?: string }[] {
  const out: { slug: string; type: "page" | "post"; date?: string }[] = [];
  for (const p of listAllPages()) {
    if (p.slug && p.slug !== "home") out.push({ slug: p.slug, type: "page", date: p.modified || p.date });
  }
  for (const p of listAllPosts()) {
    out.push({ slug: p.slug, type: "post", date: p.modified || p.date });
  }
  return out;
}

export function getAdjacent(slug: string): { prev?: ContentRecord; next?: ContentRecord } {
  const posts = listAllPosts();
  const i = posts.findIndex((p) => p.slug === slug);
  if (i < 0) return {};
  return { prev: i > 0 ? posts[i - 1] : undefined, next: i < posts.length - 1 ? posts[i + 1] : undefined };
}
