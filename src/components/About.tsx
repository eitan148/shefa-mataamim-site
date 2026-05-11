import Image from "next/image";
import CTAButtons from "./CTAButtons";
import { ABOUT_PARAGRAPHS, ABOUT_BG } from "@/lib/content";

/** Section 2 — about. Source has bg image and NO H2. */
export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-14 sm:py-20"
    >
      <Image
        src={ABOUT_BG}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" aria-hidden="true" />

      <div className="max-w-[1000px] mx-auto px-4 text-white">
        <div className="space-y-4 text-base sm:text-lg leading-[1.85] text-white" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
