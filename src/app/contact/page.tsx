"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import A11yToolbar from "@/components/A11yToolbar";
import { CONTACT } from "@/lib/constants";

// Note: page is "use client" so metadata must live in layout or a separate metadata file.
// We export a metadata block from a parallel route segment.

export default function ContactPage() {
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
        body: JSON.stringify({ name, phone, source: "contact-page" }),
      });
    } catch { /* */ }
    router.push("/thank-you");
  }

  return (
    <>
      <Header />
      <A11yToolbar />

      <main className="flex-1 pt-[78px] pb-[58px] bg-white">
        <section className="max-w-[1140px] mx-auto px-4 py-14 sm:py-20">
          <h1
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "55px",
              fontWeight: 500,
              lineHeight: "77px",
              color: "rgb(12, 12, 12)",
              textAlign: "start",
              margin: 0,
            }}
          >
            צור קשר
          </h1>

          <p
            className="mt-4 max-w-2xl"
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "21px",
              fontWeight: 300,
              lineHeight: "31.5px",
              color: "rgb(12, 12, 12)",
            }}
          >
            נשמח לדבר איתך.<br />אל תהסס לפנות באמצעות הפרטים למטה.
          </p>

          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h4
                className="mb-4"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "rgb(12, 12, 12)",
                }}
              >
                נהיה בקשר
              </h4>
              <a
                href={CONTACT.phoneTel}
                className="inline-flex items-center gap-2 px-[30px] py-[15px] rounded-full transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "rgb(0, 221, 255)",
                  color: "rgb(22, 22, 63)",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                התקשרו: {CONTACT.phoneDisplay}
              </a>

              <div className="mt-10 text-sm" style={{ fontFamily: "Rubik, sans-serif", color: "rgb(74, 74, 74)" }}>
                <p>
                  <span className="font-semibold">שעות פעילות:</span> א&apos;–ה&apos; 00:00–23:49 · שישי 00:00–11:00 · שבת – סגור
                </p>
                <p className="mt-2">
                  <span className="font-semibold">עיר:</span> פתח תקווה
                </p>
                <p className="mt-2">
                  <span className="font-semibold">כשרות:</span> בד&quot;ץ יורה דעה – הרב מחפוד
                </p>
              </div>
            </div>

            <div>
              <p
                className="mb-4"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "rgb(74, 74, 74)",
                }}
              >
                מלא את הטופס למטה ואנו ניצור איתך קשר בהקדם האפשרי!
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3" aria-label="טופס יצירת קשר">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="שם"
                  aria-label="שם"
                  className="bg-white px-4 py-[14px] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(0,221,255)] text-black"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="טלפון"
                  required
                  inputMode="tel"
                  aria-label="טלפון"
                  className="bg-white px-4 py-[14px] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(0,221,255)] text-black"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-[30px] py-[15px] rounded-full transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  style={{
                    backgroundColor: "rgb(0, 221, 255)",
                    color: "rgb(22, 22, 63)",
                    fontFamily: "Rubik, sans-serif",
                    fontSize: "21px",
                    fontWeight: 700,
                  }}
                >
                  {submitting ? "שולח..." : "שלחו!"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBar />
    </>
  );
}
