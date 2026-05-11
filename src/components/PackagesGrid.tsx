import { PACKAGES } from "@/lib/content";
import CTAButtons from "./CTAButtons";

export default function PackagesGrid() {
  return (
    <section
      id="packages"
      className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20"
    >
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c] mb-3">
            ההתמחות שלנו
          </h2>
          <p className="text-base sm:text-lg text-[#555] max-w-2xl mx-auto">
            8 חבילות לכל סוג אירוע – אזכרות, אירוסין, חתונות, בר/בת מצווה, שבת קודש ועוד.
            <br />כל החבילות כוללות אוכל מוכן בכשרות בד&quot;ץ הרב מחפוד.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border-2 p-6 shadow-sm hover:shadow-lg transition-shadow ${
                pkg.highlight
                  ? "border-[#7a1f1f] bg-white ring-2 ring-[#7a1f1f]/10"
                  : "border-gray-200 bg-white"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 right-4 px-3 py-1 bg-[#7a1f1f] text-white text-xs font-bold rounded-full shadow-md">
                  הכי מבוקש
                </span>
              )}
              <div className="text-center pb-4 border-b border-gray-100">
                <div className="text-4xl font-extrabold text-[#1c1c1c] mb-1">
                  ₪{pkg.price}
                  {pkg.priceSuffix && (
                    <span className="text-base text-[#666] font-medium"> {pkg.priceSuffix}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#7a1f1f]">{pkg.name}</h3>
                <p className="text-xs text-[#666] mt-1">{pkg.subtitle}</p>
              </div>
              <ul className="mt-4 space-y-2 flex-1">
                {pkg.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-[#333] leading-relaxed"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00d339"
                      strokeWidth="3"
                      className="mt-1 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
