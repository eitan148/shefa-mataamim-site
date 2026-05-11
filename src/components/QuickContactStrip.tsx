import HeroForm from "./HeroForm";
import { QUICK_FORM_1 } from "@/lib/content";

/** Section 1 — narrow white strip between hero and about */
export default function QuickContactStrip() {
  return (
    <section className="bg-white py-7 sm:py-8 border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto px-4 grid lg:grid-cols-[1fr_auto] items-center gap-5">
        <h2 className="text-lg sm:text-xl font-bold text-[#1c1c1c] text-center lg:text-start leading-tight">
          {QUICK_FORM_1.h4}
        </h2>
        <HeroForm variant="strip" />
      </div>
    </section>
  );
}
