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

/** Sections 9-11 — post title + body + navigation */
export default function PostBody({
  title,
  contentHtml,
  nav,
}: {
  title?: string;
  /** If provided, renders the WP REST content HTML. Otherwise renders the homepage's hand-typed intro+TOC+sections. */
  contentHtml?: string;
  nav?: PostNav;
}) {
  const pageTitle = title || HOMEPAGE_POST_TITLE;
  const navigation = nav || HOMEPAGE_POST_NAV;

  return (
    <article className="bg-white py-12 sm:py-16">
      <div className="max-w-[860px] mx-auto px-4">
        {/* Section 9 — post title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1c1c] text-center mb-10 pb-6 border-b border-gray-200">
          {pageTitle}
        </h2>

        {/* Section 10 — post body */}
        {contentHtml ? (
          <div
            className="prose-wigig text-[#333] leading-[1.85] text-[16px] sm:text-[17px]"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        ) : (
          <div className="text-[#333] leading-[1.85] text-[16px] sm:text-[17px] space-y-5">
            <p>{HOMEPAGE_POST_BODY_INTRO}</p>

            <aside className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="text-base font-bold text-[#1c1c1c] mb-2">תוכן עניינים</h3>
              <ol className="space-y-1 text-sm">
                {HOMEPAGE_POST_TOC.map((t) => (
                  <li key={t.anchor} className={t.num.includes(".") ? "pr-4" : ""}>
                    <a href={`#${t.anchor}`} className="text-[#7a1f1f] hover:underline">
                      <span className="text-[#999] me-1">{t.num}</span>
                      {t.text}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            {HOMEPAGE_POST_SECTIONS.map((section, i) => (
              <div key={i} className="space-y-4">
                {section.h2 && (
                  <h2 id={section.anchor} className="text-xl sm:text-2xl font-extrabold text-[#1c1c1c] pt-4">
                    {section.h2}
                  </h2>
                )}
                {section.h3 && (
                  <h3 id={section.anchor} className="text-lg sm:text-xl font-bold text-[#1c1c1c] pt-4">
                    {section.h3}
                  </h3>
                )}
                {section.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Section 11 — post nav */}
        {(navigation.prevHref || navigation.nextHref) && (
          <nav className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4 text-sm" aria-label="ניווט פוסטים">
            {navigation.prevHref && (
              <Link
                href={navigation.prevHref}
                className="flex items-center gap-2 text-[#7a1f1f] hover:underline"
              >
                <span aria-hidden>←</span>
                <span>
                  <span className="block text-xs text-[#999]">הקודם</span>
                  <span className="font-bold">{navigation.prevLabel}</span>
                </span>
              </Link>
            )}
            {navigation.nextHref && (
              <Link
                href={navigation.nextHref}
                className="flex items-center gap-2 text-[#7a1f1f] hover:underline sm:text-end"
              >
                <span>
                  <span className="block text-xs text-[#999]">הבא</span>
                  <span className="font-bold">{navigation.nextLabel}</span>
                </span>
                <span aria-hidden>→</span>
              </Link>
            )}
          </nav>
        )}
      </div>
    </article>
  );
}
