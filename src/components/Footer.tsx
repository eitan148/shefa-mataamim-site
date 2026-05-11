"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CONTACT, SITE } from "@/lib/constants";
import { FOOTER } from "@/lib/content";

const DARK_TEAL = "rgb(0, 38, 43)";
const GOLD = "rgb(211, 181, 116)";
const NAVY = "rgb(22, 22, 63)";
const MED_GRAY = "rgb(122, 122, 122)";
const GRAY_TEXT = "rgb(74, 74, 74)";
const LIGHT_TEAL_TEXT = "rgb(215, 215, 217)";
const PINK = "rgb(204, 51, 102)";

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, source: "footer" }),
      });
    } catch {/* */}
    router.push("/thank-you");
  }

  return (
    <footer>
      {/* Band 1 - WHITE bg: form block */}
      <div className="bg-white py-14 sm:py-16">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h4
            className="whitespace-pre-line"
            style={{ fontFamily: "Rubik, sans-serif", fontSize: "18px", fontWeight: 300, lineHeight: "26px", color: GRAY_TEXT }}
          >
            {FOOTER.formBlock.h4Lines.join("\n")}
          </h4>

          <h2
            className="mt-6"
            style={{ fontFamily: "Rubik, sans-serif", fontSize: "32px", fontWeight: 600, lineHeight: "38.4px", color: NAVY, textAlign: "center" }}
          >
            {FOOTER.formBlock.h2}
          </h2>

          {/* Source uses cyan+white (low contrast). We override to cyan + dark navy text. */}
          <div className="mt-4 flex justify-center">
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center gap-2 px-[30px] py-[15px] rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: "rgb(0, 221, 255)", color: NAVY, fontFamily: "Rubik, sans-serif", fontSize: "16px", fontWeight: 500 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              התקשרו: {CONTACT.phoneDisplay}
            </a>
          </div>

          <p
            className="mt-8"
            style={{ fontFamily: "Rubik, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", color: MED_GRAY }}
          >
            {FOOTER.formBlock.formSubhead}
          </p>

          <form onSubmit={handleSubmit} className="mt-4 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="שם"
              aria-label="שם"
              className="flex-1 min-w-0 bg-white px-4 py-[14px] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(0,221,255)] text-black"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="טלפון"
              required
              inputMode="tel"
              aria-label="טלפון"
              className="flex-1 min-w-0 bg-white px-4 py-[14px] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(0,221,255)] text-black"
            />
            <button
              type="submit"
              disabled={submitting}
              className="px-[30px] py-[15px] rounded-full whitespace-nowrap transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              style={{ backgroundColor: "rgb(0, 221, 255)", color: NAVY, fontFamily: "Rubik, sans-serif", fontSize: "21px", fontWeight: 700 }}
            >
              {submitting ? "שולח..." : "שלחו!"}
            </button>
          </form>
        </div>
      </div>

      {/* Band 2 - DARK TEAL: links columns + brand */}
      <div className="py-10 sm:py-12" style={{ backgroundColor: DARK_TEAL }}>
        <div className="max-w-[1140px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src="/shefa-logo.png" alt={SITE.name} width={140} height={120} className="h-16 w-auto mb-3 bg-white rounded-lg p-2" />
            <p style={{ fontFamily: "Rubik, sans-serif", fontSize: "16px", color: LIGHT_TEAL_TEXT, lineHeight: "24px" }}>
              {FOOTER.formBlock.tagline}
            </p>
          </div>

          <div style={{ fontFamily: "Rubik, sans-serif", fontSize: "14px", lineHeight: "22px", color: LIGHT_TEAL_TEXT }}>
            <h4 className="mb-2" style={{ fontSize: "18px", fontWeight: 300, color: GOLD }}>{FOOTER.hoursBlock.label}</h4>
            <p>{FOOTER.hoursBlock.weekdayDays}</p>
            <p className="mb-2">{FOOTER.hoursBlock.weekdayHours}</p>
            <p>{FOOTER.hoursBlock.fridayDays}</p>
            <p>{FOOTER.hoursBlock.fridayHours}</p>
            <p className="mt-3">
              <a href={CONTACT.phoneTel} className="hover:text-white transition-colors">{FOOTER.hoursBlock.customerService}</a>
            </p>
          </div>

          <div>
            <h4 className="mb-3" style={{ fontFamily: "Rubik, sans-serif", fontSize: "18px", fontWeight: 300, color: GOLD }}>
              {FOOTER.linksBlock.h4}
            </h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "Rubik, sans-serif" }}>
              {FOOTER.linksBlock.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors" style={{ color: LIGHT_TEAL_TEXT }}>{l.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3" style={{ fontFamily: "Rubik, sans-serif", fontSize: "18px", fontWeight: 300, color: GOLD }}>קישורי מדיניות</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "Rubik, sans-serif" }}>
              {FOOTER.legalBlock.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors" style={{ color: LIGHT_TEAL_TEXT }}>{l.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-[1140px] mx-auto px-4 mt-8 pt-6 border-t border-white/10 text-center">
          <p style={{ fontFamily: "Rubik, sans-serif", fontSize: "14px", color: LIGHT_TEAL_TEXT }}>
            {FOOTER.legalBlock.h2} {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </div>

      {/* Band 3 - WHITE bg: credit + secondary nav */}
      <div className="bg-white py-5">
        <div className="max-w-[1140px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm" style={{ fontFamily: "Rubik, sans-serif" }}>
          <p style={{ color: MED_GRAY }}>
            {FOOTER.legalBlock.creditPrefix}
            <a href={FOOTER.legalBlock.creditLink.href} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: PINK }}>
              {FOOTER.legalBlock.creditLink.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
