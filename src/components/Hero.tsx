import Image from "next/image";
import CTAButtons from "./CTAButtons";
import { HERO, HERO_BG, SITE_POST_TITLE } from "@/lib/content";

export default function Hero({
  pageTitle,
}: {
  /** Defaults to the homepage's WP post title */
  pageTitle?: string;
}) {
  const title = (pageTitle || SITE_POST_TITLE) + HERO.h1Suffix;
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-[min(82vh,720px)] flex items-center"
      aria-label="חזית האתר"
    >
      <Image
        src={HERO_BG}
        alt='שף מכין אוכל כשר למהדרין בד"ץ הרב מחפוד'
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center -z-10 brightness-[0.55]"
      />
      <div className="absolute inset-0 bg-black/30 -z-10" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-4 py-16 sm:py-20 text-center text-white w-full relative">
        <div className="inline-block rounded-3xl bg-black/55 backdrop-blur-[2px] px-6 sm:px-10 py-7 sm:py-9 max-w-4xl">
          <h1
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] text-white"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            {title}
          </h1>

          <p
            className="mt-5 text-base sm:text-lg leading-[1.85] text-white max-w-3xl mx-auto"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
          >
            {HERO.body}
          </p>
        </div>

        <div className="mt-9 flex justify-center">
          <CTAButtons />
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <Image
            src="/kashrut-machpod.png"
            alt='הכשר בד"ץ הרב שלמה מחפוד שליט"א'
            width={180}
            height={104}
            className="w-[150px] h-auto sm:w-[180px] drop-shadow-lg"
          />
          <p className="text-sm sm:text-base font-semibold text-white" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
            {HERO.captionAfterCtas}
          </p>
        </div>
      </div>
    </section>
  );
}
