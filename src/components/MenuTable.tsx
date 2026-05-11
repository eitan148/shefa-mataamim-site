import { MENU_SECTIONS } from "@/lib/content";

const ORDER: (keyof typeof MENU_SECTIONS)[] = [
  "openers",
  "between",
  "mains",
  "sides",
  "drinks",
  "desserts",
  "addons",
];

export default function MenuTable() {
  return (
    <section
      id="menu"
      className="relative py-16 sm:py-20 bg-[#1c1c1c] text-white"
    >
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            התפריט המלא
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            70 סוגי מנות, 50 סוגי סלטים – הכל בכשרות בד&quot;ץ הרב מחפוד.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORDER.map((key) => {
            const section = MENU_SECTIONS[key];
            return (
              <div
                key={key}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold text-[#c4a04a] mb-4 pb-2 border-b border-white/15">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-white/90">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 bg-[#c4a04a] rounded-full shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
