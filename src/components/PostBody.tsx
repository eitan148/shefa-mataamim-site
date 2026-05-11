import Link from "next/link";

export type PostNav = {
  prevLabel?: string;
  prevHref?: string;
  nextLabel?: string;
  nextHref?: string;
};

/**
 * Sections 9-11: post title + post body + post navigation.
 * `title` and `contentHtml` are the ONLY parts that vary per page in this template-driven site.
 */
export default function PostBody({
  title,
  contentHtml,
  nav,
}: {
  title: string;
  contentHtml: string;
  nav?: PostNav;
}) {
  return (
    <article className="bg-white">
      {/* Section 9 — post title — marginTop: 100px in source */}
      <div className="max-w-[1400px] mx-auto px-4" style={{ marginTop: "100px" }}>
        <h2
          style={{
            fontFamily: "Rubik, sans-serif",
            fontSize: "55px",
            fontWeight: 500,
            lineHeight: "77px",
            color: "rgb(12, 12, 12)",
            textAlign: "start",
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>

      {/* Section 10 — post body — Rubik 300 21px, 938px container */}
      <div className="max-w-[1140px] mx-auto px-4 mt-6">
        <div
          className="prose-wigig"
          style={{
            maxWidth: "938px",
            fontFamily: "Rubik, sans-serif",
            fontSize: "21px",
            fontWeight: 300,
            lineHeight: "31.5px",
            color: "rgb(12, 12, 12)",
            textAlign: "start",
          }}
          dangerouslySetInnerHTML={{ __html: contentHtml || "<p></p>" }}
        />
      </div>

      {/* Section 11 — post nav — marginTop: 80px */}
      {nav && (nav.prevHref || nav.nextHref) && (
        <div className="max-w-[1140px] mx-auto px-4" style={{ marginTop: "80px" }}>
          <nav className="flex flex-col sm:flex-row justify-between gap-4" aria-label="ניווט פוסטים">
            {nav.prevHref && (
              <Link
                href={nav.prevHref}
                className="hover:underline"
                style={{ fontFamily: "Rubik, sans-serif", color: "rgb(12,12,12)" }}
              >
                <span className="block text-sm" style={{ color: "rgb(51,51,51)" }}>הקודם</span>
                <span className="text-xl font-medium">{nav.prevLabel}</span>
              </Link>
            )}
            {nav.nextHref && (
              <Link
                href={nav.nextHref}
                className="hover:underline sm:text-end"
                style={{ fontFamily: "Rubik, sans-serif", color: "rgb(12,12,12)" }}
              >
                <span className="block text-sm" style={{ color: "rgb(51,51,51)" }}>הבא</span>
                <span className="text-xl font-medium">{nav.nextLabel}</span>
              </Link>
            )}
          </nav>
        </div>
      )}
    </article>
  );
}
