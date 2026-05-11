import Image from "next/image";
import { MENU_COLUMNS, MENU_BG } from "@/lib/content";
import { WhatsAppButton, PhoneButton } from "./CTAButtons";

function MenuList({ header, items }: { header: string; items: string[] }) {
  return (
    <div className="mb-6">
      <h3
        className="mb-2 pb-1 border-b border-white/30"
        style={{
          fontFamily: "Assistant, sans-serif",
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "28.8px",
          color: "#ffffff",
          textAlign: "start",
        }}
      >
        {header}
      </h3>
      <ul
        className="space-y-0"
        style={{
          fontFamily: "Assistant, sans-serif",
          fontSize: "16px",
          lineHeight: "26px",
          color: "#ffffff",
          textShadow: "rgba(0,0,0,0.6) 0 0 6px",
          textAlign: "start",
        }}
      >
        {items.map((item, i) => (<li key={i}>{item}</li>))}
      </ul>
    </div>
  );
}

/** Section 4 — full menu table, 3 columns on bg image */
export default function MenuTable() {
  return (
    <section id="menu" className="relative isolate overflow-hidden">
      <Image src={MENU_BG} alt="" fill sizes="100vw" className="object-cover object-center -z-10" />
      <div className="absolute inset-0 bg-black/65 -z-10" aria-hidden="true" />

      <div className="max-w-[1140px] mx-auto px-4 py-14 sm:py-16">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-2">
          {/* Column 1 (RTL = right): openers */}
          <div>
            <MenuList header={MENU_COLUMNS.openersAndSides.headers[0]} items={MENU_COLUMNS.openersAndSides.items} />
          </div>

          {/* Column 2: sides + drinks + desserts + addons */}
          <div>
            <MenuList header={MENU_COLUMNS.middle.headers[0]} items={MENU_COLUMNS.middle.sides} />
            <MenuList header={MENU_COLUMNS.middle.headers[1]} items={MENU_COLUMNS.middle.drinks} />
            <MenuList header={MENU_COLUMNS.middle.headers[2]} items={MENU_COLUMNS.middle.desserts} />
            <MenuList header={MENU_COLUMNS.middle.headers[3]} items={MENU_COLUMNS.middle.eventAddons} />
          </div>

          {/* Column 3: between + mains */}
          <div>
            <MenuList header={MENU_COLUMNS.betweenAndMains.headers[0]} items={MENU_COLUMNS.betweenAndMains.between} />
            <MenuList header={MENU_COLUMNS.betweenAndMains.headers[1]} items={MENU_COLUMNS.betweenAndMains.mains} />
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch">
          <WhatsAppButton shape="square" width="full" className="sm:max-w-[540px]" />
          <PhoneButton shape="square" width="full" className="sm:max-w-[540px]" />
        </div>
      </div>
    </section>
  );
}
