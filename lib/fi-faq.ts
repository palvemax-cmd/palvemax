// Finnish FAQ for each service
export const fiFaq: Record<string, { q: string; a: string }[]> = {
  gruzchiki: [
    { q: "Paljonko kantomies maksaa tunnilta?", a: "Yksi työntekijä — 45 €/h, kaksi — 90 €/h. Minimitilaus — 2 tuntia. Hinnat sisältävät ALV. Ei lisämaksuja viikonloppuisin tai iltaisin." },
    { q: "Missä kaupungeissa työskentelette?", a: "Riihimäki, Hyvinkää, Hämeenlinna, Hausjärvi, Loppi, Janakkala, Oitti, Hikiä, Ryttylä, Turenki, Tervakoski, Läyliäinen, Launonen, Kormu. Jos kaupunkisi ei ole listalla — kysy, todennäköisesti tulemme." },
    { q: "Kannatteeko ylös viidettä kerrosta ilman hissiä?", a: "Kyllä. Se on normaalia työtä, ei 'sankariteko'. Ilmoita vain etukäteen — otamme kaksi miestä, ei yhtä." },
    { q: "Onko teillä vakuutus?", a: "PalveMax Oy toimii virallisesti. Jos jotain vahingoittuu — selvitämme asian. Kolmen vuoden toiminnan aikana vakavia vahinkoja ei ole sattunut." },
    { q: "Kuinka nopeasti voitte tulla?", a: "Kiireellinen lähtö — jos on vapaa ikkuna, voimme tulla samana päivänä. Normaalisti — varaa 1–2 päivää etukäteen, erityisesti perjantaisin ja viikonloppuisin." },
    { q: "Millä kielellä kommunikoitte?", a: "Suomi, venäjä, englanti — millä sinulle sopii." },
  ],
  pereezd: [
    { q: "Paljonko muutto maksaa Suomessa?", a: "Kaksi työntekijää — 90 €/h. Yksiö: 3–4 tuntia, 270–360 €. Kaksio — 4–6 tuntia. Tämä pakkauksella. Ilman pakkausta — nopeammin ja halvemmin." },
    { q: "Pitääkö minun pakata itse?", a: "Ei. Mutta jos pakkaat etukäteen — muutto on nopeampi ja halvempi. Hauraat tavarat on kuitenkin parempi jättää meille — meillä on ammattimaiset materiaalit." },
    { q: "Onko teillä kuorma-auto?", a: "Emme ole kuljetusyritys, mutta autamme järjestämään. Työskentelemme vuokrakuorma-auton kanssa — sinun tai autamme löytämään sopivan." },
    { q: "Muutammeko talvella?", a: "Kyllä. Suomessa muutetaan ympäri vuoden. Meillä on suojahuovat huonekaluille. Tärkeintä — pysäköinti kuorma-autolle: sovitaan etukäteen." },
    { q: "Milloin pitää varata?", a: "Kuukauden loppu — kiireisin aika (vuokrasopimukset päättyvät). Varaa 3–5 päivää etukäteen. Muuna aikana — 1–2 päivää yleensä riittää." },
  ],
  "sborka-mebeli": [
    { q: "Paljonko IKEA PAX -kaapin kokoaminen maksaa?", a: "PAX kolmella osiolla ja ovilla — yleensä 2–2,5 tuntia, eli 90–112 €. Jos osioita on enemmän tai sisällä on laatikoita — hieman kauemmin." },
    { q: "Pitääkö minun ostaa työkaluja?", a: "Ei. Asentaja tulee omilla työkaluillaan. Ruuvit, tulpat — jos tarvitaan lisää, ilmoita etukäteen." },
    { q: "Kokootetteko muitakin merkkejä kuin IKEA?", a: "Kyllä — Jysk, BoConcept, Sotka, Asko, Isku, Masku ja muut. Jos on ohje — hyvä. Jos ei — selvitämme." },
    { q: "Kiinnitättekö kaluston seinään?", a: "Kyllä, ja suosittelemme sitä korkeille kaapeille — erityisesti lastenhuoneissa. Kivinen vai puinen seinä — ilmoita etukäteen, otamme oikean kiinnikkeen." },
    { q: "Viekö pakkauksen pois?", a: "Latomme ja järjestämme. Pahvin ja styroksien vienti — erikseen, täsmennä tilatessa." },
  ],
  "demontazh-mebeli": [
    { q: "Paljonko purkaminen maksaa?", a: "45 €/h. Yhden kaapin purkaminen — 30–60 minuuttia. Minimitilaus — 2 tuntia, joten kannattaa tilata usean esineen purku kerralla." },
    { q: "Voitteko koota kaluston uudessa paikassa?", a: "Kyllä. Merkitsemme osat juuri tätä varten. Ilmoita tilatessa — otamme sen huomioon suunnittelussa." },
    { q: "Viekö vanhan kaluston pois?", a: "Pyydettäessä. Täsmennä tilauksessa — poisvienti lasketaan erikseen, riippuu tilavuudesta." },
    { q: "Puratteko keittiöitä?", a: "Kyllä, tämä on työllistävin työ — kestää 3–5 tuntia keittiön koosta riippuen." },
  ],
  "uborka-kvartir": [
    { q: "Paljonko asunnon siivous maksaa Suomessa?", a: "45 €/h yksi siivooja. Yksiö keittiöllä ja kylpyhuoneella — 2–3 tuntia. Kaksio — 3–4 tuntia." },
    { q: "Mikä on loppusiivous ja teettekö sen?", a: "Loppusiivous on loppusiivous vuokra-asunnosta poismuuton yhteydessä. Teemme sen standardien mukaan, jotka useimmat vuokranantajat hyväksyvät." },
    { q: "Pitääkö minun olla kotona siivouksen aikana?", a: "Ei. Voit jättää avaimen naapurille tai sovitussa paikassa. Työskentelemme ilman valvontaa." },
    { q: "Tuotteko oman pesuaineen?", a: "Kyllä, tulemme täysin varustautuneina. Käytämme suomalaista ympäristöystävällistä kemiaa — turvallista lapsille ja eläimille." },
    { q: "Voiko tilata säännöllisen siivouksen?", a: "Kyllä. Kerran viikossa, kerran kahdessa viikossa, kerran kuukaudessa — sovitaan kiinteä päivä ja aika." },
  ],
  "uborka-domov": [
    { q: "Paljonko omakotitalon siivous maksaa?", a: "45 €/h yksi siivooja, 90 €/h kaksi. 100 m² talo — yleensä 4–5 tuntia yhdelle tai 2,5 tuntia kahdelle. Lopputulos suunnilleen sama rahassa, mutta kaksi on nopeampi." },
    { q: "Siivoatteko saunan?", a: "Kyllä. Puhdistamme lauteet, seinät, lattian, oven, kiukaan ulkoa. Täysimittainen saunan siivous — noin tunti lisää." },
    { q: "Työskentelettekö Loppella, Hausjärvellä ja muilla maaseutualueilla?", a: "Kyllä, tulemme. Jos yli 30 km Riihimäeltä — kysy lähtömaksu tilatessa." },
    { q: "Tuleeko olla kotona siivouksen aikana?", a: "Ei välttämättä. Monet asiakkaat jättävät avaimen tai koodin — me siivoamme, sinä hoidat omat asiasi." },
  ],
  "pokos-travy": [
    { q: "Paljonko ruohonleikkaus maksaa?", a: "45 €/h, min. 2 tuntia. Pieni tontti alle 400 m² — yleensä 1–1,5 tuntia työtä. Suuri, yli 1000 m² — 2–3 tuntia tai enemmän." },
    { q: "Kuinka usein pitää leikata?", a: "Suomen kesällä — kerran 1–2 viikossa. Kuumina ja sateisina kausina ruoho kasvaa nopeasti. Sovitaan tontillesi sopiva rytmi." },
    { q: "Viekö leikatun ruohon pois?", a: "Kyllä, siivous sisältyy. Laitamme kompostipusseihin tontilla tai viemme pois — sovitaan." },
    { q: "Onko teillä oma kone?", a: "Kyllä. Tulemme omalla laitteistolla." },
  ],
  "uborka-dvora": [
    { q: "Milloin kannattaa tilata pihansiivous?", a: "Syksy — syys-lokakuu, lehtien huippu. Kevät — huhtikuu-toukokuu, lumen sulamisen jälkeen. Molemmat kaudet ovat kiireisiä — varaa 3–5 päivää etukäteen." },
    { q: "Viekö lehdet pois?", a: "Kyllä. Joko laitamme kompostipusseihin (sinun tai meiltä) tai viemme pois — sovitaan tilatessa." },
    { q: "Tuletteko myrskyn jälkeen?", a: "Kyllä, kiireellinen lähtö — jos on ikkuna. Soita suoraan." },
    { q: "Paljonko pihansiivous maksaa?", a: "45 €/h yksi henkilö. Pieni tontti — 1–2 tuntia. Suuri, puiden kanssa — 3–5 tuntia." },
  ],
  "uborka-snega": [
    { q: "Paljonko lumityöt maksavat?", a: "45 €/h, min. 2 tuntia. Tavallinen omakotitalo käytävällä — 1–1,5 tuntia työtä. Suuri parkkipaikka — 2–3 tuntia." },
    { q: "Voiko tehdä sopimuksen koko talvikaudesta?", a: "Kyllä, ja se on edullisempaa. Teemme sopimuksen marraskuussa joulukuusta maaliskuuhun. Tulemme jokaisen lumisateen jälkeen — sinun ei tarvitse soittaa joka kerta." },
    { q: "Mihin aikaan tulette?", a: "Sopimuksen mukaan. Monet asiakkaat pyytävät ennen kello 8:00 — jotta kaikki on raivattu ennen työpäivän alkua. Järjestetään." },
    { q: "Hiekoitatteko?", a: "Kyllä, hiekoitus tai liukkaudentorjuntaseos — pyydettäessä, sisältyy palveluun tai lisätään erikseen." },
  ],
  "melkij-remont": [
    { q: "Mitä pienet remontit sisältävät?", a: "Kaikki, mikä ei vaadi rakentamista: ripustukset, kiinnitykset, säädöt, vaihdot, korjaukset. Jos epäilet — kysy, sanomme suoraan." },
    { q: "Paljonko käsimies maksaa tunnilta?", a: "45 €/h, min. 2 tuntia. Kannattaa kerätä 4–6 tehtävää yhteen käyntiin." },
    { q: "Kiinnitättekö television seinään?", a: "Kyllä. Tarvitaan sopivan kokoinen kiinnike (sinun tai ostamme yhdessä), pora ja oikeat tulpat. Kivinen, puinen, kipsilevyseinä — otamme kaiken huomioon." },
    { q: "Missä kaupungeissa työskentelette?", a: "Riihimäki, Hyvinkää, Hämeenlinna, Janakkala, Turenki ja koko alue." },
  ],
};
