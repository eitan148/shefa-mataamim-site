import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת נגישות לאתר קייטרינג שפע מטעמים – אנו מחויבים להנגשת האתר לכלל הציבור.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0 py-12 sm:py-16 bg-white">
        <article className="max-w-3xl mx-auto px-4 text-[#333] leading-relaxed">
          <h1 className="text-4xl font-extrabold text-[#1c1c1c] mb-6">הצהרת נגישות</h1>

          <p>
            אתר קייטרינג שפע מטעמים מחויב להנגשת אתר האינטרנט לכלל הציבור, לרבות אנשים בעלי
            מוגבלויות. ההנגשה מתבצעת בהתאם להוראות תקנות שוויון זכויות לאנשים עם מוגבלות
            (התאמות נגישות לשירות), התשע&quot;ג–2013, ולפי המלצות WCAG 2.1 ברמה AA.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">פעולות שביצענו</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>תמיכה מלאה בקוראי מסך וניווט במקלדת בלבד.</li>
            <li>שימוש בתגיות סמנטיות (HTML5) לכל אזורי האתר.</li>
            <li>ניגודיות גבוהה בין טקסט לרקע.</li>
            <li>טקסט חלופי (alt) לכל התמונות הרלוונטיות.</li>
            <li>כותרות היררכיות תקינות (H1, H2, H3) בכל דף.</li>
            <li>כיווניות RTL מלאה והתאמה לעברית.</li>
            <li>טפסים נגישים עם תוויות מקושרות (label).</li>
            <li>תמיכה בהגדלת טקסט עד 200% ללא שבירת ה-layout.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">חריגים</h2>
          <p>
            ייתכן שתכנים מסוימים, כגון תמונות ישנות או קבצי PDF, עדיין לא הונגשו במלואם.
            אנו פועלים להשלמת ההנגשה בהקדם.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3 text-[#1c1c1c]">דרכי פנייה לרכז הנגישות</h2>
          <p>
            במידה ונתקלתם בבעיית נגישות באתר, נשמח לקבל ממכם פנייה:
            <br />
            <strong>שם הרכז:</strong> צוות שפע מטעמים
            <br />
            <strong>טלפון:</strong>{" "}
            <a href="tel:0723308072" className="text-[#7a1f1f] hover:underline">
              072-3308-072
            </a>
            <br />
            <strong>זמן טיפול:</strong> נשתדל להגיב לפנייתכם תוך 7 ימי עסקים.
          </p>
        </article>
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
