import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "תודה רבה!",
  description: "תודה שפניתם אלינו, ניצור איתכם קשר בהקדם האפשרי.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0 flex items-center justify-center bg-gradient-to-b from-white to-gray-50 min-h-[60vh]">
        <div className="max-w-xl mx-auto px-4 py-16 sm:py-24 text-center">
          <div className="mx-auto w-20 h-20 bg-[#00d339] rounded-full flex items-center justify-center mb-6 shadow-lg">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1c1c1c] mb-4">
            תודה רבה!
          </h1>
          <p className="text-lg text-[#555] mb-8 leading-relaxed">
            הפנייה התקבלה במערכת.
            <br />
            ניצור איתכם קשר בהקדם האפשרי – אנחנו עושים את המיטב כדי להעניק לכם שירות מעולה.
          </p>

          <CTAButtons />

          <Link
            href="/"
            className="inline-block mt-10 text-[#7a1f1f] font-semibold hover:underline"
          >
            ← חזרה לדף הבית
          </Link>
        </div>
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
