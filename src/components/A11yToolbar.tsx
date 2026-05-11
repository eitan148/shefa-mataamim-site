"use client";

import { useEffect, useState } from "react";

type A11yMode = "normal" | "large" | "small" | "grayscale" | "high-contrast" | "invert" | "highlight-links";

const STORAGE_KEY = "wigig_a11y";

export default function A11yToolbar() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<A11yMode>("normal");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY)) as A11yMode | null;
    if (saved) {
      setMode(saved);
      applyMode(saved);
    }
  }, []);

  function applyMode(m: A11yMode) {
    const html = document.documentElement;
    html.classList.remove("a11y-large", "a11y-small", "a11y-grayscale", "a11y-hc", "a11y-invert", "a11y-hl");
    switch (m) {
      case "large":
        html.classList.add("a11y-large");
        break;
      case "small":
        html.classList.add("a11y-small");
        break;
      case "grayscale":
        html.classList.add("a11y-grayscale");
        break;
      case "high-contrast":
        html.classList.add("a11y-hc");
        break;
      case "invert":
        html.classList.add("a11y-invert");
        break;
      case "highlight-links":
        html.classList.add("a11y-hl");
        break;
    }
    window.localStorage.setItem(STORAGE_KEY, m);
  }

  function set(m: A11yMode) {
    setMode(m);
    applyMode(m);
  }

  return (
    <nav
      id="pojo-a11y-toolbar"
      aria-label="כלי נגישות"
      className={`fixed top-24 z-[60] pointer-events-auto transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-[180px]"
      }`}
      style={{ left: 0 }}
    >
      <div className="relative">
        <ul className="bg-white border border-gray-200 rounded-tr-lg rounded-br-lg shadow-lg w-[180px] text-sm text-[#1c1c1c] py-2">
          <li className="px-3 py-2 font-bold text-xs text-[#7a1f1f] border-b border-gray-100">
            כלי נגישות
          </li>
          <li><button type="button" onClick={() => set("large")} className="w-full text-start px-3 py-1.5 hover:bg-gray-50">הגדל טקסט</button></li>
          <li><button type="button" onClick={() => set("small")} className="w-full text-start px-3 py-1.5 hover:bg-gray-50">הקטן טקסט</button></li>
          <li><button type="button" onClick={() => set("grayscale")} className="w-full text-start px-3 py-1.5 hover:bg-gray-50">גווני אפור</button></li>
          <li><button type="button" onClick={() => set("high-contrast")} className="w-full text-start px-3 py-1.5 hover:bg-gray-50">ניגודיות גבוהה</button></li>
          <li><button type="button" onClick={() => set("invert")} className="w-full text-start px-3 py-1.5 hover:bg-gray-50">ניגודיות הפוכה</button></li>
          <li><button type="button" onClick={() => set("highlight-links")} className="w-full text-start px-3 py-1.5 hover:bg-gray-50">הדגשת קישורים</button></li>
          <li><button type="button" onClick={() => set("normal")} className="w-full text-start px-3 py-1.5 hover:bg-gray-50 text-[#7a1f1f]">איפוס</button></li>
        </ul>

        {/* Tab handle */}
        <button
          type="button"
          aria-label={open ? "סגור סרגל נגישות" : "פתח סרגל נגישות"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="absolute top-0 -right-9 bg-[#7a1f1f] text-white w-9 h-12 rounded-l-none rounded-r-lg shadow-md flex items-center justify-center hover:bg-[#5a1414]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="6" r="2" fill="currentColor" stroke="none"/>
            <path d="M5 11h14M9 11v10M15 11v10M12 16l-1 5M12 16l1 5"/>
          </svg>
        </button>
      </div>
      <span className="sr-only">מצב נוכחי: {mode}</span>
    </nav>
  );
}
