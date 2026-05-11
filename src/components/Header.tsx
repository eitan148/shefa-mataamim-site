import Image from "next/image";
import Link from "next/link";
import { CONTACT, SITE } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "ההתמחות שלנו", href: "/#packages" },
  { label: "התפריט", href: "/#menu" },
  { label: "אזורי שירות", href: "/#service-areas" },
  { label: "צור קשר", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1180px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={SITE.name}>
          <Image
            src="/shefa-logo.png"
            alt={SITE.name}
            width={120}
            height={104}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#1c1c1c]" aria-label="ניווט ראשי">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#7a1f1f] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href={CONTACT.phoneTel}
          className="btn-phone hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm shadow-sm transition-colors"
          aria-label={`התקשרו ${CONTACT.phoneDisplay}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
          </svg>
          {CONTACT.phoneDisplay}
        </a>

        {/* Mobile menu trigger */}
        <details className="md:hidden relative">
          <summary
            aria-label="פתח תפריט"
            className="list-none cursor-pointer p-2 rounded-md hover:bg-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </summary>
          <nav
            className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-lg py-2"
            aria-label="ניווט נייד"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-semibold text-[#1c1c1c] hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CONTACT.phoneTel}
              className="block sm:hidden px-4 py-2 text-sm font-semibold text-[#7a1f1f]"
            >
              ☎ {CONTACT.phoneDisplay}
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
