import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export const metadata: Metadata = {
  title: "מפת אתר",
  description: "מפת אתר של קייטרינג שפע מטעמים – ניווט בכל דפי האתר.",
  alternates: { canonical: "/sitemap" },
};

const LINKS = [
  {
    title: "ראשי",
    items: [
      { href: "/", label: "דף הבית" },
      { href: "/#packages", label: "החבילות שלנו" },
      { href: "/#menu", label: "התפריט המלא" },
      { href: "/#about", label: "אודות" },
      { href: "/#service-areas", label: "אזורי שירות" },
    ],
  },
  {
    title: "יצירת קשר",
    items: [
      { href: "/contact", label: "צור קשר" },
      { href: "/thank-you", label: "דף תודה" },
    ],
  },
  {
    title: "מידע משפטי",
    items: [
      { href: "/terms", label: "תנאי שימוש" },
      { href: "/accessibility", label: "הצהרת נגישות" },
      { href: "/sitemap", label: "מפת אתר" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-[#1c1c1c] mb-3">מפת אתר</h1>
            <p className="text-[#555] mb-10">כל הדפים באתר במקום אחד.</p>

            <div className="grid sm:grid-cols-3 gap-8">
              {LINKS.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-bold text-[#7a1f1f] mb-3">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.items.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[#333] hover:text-[#7a1f1f] hover:underline transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
