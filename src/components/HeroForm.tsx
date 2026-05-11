"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, source: "hero" }),
      });
    } catch {
      /* swallow – redirect anyway, server logs the failure */
    }
    router.push("/thank-you");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${compact ? "" : "bg-white rounded-xl shadow-lg p-5 sm:p-6"} w-full max-w-xl mx-auto`}
      aria-label="טופס יצירת קשר מהיר"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="שם"
          aria-label="שם"
          className="flex-1 min-w-0 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7a1f1f] text-base text-[#1c1c1c]"
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="טלפון"
          required
          inputMode="tel"
          pattern="[0-9\\-\\+\\s\\(\\)]+"
          aria-label="טלפון"
          className="flex-1 min-w-0 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7a1f1f] text-base text-[#1c1c1c]"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-wa px-6 py-3 rounded-md font-bold text-base shadow-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isSubmitting ? "שולח..." : "שלחו!"}
        </button>
      </div>
    </form>
  );
}
