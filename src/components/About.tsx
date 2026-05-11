import Image from "next/image";
import { WhatsAppButton, PhoneButton } from "./CTAButtons";
import { ABOUT_PARAGRAPHS, ABOUT_BG } from "@/lib/content";

/** Section 2 — about. Bg image, no heading, 5 verbatim paragraphs, center-aligned. */
export default function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden">
      <Image
        src={ABOUT_BG}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-black/65 -z-10" aria-hidden="true" />

      <div className="max-w-[1140px] mx-auto px-4 py-16 sm:py-20 text-center">
        <div className="space-y-[14.4px]">
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "Assistant, sans-serif",
                fontSize: "21px",
                fontWeight: 400,
                lineHeight: "31.5px",
                color: "#ffffff",
                textShadow: "0 1px 6px rgba(0,0,0,0.7)",
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-[1140px] mx-auto">
          <WhatsAppButton shape="square" width="full" className="sm:max-w-[540px]" />
          <PhoneButton shape="square" width="full" className="sm:max-w-[540px]" />
        </div>
      </div>
    </section>
  );
}
