import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר",
  description: "צרו קשר עם קייטרינג שפע מטעמים – הצעת מחיר ב-WhatsApp או בטלפון 072-3308-072. עובדים כל השבוע חוץ משבת קודש.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
