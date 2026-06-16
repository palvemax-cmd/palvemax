export interface Testimonial {
  id: string;
  name: string;
  nameFi: string;
  nameEn: string;
  city: string;
  service: string;
  serviceFi: string;
  serviceEn: string;
  serviceSlug: string;
  rating: number;
  date: string;
  text: string;
  textFi: string;
  textEn: string;
  source: "google" | "direct" | "whatsapp";
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Марина К.",
    nameFi: "Marina K.",
    nameEn: "Marina K.",
    city: "Riihimäki",
    service: "Помощь при переезде",
    serviceFi: "Muuttopalvelu",
    serviceEn: "Moving service",
    serviceSlug: "pereezd",
    rating: 5,
    date: "2024-10-15",
    text: "Переезжали из трёшки в Riihimäki в Hyvinkää. Двое ребят приехали вовремя, разобрали шкаф, который мы сами боялись трогать, загрузили всё аккуратно. Новый шкаф собрали уже на месте. Заняло 4 часа, я ожидала 6. Рекомендую без оговорок.",
    textFi: "Muutimme kolmiosta Riihimäeltä Hyvinkäälle. Kaksi miestä tuli ajoissa, purkivat kaapin jota itse pelkäsimme koskea, lastasivat kaiken siististi. Uusi kaappi koottiin jo uudessa paikassa. Kesti 4 tuntia, odotin 6. Suosittelen ilman varauksia.",
    textEn: "We moved from a 3-room apartment in Riihimäki to Hyvinkää. Two guys arrived on time, disassembled a wardrobe we were afraid to touch ourselves, loaded everything carefully. The new wardrobe was assembled at the new place. Took 4 hours, I expected 6. Recommend without reservations.",
    source: "google",
  },
  {
    id: "t2",
    name: "Антон В.",
    nameFi: "Antti V.",
    nameEn: "Anton V.",
    city: "Hyvinkää",
    service: "Сборка мебели",
    serviceFi: "Huonekalukokoonpano",
    serviceEn: "Furniture assembly",
    serviceSlug: "sborka-mebeli",
    rating: 5,
    date: "2024-11-03",
    text: "Заказал сборку PAX на три секции с внутренними ящиками. Мастер разобрался быстрее, чем я читал инструкцию. Всё ровно, петли отрегулированы, ничего не скрипит. 2 часа работы.",
    textFi: "Tilasin PAX-kaapin kokoamisen kolmella osiolla ja sisälaatikoilla. Asentaja selvisi nopeammin kuin minä luin ohjetta. Kaikki suorassa, saranoista säädetty, mikään ei narise. 2 tunnin työ.",
    textEn: "Ordered assembly of a PAX wardrobe with three sections and interior drawers. The assembler finished faster than I read the instructions. Everything is straight, hinges adjusted, nothing creaks. 2 hours of work.",
    source: "google",
  },
  {
    id: "t3",
    name: "Светлана Р.",
    nameFi: "Svetlana R.",
    nameEn: "Svetlana R.",
    city: "Hämeenlinna",
    service: "Уборка квартир",
    serviceFi: "Asunnon siivous",
    serviceEn: "Apartment cleaning",
    serviceSlug: "uborka-kvartir",
    rating: 5,
    date: "2024-09-22",
    text: "Заказала loppusiivous при выезде из арендованной квартиры. Специалист пришла со своей химией, убирала 3 часа. Арендодатель принял квартиру без замечаний, вернул депозит полностью. Это и есть главный критерий.",
    textFi: "Tilasin loppusiivouksen vuokra-asunnosta muuttaessani pois. Siivooja tuli omilla pesuaineillaan, siivosi 3 tuntia. Vuokranantaja otti asunnon vastaan ilman huomautuksia, palautti vakuuden kokonaan. Se on tärkein kriteeri.",
    textEn: "Ordered end-of-tenancy cleaning when moving out of a rental apartment. The cleaner came with her own supplies, cleaned for 3 hours. The landlord accepted the apartment without complaints and returned the full deposit. That's the main criterion.",
    source: "direct",
  },
  {
    id: "t4",
    name: "Pekka H.",
    nameFi: "Pekka H.",
    nameEn: "Pekka H.",
    city: "Janakkala",
    service: "Покос травы",
    serviceFi: "Ruohonleikkaus",
    serviceEn: "Lawn mowing",
    serviceSlug: "pokos-travy",
    rating: 5,
    date: "2024-07-18",
    text: "Tilasin ruohonleikkauksen koko kesäksi. Tulevat sovitusti joka toinen viikko, piha on aina siisti. Ei tarvitse itse miettiä asiaa ollenkaan.",
    textFi: "Tilasin ruohonleikkauksen koko kesäksi. Tulevat sovitusti joka toinen viikko, piha on aina siisti. Ei tarvitse itse miettiä asiaa ollenkaan.",
    textEn: "I ordered lawn mowing for the whole summer. They come every two weeks as agreed, the yard is always tidy. No need to think about it at all.",
    source: "google",
  },
  {
    id: "t5",
    name: "Ирина М.",
    nameFi: "Irina M.",
    nameEn: "Irina M.",
    city: "Riihimäki",
    service: "Уборка снега",
    serviceFi: "Lumityöt",
    serviceEn: "Snow removal",
    serviceSlug: "uborka-snega",
    rating: 5,
    date: "2024-01-20",
    text: "Подписала сезонный договор на уборку снега. После каждого снегопада приходит СМС «въезд расчищен». Ни разу не пришлось ждать или напоминать. Именно так и должно работать.",
    textFi: "Tein kausipalvelusopimuksen lumitöistä. Jokaisen lumisateen jälkeen tulee viesti 'sisäänkäynti raivattu'. Kertaakaan ei tarvinnut odottaa tai muistuttaa. Juuri niin sen pitäisi toimia.",
    textEn: "I signed a seasonal snow removal contract. After each snowfall, I get a message saying 'driveway cleared'. Never had to wait or remind them. That's exactly how it should work.",
    source: "google",
  },
  {
    id: "t6",
    name: "Михаил Т.",
    nameFi: "Mikael T.",
    nameEn: "Mikhail T.",
    city: "Hyvinkää",
    service: "Мелкий ремонт",
    serviceFi: "Pienet remontit",
    serviceEn: "Minor repairs",
    serviceSlug: "melkij-remont",
    rating: 5,
    date: "2024-08-05",
    text: "Накопил список из 8 задач: повесить TV, карниз, 3 полки, заменить кран и отрегулировать двери. Мастер справился за 2,5 часа. Сам бы провозился неделю. Оплата точно по часам.",
    textFi: "Oli kertynyt lista 8 tehtävästä: TV:n kiinnitys, verhotanko, 3 hyllyä, hanan vaihto ja ovien säätö. Asentaja selvisi 2,5 tunnissa. Itse olisin askarrellut viikon. Maksu tasan tuntien mukaan.",
    textEn: "I had accumulated a list of 8 tasks: mount TV, curtain rod, 3 shelves, replace tap and adjust doors. The handyman handled it in 2.5 hours. I would have fussed for a week. Payment exactly by the hour.",
    source: "direct",
  },
  {
    id: "t7",
    name: "Наталья В.",
    nameFi: "Natalia V.",
    nameEn: "Natalia V.",
    city: "Hämeenlinna",
    service: "Уборка домов",
    serviceFi: "Talonsiivous",
    serviceEn: "House cleaning",
    serviceSlug: "uborka-domov",
    rating: 5,
    date: "2024-10-28",
    text: "Большой дом, 140 кв.м, плюс сауна. Пришли два специалиста, за 3 часа всё сделали. Сауна была отдельно убрана — полки, пол, стены. Я такого результата сама за целый день не добилась бы.",
    textFi: "Iso talo, 140 m², plus sauna. Tuli kaksi siivoojaa, 3 tunnissa kaikki tehty. Sauna siivottiin erikseen — lauteet, lattia, seinät. En olisi itse päivässäkään saavuttanut tällaista tulosta.",
    textEn: "Large house, 140 sq.m, plus sauna. Two cleaners came, got everything done in 3 hours. The sauna was cleaned separately — benches, floor, walls. I wouldn't have achieved such a result myself in a whole day.",
    source: "google",
  },
  {
    id: "t8",
    name: "Olga S.",
    nameFi: "Olja S.",
    nameEn: "Olga S.",
    city: "Loppi",
    service: "Грузчики",
    serviceFi: "Muuttomiehet",
    serviceEn: "Movers",
    serviceSlug: "gruzchiki",
    rating: 5,
    date: "2024-09-10",
    text: "Нужно было перенести старый диван на улицу и поднять новый на 4-й этаж без лифта. Два грузчика справились за 45 минут. Никаких царапин на стенах. Рекомендую.",
    textFi: "Piti viedä vanha sohva ulos ja nostaa uusi 4. kerrokseen ilman hissiä. Kaksi muuttoammattilaista selvisi 45 minuutissa. Ei naarmuja seiniin. Suosittelen.",
    textEn: "Needed to move an old sofa outside and carry a new one up to the 4th floor without an elevator. Two movers handled it in 45 minutes. No scratches on the walls. Recommend.",
    source: "whatsapp",
  },
];

export function getAverageRating(): number {
  const avg = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  return Math.round(avg * 10) / 10;
}
