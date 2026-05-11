"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CONTACT } from "@/lib/constants";
import { QUICK_FORM_2, CONTACT_BG } from "@/lib/content";

/** Section 6 — RED background with tiled bg image overlay. Rounded-pill buttons (only here). */
export default function QuickContactBlock() {
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
        body: JSON.stringify({ name, phone, source: "red-block" }),
      });
    } catch {/* */}
    router.push("/thank-you");
  }

  return (
    <section
      className="relative"
      style={{
        backgroundColor: "rgb(255, 0, 0)",
        backgroundImage: `url('${CONTACT_BG}')`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "50% 50%",
        paddingTop: "21px",
        paddingBottom: "60px",
      }}
    >
      <div className="relative max-w-[1140px] mx-auto px-4">
        <h4
          className="text-center whitespace-pre-line"
          style={{
            fontFamily: "Rubik, sans-serif",
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "18px",
            color: "#ffffff",
          }}
        >
          {QUICK_FORM_2.h4Lines.join("\n")}
        </h4>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          {/* Left (RTL = right): phone CTA */}
          <div>
            <h2
              className="mb-4"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "38.4px",
                color: "#ffffff",
                textAlign: "start",
              }}
            >
              {QUICK_FORM_2.h2}
            </h2>
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center gap-2 bg-white text-black px-[30px] py-[15px] rounded-full"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "16px",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              התקשרו: {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Right: form */}
          <div>
            <p
              className="mb-4"
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#ffffff",
                textAlign: "start",
                margin: "0 0 14.4px",
              }}
            >
              {QUICK_FORM_2.formSubhead}
            </p>
            <form onSubmit={handleSubmit} aria-label="טופס יצירת קשר מהיר" className="flex flex-col sm:flex-row gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
