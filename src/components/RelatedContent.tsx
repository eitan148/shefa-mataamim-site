import Link from "next/link";
import { RELATED_FALLBACK, type RelatedPost } from "@/lib/content";

/** Section 7 — תוכן קשור (related content). On post pages, breadcrumb is shown at the top. */
export default function RelatedContent({
  breadcrumb,
  posts,
}: {
  breadcrumb?: { homeLabel: string; categoryLabel?: string; categoryHref?: string; current: string };
  posts?: RelatedPost[];
}) {
  const list = posts && posts.length > 0 ? posts : RELATED_FALLBACK;
  return (
    <section className="bg-white py-12 sm:py-14 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1c1c] text-center mb-3">
          תוכן קשור
        </h2>

        {breadcrumb && (
          <nav aria-label="breadcrumbs" className="text-center text-sm text-[#666] mb-8">
            <Link href="/" className="hover:text-[#7a1f1f]">
              {breadcrumb.homeLabel}
            </Link>
            {breadcrumb.categoryLabel && (
              <>
                <span className="mx-2">»</span>
                {breadcrumb.categoryHref ? (
                  <Link href={breadcrumb.categoryHref} className="hover:text-[#7a1f1f]">
                    {breadcrumb.categoryLabel}
                  </Link>
                ) : (
                  <span>{breadcrumb.categoryLabel}</span>
                )}
              </>
            )}
            <span className="mx-2">»</span>
            <span className="text-[#1c1c1c]">{breadcrumb.current}</span>
          </nav>
        )}

        <h3 className="text-lg font-bold text-[#7a1f1f] text-center mb-6">
          פוסטים
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-[15px]">
          {list.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${post.slug}`}
                className="block py-2 text-[#333] hover:text-[#7a1f1f] hover:underline transition-colors"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
