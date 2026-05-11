import Image from "next/image";
import { MENU_COLUMNS, MENU_BG } from "@/lib/content";
import CTAButtons from "./CTAButtons";

function Column({
  groups,
}: {
  groups: { header: string; items: string[] }[];
}) {
  return (
    <div className="space-y-6">
      {groups.map((group, gi) => (
        <div key={gi}>
          <h3 className="text-xl font-bold text-[#c4a04a] mb-3 pb-2 border-b border-white/20">
            {group.header}
          </h3>
          <ul className="space-y-1.5 text-[15px] text-white leading-relaxed">
            {group.items.map((item, ii) => (
              <li key={ii} className="flex gap-2 items-start">
                <span className="mt-2 w-1 h-1 bg-[#c4a04a] rounded-full shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Section 4 — full menu, 3-column layout on bg image */
export default function MenuTable() {
  return (
    <section id="menu" className="relative isolate overflow-hidden py-16 sm:py-20">
      <Image
        src={MENU_BG}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-[#1c1c1c]/85 -z-10" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}>
            התפריט המלא שלנו
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <Column
            groups={[
              {
                header: MENU_COLUMNS.openersAndSides.headers[0],
                items: MENU_COLUMNS.openersAndSides.items,
              },
            ]}
          />
          <Column
            groups={[
              { header: MENU_COLUMNS.middle.headers[0], items: MENU_COLUMNS.middle.sides },
              { header: MENU_COLUMNS.middle.headers[1], items: MENU_COLUMNS.middle.drinks },
              { header: MENU_COLUMNS.middle.headers[2], items: MENU_COLUMNS.middle.desserts },
              { header: MENU_COLUMNS.middle.headers[3], items: MENU_COLUMNS.middle.eventAddons },
            ]}
          />
          <Column
            groups={[
              { header: MENU_COLUMNS.betweenAndMains.headers[0], items: MENU_COLUMNS.betweenAndMains.between },
              { header: MENU_COLUMNS.betweenAndMains.headers[1], items: MENU_COLUMNS.betweenAndMains.mains },
            ]}
          />
        </div>

        <div className="mt-14 flex justify-center">
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
