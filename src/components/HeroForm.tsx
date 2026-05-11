"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Variant = "strip" | "rounded";

export default function HeroForm({ variant = "strip" }: { variant?: Variant }) {
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
    } catch {/* server logs */}
    router.push("/thank-you");
  }

  const isRounded = variant === "rounded";
  const radius = isRounded ? "rounded-full" : "rounded-none";
  const btnFont = { fontFamily: "Rubik, sans-serif", fontWeight: 700, fontSize: "21px" };

  return (
    <form onSubmit={handleSubmit} className="w-full" aria-label="טופס יצירת קשר מהיר">
      <div className="flex flex-col sm:flex-row gap-3 items-stretch">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="שם"
          aria-label="שם"
          className={`flex-1 min-w-0 bg-white text-black px-4 py-[14px] ${radius} border-0 focus:outline-none focus:ring-2 focus:ring-white/50`}
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
          className={`flex-1 min-w-0 bg-white text-black px-4 py-[14px] ${radius} border-0 focus:outline-none focus:ring-2 focus:ring-white/50`}
        />
        <button
          type="submit"
          disabled={submitting}
          className={`bg-white text-black px-[30px] py-[15px] ${radius} whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed transition-opacity`}
          style={btnFont}
        >
          {submitting ? "שולח..." : "שלחו!"}
        </button>
      </div>
    </form>
  );
}
