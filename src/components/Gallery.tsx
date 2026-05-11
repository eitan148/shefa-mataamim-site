"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { GALLERY } from "@/lib/content";

/** Section 5 — Gallery with Elementor-style lightbox (Swiper navigation). */
export default function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(() => setOpenIdx((i) => (i === null ? null : (i + 1) % GALLERY.images.length)), []);
  const prev = useCallback(() => setOpenIdx((i) => (i === null ? null : (i - 1 + GALLERY.images.length) % GALLERY.images.length)), []);

  useEffect(() => {
    if (openIdx === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") prev();   // RTL: right arrow = previous
      else if (e.key === "ArrowLeft") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx, close, next, prev]);

  return (
    <section id="gallery" className="bg-white">
      <div className="max-w-[1140px] mx-auto px-4 py-12 sm:py-14">
        <h4
          className="mb-4"
          style={{
            fontFamily: "Assistant, sans-serif",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "28.8px",
            color: "#000000",
            textAlign: "start",
            margin: "8px 0 16px",
          }}
        >
          {GALLERY.heading}
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {GALLERY.images.map((filename, i) => (
            <button
              key={filename}
              type="button"
              onClick={() => setOpenIdx(i)}
              className="relative block overflow-hidden bg-gray-100 cursor-zoom-in transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(64,84,178)]"
              style={{ aspectRatio: "3 / 2" }}
              aria-label={`פתח תמונה ${i + 1} מתוך ${GALLERY.images.length}`}
            >
              <Image
                src={`/gallery/${filename}`}
                alt="קייטרינג כשר - תמונה להמחשה"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        <p
          className="mt-8"
          style={{
            fontFamily: "Assistant, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            color: "#000000",
            textAlign: "start",
          }}
        >
          {GALLERY.footnoteText}{" "}
          <a
            href={GALLERY.tavlinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
            style={{ color: "rgb(64, 84, 178)" }}
          >
            {GALLERY.tavlinLabel}
          </a>
        </p>
      </div>

      {/* Lightbox */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="גלריית תמונות"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="סגור"
            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev (RTL: visible on the right) */}
          <button
            type="button"
            onClick={prev}
            aria-label="הקודמת"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="הבאה"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="relative w-[min(92vw,1100px)] h-[min(85vh,800px)]">
            <Image
              src={`/gallery/${GALLERY.images[openIdx]}`}
              alt={`תמונה ${openIdx + 1} מתוך ${GALLERY.images.length}`}
              fill
              sizes="92vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-4 inset-x-0 text-center text-white/70 text-sm" style={{ fontFamily: "Rubik, sans-serif" }}>
            {openIdx + 1} / {GALLERY.images.length}
          </div>
        </div>
      )}
    </section>
  );
}
