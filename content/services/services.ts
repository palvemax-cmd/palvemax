export interface Service {
  slug: string;
  image?: string;
  slugFi: string;
  icon: string;
  ru: {
    name: string;
    shortDesc: string;
    seoTitle: string;
    seoDescription: string;
    h1: string;
    intro: string;
    whatWeOffer: string[];
    process: { step: string; desc: string }[];
    faq: { q: string; a: string }[];
  };
  fi: {
    name: string;
    shortDesc: string;
    seoTitle: string;
    seoDescription: string;
    h1: string;
    intro: string;
    whatWeOffer?: string[];
  };
  en: {
    name: string;
    shortDesc: string;
    seoTitle: string;
    seoDescription: string;
    h1: string;
    intro: string;
  };
}

export const services: Service[] = [
  {
    slug: "gruzchiki",
    image: "/images/services/service-gruzchiki.webp",
    slugFi: "muuttomiehet",
    icon: "🏋️",
    ru: {
      name: "Грузчики",
      shortDesc: "Профессиональные грузчики по региону",
      seoTitle: "Грузчики в Финляндии — PalveMax Oy | 45 €/час",
      seoDescription:
        "Грузчики в Riihimäki, Hyvinkää, Hämeenlinna. Переносим мебель и технику без повреждений. 1 работник — 45 €/час, от 2 часов. Работаем 7 дней в неделю.",
      h1: "Грузчики в Финляндии — берём и несём, пока вы пьёте кофе",
      intro:
        "Однажды клиент из Riihimäki попросил нас перенести диван с четвёртого этажа без лифта. Мы спросили, сколько он весит. Он не знал. Мы взяли двух человек — оказалось, диван весил 94 кг. Справились за 25 минут.\n\nТакие вещи случаются. Грузчики PalveMax берутся за задачи, которые большинство людей откладывают на «потом» — и это «потом» растягивается на месяцы. Берёте у нас двух человек — и за 2 часа квартира выглядит иначе.",
      whatWeOffer: [
        "Перенос мебели между комнатами или этажами",
        "Погрузка и разгрузка при переезде",
        "Работа в домах без лифта — с любого этажа",
        "Помощь с крупной бытовой техникой",
        "Работа с арендованным грузовиком — ваш или наш",
        "Демонтаж мебели перед переноской, если не проходит в дверь",
      ],
      process: [
        {
          step: "Заявка",
          desc: "Звоните, пишите в WhatsApp или заполните форму. Ответ — в течение часа в рабочее время.",
        },
        {
          step: "Уточнение",
          desc: "Спросим: что нести, с какого этажа, есть ли лифт, сколько предметов. Оценим, сколько человек нужно.",
        },
        {
          step: "Работа",
          desc: "Приедем точно в оговорённое время. Берём защитные одеяла для мебели — сами, по умолчанию.",
        },
        {
          step: "Оплата",
          desc: "Считаем фактически затраченное время. Если управились быстрее прогноза — платите меньше.",
        },
      ],
      faq: [
        {
          q: "Сколько стоит грузчик на час?",
          a: "Один работник — 45 €/час, двое — 90 €/час. Минимальный заказ — 2 часа. Цены с НДС, никаких доплат за выходные или вечер.",
        },
        {
          q: "Почему минимум 2 часа — это же много для небольшой задачи?",
          a: "Мы выезжаем из офиса, едем к вам, работаем, возвращаемся. Меньше двух часов — это убыток для нас и, честно говоря, неудобство для вас: спешка не на пользу никому. Если дело маленькое — договоримся, что сделаем ещё что-то по списку за то же время.",
        },
        {
          q: "В каких городах работают ваши грузчики?",
          a: "Riihimäki, Hyvinkää, Hämeenlinna, Hausjärvi, Loppi, Janakkala, Oitti, Hikiä, Ryttylä, Turenki, Tervakoski, Läyliäinen, Launonen, Kormu. Если вашего нет в списке — спросите, скорее всего выедем.",
        },
        {
          q: "Нужно ли что-то готовить заранее?",
          a: "Уберите ценные мелочи, которые лежат на полках — так быстрее. Освободите проход к двери. Всё остальное — наша работа.",
        },
        {
          q: "Работаете ли вы в субботу и воскресенье?",
          a: "Да, 7 дней в неделю. Праздники — тоже. Цена не меняется.",
        },
        {
          q: "Есть ли страховка на случай повреждений?",
          a: "PalveMax Oy работает официально. Если что-то повредили — разберёмся. За 3 года работы серьёзных инцидентов не было, но ответственность несём.",
        },
        {
          q: "Как быстро вы можете приехать?",
          a: "Срочный выезд — если есть свободное окно, можем в тот же день. Стандартно — бронируйте за 1–2 дня, особенно в пятницу и выходные.",
        },
        {
          q: "Поднимаете на пятый этаж без лифта?",
          a: "Да. Это стандартная работа, не «подвиг». Просто предупредите — возьмём двух человек, не одного.",
        },
        {
          q: "Можно заказать грузчиков вместе с переездом?",
          a: "Именно так большинство и делает. Услуга «Помощь при переезде» включает грузчиков и полную координацию — от упаковки до расстановки мебели на новом месте.",
        },
        {
          q: "На каком языке вы общаетесь?",
          a: "Русский, финский, английский — на любом, как удобнее вам.",
        },
      ],
    },
    fi: {
      name: "Muuttomiehet",
      shortDesc: "Ammattitaitoiset muuttomiehet koko alueella",
      seoTitle: "Muuttomiehet Suomessa — PalveMax Oy | 45 €/h",
      seoDescription:
        "Luotettavat muuttomiehet Riihimäellä, Hyvinkäällä ja Hämeenlinnassa. Soita nyt — vastaamme tunnin sisällä.",
      h1: "Muuttomiehet Suomessa — me kannamme, sinä osoitat",
      intro:
        "Eräs asiakas Riihimäeltä pyysi meitä kantamaan sohvan neljännestä kerroksesta ilman hissiä. Hän ei tiennyt painoa. Otimme kaksi miestä — sohva painoi 94 kg. Homma hoitui 25 minuutissa.\n\nPalveMax Oy:n kantomiehet hoitavat tehtävät, joita useimmat ihmiset lykkäävät \"johonkin päivään\" — ja se päivä venyy kuukausiksi. Tilaat kaksi miestä, ja kahdessa tunnissa asunto näyttää erilaiselta.",
      whatWeOffer: [
        "Raskaiden huonekalujen kantaminen - sohat, kaapit, kodinkoneet",
        "Tyoskentely ilman hissia - mista kerroksesta tahansa",
        "Huonekalujen suojaaminen siirron aikana",
        "Tavaroiden jarjestely uudessa paikassa",
        "Pienten esineiden pakkaus pyynnosta",
      ],
    },
        en: {
      name: "Movers",
      shortDesc: "Professional movers across the region",
      seoTitle: "Movers in Finland — PalveMax Oy | 45 €/hour",
      seoDescription:
        "Reliable movers in Riihimäki, Hyvinkää, Hämeenlinna. We carry, you direct. Call now.",
      h1: "Professional Movers in Finland — We Carry, You Direct",
      intro:
        "PalveMax provides professional moving help for homes and offices across the Riihimäki–Hämeenlinna region. One call, and we handle the heavy work.",
    },
  },
  {
    slug: "pereezd",
    image: "/images/services/service-pereezd.webp",
    slugFi: "muuttopalvelu",
    icon: "🚚",
    ru: {
      name: "Помощь при переезде",
      shortDesc: "Переезд под ключ — от упаковки до расстановки",
      seoTitle: "Переезд квартиры в Финляндии — PalveMax Oy | 90 €/час",
      seoDescription:
        "Переезд под ключ в Riihimäki и Hämeenlinna. Упаковка, погрузка, разгрузка, расстановка мебели. 2 работника — 90 €/час. Без нервов и беготни.",
      h1: "Переезд квартиры или дома в Финляндии — вы переезжаете, мы работаем",
      intro:
        "Самый популярный вопрос перед переездом: «Может, сами справимся?» Обычно нет. Двух-трёхкомнатная квартира в Riihimäki при самостоятельном переезде занимает полный день — с нервами, ссорами и болью в спине на неделю вперёд.\n\nС нами — 3–4 часа, и вы уже пьёте чай в новой квартире, пока мы собираем последний шкаф.",
      whatWeOffer: [
        "Упаковка мебели и хрупких вещей",
        "Демонтаж крупной мебели перед выездом",
        "Погрузка и разгрузка",
        "Помощь с арендой грузовика или координация транспорта",
        "Расстановка мебели на новом месте — как скажете",
        "Сборка мебели после переезда",
      ],
      process: [
        {
          step: "Разговор",
          desc: "Уточним: сколько комнат, какой этаж, есть ли лифт, нужна ли упаковка. 10 минут по телефону или WhatsApp.",
        },
        {
          step: "Цена",
          desc: "Честный расчёт по часам. Скажем заранее, сколько займёт — и не будем затягивать.",
        },
        {
          step: "День переезда",
          desc: "Команда приедет вовремя. Возьмём защитные чехлы для мебели, инструмент для разборки, упаковочные материалы.",
        },
        {
          step: "Финал",
          desc: "Мебель стоит там, где вы хотите. Мусор от упаковки убран. Вы расписываетесь — мы уезжаем.",
        },
      ],
      faq: [
        {
          q: "Сколько стоит переезд квартиры в Финляндии?",
          a: "Два работника — 90 €/час. Однокомнатная квартира: 3–4 часа, 270–360 €. Двухкомнатная — 4–6 часов. Это с упаковкой. Без упаковки — быстрее и дешевле.",
        },
        {
          q: "Нужно ли мне самому упаковывать вещи?",
          a: "Нет. Но если упакуете заранее — переезд пройдёт быстрее и обойдётся дешевле. Хрупкие вещи всё равно лучше доверить нам — у нас есть профессиональные материалы.",
        },
        {
          q: "У вас есть грузовик?",
          a: "Мы не транспортная компания, но поможем организовать. Работаем с арендованным грузовиком — вашим или помогаем найти подходящий. Уточните при бронировании.",
        },
        {
          q: "Переезжаем зимой — это проблема?",
          a: "Нет. В Финляндии переезжают круглый год. Защитные чехлы для мебели у нас есть. Главное — парковка для грузовика: обсудим заранее.",
        },
        {
          q: "Что делать с пианино?",
          a: "Пианино — отдельный разговор. Обычно 3 человека, иногда нужны специальные ремни. Напишите заранее — подберём нужный состав.",
        },
        {
          q: "Переезжаете ли вы между городами?",
          a: "Да. Riihimäki–Hyvinkää, Hyvinkää–Hämeenlinna, Loppi–Janakkala — всё в зоне работы. Дальние расстояния — обсудим индивидуально.",
        },
        {
          q: "Нужна ли разборка мебели IKEA?",
          a: "Если шкаф не проходит в дверь — да, разберём и соберём на месте. Это входит в общее время работы.",
        },
        {
          q: "Как далеко заранее нужно бронировать?",
          a: "Конец месяца — самый загруженный период (аренда заканчивается). Бронируйте за 3–5 дней. В другое время — 1–2 дня обычно достаточно.",
        },
      ],
    },
    fi: {
      name: "Muuttopalvelu",
      shortDesc: "Avaimet käteen -muutto — pakkauksesta järjestelyyn",
      seoTitle: "Muuttopalvelu Suomessa — PalveMax Oy | 90 €/h",
      seoDescription:
        "Kokonaisvaltainen muuttopalvelu Riihimäellä, Hyvinkäällä ja Hämeenlinnassa. Pakkaus, kuljetus, purku, järjestely.",
      h1: "Muuttopalvelu — sinä muutat, me teemme töitä",
      intro:
        "Yleisin kysymys ennen muuttoa: \"Hoidammeko itse?\" Yleensä ei. Kahden tai kolmen huoneen asunnon muutto Riihimäellä vie omin voimin koko päivän — hermoja, riitoja ja viikon selkäkipuja.\n\nMeidän kanssamme — 3–4 tuntia, ja jo juo teetä uudessa asunnossa, kun me kasaamme viimeistä kaappia.",
      whatWeOffer: [
        "Avaimet kateen -muutto pakkauksesta purkuun",
        "Lastaus ja purkaminen",
        "Huonekalujen purku ennen muuttoa ja kokoaminen jalkeen",
        "Tyoskentely vuokra-auton kanssa - sinun tai autamme loyrtamaan",
        "Pakkaustarvikkeet - laatikot, teippi, suojahuovat",
      ],
    },
        en: {
      name: "Moving Service",
      shortDesc: "Full moving service from packing to setup",
      seoTitle: "Moving Service in Finland — PalveMax Oy | 90 €/hour",
      seoDescription:
        "Complete moving help in Riihimäki, Hyvinkää, Hämeenlinna. Packing, loading, transport, unloading, setup.",
      h1: "Moving Service in Finland — You Move, We Work",
      intro:
        "PalveMax handles your entire move — from packing to placing the last piece of furniture in your new home.",
    },
  },
  {
    slug: "sborka-mebeli",
    image: "/images/services/service-sborka.webp",
    slugFi: "huonekalukokoonpano",
    icon: "🔧",
    ru: {
      name: "Сборка мебели",
      shortDesc: "IKEA, Jysk и любые другие — без инструкций и нервов",
      seoTitle: "Сборка мебели в Финляндии — PalveMax | IKEA, Jysk, BoConcept",
      seoDescription:
        "Соберём мебель IKEA, Jysk, BoConcept в Riihimäki и Hyvinkää. Мастер приедет с инструментом, соберёт, уберёт упаковку. 45 €/час, от 2 часов.",
      h1: "Сборка мебели в Финляндии — мастер разберётся в инструкции вместо вас",
      intro:
        "Инструкция к шкафу PAX — 84 страницы и 47 видов крепежа. У одного клиента в Hyvinkää ушло полтора выходных и три ссоры с женой. Потом он позвонил нам.\n\nМастер PalveMax собирает PAX за 2 часа, включая навеску дверей и регулировку петель. Потому что делает это каждую неделю.",
      whatWeOffer: [
        "Сборка шкафов IKEA — PAX, BRIMNES, HEMNES и другие",
        "Сборка кроватей, комодов, стеллажей",
        "Сборка кухонных гарнитуров",
        "Навеска полок, зеркал, карнизов",
        "Сборка офисной мебели",
        "Мебель Jysk, BoConcept, Sotka, Asko — любые бренды",
      ],
      process: [
        {
          step: "Заявка",
          desc: "Укажите марку и количество предметов. Если не знаете название — опишите словами, разберёмся.",
        },
        {
          step: "Мастер едет",
          desc: "Приедет с набором инструментов. Инструкция нужна? Хорошо. Нет? Тоже справится.",
        },
        {
          step: "Сборка",
          desc: "Собираем аккуратно — все болты затянуты, петли отрегулированы, ничего не шатается.",
        },
        {
          step: "Уборка",
          desc: "Складываем картон и плёнку. Вывоз упаковки — по договорённости.",
        },
      ],
      faq: [
        {
          q: "Сколько стоит сборка шкафа IKEA PAX?",
          a: "PAX из 3 секций с дверями — обычно 2–2,5 часа, то есть 90–112 €. Если секций больше или есть встроенные ящики — чуть дольше. Скажем точнее, если уточните конфигурацию.",
        },
        {
          q: "Нужно ли мне покупать инструменты или материалы?",
          a: "Нет. Мастер едет со своим инструментом. Шурупы, дюбели — если нужны дополнительные, предупредите заранее.",
        },
        {
          q: "Собираете ли мебель других брендов, не IKEA?",
          a: "Да — Jysk, BoConcept, Sotka, Asko, Isku, Masku и другие. Если есть инструкция — хорошо. Если нет — разберёмся.",
        },
        {
          q: "Вы крепите мебель к стене?",
          a: "Да, и рекомендуем это для высоких шкафов — особенно в детских комнатах. Стена каменная или деревянная — скажите заранее, возьмём нужный крепёж.",
        },
        {
          q: "Что делать, если в коробке не хватает деталей?",
          a: "Сообщим сразу. Поможем написать заявку в IKEA или Jysk на замену — это их ответственность.",
        },
        {
          q: "Можно собрать несколько предметов за один визит?",
          a: "Именно так и выгоднее. Собираем всё за один приезд — экономите на минимальном заказе.",
        },
        {
          q: "Убираете ли упаковку после работы?",
          a: "Складываем и упорядочиваем. Вывоз картона и пенопласта — отдельно, уточните при заказе.",
        },
        {
          q: "Как быстро приедет мастер?",
          a: "Обычно в течение 1–2 дней. Срочно — звоните, посмотрим, есть ли окно на сегодня.",
        },
      ],
    },
    fi: {
      name: "Huonekalukokoonpano",
      shortDesc: "IKEA, Jysk ja muut merkit — kokoamme puolestasi",
      seoTitle: "Huonekalujen kokoaminen — PalveMax Oy | IKEA, Jysk",
      seoDescription:
        "Kokoomme IKEA:n, Jyskin ja muiden merkkien huonekalut Riihimäellä ja Hyvinkäällä. Ammattimies tulee omilla työkaluilla.",
      h1: "Huonekalujen kokoaminen — me luemme ohjeet puolestasi",
      intro:
        "PAX-kaapin ohje on 84 sivua ja 47 erilaista kiinnikettä. Eräs asiakas Hyvinkäältä käytti puolitoista viikonloppua ja kolme riitaa vaimonsa kanssa. Sitten hän soitti meille.\n\nPalveMax Oy:n asentaja kasaa PAX:in kahdessa tunnissa, ovien ripustus ja saranoiden säätö mukaan lukien. Koska hän tekee sen joka viikko.",
      whatWeOffer: [
        "IKEA PAX, BILLY, KALLAX ja kaikki muut sarjat",
        "Jysk, BoConcept, Sotka, Asko - mika tahansa merkki",
        "Ovien ripustus ja saranoiden saato",
        "Seinakiinnitys turvallisuuden vuoksi",
        "Pakkauksen jarjestely ja siivous",
      ],
    },
        en: {
      name: "Furniture Assembly",
      shortDesc: "IKEA, Jysk, any brand — assembled right",
      seoTitle: "Furniture Assembly in Finland — PalveMax Oy",
      seoDescription:
        "Professional furniture assembly in Riihimäki and Hyvinkää. IKEA, Jysk, any brand. We bring the tools.",
      h1: "Furniture Assembly in Finland — We Read the Instructions So You Don't Have To",
      intro:
        "PalveMax assembles any furniture brand — quickly, correctly, without the Sunday afternoon arguments.",
    },
  },
  {
    slug: "demontazh-mebeli",
    image: "/images/services/service-demontazh.webp",
    slugFi: "huonekalupurku",
    icon: "🪛",
    ru: {
      name: "Демонтаж мебели",
      shortDesc: "Разборка мебели перед переездом или вывозом",
      seoTitle: "Демонтаж мебели в Финляндии — PalveMax Oy | 45 €/час",
      seoDescription:
        "Демонтаж мебели в Riihimäki, Hyvinkää — аккуратно, с маркировкой деталей. Разберём шкафы, кухни, кровати. 45 €/час.",
      h1: "Демонтаж мебели в Финляндии — разберём и ничего не потеряем",
      intro:
        "Двухметровый шкаф в дверной проём 80 см не пролезет — это физика. Поэтому перед переездом его надо разобрать. Самое неприятное в этом деле — потерять нужный болт или поцарапать боковую стенку при неловком движении.\n\nМы маркируем каждую деталь, крепёж складываем в пакеты с подписью. На новом месте мастер соберёт всё обратно — и шкаф будет стоять так же, как стоял.",
      whatWeOffer: [
        "Разборка шкафов, гардеробов, систем хранения",
        "Демонтаж кроватей и диванных оснований",
        "Разборка кухонных гарнитуров",
        "Снятие полок, зеркал, навесных шкафчиков",
        "Маркировка и упаковка деталей для перевозки",
        "Вывоз старой мебели, которая больше не нужна",
      ],
      process: [
        {
          step: "Осмотр",
          desc: "Оцениваем объём: сколько предметов, какой тип конструкции, нужна ли маркировка для повторной сборки.",
        },
        {
          step: "Демонтаж",
          desc: "Разбираем без спешки. Каждый болт и шуруп — в пакет с пометкой, к какому предмету относится.",
        },
        {
          step: "Упаковка",
          desc: "Панели и полки складываем плоско. Стеклянные детали — с защитой.",
        },
        {
          step: "Готово",
          desc: "Мебель разобрана и готова к погрузке. Ничего не потеряно.",
        },
      ],
      faq: [
        {
          q: "Сколько стоит демонтаж мебели?",
          a: "45 €/час. Разборка одного шкафа — 30–60 минут. Минимальный заказ — 2 часа, поэтому выгоднее заказывать разборку нескольких предметов за раз.",
        },
        {
          q: "Вы сможете потом собрать мебель на новом месте?",
          a: "Да. Маркируем детали именно для этого. Скажите при заказе — учтём при планировании.",
        },
        {
          q: "Вывозите старую мебель?",
          a: "По запросу. Уточните при заявке — стоимость вывоза считается отдельно, зависит от объёма.",
        },
        {
          q: "Что если мебель старая и крепления прикипели?",
          a: "Честно предупредим: старые советские шкафы иногда не хотят разбираться без повреждений. Оцениваем на месте, говорим заранее.",
        },
        {
          q: "Разбираете кухонные гарнитуры?",
          a: "Да, это самая трудоёмкая работа — занимает 3–5 часов в зависимости от размера кухни.",
        },
      ],
    },
    fi: {
      name: "Huonekalupurku",
      shortDesc: "Huonekalujen purkaminen muuttoa varten",
      seoTitle: "Huonekalujen purku — PalveMax Oy",
      seoDescription:
        "Puramme huonekalut siististi ja merkitsemme osat ennen muuttoa. Riihimäki, Hyvinkää, Hämeenlinna.",
      h1: "Huonekalujen purku — merkitsemme osat, et menetä ruuveja",
      intro:
        "Kaksi metriä pitkä kaappi ei mahdu 80 cm ovesta — se on fysiikkaa. Siksi ennen muuttoa se on purettava. Ikävin asia tässä on se, että joku ruuvi katoaa tai sivupaneeli naarmuuntuu kömpelössä liikkeessä.\n\nMerkitsemme jokaisen osan, kiinnikkeet laitetaan merkittyihin pusseihin. Uudessa paikassa asentaja kasaa kaiken takaisin — ja kaappi seisoo yhtä tukevasti kuin ennenkin.",
      whatWeOffer: [
        "Huonekalujen purku siirtoa tai vaihtoa varten",
        "Osien merkitseminen kokoamista varten",
        "Kiinnikkeiden jarjestely merkittyihin pusseihin",
        "Keittiokaapistojen purku",
        "Vanhan kaluston poisvienti pyynnosta",
      ],
    },
        en: {
      name: "Furniture Disassembly",
      shortDesc: "Clean disassembly with labelled parts",
      seoTitle: "Furniture Disassembly in Finland — PalveMax Oy",
      seoDescription:
        "Professional furniture disassembly in Riihimäki and Hyvinkää. Parts labelled, nothing lost.",
      h1: "Furniture Disassembly in Finland — Parts Labelled, Nothing Lost",
      intro:
        "PalveMax disassembles furniture carefully before your move, labelling every part so reassembly is straightforward.",
    },
  },
  {
    slug: "uborka-kvartir",
    image: "/images/services/service-uborka-kvartir.webp",
    slugFi: "asunnon-siivous",
    icon: "🏠",
    ru: {
      name: "Уборка квартир",
      shortDesc: "Генеральная, регулярная и уборка при выезде",
      seoTitle: "Уборка квартир в Финляндии — PalveMax Oy | от 45 €/час",
      seoDescription:
        "Уборка квартир в Riihimäki, Hyvinkää, Hämeenlinna. Генеральная, loppusiivous, регулярная. Свои моющие средства. Звоните.",
      h1: "Уборка квартиры в Финляндии — не «почти чисто», а действительно чисто",
      intro:
        "Есть уборка, после которой кажется, что чисто. И есть уборка, после которой вы замечаете, что окно пропускает на 30% больше света.\n\nСпециалисты PalveMax убирают по системе: сначала пыль, потом поверхности, потом полы. Химия финская, экологичная, без резкого запаха. Берём с собой всё — вам ничего не нужно готовить.",
      whatWeOffer: [
        "Генеральная уборка квартиры",
        "Регулярная уборка — раз в неделю или месяц",
        "Loppusiivous — уборка при выезде из аренды",
        "Уборка после ремонта",
        "Мытьё окон — внутри",
        "Уборка балкона",
      ],
      process: [
        {
          step: "Заявка",
          desc: "Укажите тип уборки, площадь квартиры и что особенно важно. Ответим с оценкой по времени.",
        },
        {
          step: "День уборки",
          desc: "Специалист приедет со своей химией и инвентарём. Если нужно — согласуем передачу ключа.",
        },
        {
          step: "Работа",
          desc: "Убираем по системе, не пропускаем плинтусы и за унитазом. Проверяем перед уходом.",
        },
        {
          step: "Сдача",
          desc: "Вы принимаете результат. Если что-то не устраивает — исправим.",
        },
      ],
      faq: [
        {
          q: "Сколько стоит уборка квартиры в Финляндии?",
          a: "45 €/час один специалист. Однокомнатная с кухней и ванной — 2–3 часа. Двухкомнатная — 3–4 часа. Давно не убиралась или после ремонта — чуть больше.",
        },
        {
          q: "Что такое loppusiivous и вы это делаете?",
          a: "Loppusiivous — финальная уборка при выезде из съёмной квартиры. Делаем по стандартам, которые принимает большинство арендодателей. Если нужен акт — предупредите заранее.",
        },
        {
          q: "Нужно ли мне быть дома во время уборки?",
          a: "Нет. Можно оставить ключ соседу или в определённом месте. Работаем без надзора.",
        },
        {
          q: "Вы привозите своё моющее?",
          a: "Да, приезжаем полностью оснащёнными. Используем финскую экологичную химию — безопасно для детей и животных.",
        },
        {
          q: "Можно настроить регулярную уборку?",
          a: "Да. Раз в неделю, раз в две недели, раз в месяц — договоримся на постоянный день и время.",
        },
        {
          q: "Убираете после ремонта?",
          a: "Да, но строительная пыль — это отдельная история. Занимает в 1,5–2 раза больше времени, чем обычная уборка. Обсудим объём при заявке.",
        },
        {
          q: "Моете ли окна?",
          a: "Внутри — да, это часть уборки или отдельная услуга. Снаружи — по запросу, зависит от этажа.",
        },
      ],
    },
    fi: {
      name: "Asunnon siivous",
      shortDesc: "Perussiivous, loppusiivous ja ylläpitosiivous",
      seoTitle: "Asunnon siivous Suomessa — PalveMax Oy",
      seoDescription:
        "Ammattimainen asunnon siivous Riihimäellä, Hyvinkäällä ja Hämeenlinnassa. Loppusiivous, perussiivous, ylläpitosiivous.",
      h1: "Asunnon siivous — ei 'melkein puhdas', vaan oikeasti puhdas",
      intro:
        "On siivouksia, joiden jälkeen tuntuu puhtaalta. Ja on siivouksia, joiden jälkeen huomaat, että ikkuna päästää 30 % enemmän valoa.\n\nPalveMax Oy:n siivoustiimi siivoaa järjestelmällisesti: ensin pöly, sitten pinnat, sitten lattiat. Suomalainen, ympäristöystävällinen pesuaine ilman pistävää hajua. Tuomme kaiken mukanamme — sinun ei tarvitse valmistella mitään.",
      whatWeOffer: [
        "Loppusiivous vuokra-asunnosta muuttaessa",
        "Yleissiivous keittiosta kylpyhuoneeseen",
        "Ikkunoiden pesu sisalta",
        "Omilla pesuaineilla - ei tarvitse valmistella mitaan",
        "Saannollinen siivous viikottain tai kahdesti kuussa",
      ],
    },
        en: {
      name: "Apartment Cleaning",
      shortDesc: "Deep clean, move-out, regular — we bring everything",
      seoTitle: "Apartment Cleaning in Finland — PalveMax Oy",
      seoDescription:
        "Professional apartment cleaning in Riihimäki, Hyvinkää, Hämeenlinna. We bring our own supplies.",
      h1: "Apartment Cleaning in Finland — Not 'Kind of Clean', Actually Clean",
      intro:
        "PalveMax cleans apartments properly — with Finnish eco-friendly products, our own equipment, and a system that doesn't skip the corners.",
    },
  },
  {
    slug: "uborka-domov",
    image: "/images/services/service-uborka-domov.webp",
    slugFi: "talonsiivous",
    icon: "🏡",
    ru: {
      name: "Уборка домов",
      shortDesc: "Уборка частных домов и коттеджей",
      seoTitle: "Уборка домов в Финляндии — PalveMax Oy | 45–90 €/час",
      seoDescription:
        "Уборка частных домов в Riihimäki, Hämeenlinna, Loppi. Генеральная, регулярная, сауна. Опытные специалисты с своей химией.",
      h1: "Уборка частного дома в Финляндии — площадь не пугает",
      intro:
        "Частный дом — это совсем другой масштаб. Не одна ванная, а две. Не 60 кв.м., а 140. Плюс сауна, терраса, прихожая с грязью после сада.\n\nДля больших домов мы берём двух специалистов — работа идёт параллельно, и к обеду всё готово.",
      whatWeOffer: [
        "Генеральная уборка дома любой площади",
        "Регулярная поддерживающая уборка",
        "Уборка сауны — полки, стены, пол",
        "Уборка после вечеринок или праздников",
        "Уборка после ремонта",
        "Мытьё окон изнутри",
      ],
      process: [
        {
          step: "Заявка",
          desc: "Площадь дома, количество комнат, тип уборки — опишите в форме или по телефону.",
        },
        {
          step: "Расчёт",
          desc: "Скажем сколько человек и часов. Большой дом — два специалиста быстрее и дешевле суммарно.",
        },
        {
          step: "Уборка",
          desc: "Работаем системно, комната за комнатой. Не пропускаем сложные места — за батареями, в углах сауны.",
        },
        {
          step: "Приёмка",
          desc: "Проходим вместе или оставляете обратную связь — всё исправим, если что-то пропустили.",
        },
      ],
      faq: [
        {
          q: "Сколько стоит уборка частного дома?",
          a: "45 €/час один специалист, 90 €/час двое. Дом 100 кв.м — обычно 4–5 часов при одном специалисте или 2,5 часа при двух. Итого примерно одинаково по деньгам, но двое быстрее.",
        },
        {
          q: "Убираете сауну?",
          a: "Да. Чистим полки, стены, пол, дверь, каменку снаружи. Полноценная уборка сауны — около часа дополнительно.",
        },
        {
          q: "Работаете в Loppi, Hausjärvi и других сельских районах?",
          a: "Да, выезжаем. Если больше 30 км от Riihimäki — уточните стоимость выезда при заявке.",
        },
        {
          q: "Убираете гараж или подсобку?",
          a: "По запросу. Уточните при бронировании — добавим в список.",
        },
        {
          q: "Нужно ли быть дома во время уборки?",
          a: "Необязательно. Многие клиенты оставляют ключ или код — мы работаем, вы занимаетесь своими делами.",
        },
        {
          q: "Убираете дачи перед сезоном?",
          a: "Да, весенняя уборка дачи — популярный запрос. Апрель и май — занятые месяцы, бронируйте заранее.",
        },
      ],
    },
    fi: {
      name: "Talonsiivous",
      shortDesc: "Omakotitalon siivous — pinta-ala ei pelota",
      seoTitle: "Talonsiivous Suomessa — PalveMax Oy",
      seoDescription:
        "Omakotitalon siivous Riihimäellä, Hämeenlinnassa ja Lopella. Perussiivous, sauna, ylläpitosiivous.",
      h1: "Talonsiivous — suuri pinta-ala ei ole ongelma",
      intro:
        "Omakotitalo on aivan eri mittakaava. Ei yksi kylpyhuone, vaan kaksi. Ei 60 neliötä, vaan 140. Plus sauna, terassi ja eteinen puutarhan mudalla.\n\nIsoihin taloihin otamme kaksi siivoojaa — työ etenee rinnakkain, ja lounaaseen mennessä kaikki on valmista.",
      whatWeOffer: [
        "Suurten talojen siivous - 100-200+ neliometria",
        "Sauna - lauteet, lattia, seinat, kiuas ulkoa",
        "Kaikki tilat - makuuhuoneet, olohuone, keittio, kylpyhuoneet",
        "Kaksi siivoojaa isompiin kohteisiin - nopeampi tulos",
        "Ympparistoystavalliset pesuaineet",
      ],
    },
        en: {
      name: "House Cleaning",
      shortDesc: "Private house cleaning — any size",
      seoTitle: "House Cleaning in Finland — PalveMax Oy",
      seoDescription:
        "Professional house cleaning in Riihimäki, Hämeenlinna, Loppi. Including sauna.",
      h1: "House Cleaning in Finland — Square Metres Are Not a Problem",
      intro:
        "PalveMax cleans private homes of any size — including sauna, terrace, and outbuildings.",
    },
  },
  {
    slug: "pokos-travy",
    image: "/images/services/service-pokos.webp",
    slugFi: "ruohonleikkaus",
    icon: "🌿",
    ru: {
      name: "Покос травы",
      shortDesc: "Стрижка газона и покос участка в сезон",
      seoTitle: "Покос травы в Финляндии — PalveMax Oy | 45 €/час",
      seoDescription:
        "Покос травы, стрижка газона в Riihimäki, Hyvinkää, Hämeenlinna. Свой инструмент, уборка травы. Сезон май–октябрь.",
      h1: "Покос травы в Финляндии — участок в порядке, пока вы работаете",
      intro:
        "Финское лето быстрое. С конца мая по середину июля трава вырастает быстрее, чем успеваешь думать о покосе. Если пропустить две недели — это уже не газон, это луг.\n\nМы работаем с регулярным расписанием: раз в 10–14 дней. Приезжаем, косим, обрабатываем края триммером, убираем траву. Вы приезжаете домой — всё аккуратно.",
      whatWeOffer: [
        "Покос газона газонокосилкой",
        "Обработка краёв и бордюров триммером",
        "Уборка срезанной травы",
        "Первичный покос запущенного участка",
        "Регулярное сезонное обслуживание — раз в 1–2 недели",
        "Уборка вдоль забора и вокруг деревьев",
      ],
      process: [
        {
          step: "Площадь",
          desc: "Уточните приблизительную площадь участка — по описанию или фотографии из карт.",
        },
        {
          step: "График",
          desc: "Разовый выезд или сезонный контракт — договоримся на то, что удобнее.",
        },
        {
          step: "Покос",
          desc: "Приедем со своим инструментом, покосим аккуратно, уберём траву.",
        },
        {
          step: "Готово",
          desc: "Участок выглядит ухоженно. Следующий выезд — по расписанию.",
        },
      ],
      faq: [
        {
          q: "Сколько стоит покос травы?",
          a: "45 €/час, минимум 2 часа. Небольшой участок до 400 кв.м — обычно 1–1,5 часа работы. Крупный, от 1000 кв.м — 2–3 часа и более.",
        },
        {
          q: "Как часто нужен покос?",
          a: "В финское лето — раз в 1–2 недели. В жаркие и дождливые периоды трава растёт быстро. Настраиваем под ваш участок.",
        },
        {
          q: "Вы убираете срезанную траву?",
          a: "Да, уборка включена. Складываем в компост на участке или вывозим — договоримся.",
        },
        {
          q: "У меня запущенный участок — возьмётесь?",
          a: "Да. Первый покос запущенного участка занимает больше времени — честно скажем цену заранее.",
        },
        {
          q: "Выезжаете ли в Loppi, Hausjärvi, сельские районы?",
          a: "Да, охватываем весь регион. Если далеко от Riihimäki — уточните при заявке.",
        },
        {
          q: "Убираете вдоль забора и деревьев?",
          a: "Да, обрабатываем сложные места триммером — это стандартная часть работы.",
        },
      ],
    },
    fi: {
      name: "Ruohonleikkaus",
      shortDesc: "Nurmikon leikkaus ja siistintä — koko kausi",
      seoTitle: "Ruohonleikkaus Suomessa — PalveMax Oy",
      seoDescription:
        "Ruohonleikkaus Riihimäellä, Hyvinkäällä ja Hämeenlinnassa. Omat koneet, ruohon keruu. Kausi touko–lokakuu.",
      h1: "Ruohonleikkaus — siisti piha ilman omaa työtä",
      intro:
        "Suomen kesä on nopea. Toukokuun lopusta heinäkuun puoliväliin ruoho kasvaa nopeammin kuin ehtii ajatella niittämisestä. Jos kahden viikon paukon pitää — se ei ole enää nurmikko, se on niitty.\n\nTeemme säännöllistä aikataulua: joka 10–14. päivä. Tulemme, niitämme, käsittelemme reunat trimmillä, siivoamme ruohon. Tulet kotiin — kaikki on siistiä.",
      whatWeOffer: [
        "Saannollinen nurmikon leikkaus 1-2 viikon valein",
        "Reunojen trimmaus - siistit reunat kaikkialla",
        "Ruohon keruu ja poisvienti tai kompostointi",
        "Myrskyn jalkeen siivous pyynnosta",
        "Oma laitteisto - sinun ei tarvitse ostaa mitaan",
      ],
    },
        en: {
      name: "Lawn Mowing",
      shortDesc: "Regular lawn care all season",
      seoTitle: "Lawn Mowing in Finland — PalveMax Oy",
      seoDescription:
        "Lawn mowing in Riihimäki, Hyvinkää, Hämeenlinna. We bring the equipment, remove the clippings.",
      h1: "Lawn Mowing in Finland — Your Yard Stays Neat While You Work",
      intro:
        "PalveMax provides regular lawn mowing throughout the Finnish summer season — equipment included, clippings removed.",
    },
  },
  {
    slug: "uborka-dvora",
    image: "/images/services/service-uborka-dvora.webp",
    slugFi: "pihanhoito",
    icon: "🍂",
    ru: {
      name: "Уборка двора",
      shortDesc: "Листья, ветки, весенняя и осенняя уборка участка",
      seoTitle: "Уборка двора в Финляндии — PalveMax Oy | 45 €/час",
      seoDescription:
        "Уборка двора: листья, ветки, весенняя уборка в Riihimäki, Hyvinkää. Профессиональная уборка участка в любое время года.",
      h1: "Уборка двора в Финляндии — с листопадом справимся быстрее",
      intro:
        "Осенью в Финляндии листья падают быстро и много. За один ветреный октябрьский день участок 600 кв.м может оказаться под слоем листьев в 15–20 см. Граблями — полдня. Нашей командой — 1,5–2 часа.\n\nВесной — другой сценарий: песок от зимней обработки, сломанные ветки, мусор. Тоже берём.",
      whatWeOffer: [
        "Уборка листьев осенью",
        "Весенняя уборка участка — песок, мусор, ветки",
        "Граблевание и вывоз листьев",
        "Уборка после шторма — сломанные ветки",
        "Регулярная поддерживающая уборка двора",
        "Подготовка участка к зиме",
      ],
      process: [
        {
          step: "Заявка",
          desc: "Опишите участок и что нужно убрать. Фотография из Google Maps — отлично.",
        },
        {
          step: "Оценка",
          desc: "Скажем, сколько займёт и сколько человек нужно.",
        },
        {
          step: "Работа",
          desc: "Убираем, складируем или вывозим — как договорились.",
        },
        {
          step: "Итог",
          desc: "Участок чистый. Следующий выезд по договорённости.",
        },
      ],
      faq: [
        {
          q: "Когда лучше заказывать уборку двора?",
          a: "Осень — сентябрь-октябрь, пик листопада. Весна — апрель-май, после таяния снега. Оба периода загруженные — бронируйте за 3–5 дней.",
        },
        {
          q: "Вывозите листья?",
          a: "Да. Либо складываем в компостные мешки (ваши или наши), либо вывозим — обсудим при заявке.",
        },
        {
          q: "Убираете после шторма?",
          a: "Да, срочный выезд — если есть окно. Звоните напрямую.",
        },
        {
          q: "Обрезаете кусты?",
          a: "Лёгкая подрезка — по запросу. Серьёзная обрезка — уточните отдельно.",
        },
        {
          q: "Стоимость уборки двора?",
          a: "45 €/час один человек. Небольшой участок — 1–2 часа. Большой, с деревьями — 3–5 часов.",
        },
      ],
    },
    fi: {
      name: "Pihanhoito",
      shortDesc: "Lehdet, oksat, kevät- ja syyssiivous",
      seoTitle: "Pihanhoito Suomessa — PalveMax Oy",
      seoDescription:
        "Pihansiivous Riihimäellä, Hyvinkäällä ja Hämeenlinnassa. Lehtien keruu, kevätsiivous, oksien keruu.",
      h1: "Pihanhoito — lehdet häviävät, piha kukkii",
      intro:
        "Syksyllä Suomessa lehdet putoavat nopeasti ja paljon. Yhden tuulisen lokakuun päivän jälkeen 600 neliömetrin tontilla voi olla 15–20 cm paksu lehtikerros. Haravoimalla — puoli päivää. Tiimillemme — 1,5–2 tuntia.\n\nKeväällä toisenlainen tilanne: talvihiekoituksen hiekka, katkenneet oksat, roska. Hoidamme sekin.",
      whatWeOffer: [
        "Lehtien keruu syksylla - koivu, vaahtera, muut",
        "Hiekoitushiekan poisto kevaalla",
        "Polkujen ja kaytavien puhdistus",
        "Oksakasojen keruu myrskyn jalkeen",
        "Kompostipusseihin tai poisvienti - sovitaan",
      ],
    },
        en: {
      name: "Yard Cleaning",
      shortDesc: "Leaves, branches, spring and autumn yard work",
      seoTitle: "Yard Cleaning in Finland — PalveMax Oy",
      seoDescription:
        "Professional yard cleaning in Riihimäki, Hyvinkää. Leaves, spring clean-up, storm debris.",
      h1: "Yard Cleaning in Finland — We Handle What Autumn Leaves Behind",
      intro:
        "PalveMax cleans yards in spring and autumn — leaves, branches, winter sand — so your property looks cared for all year.",
    },
  },
  {
    slug: "uborka-snega",
    image: "/images/services/service-gruzchiki-2.webp",
    slugFi: "lumityot",
    icon: "❄️",
    ru: {
      name: "Уборка снега",
      shortDesc: "Расчистка дорожек, парковок и въездов",
      seoTitle: "Уборка снега в Финляндии — PalveMax Oy | 45 €/час",
      seoDescription:
        "Уборка снега в Riihimäki, Hyvinkää, Hämeenlinna. Дорожки, парковки, въезды. Работаем рано утром. Сезонный договор.",
      h1: "Уборка снега в Финляндии — утром снегопад, к 8:00 дорожка чистая",
      intro:
        "Январь в Riihimäki — это 15–20 снегопадов. После каждого нужно расчищать въезд, тротуар, крыльцо. Лопата — это 40 минут и больная спина. Снегоуборщик — 10 минут, но его надо иметь, хранить и обслуживать.\n\nИли позвонить нам один раз и не думать об этом всю зиму. Мы следим за прогнозом и приезжаем сами — не нужно звонить каждый раз.",
      whatWeOffer: [
        "Расчистка дорожек и тротуаров",
        "Уборка снега с парковки и въезда",
        "Посыпка песком или антигололёдными материалами",
        "Регулярное зимнее обслуживание по договору",
        "Срочный выезд после сильного снегопада",
        "Уборка снега с крыши по запросу",
      ],
      process: [
        {
          step: "Договор",
          desc: "Разовый выезд или сезонный контракт на всю зиму — выбирайте.",
        },
        {
          step: "Мониторинг",
          desc: "При сезонном договоре следим за прогнозом погоды сами.",
        },
        {
          step: "Уборка",
          desc: "Приедем утром до 8:00 или в оговорённое время.",
        },
        {
          step: "Отчёт",
          desc: "Пришлём сообщение, когда готово. Никакого надзора не нужно.",
        },
      ],
      faq: [
        {
          q: "Сколько стоит уборка снега?",
          a: "45 €/час, минимум 2 часа. Стандартный частный двор с дорожкой — 1–1,5 часа работы. Большая парковка — 2–3 часа.",
        },
        {
          q: "Можно заключить договор на весь зимний сезон?",
          a: "Да, и это выгоднее. Заключаем договор в ноябре на декабрь–март. Приедем после каждого снегопада — вам не нужно звонить каждый раз.",
        },
        {
          q: "В котором часу приезжаете?",
          a: "По договорённости. Многие клиенты просят до 8:00 — чтобы к началу рабочего дня всё было расчищено. Организуем.",
        },
        {
          q: "Посыпаете льдом?",
          a: "Да, посыпка песком или антигололёдной смесью — по запросу, входит в услугу или добавляется отдельно.",
        },
        {
          q: "Убираете снег с крыши?",
          a: "Да, по запросу. Требует особой осторожности — заранее обсудим условия и безопасность.",
        },
        {
          q: "Работаете в Ryttylä, Turenki, Oitti?",
          a: "Да, охватываем весь регион. При сезонном договоре из отдалённых точек — уточните стоимость выезда.",
        },
      ],
    },
    fi: {
      name: "Lumityöt",
      shortDesc: "Auraus, hiekoitus ja talvikunnossapito",
      seoTitle: "Lumityöt Suomessa — PalveMax Oy",
      seoDescription:
        "Lumien auraus ja hiekoitus Riihimäellä, Hyvinkäällä ja Hämeenlinnassa. Talvikunnossapitosopimus kaudelle.",
      h1: "Lumityöt — lumisade yöllä, tie auki aamulla",
      intro:
        "Tammikuussa Riihimäellä on 15–20 lumisadetta. Jokaisen jälkeen pitää aurata sisäänkäynti, jalkakäytävä, kuisti. Lapiolla — 40 minuuttia ja kipeä selkä. Lumilingolla — 10 minuuttia, mutta se pitää omistaa, säilyttää ja huoltaa.\n\nTai soitat kerran ja et mieti asiaa koko talven. Seuraamme säätiedotuksia ja tulemme itse — sinun ei tarvitse soittaa joka kerta.",
      whatWeOffer: [
        "Lumien auraus jokaisen lumisateen jalkeen",
        "Sisaankaynnit, ajotiet, jalkakaytavat",
        "Hiekoitus tai liukkaudentorjunta-aine",
        "Prioriteettilahtoo aamuisin ennen klo 8",
        "Kausipalvelusopimus koko talvelle",
      ],
    },
        en: {
      name: "Snow Removal",
      shortDesc: "Snow clearing, gritting, winter maintenance",
      seoTitle: "Snow Removal in Finland — PalveMax Oy",
      seoDescription:
        "Snow removal in Riihimäki, Hyvinkää, Hämeenlinna. Seasonal contracts available.",
      h1: "Snow Removal in Finland — Snowfall at Night, Clear Path by 8 AM",
      intro:
        "PalveMax monitors the forecast and clears your paths after every snowfall — no need to call each time.",
    },
  },
  {
    slug: "melkij-remont",
    image: "/images/services/service-remont.webp",
    slugFi: "pienet-remontit",
    icon: "🔨",
    ru: {
      name: "Мелкий ремонт",
      shortDesc: "Мастер на час — список задач, одна оплата",
      seoTitle: "Мелкий ремонт в Финляндии — PalveMax Oy | 45 €/час",
      seoDescription:
        "Мелкий ремонт в Riihimäki, Hyvinkää: навеска, замена замков, починка дверей, крепление TV. Мастер на час. 45 €/час, от 2 часов.",
      h1: "Мелкий ремонт в Финляндии — список задач на год закроем за один визит",
      intro:
        "У большинства людей есть список из 5–10 мелких дел, которые откладываются месяцами. Скрипит дверь. Нужно повесить зеркало. Не работает кран. Надо прикрутить карниз.\n\nКаждая задача сама по себе занимает 20–40 минут. Собираете список — мастер приезжает, закрывает всё за 2–3 часа. Платите один раз.",
      whatWeOffer: [
        "Навеска картин, полок, зеркал — с дюбелями под материал стены",
        "Крепление телевизора на кронштейн",
        "Установка карнизов и штор",
        "Замена замков и дверных ручек",
        "Регулировка и починка дверей, петель",
        "Замена смесителей, кранов, прокладок",
      ],
      process: [
        {
          step: "Список",
          desc: "Напишите список задач — чем подробнее, тем точнее оценим время.",
        },
        {
          step: "Мастер",
          desc: "Приедет с набором инструментов и базовым крепежом.",
        },
        {
          step: "Работа",
          desc: "Выполняем задачи по списку, не торопясь, но без затягивания.",
        },
        {
          step: "Оплата",
          desc: "По факту времени. Если список закрыли раньше — платите меньше.",
        },
      ],
      faq: [
        {
          q: "Что входит в мелкий ремонт?",
          a: "Всё, что не требует строительства: навеска, крепление, регулировка, замена, починка. Если сомневаетесь — спросите, скажем честно.",
        },
        {
          q: "Сколько стоит мастер на час?",
          a: "45 €/час, минимум 2 часа. Выгоднее накопить 4–6 задач на один визит.",
        },
        {
          q: "Вешаете телевизор на стену?",
          a: "Да. Нужен кронштейн подходящего размера (ваш или купим вместе), дрель и правильные дюбели. Каменная, деревянная, гипсокартонная стена — всё учтём.",
        },
        {
          q: "Делаете сантехнику?",
          a: "Мелкое — да: замена смесителя, прокладок, гибкой подводки. Серьёзная сантехника — нет, нужна лицензия.",
        },
        {
          q: "Работаете с электрикой?",
          a: "Замена выключателя или розетки — по запросу. Новая проводка — нет, это лицензированная работа.",
        },
        {
          q: "В каких городах работаете?",
          a: "Riihimäki, Hyvinkää, Hämeenlinna, Janakkala, Turenki и весь регион.",
        },
      ],
    },
    fi: {
      name: "Pienet remontit",
      shortDesc: "Käsimies — lista tehtäviä, yksi maksu",
      seoTitle: "Pienet remontit Suomessa — PalveMax Oy",
      seoDescription:
        "Pienet korjaustyöt Riihimäellä ja Hyvinkäällä: ripustukset, lukot, ovet, TV-kiinnitykset. 45 €/h.",
      h1: "Pienet remontit — vuoden tehtävälista kiinni yhdellä käynnillä",
      intro:
        "Useimmilla ihmisillä on lista 5–10 pienestä tehtävästä, joita lykätään kuukausien ajan. Ovi narisee. Pitäisi ripustaa peili. Hana vuotaa. Pitäisi kiinnittää verhotanko.\n\nJokainen tehtävä vie itsessään 20–40 minuuttia. Kokoa lista — asentaja tulee, hoitaa kaiken 2–3 tunnissa. Maksat kerran.",
      whatWeOffer: [
        "Television ja taulujen kiinnitys seinaan",
        "Hyllyjen, tankojen ja kaapistojen asennus",
        "Ovien ja ikkunoiden saato",
        "Hanojen vaihto ja pienkorjaukset",
        "Kaikki - yksi kayynti, yksi lasku",
      ],
    },
        en: {
      name: "Minor Repairs",
      shortDesc: "Handyman — your list, one visit",
      seoTitle: "Handyman Services in Finland — PalveMax Oy",
      seoDescription:
        "Minor repairs in Riihimäki, Hyvinkää. TV mounting, locks, shelves, doors. One visit, one payment.",
      h1: "Handyman in Finland — Your Year's To-Do List, Done in One Visit",
      intro:
        "PalveMax handles all minor repairs and installations in one visit — bring your list, we bring the tools.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
