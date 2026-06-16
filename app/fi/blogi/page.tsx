import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogi — PalveMax Oy | Vinkkejä kotitalouspalveluihin",
  description: "Käytännön artikkeleita muutosta, siivouksesta, ruohonleikkauksesta ja kodin hoidosta Suomessa.",
  alternates: {
    canonical: "https://palvemax.fi/fi/blogi",
    languages: { ru: "https://palvemax.fi/ru/blog", fi: "https://palvemax.fi/fi/blogi", en: "https://palvemax.fi/en/blog" },
  },
};

const fiPosts = [
  {
    slug: "muutto-suomessa",
    title: "Muutto Suomessa: mitä pitää tietää etukäteen",
    desc: "Käytännön vinkkejä muuttoon — ajoitus, loppusiivous, hissin varaaminen ja muuta mitä ei yleensä muisteta.",
    image: "/images/blog/blog-pereezd.webp",
    category: "muutto",
    date: "2024-10-01",
  },
  {
    slug: "loppusiivous-opas",
    title: "Loppusiivous: mitä se sisältää ja kannattaako se tehdä itse",
    desc: "Mitä vuokranantaja tarkastaa, mikä usein jää puuttumaan ja milloin kannattaa tilata ammattilainen.",
    image: "/images/blog/blog-loppusiivous.webp",
    category: "siivous",
    date: "2024-09-15",
  },
  {
    slug: "lumityot-suomessa",
    title: "Lumityöt Suomessa: kenen vastuulla ja miten järjestää",
    desc: "Kuka on lain mukaan velvollinen auraamaan? Miten tilata kausipalvelu? Selvitämme.",
    image: "/images/blog/blog-sneg.webp",
    category: "lumityöt",
    date: "2024-11-20",
  },
  {
    slug: "ruohonleikkaus-kausi",
    title: "Milloin leikata ruohoa Suomessa: lyhyt vastaus tontin omistajille",
    desc: "Optimaaliset leikkausajat Kanta-Hämeen alueella. Kuinka usein kaudessa ja mitä tehdä rehevällä tontilla.",
    image: "/images/gallery/gallery-pokos-1.webp",
    category: "ruohonleikkaus",
    date: "2024-06-10",
  },
  {
    slug: "ikea-kokoaminen-virheet",
    title: "IKEA-huonekalujen kokoaminen: tyypilliset virheet ja miten välttää ne",
    desc: "Miksi kokoaminen kestää kaksinkertaisesti arvioitua ja miten yleisimmät virheet välttää.",
    image: "/images/blog/blog-ikea.webp",
    category: "huonekalut",
    date: "2024-08-22",
  },
  {
    slug: "kodin-hoito-vuodenajat",
    title: "Omakotitalon hoito Suomessa: mitä tehdä vuodenaikojen mukaan",
    desc: "Käytännön kausikaatio: kevät, kesä, syksy, talvi. Mitä tehdä itse ja mitä ulkoistaa.",
    image: "/images/blog/blog-ukhod-dom.webp",
    category: "kodinhoito",
    date: "2024-04-05",
  },
];

export default function FiBlogPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <span className="text-gray-900">Blogi</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Blogi</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Vinkkejä kodin hoitoon
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Muutto, siivous, kodinhoito Suomessa — asiallisesti, ei turhia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fiPosts.map((post) => (
              <Link key={post.slug} href={`/fi/blogi/${post.slug}`}
                className="card p-0 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={post.image} alt={post.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="tag mb-2 text-xs">{post.category}</span>
                  <h2 className="text-lg font-semibold mt-2 mb-2 group-hover:text-blue-700 transition-colors leading-snug"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{post.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date.split("-").reverse().join(".")}</span>
                    <span className="font-medium" style={{ color: "var(--orange)" }}>Lue lisää →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
