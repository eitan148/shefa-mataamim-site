import { SERVICE_AREAS } from "@/lib/content";

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="py-14 sm:py-16 bg-gray-50 border-y border-gray-100"
    >
      <div className="max-w-[1180px] mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1c1c] mb-3">
          אזורי שירות
        </h2>
        <p className="text-[#555] max-w-2xl mx-auto mb-8">
          מספקים שירותי קייטרינג איכותי באזור המרכז – משלוחים, הגשה ופינוי בכל היישובים הבאים:
        </p>
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#333] shadow-sm"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
