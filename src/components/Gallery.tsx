import Image from "next/image";
import { GALLERY } from "@/lib/content";

/** Section 5 — gallery. 3:2 (landscape) thumbnails on white bg.
 *  Heading is Assistant 24px 500 BLACK text-align: start (RTL = right). */
export default function Gallery() {
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
          {GALLERY.images.map((filename) => (
            <a
              key={filename}
              href={`/gallery/${filename}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden bg-gray-100"
              style={{ aspectRatio: "3 / 2" }}
            >
              <Image
                src={`/gallery/${filename}`}
                alt="קייטרינג כשר - תמונה להמחשה"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </a>
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
            style={{ color: "#0066cc" }}
          >
            {GALLERY.tavlinLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
