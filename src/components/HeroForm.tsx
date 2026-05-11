"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Variant = "strip" | "card" | "light";

export default function HeroForm({ variant = "card" }: { variant?: Variant }) {
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
        body: JSON.stringify({ name, phone, source: variant }),
      });
    } catch {
      /* server logs */
    }
    router.push("/thank-you");
  }

  const inputClass =
    variant === "light"
      ? "flex-1 min-w-0 px-4 py-3 rounded-md border border-white/40 bg-white/10 text-white placeholder-white/70 focus:bg-white focus:text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-white"
      : "flex-1 min-w-0 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7a1f1f] text-base text-[#1c1c1c]";

  const wrapperClass =
    variant === "strip"
      ? "w-full"
      : variant === "light"
      ? "w-full max-w-2xl mx-auto"
      : "bg-white rounded-2xl shadow-lg p-5 sm:p-6 w-full max-w-2xl mx-auto";

  return (
    <form onSubmit={handleSubmit} className={wrapperClass} aria-label="טופס יצירת קשר מהיר">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="שם"
          aria-label="שם"
          className={inputClass}
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="טלפון"
          required
          inputMode="tel"
          aria-label="טלפון"
          className={inputClass}
        />
        <button
          type="submit"
          disabled={submitting}
          className="btn-wa px-7 py-3 rounded-md font-bold text-base shadow-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {submitting ? "שולח..." : "שלחו!"}
        </button>
      </div>
    </form>
  );
}
