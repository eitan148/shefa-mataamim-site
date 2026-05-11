import Image from "next/image";
import { GALLERY } from "@/lib/content";

/** Section 5 — gallery of 36 food photos */
export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-14 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1c1c1c]">
            {GALLERY.heading}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
          {GALLERY.images.map((filename) => (
            <a
              key={filename}
              href={`/gallery/${filename}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg group bg-gray-100"
            >
              <Image
                src={`/gallery/${filename}`}
                alt="קייטרינג כשר - תמונה להמחשה"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#666]">
          {GALLERY.footnoteText}{" "}
          <a
            href={GALLERY.tavlinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#7a1f1f] hover:underline"
          >
            {GALLERY.tavlinLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
