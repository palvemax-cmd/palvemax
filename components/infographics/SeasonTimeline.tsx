"use client";
import { usePathname } from "next/navigation";
import { getT, getLangFromPath, type Lang } from "@/lib/i18n";

const serviceColors = ["#3b82f6", "#22c55e", "#f59e0b", "var(--blue)"];
const serviceActive = [[0,1,2,10,11],[4,5,6,7,8,9],[3,4,8,9,10],[0,1,2,3,4,5,6,7,8,9,10,11]];
const servicePeak = [[0,1,11],[5,6,7],[9,10],[2,3,5,8,9]];

export default function SeasonTimeline() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname) as Lang;
  const t = getT(lang).seasons;

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[640px]">
        <div className="grid grid-cols-12 gap-1 mb-3 px-28">
          {t.months.map((m, i) => (
            <div key={i} className="text-center text-xs text-gray-400 font-medium">{m}</div>
          ))}
        </div>
        <div className="space-y-2">
          {t.services.map((label, si) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-28 text-xs font-medium text-gray-700 text-right shrink-0">{label}</div>
              <div className="grid grid-cols-12 gap-1 flex-1">
                {t.months.map((_, mi) => {
                  const isActive = serviceActive[si].includes(mi);
                  const isPeak = servicePeak[si].includes(mi);
                  return (
                    <div key={mi} className="h-6 rounded-sm transition-all"
                      style={{ backgroundColor: isActive ? (isPeak ? serviceColors[si] : `${serviceColors[si]}55`) : "var(--gray-bg)" }}
                      title={isPeak ? t.peak : isActive ? t.active : t.inactive} />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 mt-4 justify-end">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-8 h-3 rounded-sm" style={{ backgroundColor: "#3b82f655" }} />{t.active}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-8 h-3 rounded-sm" style={{ backgroundColor: "#3b82f6" }} />{t.peak}
          </div>
        </div>
      </div>
    </div>
  );
}
