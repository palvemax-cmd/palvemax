/**
 * Инфографика "Сезонный календарь" — когда что заказывать
 */
export default function SeasonTimeline() {
  const months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

  const services = [
    {
      label: "Уборка снега",
      color: "#3b82f6",
      active: [0, 1, 2, 10, 11],
      peak: [0, 1, 11],
    },
    {
      label: "Покос травы",
      color: "#22c55e",
      active: [4, 5, 6, 7, 8, 9],
      peak: [5, 6, 7],
    },
    {
      label: "Уборка двора",
      color: "#f59e0b",
      active: [3, 4, 8, 9, 10],
      peak: [9, 10],
    },
    {
      label: "Переезды",
      color: "var(--blue)",
      active: [0,1,2,3,4,5,6,7,8,9,10,11],
      peak: [2, 3, 5, 8, 9],
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[640px]">
        {/* Month headers */}
        <div className="grid grid-cols-12 gap-1 mb-3 px-28">
          {months.map((m, i) => (
            <div key={i} className="text-center text-xs text-gray-400 font-medium">{m}</div>
          ))}
        </div>

        {/* Service rows */}
        <div className="space-y-2">
          {services.map((svc) => (
            <div key={svc.label} className="flex items-center gap-3">
              <div className="w-28 text-xs font-medium text-gray-700 text-right shrink-0">{svc.label}</div>
              <div className="grid grid-cols-12 gap-1 flex-1">
                {months.map((_, i) => {
                  const isActive = svc.active.includes(i);
                  const isPeak = svc.peak.includes(i);
                  return (
                    <div
                      key={i}
                      className="h-6 rounded-sm transition-all"
                      style={{
                        backgroundColor: isActive
                          ? isPeak
                            ? svc.color
                            : `${svc.color}55`
                          : "var(--gray-bg)",
                      }}
                      title={isPeak ? "Пиковый сезон" : isActive ? "Сезон" : "Не сезон"}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-4 justify-end pr-0">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-8 h-3 rounded-sm" style={{ backgroundColor: "#3b82f655" }}/>
            Сезон
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-8 h-3 rounded-sm" style={{ backgroundColor: "#3b82f6" }}/>
            Пик — бронируйте заранее
          </div>
        </div>
      </div>
    </div>
  );
}
