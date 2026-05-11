import Image from "next/image";
import Link from "next/link";
import { CONTACT, SITE, WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white pt-14 pb-6">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Image
              src="/shefa-logo.png"
              alt={SITE.name}
              width={140}
              height={120}
              className="h-16 w-auto mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-white/75 text-sm leading-relaxed">
              קייטרינג כשר למהדרין באזור המרכז. הוקם בשנת {SITE.founded} ב{SITE.city}.
              <br />כשרות {SITE.kashrut}.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold mb-3 text-white">צרו קשר</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={CONTACT.phoneTel} className="hover:text-[#00ddff] transition-colors">
                  ☎ {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#00d339] transition-colors">
                  WhatsApp: 054-6272421
                </a>
              </li>
              <li className="text-white/65 text-xs mt-2">
                שעות פעילות: א&apos;–ה&apos; 00:00–23:49
                <br />שישי: 00:00–11:00
                <br />שבת קודש – סגור
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-3 text-white">קישורים</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/#packages" className="hover:text-white transition-colors">החבילות שלנו</Link></li>
              <li><Link href="/#menu" className="hover:text-white transition-colors">תפריט מלא</Link></li>
              <li><Link href="/#service-areas" className="hover:text-white transition-colors">אזורי שירות</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">צור קשר</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-3 text-white">מידע משפטי</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/sitemap" className="hover:text-white transition-colors">מפת אתר</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">תנאי שימוש</Link></li>
              <li><Link href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} {SITE.name}. כל הזכויות שמורות.</p>
          <p>קייטרינג כשר למהדרין באזור המרכז</p>
        </div>
      </div>
    </footer>
  );
}
