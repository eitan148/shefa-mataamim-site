import HeroForm from "./HeroForm";
import { QUICK_FORM_1 } from "@/lib/content";

/** Section 1 — black band with H4 + inline form */
export default function QuickContactStrip() {
  return (
    <section className="bg-white">
      <div className="max-w-[1120px] mx-auto bg-black px-4 sm:px-8 py-8 sm:py-10 my-6">
        <h4
          className="mb-5 text-center"
          style={{
            fontFamily: "Rubik, sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            lineHeight: "18px",
            color: "#ffffff",
          }}
        >
          {QUICK_FORM_1.h4}
        </h4>
        <HeroForm variant="strip" />
      </div>
    </section>
  );
}
