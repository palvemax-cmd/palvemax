export interface Testimonial {
  id: string;
  name: string;
  city: string;
  service: string;
  serviceSlug: string;
  rating: number;
  date: string;
  text: string;
  source: "google" | "direct" | "whatsapp";
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Марина К.",
    city: "Riihimäki",
    service: "Помощь при переезде",
    serviceSlug: "pereezd",
    rating: 5,
    date: "2024-10-15",
    text: "Переезжали из трёшки в Riihimäki в Hyvinkää. Двое ребят приехали вовремя, разобрали шкаф, который мы сами боялись трогать, загрузили всё аккуратно. Новый шкаф собрали уже на месте. Заняло 4 часа, я ожидала 6. Рекомендую без оговорок.",
    source: "google",
  },
  {
    id: "t2",
    name: "Антон В.",
    city: "Hyvinkää",
    service: "Сборка мебели",
    serviceSlug: "sborka-mebeli",
    rating: 5,
    date: "2024-11-03",
    text: "Заказал сборку PAX на три секции с внутренними ящиками. Мастер разобрался быстрее, чем я читал инструкцию. Всё ровно, петли отрегулированы, ничего не скрипит. 2 часа работы.",
    source: "google",
  },
  {
    id: "t3",
    name: "Светлана Р.",
    city: "Hämeenlinna",
    service: "Уборка квартир",
    serviceSlug: "uborka-kvartir",
    rating: 5,
    date: "2024-09-22",
    text: "Заказала loppusiivous при выезде из арендованной квартиры. Специалист пришла со своей химией, убирала 3 часа. Арендодатель принял квартиру без замечаний, вернул депозит полностью. Это и есть главный критерий.",
    source: "direct",
  },
  {
    id: "t4",
    name: "Pekka H.",
    city: "Janakkala",
    service: "Покос травы",
    serviceSlug: "pokos-travy",
    rating: 5,
    date: "2024-07-18",
    text: "Olen tilannut ruohonleikkauksen koko kesäksi. Tulevat sovitusti joka toinen viikko, piha on aina siisti. Ei tarvitse itse miettiä asiaa ollenkaan.",
    source: "google",
  },
  {
    id: "t5",
    name: "Ирина М.",
    city: "Loppi",
    service: "Уборка снега",
    serviceSlug: "uborka-snega",
    rating: 5,
    date: "2024-02-07",
    text: "Подписала сезонный договор на уборку снега. После каждого снегопада приходит СМС «въезд расчищен». Ни разу не пришлось ждать или напоминать. Именно так и должно работать.",
    source: "whatsapp",
  },
  {
    id: "t6",
    name: "Михаил Т.",
    city: "Riihimäki",
    service: "Мелкий ремонт",
    serviceSlug: "melkij-remont",
    rating: 5,
    date: "2024-08-30",
    text: "Накопил список из 8 задач: повесить TV, карниз, 3 полки, заменить кран и отрегулировать двери. Мастер справился за 2,5 часа. Сам бы провозился неделю. Оплата точно по часам.",
    source: "google",
  },
  {
    id: "t7",
    name: "Наталья В.",
    city: "Hyvinkää",
    service: "Уборка дома",
    serviceSlug: "uborka-domov",
    rating: 5,
    date: "2024-06-12",
    text: "Большой дом, 140 кв.м, плюс сауна. Пришли два специалиста, за 3 часа всё сделали. Сауна была отдельно убрана — полки, пол, стены. Я такого результата сама за целый день не добилась бы.",
    source: "direct",
  },
  {
    id: "t8",
    name: "Olga S.",
    city: "Turenki",
    service: "Грузчики",
    serviceSlug: "gruzchiki",
    rating: 5,
    date: "2024-05-28",
    text: "Нужно было перенести старый диван на улицу и поднять новый на 4-й этаж без лифта. Два грузчика справились за 45 минут. Никаких царапин на стенах. Рекомендую.",
    source: "google",
  },
];

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.serviceSlug === serviceSlug);
}

export function getTestimonialsByCity(citySlug: string): Testimonial[] {
  return testimonials.filter((t) =>
    t.city.toLowerCase().replace(/ä/g, "a").replace(/ö/g, "o") === citySlug
  );
}

export function getAverageRating(): number {
  const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
  return Math.round((sum / testimonials.length) * 10) / 10;
}
