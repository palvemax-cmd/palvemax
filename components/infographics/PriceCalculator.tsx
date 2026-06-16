"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getT, getLangFromPath, type Lang } from "@/lib/i18n";

export default function PriceCalculator() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname) as Lang;
  const t = getT(lang).price;

  const [workers, setWorkers] = useState(1);
  const [hours, setHours] = useState(2);
  const rate = 45;
  const total = workers * hours * rate;

  return (
    <div className="card max-w-md mx-auto" style={{ border: "2px solid var(--border)" }}>
      <h3 className="text-lg font-bold mb-5 text-center"
        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
        {t.title}
      </h3>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">{t.workers}</label>
          <span className="font-bold text-sm" style={{ color: "var(--blue)" }}>{workers}</span>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((n, i) => (
            <button key={n} onClick={() => setWorkers(n)}
              className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                backgroundColor: workers === n ? "var(--blue)" : "var(--gray-bg)",
                color: workers === n ? "white" : "var(--gray-dark)",
              }}>
              {t.workerLabels[i]}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">{t.hours}</label>
          <span className="font-bold text-sm" style={{ color: "var(--blue)" }}>{hours} h</span>
        </div>
        <input type="range" min={2} max={10} step={0.5} value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="w-full" style={{ accentColor: "var(--blue)" }} />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>2h</span><span>5h</span><span>10h</span>
        </div>
      </div>

      <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="text-xs text-gray-500 mb-1">{t.result}</div>
        <div className="text-4xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--orange)" }}>
          {total} €
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {workers} × {hours}h × {rate} €/h · {t.vatNote}
        </div>
      </div>
      <p className="text-xs text-gray-400 text-center mt-3">{t.minNote}</p>
    </div>
  );
}
