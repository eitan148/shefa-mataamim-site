import Image from "next/image";
import Link from "next/link";
import HeroForm from "./HeroForm";
import { CONTACT, SITE } from "@/lib/constants";
import { FOOTER } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white">
      {/* Top: form block */}
      <div className="border-b border-white/10 py-12 sm:py-14">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {FOOTER.formBlock.h4Lines[0]}
          </h3>
          <p className="mt-1 text-white/85 text-base sm:text-lg">
            {FOOTER.formBlock.h4Lines[1]}
          </p>

          <h4 className="mt-8 text-lg sm:text-xl font-bold text-[#c4a04a]">{FOOTER.formBlock.h2}</h4>
          <div className="mt-3 flex justify-center">
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1c1c1c] font-bold text-base shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
              </svg>
              התקשרו: {CONTACT.phoneDisplay}
            </a>
          </div>

          <p className="mt-8 text-white/85">{FOOTER.formBlock.formSubhead}</p>
          <div className="mt-4">
            <HeroForm variant="light" />
          </div>
          <p className="mt-6 text-white/65 text-sm max-w-2xl mx-auto">
            {FOOTER.formBlock.tagline}
          </p>
        </div>
      </div>

      {/* Middle: 3-column links + brand */}
      <div className="py-10 sm:py-12 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/shefa-logo.png"
              alt={SITE.name}
              width={140}
              height={120}
              className="h-16 w-auto mb-3 bg-white rounded-lg p-2"
            />
            <h4 className="text-base font-bold text-white">{FOOTER.hoursBlock.h4}</h4>
          </div>

          {/* Hours */}
          <div className="text-sm text-white/85 leading-relaxed">
            <h4 className="text-base font-bold text-[#c4a04a] mb-2">{FOOTER.hoursBlock.label}</h4>
            <p>{FOOTER.hoursBlock.weekdayDays}</p>
            <p className="mb-2">{FOOTER.hoursBlock.weekdayHours}</p>
            <p>{FOOTER.hoursBlock.fridayDays}</p>
            <p>{FOOTER.hoursBlock.fridayHours}</p>
            <p className="mt-3">
              <a href={CONTACT.phoneTel} className="hover:text-[#00ddff] transition-colors">
                {FOOTER.hoursBlock.customerService}
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base font-bold text-[#c4a04a] mb-3">{FOOTER.linksBlock.h4}</h4>
            <ul className="space-y-2 text-sm text-white/85">
              {FOOTER.linksBlock.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-base font-bold text-[#c4a04a] mb-3">קישורי מדיניות</h4>
            <ul className="space-y-2 text-sm text-white/85">
              {FOOTER.legalBlock.links.map((l) => (
                <li key={l.href}>
                  {l.href.startsWith("http") ? (
                    <a href={l.href} className="hover:text-white transition-colors">
                      {l.text}
                    </a>
                  ) : (
                    <Link href={l.href} className="hover:text-white transition-colors">
                      {l.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom: copyright + credit */}
      <div className="py-6">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/55">
          <p>{FOOTER.legalBlock.h2} {new Date().getFullYear()} {SITE.name}</p>
          <p>
            {FOOTER.legalBlock.creditPrefix}
            <a
              href={FOOTER.legalBlock.creditLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white"
            >
              {FOOTER.legalBlock.creditLink.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
