import Image from "next/image";
import HeroForm from "./HeroForm";
import CTAButtons from "./CTAButtons";
import { HERO } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden"
      aria-label="חזית האתר"
    >
      <Image
        src="/hero-chef.jpg"
        alt='שף מכין אוכל כשר למהדרין בד"ץ הרב מחפוד'
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-black/60 -z-10" aria-hidden="true" />

      <div className="max-w-[1180px] mx-auto px-4 py-16 md:py-24 lg:py-28 text-white text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7a1f1f] rounded-full text-xs sm:text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
          {HERO.badgeText}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto text-white drop-shadow-md">
          {HERO.title}
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-white/95 drop-shadow">
          {HERO.body}
        </p>

        <div className="mt-8 flex justify-center">
          <CTAButtons />
        </div>

        <div className="mt-10 text-right text-[#1c1c1c]">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">
            {HERO.formTitle}
          </h2>
          <p className="text-center text-white/85 mb-4 text-sm sm:text-base">
            {HERO.formSub}
          </p>
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
