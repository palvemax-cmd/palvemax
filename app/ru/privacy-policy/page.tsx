import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_NAME, BUSINESS_ID, EMAIL, ADDRESS_FULL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — PalveMax Oy",
  description: "Политика конфиденциальности PalveMax Oy. Как мы обрабатываем персональные данные.",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <span className="text-gray-900">Политика конфиденциальности</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Политика конфиденциальности
          </h1>
          <p className="text-gray-400 text-sm mb-8">Обновлено: январь 2025</p>

          <div className="prose-palvemax space-y-8">

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>1. Кто мы</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {COMPANY_NAME} (Y-tunnus {BUSINESS_ID}), адрес: {ADDRESS_FULL}, Финляндия.<br/>
                Email: <a href={`mailto:${EMAIL}`} className="underline" style={{color:"var(--blue)"}}>{EMAIL}</a>.<br/>
                Мы являемся контроллером персональных данных в соответствии с GDPR и финским законодательством (Tietosuojalaki 1050/2018).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>2. Какие данные мы собираем</h2>
              <ul className="text-gray-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
                <li>Имя, номер телефона и email — при отправке формы заявки</li>
                <li>Город и выбранная услуга — для обработки запроса</li>
                <li>Фотографии объекта — если вы их прикрепляете</li>
                <li>Данные переписки в WhatsApp</li>
                <li>Технические данные: IP-адрес, тип браузера, страницы посещений — через аналитику</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>3. Цели обработки и правовые основания</h2>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                <p><strong>Обработка заявок</strong> — правовое основание: исполнение договора (GDPR ст. 6.1.b). Данные используются для связи с вами и организации услуги.</p>
                <p><strong>Аналитика сайта</strong> — правовое основание: согласие (GDPR ст. 6.1.a). Используем только при вашем согласии через баннер cookies.</p>
                <p><strong>Маркетинг</strong> — только с вашего явного согласия. Мы не отправляем рекламные рассылки без разрешения.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>4. Как долго мы храним данные</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Данные заявок хранятся 2 года после последнего контакта. Бухгалтерские данные — 7 лет согласно финскому законодательству (Kirjanpitolaki). Технические логи — не более 12 месяцев.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>5. Передача данных третьим лицам</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Мы не продаём и не передаём ваши данные третьим лицам в маркетинговых целях. Данные могут передаваться техническим подрядчикам (хостинг, email-сервис) в пределах ЕЭЗ или с обеспечением надлежащих гарантий (Standard Contractual Clauses).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>6. Ваши права</h2>
              <ul className="text-gray-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
                <li>Право на доступ к своим данным</li>
                <li>Право на исправление неточных данных</li>
                <li>Право на удаление данных («право на забвение»)</li>
                <li>Право на ограничение обработки</li>
                <li>Право на перенос данных</li>
                <li>Право на отзыв согласия в любое время</li>
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                Для реализации прав обращайтесь на <a href={`mailto:${EMAIL}`} className="underline" style={{color:"var(--blue)"}}>{EMAIL}</a>. Ответ — в течение 30 дней. Вы также можете обратиться в финский надзорный орган: <a href="https://tietosuoja.fi" target="_blank" rel="noopener noreferrer" className="underline" style={{color:"var(--blue)"}}>tietosuoja.fi</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>7. Безопасность</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Сайт работает по HTTPS. Данные формы передаются в зашифрованном виде. Доступ к данным имеют только сотрудники, которым это необходимо для работы.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>8. Контакт</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                По вопросам обработки персональных данных:<br/>
                {COMPANY_NAME}, {ADDRESS_FULL}<br/>
                <a href={`mailto:${EMAIL}`} className="underline" style={{color:"var(--blue)"}}>{EMAIL}</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
