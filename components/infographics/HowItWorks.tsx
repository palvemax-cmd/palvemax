"use client";
import { usePathname } from "next/navigation";
import { getT, getLangFromPath, type Lang } from "@/lib/i18n";

const stepIcons = [
  <svg key="1" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="18" width="20" height="14" rx="2"/><path d="M12 18v-3a6 6 0 0112 0v3"/><circle cx="18" cy="10" r="3"/>
  </svg>,
  <svg key="2" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="24" height="24" rx="3"/><path d="M12 14h12M12 18h8M12 22h10"/>
  </svg>,
  <svg key="3" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="12"/><path d="M14 18l3 3 7-7"/>
  </svg>,
  <svg key="4" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="10" width="28" height="18" rx="3"/><path d="M4 16h28"/><path d="M10 22h4M20 22h6"/>
  </svg>,
];

export default function HowItWorksInfographic() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname) as Lang;
  const t = getT(lang).howItWorks;

  return (
    <div className="relative">
      <div className="hidden md:block absolute left-0 right-0 h-0.5 z-0"
        style={{ backgroundColor: "rgba(26,60,107,0.12)", top: "28px" }} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {t.steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md"
              style={{ backgroundColor: "var(--blue)" }}>
              {stepIcons[i]}
            </div>
            <div className="text-xs font-bold mb-1.5 tracking-widest" style={{ color: "var(--orange)" }}>
              0{i + 1}
            </div>
            <div className="font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              {step.title}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
