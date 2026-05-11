import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "תנאי שימוש",
  description: "תנאי השימוש באתר קייטרינג שפע מטעמים.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0 py-12 sm:py-16 bg-white">
        <article className="max-w-3xl mx-auto px-4 prose-rtl text-[#333] leading-relaxed">
          <h1 className="text-4xl font-extrabold text-[#1c1c1c] mb-6">תנאי שימוש</h1>
          <p className="text-sm text-[#666] mb-8">עודכן לאחרונה: {new Date().getFullYear()}</p>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">1. כללי</h2>
          <p>
            השימוש באתר {SITE.name} (להלן: &quot;האתר&quot;) כפוף לתנאים המפורטים במסמך זה. גלישה,
            צפייה או שימוש כלשהו באתר מהווים את הסכמתך לכל התנאים האמורים.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">2. תוכן האתר</h2>
          <p>
            התכנים באתר הם תכני שיווק ופרסום של חברת {SITE.name}. אנו עושים מאמצים לוודא שהמידע
            המוצג הוא עדכני ומדויק. עם זאת, ייתכנו שגיאות, אי דיוקים או שינויים במחירים ובהיצע
            ללא הודעה מוקדמת. תנאי ההזמנה הסופיים נקבעים מול נציג מוסמך בלבד.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">3. הצעות מחיר</h2>
          <p>
            המחירים המופיעים באתר הינם מחירי מינימום למנה ואינם כוללים מע&quot;מ, הובלה או תוספות.
            הצעת מחיר רשמית תופק רק לאחר תיאום ישיר עם נציג החברה.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">4. כשרות</h2>
          <p>
            כל המוצרים שלנו עומדים בכשרות בד&quot;ץ יורה דעה – הרב מחפוד, עם משגיח צמוד באירועים.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">5. פרטיות</h2>
          <p>
            פרטים שתשאירו דרך טופס יצירת הקשר משמשים אך ורק לחזרה אליכם בנושא הפנייה. איננו
            מעבירים את פרטיכם לצדדים שלישיים ואיננו עושים בהם שימוש שיווקי ללא הסכמה מפורשת.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">6. קניין רוחני</h2>
          <p>
            כל הזכויות באתר, לרבות עיצוב, טקסט, תמונות וסמלים, שמורות ל-{SITE.name}. אין להעתיק
            או להשתמש בתכנים ללא רשות בכתב.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">7. שיפוט</h2>
          <p>
            תנאים אלה כפופים לחוקי מדינת ישראל. הסמכות הבלעדית לדון בכל מחלוקת נתונה לבתי
            המשפט במחוז מרכז.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">יצירת קשר</h2>
          <p>בכל שאלה ניתן לפנות אלינו בטלפון 072-3308-072.</p>
        </article>
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
