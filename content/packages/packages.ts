export interface Package {
  slug: string;
  season: "summer" | "autumn" | "winter" | "annual";
  ru: {
    name: string;
    tagline: string;
    description: string;
    includes: string[];
    price: string;
    note: string;
  };
  fi: {
    name: string;
    tagline: string;
    includes: string[];
  };
}

export const packages: Package[] = [
  {
    slug: "letnij-paket",
    season: "summer",
    ru: {
      name: "Летний пакет",
      tagline: "Двор в порядке с мая по август",
      description:
        "Финское лето — короткое, но интенсивное. Трава растёт быстро, двор нужно держать в порядке всё время. Летний пакет объединяет регулярный покос и уборку двора — один договор, один звонок.",
      includes: [
        "Покос газона — раз в 10–14 дней",
        "Уборка двора и уборка срезанной травы",
        "Обработка краёв триммером",
        "Уборка после шторма — по запросу",
      ],
      price: "По договорённости — зависит от площади участка",
      note: "Сезон: май–август. Бронировать лучше в апреле.",
    },
    fi: {
      name: "Kesäpaketti",
      tagline: "Piha kunnossa toukokuusta elokuuhun",
      includes: [
        "Nurmikon leikkaus 1–2 viikon välein",
        "Pihan siistintä ja ruohon keruu",
        "Reunojen trimmaus",
      ],
    },
  },
  {
    slug: "osennij-paket",
    season: "autumn",
    ru: {
      name: "Осенний пакет",
      tagline: "Листья убраны, участок готов к зиме",
      description:
        "Сентябрь-октябрь в Финляндии — это листопад. Потом ноябрь — подготовка к зиме: убрать мебель, прибрать садовый инвентарь, проверить дорожки. Осенний пакет закрывает сезон спокойно.",
      includes: [
        "Уборка листьев — 2–3 выезда за осень",
        "Вывоз листьев или компостирование",
        "Уборка двора после листопада",
        "Подготовка участка к зиме",
      ],
      price: "По договорённости — зависит от площади и количества деревьев",
      note: "Сезон: сентябрь–ноябрь. Листья не ждут — бронируйте заранее.",
    },
    fi: {
      name: "Syksypaketti",
      tagline: "Lehdet pois, piha talvikuntoon",
      includes: [
        "Lehtien keruu — 2–3 kertaa syksyssä",
        "Lehtien vienti tai kompostointi",
        "Pihan talvistaminen",
      ],
    },
  },
  {
    slug: "zimnij-paket",
    season: "winter",
    ru: {
      name: "Зимний пакет",
      tagline: "После каждого снегопада — дорожка чистая",
      description:
        "Зима в регионе Канта-Хяме — это 15–25 снегопадов с декабря по март. После каждого нужна расчистка. Зимний пакет: мы следим за прогнозом сами, приезжаем без звонка, присылаем сообщение когда готово.",
      includes: [
        "Уборка снега после каждого снегопада",
        "Расчистка въезда, дорожек, тротуара",
        "Посыпка антигололёдными материалами",
        "Приоритетный выезд утром до 8:00",
      ],
      price: "Фиксированная цена на сезон — зависит от площади и расположения",
      note: "Сезон: декабрь–март. Договор лучше заключить в ноябре.",
    },
    fi: {
      name: "Talvipaketti",
      tagline: "Lumikaataman jälkeen tie auki",
      includes: [
        "Lumien auraus jokaisen lumisateen jälkeen",
        "Hiekoitus",
        "Aamuisin ennen klo 8",
      ],
    },
  },
  {
    slug: "godovoe-obsluzhivanie",
    season: "annual",
    ru: {
      name: "Годовое обслуживание",
      tagline: "Один договор — двор в порядке весь год",
      description:
        "Для владельцев частных домов, у кого нет времени думать о бытовых задачах. Один договор покрывает все сезоны: весна, лето, осень, зима. Мы ведём ваш участок, вы занимаетесь своими делами.",
      includes: [
        "Весенняя уборка участка",
        "Летний покос — весь сезон",
        "Осенняя уборка листьев",
        "Зимняя уборка снега",
      ],
      price: "Индивидуально — рассчитываем после осмотра или описания участка",
      note: "Подходит для владельцев домов в Riihimäki, Hyvinkää, Loppi, Janakkala и других населённых пунктах региона.",
    },
    fi: {
      name: "Vuosihuolto",
      tagline: "Yksi sopimus — piha kunnossa ympäri vuoden",
      includes: [
        "Kevätsiivous",
        "Ruohonleikkaus koko kesän",
        "Lehtien keruu syksyllä",
        "Lumityöt talvella",
      ],
    },
  },
];
