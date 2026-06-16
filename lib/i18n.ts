// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
// Единый файл переводов для всего сайта
// Добавить язык: скопировать блок ru, перевести, добавить в langs

export type Lang = "ru" | "fi" | "en";

export const translations = {
  ru: {
    // Nav
    nav: {
      services: "Услуги",
      areas: "Районы",
      packages: "Пакеты",
      cases: "Кейсы",
      blog: "Блог",
      about: "О нас",
      reviews: "Отзывы",
    },
    // Slugs for routes
    routes: {
      services: "uslugi",
      areas: "goroda",
      packages: "sezonnyie-pakety",
      cases: "kejsy",
      blog: "blog",
      about: "o-kompanii",
      reviews: "otzovy",
      privacy: "privacy-policy",
      cookies: "cookie-policy",
      gallery: "galereja",
    },
    // Header/top bar
    header: {
      schedule: "Пн–Вс 7:00–21:00",
      cta: "Оставить заявку",
      region: "Riihimäki · Hyvinkää · Hämeenlinna и регион",
    },
    // Footer
    footer: {
      servicesTitle: "Услуги",
      citiesTitle: "Города",
      companyTitle: "Компания",
      workdays: "Работаем 7 дней в неделю",
      hours: "7:00 — 21:00",
      languages: "RU · FI · EN",
      rights: "Все права защищены",
      privacy: "Политика конфиденциальности",
      cookies: "Cookies",
      description: "Бытовые услуги в регионе Kanta-Häme. Грузчики, переезды, уборка, покос травы, уборка снега, сборка мебели, мелкий ремонт.",
      allCities: "Все города →",
      companyLinks: {
        about: "О компании",
        packages: "Сезонные пакеты",
        reviews: "Отзывы",
        cases: "Кейсы",
        blog: "Блог",
        gallery: "Галерея",
      },
    },
    // Sticky CTA
    sticky: {
      whatsapp: "WhatsApp",
      form: "Заявка",
    },
    // Contact form
    form: {
      title: "Оставить заявку",
      subtitle: "Ответим в течение часа · 7 дней в неделю",
      name: "Имя",
      phone: "Телефон",
      email: "Email",
      city: "Город",
      service: "Услуга",
      comment: "Комментарий",
      photos: "Фотографии (до 5 файлов)",
      addPhoto: "Добавить фото объекта или задачи",
      submit: "Отправить заявку",
      sending: "Отправляем...",
      selectCity: "Выберите город",
      selectService: "Выберите услугу",
      commentPlaceholder: "Опишите задачу: этаж, площадь, количество предметов...",
      namePlaceholder: "Ваше имя",
      footer: "Ответим в течение часа · Русский, финский, английский",
      successTitle: "Заявка отправлена",
      successText: "Ответим в течение часа. Если срочно — звоните или пишите в WhatsApp.",
      errorText: "Что-то пошло не так. Позвоните нам напрямую.",
    },
    // HowItWorks
    howItWorks: {
      steps: [
        { title: "Заявка", desc: "Звонок, WhatsApp или форма на сайте" },
        { title: "Уточнение", desc: "Детали задачи: объём, адрес, время" },
        { title: "Работа", desc: "Приедем вовремя со своим инструментом" },
        { title: "Оплата", desc: "По факту времени — ни копейки лишнего" },
      ],
    },
    // PriceCalculator
    price: {
      title: "Рассчитать стоимость",
      workers: "Количество работников",
      hours: "Часов работы",
      result: "Примерная стоимость",
      vatNote: "с НДС",
      minNote: "Минимальный заказ — 2 часа. Оплата по факту.",
      workerLabels: ["1 — мастер", "2 — команда", "3 — бригада"],
    },
    // SeasonTimeline
    seasons: {
      months: ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],
      services: ["Уборка снега","Покос травы","Уборка двора","Переезды"],
      peak: "Пик — бронируйте заранее",
      active: "Сезон",
      inactive: "Не сезон",
    },
    // Cookie banner
    cookie: {
      text: "Мы используем файлы cookie для корректной работы сайта и анализа трафика.",
      policy: "Политике cookies",
      privacy: "Политике конфиденциальности",
      accept: "Принять все",
      decline: "Только необходимые",
    },
    // Travel fee
    travelFee: "Выезд за пределы Riihimäki — +20 € к заказу",
    replyTime: "Ответим в течение часа",
    days7: "7 дней в неделю",
  },

  fi: {
    nav: {
      services: "Palvelut",
      areas: "Alueet",
      packages: "Paketit",
      cases: "Referenssit",
      blog: "Blogi",
      about: "Meistä",
      reviews: "Arvostelut",
    },
    routes: {
      services: "palvelut",
      areas: "kaupungit",
      packages: "kausipaketit",
      cases: "referenssit",
      blog: "blogi",
      about: "meista",
      reviews: "arvostelut",
      privacy: "tietosuojakaytanto",
      cookies: "evasteet",
      gallery: "galleria",
    },
    header: {
      schedule: "Ma–Su 7:00–21:00",
      cta: "Jätä pyyntö",
      region: "Riihimäki · Hyvinkää · Hämeenlinna ja alue",
    },
    footer: {
      servicesTitle: "Palvelut",
      citiesTitle: "Kaupungit",
      companyTitle: "Yritys",
      workdays: "Auki 7 päivää viikossa",
      hours: "7:00 — 21:00",
      languages: "RU · FI · EN",
      rights: "Kaikki oikeudet pidätetään",
      privacy: "Tietosuojakäytäntö",
      cookies: "Evästeet",
      description: "Kotitalouspalvelut Kanta-Hämeen alueella. Muuttomiehet, siivous, ruohonleikkaus, lumityöt, huonekalukokoonpano.",
      allCities: "Kaikki kaupungit →",
      companyLinks: {
        about: "Meistä",
        packages: "Kausipaketit",
        reviews: "Arvostelut",
        cases: "Referenssit",
        blog: "Blogi",
        gallery: "Galleria",
      },
    },
    sticky: {
      whatsapp: "WhatsApp",
      form: "Pyyntö",
    },
    form: {
      title: "Jätä pyyntö",
      subtitle: "Vastaamme tunnin sisällä · 7 päivää viikossa",
      name: "Nimi",
      phone: "Puhelin",
      email: "Sähköposti",
      city: "Kaupunki",
      service: "Palvelu",
      comment: "Kommentti",
      photos: "Valokuvat (enintään 5)",
      addPhoto: "Lisää kuva kohteesta tai tehtävästä",
      submit: "Lähetä pyyntö",
      sending: "Lähetetään...",
      selectCity: "Valitse kaupunki",
      selectService: "Valitse palvelu",
      commentPlaceholder: "Kuvaile tehtävä: kerros, pinta-ala, tavaroiden määrä...",
      namePlaceholder: "Nimesi",
      footer: "Vastaamme tunnin sisällä · Venäjä, suomi, englanti",
      successTitle: "Pyyntö lähetetty",
      successText: "Vastaamme tunnin sisällä. Jos kiireellistä — soita tai kirjoita WhatsAppissa.",
      errorText: "Jokin meni pieleen. Soita meille suoraan.",
    },
    howItWorks: {
      steps: [
        { title: "Pyyntö", desc: "Puhelu, WhatsApp tai lomake sivustolla" },
        { title: "Tarkennus", desc: "Tehtävän yksityiskohdat: laajuus, osoite, aika" },
        { title: "Työ", desc: "Tulemme ajoissa omilla työkaluilla" },
        { title: "Maksu", desc: "Todellisen ajan mukaan — ei yllätyksiä" },
      ],
    },
    price: {
      title: "Laske hinta",
      workers: "Työntekijöiden määrä",
      hours: "Työtunteja",
      result: "Arvioitu hinta",
      vatNote: "sis. ALV",
      minNote: "Minimitilaus — 2 tuntia. Maksu todellisen ajan mukaan.",
      workerLabels: ["1 — ammattilainen", "2 — tiimi", "3 — ryhmä"],
    },
    seasons: {
      months: ["Tam","Hel","Maa","Huh","Tou","Kes","Hei","Elo","Syy","Lok","Mar","Jou"],
      services: ["Lumityöt","Ruohonleikkaus","Pihanhoito","Muutot"],
      peak: "Huippu — varaa etukäteen",
      active: "Kausi",
      inactive: "Ei kautta",
    },
    cookie: {
      text: "Käytämme evästeitä sivuston toiminnan ja liikenteen analysointiin.",
      policy: "Evästekäytäntö",
      privacy: "Tietosuojakäytäntö",
      accept: "Hyväksy kaikki",
      decline: "Vain välttämättömät",
    },
    travelFee: "Matka Riihimäen ulkopuolelle — +20 € tilaukseen",
    replyTime: "Vastaamme tunnin sisällä",
    days7: "7 päivää viikossa",
  },

  en: {
    nav: {
      services: "Services",
      areas: "Areas",
      packages: "Packages",
      cases: "Cases",
      blog: "Blog",
      about: "About",
      reviews: "Reviews",
    },
    routes: {
      services: "services",
      areas: "cities",
      packages: "seasonal-packages",
      cases: "cases",
      blog: "blog",
      about: "about",
      reviews: "reviews",
      privacy: "privacy-policy",
      cookies: "cookie-policy",
      gallery: "gallery",
    },
    header: {
      schedule: "Mon–Sun 7:00–21:00",
      cta: "Get a Quote",
      region: "Riihimäki · Hyvinkää · Hämeenlinna and region",
    },
    footer: {
      servicesTitle: "Services",
      citiesTitle: "Areas",
      companyTitle: "Company",
      workdays: "Open 7 days a week",
      hours: "7:00 — 21:00",
      languages: "RU · FI · EN",
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      description: "Home services in Kanta-Häme region. Movers, cleaning, lawn mowing, snow removal, furniture assembly.",
      allCities: "All areas →",
      companyLinks: {
        about: "About us",
        packages: "Seasonal packages",
        reviews: "Reviews",
        cases: "Cases",
        blog: "Blog",
        gallery: "Gallery",
      },
    },
    sticky: {
      whatsapp: "WhatsApp",
      form: "Quote",
    },
    form: {
      title: "Request a Service",
      subtitle: "We reply within 1 hour · 7 days a week",
      name: "Name",
      phone: "Phone",
      email: "Email",
      city: "City",
      service: "Service",
      comment: "Comment",
      photos: "Photos (up to 5 files)",
      addPhoto: "Add a photo of the object or task",
      submit: "Send Request",
      sending: "Sending...",
      selectCity: "Select city",
      selectService: "Select service",
      commentPlaceholder: "Describe the task: floor, area, number of items...",
      namePlaceholder: "Your name",
      footer: "Reply within 1 hour · Russian, Finnish, English",
      successTitle: "Request sent",
      successText: "We will reply within 1 hour. If urgent — call or WhatsApp us.",
      errorText: "Something went wrong. Please call us directly.",
    },
    howItWorks: {
      steps: [
        { title: "Request", desc: "Call, WhatsApp or form on the website" },
        { title: "Details", desc: "Task details: scope, address, time" },
        { title: "Work", desc: "We arrive on time with our own tools" },
        { title: "Payment", desc: "Based on actual time — no surprises" },
      ],
    },
    price: {
      title: "Calculate the cost",
      workers: "Number of workers",
      hours: "Hours of work",
      result: "Estimated cost",
      vatNote: "incl. VAT",
      minNote: "Minimum order — 2 hours. Pay for actual time.",
      workerLabels: ["1 — specialist", "2 — team", "3 — crew"],
    },
    seasons: {
      months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      services: ["Snow removal","Lawn mowing","Yard cleaning","Moving"],
      peak: "Peak — book in advance",
      active: "Season",
      inactive: "Off season",
    },
    cookie: {
      text: "We use cookies for website functionality and traffic analysis.",
      policy: "Cookie Policy",
      privacy: "Privacy Policy",
      accept: "Accept all",
      decline: "Necessary only",
    },
    travelFee: "Travel outside Riihimäki — +20 € added",
    replyTime: "Reply within 1 hour",
    days7: "7 days a week",
  },
} as const;

export type Translations = typeof translations.ru;

export function getT(lang: Lang): Translations {
  return translations[lang] as unknown as Translations;
}

export function getLangFromPath(pathname: string): Lang {
  const seg = pathname.split("/")[1];
  if (seg === "fi") return "fi";
  if (seg === "en") return "en";
  return "ru";
}
