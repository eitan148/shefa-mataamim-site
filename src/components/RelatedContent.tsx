import Link from "next/link";
import { RELATED_FALLBACK, type RelatedPost } from "@/lib/content";

export default function RelatedContent({
  breadcrumb,
  posts,
}: {
  breadcrumb?: { homeLabel: string; categoryLabel?: string; categoryHref?: string; current: string };
  posts?: RelatedPost[];
}) {
  // Use live WP REST posts when provided. Fallback is for SSR with WP API unreachable.
  const list = posts && posts.length > 0 ? posts : RELATED_FALLBACK;
  return (
    <section className="bg-white" style={{ marginTop: "180px" }}>
      <div className="max-w-[1140px] mx-auto px-4">
        <h2
          style={{
            fontFamily: "Rubik, sans-serif",
            fontSize: "45px",
            fontWeight: 400,
            lineHeight: "45px",
            color: "rgb(12, 12, 12)",
            textAlign: "start",
            margin: 0,
          }}
        >
          תוכן קשור
        </h2>

        {breadcrumb && (
          <nav
            aria-label="breadcrumbs"
            className="mt-3"
            style={{
              fontFamily: "Assistant, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              color: "rgb(51, 51, 51)",
              textAlign: "start",
            }}
          >
            <Link href="/" className="hover:underline">
              {breadcrumb.homeLabel}
            </Link>
            {breadcrumb.categoryLabel && (
              <>
                <span className="mx-2">»</span>
                {breadcrumb.categoryHref ? (
                  <Link href={breadcrumb.categoryHref} className="hover:underline">
                    {breadcrumb.categoryLabel}
                  </Link>
                ) : (
                  <span>{breadcrumb.categoryLabel}</span>
                )}
              </>
            )}
            <span className="mx-2">»</span>
            <span style={{ color: "rgb(12, 12, 12)" }}>{breadcrumb.current}</span>
          </nav>
        )}

        <h2
          className="mt-6"
          style={{
            fontFamily: "Assistant, sans-serif",
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "38.4px",
            color: "#000000",
            textAlign: "start",
            margin: "8px 0 16px",
          }}
        >
          פוסטים
        </h2>

        <ul
          className="flex flex-wrap gap-x-4 gap-y-2 list-none p-0 m-0"
          style={{
            fontFamily: "Assistant, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "21px",
            color: "#000000",
            textAlign: "start",
          }}
        >
          {list.map((post) => (
            <li key={post.slug} className="leading-tight">
              <Link href={`/${post.slug}`} className="text-black hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
