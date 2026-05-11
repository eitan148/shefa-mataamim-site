import Image from "next/image";
import { ABOUT_PARAGRAPHS } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_240px] gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c] mb-6">
              קצת עלינו
            </h2>
            <div className="space-y-4 text-[#333] text-base sm:text-lg leading-relaxed">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <Image
              src="/machpod-logo.png"
              alt='בד"ץ יורה דעה הרב מחפוד'
              width={140}
              height={140}
              className="w-32 h-auto mb-4"
            />
            <h3 className="text-lg font-bold text-[#7a1f1f] mb-1">
              משגיח צמוד
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              כשרות בד&quot;ץ יורה דעה – הרב מחפוד.
              <br />הכי מהדרין שיש.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
