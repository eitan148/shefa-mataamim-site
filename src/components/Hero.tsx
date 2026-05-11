import Image from "next/image";
import { WhatsAppButton, PhoneButton } from "./CTAButtons";
import { HERO, HERO_BG, SITE_POST_TITLE } from "@/lib/content";

export default function Hero({ pageTitle }: { pageTitle?: string }) {
  const title = (pageTitle || SITE_POST_TITLE) + HERO.h1Suffix;
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden h-[900px] max-h-[100vh]"
      aria-label="חזית האתר"
    >
      <Image
        src={HERO_BG}
        alt='שף מכין אוכל כשר למהדרין בד"ץ הרב מחפוד'
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-black/55 -z-10" aria-hidden="true" />

      <div className="h-full flex items-center justify-center">
        <div className="max-w-[630px] mx-auto px-4 text-center text-white">
          {/* shefa-logo decorative — small 150×150 above the title in source */}
          <Image
            src="/shefa-logo.png"
            alt=""
            width={150}
            height={150}
            className="mx-auto mb-5 brightness-0 invert opacity-90"
          />

          <h1
            style={{
              fontFamily: "Assistant, sans-serif",
              fontSize: "40px",
              fontWeight: 900,
              lineHeight: "40px",
              color: "#ffffff",
              textShadow: "0 2px 12px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,1)",
            }}
          >
            {title}
          </h1>

          <p
            className="mt-6"
            style={{
              fontFamily: "Assistant, sans-serif",
              fontSize: "21px",
              fontWeight: 400,
              lineHeight: "31.5px",
              color: "#ffffff",
              textShadow: "0 1px 8px rgba(0,0,0,0.85)",
            }}
          >
            {HERO.body}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-stretch">
            <WhatsAppButton shape="square" />
            <PhoneButton shape="square" />
          </div>

          <div className="mt-7 flex flex-col items-center gap-2">
            <Image
              src="/kashrut-machpod.png"
              alt='הכשר בד"ץ הרב שלמה מחפוד שליט"א'
              width={101}
              height={58}
              className="brightness-0 invert"
            />
            <p
              style={{
                fontFamily: "Assistant, sans-serif",
                fontSize: "21px",
                fontWeight: 400,
                lineHeight: "31.5px",
                color: "#ffffff",
                textShadow: "0 1px 6px rgba(0,0,0,0.85)",
              }}
            >
              {HERO.captionAfterCtas}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
