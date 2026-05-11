"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CONTACT, SITE } from "@/lib/constants";
import { FOOTER } from "@/lib/content";

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
    <footer className="bg-black text-white">
      {/* Top: form block — same fonts/sizes as section 6 red block */}
      <div className="border-b border-white/15 py-14 sm:py-16">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h4
            className="whitespace-pre-line"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "26px",
              color: "#ffffff",
            }}
          >
            {FOOTER.formBlock.h4Lines.join("\n")}
          </h4>

          <h2
            className="mt-8"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "32px",
              fontWeight: 600,
              lineHeight: "38.4px",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            {FOOTER.formBlock.h2}
          </h2>

          <div className="mt-4 flex justify-center">
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center gap-2 bg-white text-black px-[30px] py-[15px] rounded-full"
              style={{ fontFamily: "Rubik, sans-serif", fontSize: "16px", fontWeight: 500 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              התקשרו: {CONTACT.phoneDisplay}
            </a>
          </div>

          <p
            className="mt-8"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              color: "#ffffff",
            }}
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
              className="flex-1 min-w-0 bg-white text-black px-4 py-[14px] rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="טלפון"
              required
              inputMode="tel"
              aria-label="טלפון"
              className="flex-1 min-w-0 bg-white text-black px-4 py-[14px] rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-white text-black px-[30px] py-[15px] rounded-full whitespace-nowrap disabled:opacity-60"
              style={{ fontFamily: "Rubik, sans-serif", fontSize: "21px", fontWeight: 700 }}
            >
              {submitting ? "שולח..." : "שלחו!"}
            </button>
          </form>

          <p className="mt-6 text-sm text-white/75 max-w-2xl mx-auto" style={{ fontFamily: "Rubik, sans-serif" }}>
            {FOOTER.formBlock.tagline}
          </p>
        </div>
      </div>

      {/* Middle 3 cols */}
      <div className="py-12 border-b border-white/15">
        <div className="max-w-[1140px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src="/shefa-logo.png" alt={SITE.name} width={140} height={120} className="h-16 w-auto mb-3 bg-white rounded-lg p-2" />
            <h4
              style={{ fontFamily: "Rubik, sans-serif", fontSize: "18px", fontWeight: 600, color: "#ffffff" }}
            >
              {FOOTER.hoursBlock.h4}
            </h4>
          </div>

          <div style={{ fontFamily: "Rubik, sans-serif", fontSize: "14px", lineHeight: "22px", color: "#ffffff" }}>
            <h4 className="mb-2" style={{ fontSize: "16px", fontWeight: 600 }}>{FOOTER.hoursBlock.label}</h4>
            <p>{FOOTER.hoursBlock.weekdayDays}</p>
            <p className="mb-2">{FOOTER.hoursBlock.weekdayHours}</p>
            <p>{FOOTER.hoursBlock.fridayDays}</p>
            <p>{FOOTER.hoursBlock.fridayHours}</p>
            <p className="mt-3">
              <a href={CONTACT.phoneTel} className="hover:underline">{FOOTER.hoursBlock.customerService}</a>
            </p>
          </div>

          <div>
            <h4 className="mb-3" style={{ fontFamily: "Rubik, sans-serif", fontSize: "16px", fontWeight: 600 }}>{FOOTER.linksBlock.h4}</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "Rubik, sans-serif" }}>
              {FOOTER.linksBlock.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:underline text-white/90">{l.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3" style={{ fontFamily: "Rubik, sans-serif", fontSize: "16px", fontWeight: 600 }}>קישורי מדיניות</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "Rubik, sans-serif" }}>
              {FOOTER.legalBlock.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:underline text-white/90">{l.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="max-w-[1140px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60" style={{ fontFamily: "Rubik, sans-serif" }}>
          <p>{FOOTER.legalBlock.h2} {new Date().getFullYear()} {SITE.name}</p>
          <p>
            {FOOTER.legalBlock.creditPrefix}
            <a href={FOOTER.legalBlock.creditLink.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {FOOTER.legalBlock.creditLink.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
