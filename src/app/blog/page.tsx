import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import A11yToolbar from "@/components/A11yToolbar";
import { getRecentPostSlugs } from "@/lib/wp";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "בלוג",
  description: 'בלוג קייטרינג שפע מטעמים - מאמרים, רעיונות ותכנון אירועים בכשרות בד"ץ הרב מחפוד.',
  alternates: { canonical: "/blog" },
};

const PER_PAGE = 10;

export default async function BlogIndex({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const sp = await searchParams;
  const currentPage = Math.max(1, parseInt(sp.page || "1", 10) || 1);
  const all = await getRecentPostSlugs(100);

  const totalPages = Math.max(1, Math.ceil(all.length / PER_PAGE));
  const startIdx = (currentPage - 1) * PER_PAGE;
  const pagePosts = all.slice(startIdx, startIdx + PER_PAGE);

  return (
    <>
      <Header />
      <A11yToolbar />

      <main className="flex-1 pt-[78px] pb-[58px] bg-white">
        <section className="max-w-[1140px] mx-auto px-4 py-14 sm:py-20">
          <h1
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
            בלוג
          </h1>

          <p
            className="mt-4"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "21px",
              fontWeight: 300,
              lineHeight: "31.5px",
              color: "rgb(74, 74, 74)",
            }}
          >
            מאמרים, טיפים ורעיונות לקייטרינג כשר ולאירועים שייזכרו.
          </p>

          <ul className="mt-12 space-y-6">
            {pagePosts.map((post) => (
              <li key={post.slug} className="border-b border-gray-200 pb-6">
                <h2
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "28px",
                    fontWeight: 500,
                    lineHeight: "33.6px",
                    color: "rgb(12, 12, 12)",
                    textAlign: "start",
                    margin: "0 0 8px",
                  }}
                >
                  <Link href={`/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
              </li>
            ))}
            {pagePosts.length === 0 && (
              <li className="text-center text-gray-500" style={{ fontFamily: "Rubik, sans-serif" }}>
                אין פוסטים לעמוד זה.
              </li>
            )}
          </ul>

          {totalPages > 1 && (
            <nav className="mt-10 flex items-center justify-between" aria-label="ניווט עמודי בלוג" style={{ fontFamily: "Rubik, sans-serif" }}>
              {currentPage > 1 ? (
                <Link
                  href={currentPage === 2 ? "/blog" : `/blog?page=${currentPage - 1}`}
                  className="px-4 py-2 rounded-full hover:underline"
                  style={{ color: "rgb(64, 84, 178)" }}
                >
                  → הקודם
                </Link>
              ) : <span />}

              <span className="text-sm" style={{ color: "rgb(74, 74, 74)" }}>
                עמוד {currentPage} מתוך {totalPages}
              </span>

              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="px-4 py-2 rounded-full hover:underline"
                  style={{ color: "rgb(64, 84, 178)" }}
                >
                  הבא ←
                </Link>
              ) : <span />}
            </nav>
          )}
        </section>
      </main>

      <Footer />
      <StickyBar />
    </>
  );
}
