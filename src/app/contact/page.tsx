import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import A11yToolbar from "@/components/A11yToolbar";
import HeroForm from "@/components/HeroForm";
import CTAButtons from "@/components/CTAButtons";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "צור קשר",
  description: "צרו קשר עם קייטרינג שפע מטעמים – הצעת מחיר ב-WhatsApp או בטלפון 072-3308-072. עובדים כל השבוע חוץ משבת קודש.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <A11yToolbar />
      <main className="flex-1 pt-[78px] pb-[58px]">
        <section className="bg-gradient-to-b from-[#7a1f1f] to-[#5a1414] text-white py-16 sm:py-20">
          <div className="max-w-[1100px] mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">צור קשר</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              נשמח לדבר איתך. אל תהססו לפנות אלינו באמצעות הפרטים למטה –
              <br />אנחנו עובדים כל השבוע חוץ משבת קודש!
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1100px] mx-auto px-4 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2">יצירת קשר מהירה</h2>
              <p className="text-[#555] mb-6">בחרו את הדרך הנוחה לכם:</p>
              <CTAButtons />

              <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3 text-sm">
                <h3 className="text-base font-bold text-[#1c1c1c] mb-2">פרטי קשר</h3>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">טלפון:</span>
                  <a href={CONTACT.phoneTel} className="text-[#7a1f1f] hover:underline">
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">WhatsApp:</span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#00d339] hover:underline">
                    054-6272421
                  </a>
                </p>
                <p>
                  <span className="font-semibold">עיר:</span> פתח תקווה
                </p>
                <p>
                  <span className="font-semibold">שעות פעילות:</span> א&apos;–ה&apos; 00:00–23:49 · שישי 00:00–11:00 · שבת – סגור
                </p>
                <p>
                  <span className="font-semibold">כשרות:</span> בד&quot;ץ יורה דעה – הרב מחפוד
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2">או השאירו פרטים</h2>
              <p className="text-[#555] mb-6">ונחזור אליכם במהירות:</p>
              <HeroForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
