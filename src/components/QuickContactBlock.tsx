import Image from "next/image";
import HeroForm from "./HeroForm";
import { CONTACT } from "@/lib/constants";
import { CONTACT_BG, QUICK_FORM_2 } from "@/lib/content";

/** Section 6 — red overlay + bg image + form */
export default function QuickContactBlock() {
  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-16">
      <Image src={CONTACT_BG} alt="" fill sizes="100vw" className="object-cover object-center -z-10" />
      <div className="absolute inset-0 bg-[#c20000]/82 mix-blend-multiply -z-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-[#7a0a0a]/55 -z-10" aria-hidden="true" />

      <div className="max-w-[1000px] mx-auto px-4 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
          {QUICK_FORM_2.h4Lines[0]}
        </h2>
        <p className="mt-1 text-base sm:text-lg text-white/95" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
          {QUICK_FORM_2.h4Lines[1]}
        </p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start text-start">
          <div className="text-center lg:text-start">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{QUICK_FORM_2.h2}</h3>
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1c1c1c] font-bold text-base sm:text-lg shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
              </svg>
              התקשרו: {CONTACT.phoneDisplay}
            </a>
          </div>

          <div>
            <p className="text-white/95 mb-4" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
              {QUICK_FORM_2.formSubhead}
            </p>
            <HeroForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
