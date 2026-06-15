export interface City {
  slug: string;
  name: string;
  nameFi: string;
  region: string;
  population?: number;
  ru: { description: string; seoBlurb: string };
  fi: { description: string };
  en: { description: string };
}

export const cities: City[] = [
  { slug: "riihimaki", name: "Riihimäki", nameFi: "Riihimäki", region: "Kanta-Häme", population: 28000,
    ru: { description: "Riihimäki — железнодорожный центр региона Канта-Хяме. Здесь активно строятся новые жилые кварталы, высокий спрос на переезды — особенно в конце месяца.", seoBlurb: "в Riihimäki" },
    fi: { description: "Riihimäki on Kanta-Hämeen rautatieyhteyksistä tunnettu kaupunki." },
    en: { description: "Riihimäki is a railway hub in Kanta-Häme with growing residential areas." } },
  { slug: "hyvinkaa", name: "Hyvinkää", nameFi: "Hyvinkää", region: "Uusimaa", population: 46000,
    ru: { description: "Hyvinkää — один из крупнейших городов Уусимаа. Много многоквартирных домов и частного сектора. Активный спрос на уборку, переезды и мелкий ремонт.", seoBlurb: "в Hyvinkää" },
    fi: { description: "Hyvinkää on Uudenmaan suurimpia kaupunkeja." },
    en: { description: "Hyvinkää is one of Uusimaa's largest towns." } },
  { slug: "hameenlinna", name: "Hämeenlinna", nameFi: "Hämeenlinna", region: "Kanta-Häme", population: 68000,
    ru: { description: "Hämeenlinna — административный центр региона Канта-Хяме. Большой город, активный рынок недвижимости, запрос на все виды бытовых услуг.", seoBlurb: "в Hämeenlinna" },
    fi: { description: "Hämeenlinna on Kanta-Hämeen maakuntakeskus." },
    en: { description: "Hämeenlinna is the regional capital of Kanta-Häme." } },
  { slug: "hausjarvi", name: "Hausjärvi", nameFi: "Hausjärvi", region: "Kanta-Häme",
    ru: { description: "Hausjärvi — тихий сельский муниципалитет между Riihimäki и Hyvinkää. Преобладает частный сектор, высокий спрос на уборку снега и покос травы.", seoBlurb: "в Hausjärvi" },
    fi: { description: "Hausjärvi on maaseutumainen kunta." },
    en: { description: "Hausjärvi is a rural municipality between Riihimäki and Hyvinkää." } },
  { slug: "loppi", name: "Loppi", nameFi: "Loppi", region: "Kanta-Häme",
    ru: { description: "Loppi — сельская коммуна к западу от Riihimäki. Много частных домов, коттеджей и дачных участков. Популярный запрос — покос травы и уборка снега зимой.", seoBlurb: "в Loppi" },
    fi: { description: "Loppi on maaseutukunta Riihimäen länsipuolella." },
    en: { description: "Loppi is a rural municipality west of Riihimäki." } },
  { slug: "janakkala", name: "Janakkala", nameFi: "Janakkala", region: "Kanta-Häme",
    ru: { description: "Janakkala — активно развивающийся муниципалитет между Hämeenlinna и Riihimäki. Включает посёлки Turenki, Tervakoski, Ryttylä.", seoBlurb: "в Janakkala" },
    fi: { description: "Janakkala on kehittyvä kunta Hämeenlinnan ja Riihimäen välissä." },
    en: { description: "Janakkala is a growing municipality between Hämeenlinna and Riihimäki." } },
  { slug: "turenki", name: "Turenki", nameFi: "Turenki", region: "Kanta-Häme",
    ru: { description: "Turenki — главный центр Janakkala. Много молодых семей, переездов и запросов на сборку мебели.", seoBlurb: "в Turenki" },
    fi: { description: "Turenki on Janakkalan keskustaajama." },
    en: { description: "Turenki is the main town of Janakkala." } },
  { slug: "tervakoski", name: "Tervakoski", nameFi: "Tervakoski", region: "Kanta-Häme",
    ru: { description: "Tervakoski — небольшой посёлок в Janakkala, известный историческим бумажным заводом. Частный сектор.", seoBlurb: "в Tervakoski" },
    fi: { description: "Tervakoski on Janakkalan taajama." },
    en: { description: "Tervakoski is a small town in Janakkala." } },
  { slug: "ryttyla", name: "Ryttylä", nameFi: "Ryttylä", region: "Kanta-Häme",
    ru: { description: "Ryttylä — небольшой железнодорожный посёлок в Janakkala. Частный сектор, сезонные работы.", seoBlurb: "в Ryttylä" },
    fi: { description: "Ryttylä on rautatietaajama Janakkalan kunnassa." },
    en: { description: "Ryttylä is a small railway village in Janakkala." } },
  { slug: "oitti", name: "Oitti", nameFi: "Oitti", region: "Kanta-Häme",
    ru: { description: "Oitti — посёлок в Hausjärvi на железной дороге Хельсинки–Тампере. Частный сектор.", seoBlurb: "в Oitti" },
    fi: { description: "Oitti on Hausjärven kunta." },
    en: { description: "Oitti is a village in Hausjärvi." } },
  { slug: "hikia", name: "Hikiä", nameFi: "Hikiä", region: "Kanta-Häme",
    ru: { description: "Hikiä — маленькая деревня в Hausjärvi. Дачники, сезонный спрос на покос и уборку снега.", seoBlurb: "в Hikiä" },
    fi: { description: "Hikiä on pieni kylä Hausjärven kunnassa." },
    en: { description: "Hikiä is a small village in Hausjärvi." } },
  { slug: "layliainen", name: "Läyliäinen", nameFi: "Läyliäinen", region: "Kanta-Häme",
    ru: { description: "Läyliäinen — посёлок в Loppi. Частные дома, дачи, высокий спрос на сезонные работы.", seoBlurb: "в Läyliäinen" },
    fi: { description: "Läyliäinen on taajama Lopella." },
    en: { description: "Läyliäinen is a village in Loppi." } },
  { slug: "launonen", name: "Launonen", nameFi: "Launonen", region: "Kanta-Häme",
    ru: { description: "Launonen — посёлок в Loppi. Частная застройка, дачи, сельская местность.", seoBlurb: "в Launonen" },
    fi: { description: "Launonen on Lopella sijaitseva taajama." },
    en: { description: "Launonen is a village in Loppi." } },
  { slug: "kormu", name: "Kormu", nameFi: "Kormu", region: "Kanta-Häme",
    ru: { description: "Kormu — небольшая деревня. Частный сектор, дачники, сезонные услуги.", seoBlurb: "в Kormu" },
    fi: { description: "Kormu on pieni kylä palvelualueellamme." },
    en: { description: "Kormu is a small village within our service area." } },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
