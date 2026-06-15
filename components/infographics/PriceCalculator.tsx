/**
 * Инфографика "Калькулятор цены" — интерактивная
 * Пользователь выбирает кол-во рабочих и часов → видит цену
 */
"use client";
import { useState } from "react";

export default function PriceCalculator() {
  const [workers, setWorkers] = useState(1);
  const [hours, setHours] = useState(2);
  const rate = 45;
  const total = workers * hours * rate;

  return (
    <div className="card max-w-md mx-auto" style={{ border: "2px solid var(--border)" }}>
      <h3
        className="text-lg font-bold mb-5 text-center"
        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
      >
        Рассчитать стоимость
      </h3>

      {/* Workers */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">Количество работников</label>
          <span className="font-bold text-sm" style={{ color: "var(--blue)" }}>{workers} чел.</span>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setWorkers(n)}
              className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                backgroundColor: workers === n ? "var(--blue)" : "var(--gray-bg)",
                color: workers === n ? "white" : "var(--gray-dark)",
              }}
            >
              {n === 1 ? "1 — мастер" : n === 2 ? "2 — команда" : "3 — бригада"}
            </button>
          ))}
        </div>
      </div>

      {/* Hours */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">Часов работы</label>
          <span className="font-bold text-sm" style={{ color: "var(--blue)" }}>{hours} ч.</span>
        </div>
        <input
          type="range"
          min={2}
          max={10}
          step={0.5}
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="w-full accent-blue-700"
          style={{ accentColor: "var(--blue)" }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>2 ч (мин)</span>
          <span>5 ч</span>
          <span>10 ч</span>
        </div>
      </div>

      {/* Result */}
      <div
        className="rounded-xl p-4 text-center"
        style={{ backgroundColor: "var(--gray-bg)" }}
      >
        <div className="text-xs text-gray-500 mb-1">Примерная стоимость</div>
        <div
          className="text-4xl font-bold"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--orange)" }}
        >
          {total} €
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {workers} × {hours} ч × {rate} €/ч · с НДС
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center mt-3">
        Минимальный заказ — 2 часа. Оплата по факту затраченного времени.
      </p>
    </div>
  );
}
