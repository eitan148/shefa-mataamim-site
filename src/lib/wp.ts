// Light WP REST client. Source WordPress is wigig.co.il (still live during cutover).
// Once DNS flips we'll point WP_API_BASE to an internal admin URL.

const WP_API_BASE = process.env.NEXT_PUBLIC_WP_API_BASE || "https://www.wigig.co.il/wp-json/wp/v2";

export type WPPost = {
  id: number;
  slug: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: { url: string }[];
  };
};

export type RelatedSlug = { title: string; slug: string };

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const r = await fetch(
      `${WP_API_BASE}/posts?slug=${encodeURIComponent(slug)}&_fields=id,slug,link,title,content,excerpt,date,modified,yoast_head_json`,
      { next: { revalidate: 600 } }
    );
    if (!r.ok) return null;
    const arr: WPPost[] = await r.json();
    return arr[0] || null;
  } catch {
    return null;
  }
}

export async function getRecentPostSlugs(perPage = 100): Promise<RelatedSlug[]> {
  try {
    const r = await fetch(
      `${WP_API_BASE}/posts?per_page=${perPage}&_fields=slug,title`,
      { next: { revalidate: 600 } }
    );
    if (!r.ok) return [];
    const arr: { slug: string; title: { rendered: string } }[] = await r.json();
    return arr.map((p) => ({
      slug: p.slug,
      title: decodeHtml(p.title.rendered),
    }));
  } catch {
    return [];
  }
}

export async function getAdjacentPosts(currentSlug: string): Promise<{
  prev?: RelatedSlug;
  next?: RelatedSlug;
}> {
  const all = await getRecentPostSlugs(100);
  const idx = all.findIndex((p) => p.slug === currentSlug);
  if (idx < 0) return {};
  return {
    prev: idx > 0 ? all[idx - 1] : undefined,
    next: idx < all.length - 1 ? all[idx + 1] : undefined,
  };
}

function decodeHtml(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
