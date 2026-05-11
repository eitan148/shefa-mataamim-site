import Link from "next/link";
import {
  HOMEPAGE_POST_TITLE,
  HOMEPAGE_POST_NAV,
  HOMEPAGE_POST_BODY_INTRO,
  HOMEPAGE_POST_TOC,
  HOMEPAGE_POST_SECTIONS,
} from "@/lib/content";

export type PostNav = {
  prevLabel?: string;
  prevHref?: string;
  nextLabel?: string;
  nextHref?: string;
};

/** Sections 9-11 — post title (55px Rubik 500), body (Rubik 21px 300), nav */
export default function PostBody({
  title,
  contentHtml,
  nav,
}: {
  title?: string;
  contentHtml?: string;
  nav?: PostNav;
}) {
  const pageTitle = title || HOMEPAGE_POST_TITLE;
  const navigation = nav || HOMEPAGE_POST_NAV;

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
          {pageTitle}
        </h2>
      </div>

      {/* Section 10 — post body — Rubik 300 21px, 938px container */}
      <div className="max-w-[1140px] mx-auto px-4 mt-6">
        {contentHtml ? (
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
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        ) : (
          <div
            style={{
              maxWidth: "938px",
              fontFamily: "Rubik, sans-serif",
              fontSize: "21px",
              fontWeight: 300,
              lineHeight: "31.5px",
              color: "rgb(12, 12, 12)",
              textAlign: "start",
            }}
          >
            <p style={{ margin: "0 0 14.4px" }}>{HOMEPAGE_POST_BODY_INTRO}</p>

            <aside className="bg-gray-50 border border-gray-200 p-5 my-5">
              <h4
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "21.6px",
                  color: "#000000",
                  margin: 0,
                  textAlign: "start",
                }}
              >
                תוכן עניינים
              </h4>
              <ol className="mt-3 space-y-1 text-sm">
                {HOMEPAGE_POST_TOC.map((t) => (
                  <li key={t.anchor} className={t.num.includes(".") ? "pr-4" : ""}>
                    <a href={`#${t.anchor}`} className="hover:underline" style={{ color: "rgb(12,12,12)" }}>
                      <span className="text-[#999] me-1">{t.num}</span>
                      {t.text}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            {HOMEPAGE_POST_SECTIONS.map((section, i) => (
              <div key={i}>
                {section.h2 && (
                  <h2
                    id={section.anchor}
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "32px",
                      fontWeight: 500,
                      lineHeight: "38.4px",
                      color: "rgb(12, 12, 12)",
                      textAlign: "start",
                      margin: "8px 0 16px",
                    }}
                  >
                    {section.h2}
                  </h2>
                )}
                {section.h3 && (
                  <h3
                    id={section.anchor}
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "28px",
                      fontWeight: 500,
                      lineHeight: "33.6px",
                      color: "rgb(12, 12, 12)",
                      textAlign: "start",
                      margin: "8px 0 16px",
                    }}
                  >
                    {section.h3}
                  </h3>
                )}
                {section.paragraphs.map((p, pi) => (
                  <p key={pi} style={{ margin: "0 0 14.4px" }}>
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section 11 — post nav — marginTop: 80px */}
      {(navigation.prevHref || navigation.nextHref) && (
        <div className="max-w-[1140px] mx-auto px-4" style={{ marginTop: "80px" }}>
          <nav className="flex flex-col sm:flex-row justify-between gap-4" aria-label="ניווט פוסטים">
            {navigation.prevHref && (
              <Link
                href={navigation.prevHref}
                className="hover:underline"
                style={{ fontFamily: "Rubik, sans-serif", color: "rgb(12,12,12)" }}
              >
                <span className="block text-sm" style={{ color: "rgb(51,51,51)" }}>הקודם</span>
                <span className="text-xl font-medium">{navigation.prevLabel}</span>
              </Link>
            )}
            {navigation.nextHref && (
              <Link
                href={navigation.nextHref}
                className="hover:underline sm:text-end"
                style={{ fontFamily: "Rubik, sans-serif", color: "rgb(12,12,12)" }}
              >
                <span className="block text-sm" style={{ color: "rgb(51,51,51)" }}>הבא</span>
                <span className="text-xl font-medium">{navigation.nextLabel}</span>
              </Link>
            )}
          </nav>
        </div>
      )}
    </article>
  );
}
