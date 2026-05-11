import { PACKAGES, type Package } from "@/lib/content";
import { WhatsAppButton, PhoneButton } from "./CTAButtons";

const CARD_BGS = ["/package-bg-1.jpg", "/package-bg-2.jpg", "/package-bg-3.jpg"];

function PackageCard({ pkg, bgIndex, large = false }: { pkg: Package; bgIndex: number; large?: boolean }) {
  const bg = CARD_BGS[bgIndex % CARD_BGS.length];
  return (
    <article
      className="relative isolate overflow-hidden text-white p-[26px] flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: large ? "701px" : "534px",
      }}
    >
      <h2
        style={{
          fontFamily: "Assistant, sans-serif",
          fontSize: "32px",
          fontWeight: 900,
          lineHeight: "32px",
          color: "#ffffff",
          textShadow: "rgba(0,0,0,0.4) 0px 0px 10px",
          textAlign: "start",
          margin: 0,
        }}
      >
        {pkg.h2}
      </h2>

      <p
        className="mt-4"
        style={{
          fontFamily: "Assistant, sans-serif",
          fontSize: "21px",
          fontWeight: 400,
          lineHeight: "31.5px",
          color: "#ffffff",
          textShadow: "rgb(0,0,0) 0px 0px 10px",
          textAlign: "start",
        }}
      >
        {pkg.subtitle}
      </p>

      <div
        className="flex-1 mt-2"
        style={{
          fontFamily: "Assistant, sans-serif",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#ffffff",
          textShadow: "rgb(0,0,0) 0px 0px 8px",
        }}
      >
        {pkg.preamble && (
          <p className="font-bold mb-2">{pkg.preamble}</p>
        )}

        {pkg.items && (
          <ul className="space-y-1">
            {pkg.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {pkg.blocks && (
          <div className="space-y-3">
            {pkg.blocks.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <p className="font-bold mb-1">{block.heading}</p>
                )}
                {block.lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <WhatsAppButton shape="square" width="full" />
        <PhoneButton shape="square" width="full" />
      </div>
    </article>
  );
}

/** Section 3 — 8 packages, layout: 3-3-2 (3 cards × 2 rows + 2 wide cards) */
export default function PackagesGrid() {
  const row1 = PACKAGES.slice(0, 3);   // ₪48, ₪59, ₪85
  const row2 = PACKAGES.slice(3, 6);   // ₪95, ₪125, ₪170
  const row3 = PACKAGES.slice(6, 8);   // שבת, מרק תימני

  return (
    <section id="packages" className="bg-white">
      <div className="max-w-[1140px] mx-auto px-4 py-12 sm:py-16 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {row1.map((pkg, i) => (<PackageCard key={pkg.h2} pkg={pkg} bgIndex={i} />))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {row2.map((pkg, i) => (<PackageCard key={pkg.h2} pkg={pkg} bgIndex={i} />))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {row3.map((pkg, i) => (<PackageCard key={pkg.h2} pkg={pkg} bgIndex={i} large />))}
        </div>
      </div>
    </section>
  );
}
