import { PACKAGES, type Package } from "@/lib/content";
import CTAButtons from "./CTAButtons";

function PackageCard({ pkg }: { pkg: Package }) {
  // Split heading like "₪48 - בסיסי" into price + name
  const [pricePart, ...rest] = pkg.h2.split(" - ");
  const name = rest.join(" - ");

  return (
    <article className="flex flex-col rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <header className="px-6 pt-6 pb-4 text-center border-b border-gray-100">
        <h2 className="text-4xl font-extrabold text-[#1c1c1c] leading-tight">
          {pricePart}
        </h2>
        <div className="mt-1 text-lg font-bold text-[#7a1f1f]">{name}</div>
        <div className="mt-1 text-sm text-[#666]">{pkg.subtitle}</div>
      </header>

      <div className="flex-1 px-6 py-5 text-[15px] text-[#333] leading-relaxed">
        {pkg.preamble && (
          <p className="font-bold text-[#1c1c1c] mb-3">{pkg.preamble}</p>
        )}

        {pkg.items && (
          <ul className="space-y-2">
            {pkg.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d339" strokeWidth="3" className="mt-1.5 shrink-0" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {pkg.blocks && (
          <div className="space-y-4">
            {pkg.blocks.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <p className="font-bold text-[#1c1c1c] mb-1">{block.heading}</p>
                )}
                {block.lines.map((line, j) => (
                  <p key={j} className="text-[#333]">{line}</p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="px-5 pb-5 flex flex-col gap-2">
        <a
          href="https://wa.me/972546272421?text=%D7%94%D7%99%D7%99%20%D7%A4%D7%A0%D7%99%D7%AA%D7%99%20%D7%9C%D7%A7%D7%99%D7%99%D7%98%D7%A8%D7%99%D7%A0%D7%92%20%D7%A9%D7%A4%D7%A2%20%D7%9E%D7%98%D7%A2%D7%9E%D7%99%D7%9D"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa text-center py-2.5 rounded-full text-sm font-bold shadow-sm"
        >
          קבלו הצעת מחיר בווצאפ
        </a>
        <a
          href="tel:0723308072"
          className="btn-phone-dark text-center py-2.5 rounded-full text-sm font-bold shadow-sm"
        >
          התקשרו: 072-3308-072
        </a>
      </footer>
    </article>
  );
}

/** Section 3 — 8 packages */
export default function PackagesGrid() {
  return (
    <section id="packages" className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.h2} pkg={pkg} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
