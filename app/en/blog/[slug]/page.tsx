import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }> }

interface EnPost {
  slug: string; title: string; seoTitle: string; seoDescription: string;
  date: string; category: string; image: string; content: string;
}

const enPosts: EnPost[] = [
  {
    slug: "moving-in-finland",
    title: "Moving in Finland: What You Need to Know",
    seoTitle: "Moving in Finland — Practical Guide | PalveMax",
    seoDescription: "Practical tips for moving in Finland: timing, end-of-tenancy cleaning, elevator booking. No fluff.",
    date: "2024-10-01", category: "moving", image: "/images/blog/blog-pereezd.webp",
    content: `Moving in Finland is not just about transporting boxes. There are things worth knowing in advance that will save you time, nerves and money.

## Time your move right

The most common mistake is moving at the end of the month. Most Finnish rental agreements end on the last day of the month — so everyone moves at the same time. Movers are booked, vans are taken.

If you must move at month-end, book help at least 2 weeks in advance. At other times, 1-2 days is usually enough.

## What to do before moving day

**Notify your landlord.** Finnish law requires one month's notice, unless your contract says otherwise. Late notice means paying an extra month's rent.

**Arrange end-of-tenancy cleaning.** Finnish landlords inspect apartments carefully. No cleaning means no deposit back. Professional cleaning for a few hours costs less than losing your deposit.

**Check the elevator situation.** In many buildings, the elevator must be reserved from the building manager. No reservation — you carry things up the stairs.

**Measure doorways.** Especially in older Finnish buildings from the 1960s–70s. Doors can be as narrow as 80 cm. A 95 cm sofa won't fit through. That means disassembly or special hoisting from the balcony.

## When to hire professional movers

If you have a 2-bedroom apartment or larger, two professional movers are more cost-effective than calling friends. Friends help awkwardly, with long breaks. Professionals work non-stop and know how to carry heavy items without scratching walls.

A standard 2-bedroom apartment takes 2-3 hours with professionals. With friends — often the whole day.

---

Leave a request on our site or message us on WhatsApp — we reply within 1 hour.`,
  },
  {
    slug: "end-of-tenancy-cleaning",
    title: "End of Tenancy Cleaning: What Finnish Landlords Check",
    seoTitle: "End of Tenancy Cleaning in Finland — Guide | PalveMax",
    seoDescription: "What Finnish landlords inspect and the spots most often missed. Should you do it yourself or hire a professional?",
    date: "2024-09-15", category: "cleaning", image: "/images/blog/blog-loppusiivous.webp",
    content: `End of tenancy cleaning is a mandatory condition in most Finnish rental agreements. Skip it — and your landlord will deduct cleaning costs from your deposit.

## What Finnish landlords inspect

**Kitchen.** Stove and oven — inside, not just wiped from outside. Grease in the oven base is a common note. Extractor fan and filters. Fridge — inside and out. Cupboards — inside.

**Bathroom.** Tiles — especially corners. Mold on silicone seals is a separate check. Toilet — under the rim.

**Floors.** Under the sofa and under the bed — yes, they check there too.

**Windows.** Inside. Sometimes outside on lower floors.

**Balcony.** Floor, railing, walls.

## What is most often missed

From experience, four areas almost always get skipped:

1. Top of the fridge and cupboards — dust accumulates for years
2. Inside the oven — especially the bottom tray
3. Bathroom corner seals
4. Ventilation grilles — filled with dust

## DIY or hire a professional?

If the apartment is small and you have been a tidy tenant — do it yourself. Allow 3-4 hours and go through the checklist systematically.

If the apartment is large, or you have lived there for a long time, or you don't have time — hire a professional. The cost is lower than losing your deposit or having a dispute with your landlord.

---

Leave a request on our site or contact us via WhatsApp.`,
  },
  {
    slug: "snow-removal-finland",
    title: "Snow Removal in Finland: Who is Responsible?",
    seoTitle: "Snow Removal in Finland — Who is Responsible | PalveMax",
    seoDescription: "Legal obligations for snow removal in Finland. How to set up a seasonal service contract. Honest answers.",
    date: "2024-11-20", category: "snow removal", image: "/images/blog/blog-sneg.webp",
    content: `In January, Riihimäki gets an average of 15-20 snowfalls. After each one, paths need clearing. This is not a suggestion — it is a legal requirement.

## Who is legally responsible

In Finland, responsibility for clearing the pavement in front of a property belongs to the property owner or manager. If the pavement is icy and someone falls — the owner is liable.

For tenants: check your contract. Snow clearing is often the landlord's responsibility. If it is not specified — clarify.

## Three options

**Yourself.** A shovel is cheap, but 30-40 minutes after every snowfall. After three storms in a row, that is 2 hours of work in the cold.

**Snow blower.** A decent one costs 600-1500 euros, plus storage and maintenance. Worth it only for very large areas.

**Seasonal service contract.** One call in November — no more thinking about snow all winter. We monitor the forecast and come ourselves.

## Why a contract beats one-off calls

A single call-out after heavy snow is urgent — everyone calls at the same time. Clients with contracts have priority.

A contract also means a fixed price. Without one, we may be fully booked or apply a premium for urgent work.

## Pricing in Riihimäki

Single visit — from €90, depending on the area.
Seasonal contract — calculated individually. Best arranged in October-November before the first snow.`,
  },
  {
    slug: "lawn-mowing-season",
    title: "When to Mow the Lawn in Finland",
    seoTitle: "When to Mow the Lawn in Finland — Seasonal Guide | PalveMax",
    seoDescription: "Optimal mowing schedule for Kanta-Häme. How often to mow and what to do with an overgrown plot.",
    date: "2024-06-10", category: "lawn care", image: "/images/gallery/gallery-pokos-1.webp",
    content: `The first mowing is typically needed in late May or early June. Grass starts growing actively after the snow melts and the first warm days arrive.

## Season in Kanta-Häme

Growth peak — June and early July. In rainy weather grass can grow 5-7 cm per week. If you skip two weeks — it is no longer a lawn, it is a meadow.

Mid-to-late summer — growth slows. August is more relaxed.

Last mowing — late September, sometimes early October. Grass should go into winter at 5-7 cm height — not shorter.

## How often to mow

For a good lawn: every 7-10 days in June-July, every 10-14 days in August-September.

If the goal is just "not a meadow": every two weeks is enough for most plots.

## Overgrown plot

If the lawn has not been mowed for over a month, the first cut takes 2-3 times longer. You also cannot cut more than one-third at once — the grass stresses and yellows. Multiple passes are needed.

We will tell you the price honestly before we start.

Regular maintenance is easier and cheaper than fighting a jungle once a month.`,
  },
  {
    slug: "ikea-assembly-mistakes",
    title: "IKEA Assembly: Common Mistakes and How to Avoid Them",
    seoTitle: "IKEA Furniture Assembly — Common Mistakes | PalveMax Finland",
    seoDescription: "Why assembly takes twice as long as expected and how to prevent the most common mistakes.",
    date: "2024-08-22", category: "furniture", image: "/images/blog/blog-ikea.webp",
    content: `The PAX wardrobe instruction manual is 84 pages with 47 types of fittings. Three hours later, one extra part and a door that won't close, the story is familiar.

Here is what actually goes wrong.

## Mistake 1: Panel on the wrong side

Many IKEA panels look identical on both sides. But the surface finish is only on one side. Assembled backwards — you get visible plugs in the wrong place or a texture running the wrong way. Impossible to fix once the unit is together.

Fix: before assembling, lay out all panels and check the texture direction.

## Mistake 2: Bolts not tightened properly

The hex key that comes with IKEA is small and awkward. Many people tighten "as far as their hand will go" — but that is not enough. A month later the unit starts to wobble.

Fix: use a hex key with a handle, or a drill with the right bit. The bolt must sit firmly.

## Mistake 3: Fittings not sorted first

A PAX wardrobe has 47 types of parts. Without sorting them into groups at the start, you will be confused halfway through: which bolt goes where, what is missing.

Fix: 10 minutes sorting at the start saves an hour of confusion in the middle.

## Mistake 4: Hinges installed, then noticed the door is crooked

PAX doors are adjustable, but you need to know which of the three screws does what. Not knowing — an hour of struggling with a door that won't sit right.

Fix: learn how hinge adjustment works before hanging the doors, not after.

## When to call a professional

If you have: more than two wardrobes, kitchen cabinets, or mirrored sliding doors — a professional's time costs less than your weekend and nerves.

PalveMax assembles a three-section PAX in two hours — including unpacking, assembly, door hanging, hinge adjustment and wall fixing.`,
  },
  {
    slug: "home-maintenance-seasons",
    title: "Maintaining a House in Finland: A Seasonal Guide",
    seoTitle: "House Maintenance in Finland — Seasonal Guide | PalveMax",
    seoDescription: "Practical seasonal checklist for owning a house in Finland: spring, summer, autumn, winter.",
    date: "2024-04-05", category: "home care", image: "/images/blog/blog-ukhod-dom.webp",
    content: `Owning a house in Finland is a year-round project. Each season has its own tasks.

## Spring (April-May)

The main task after winter: inspection and clean-up.

Snow has melted — check the roof and gutters. Winter stresses them, and cracks are easier to spot before the rain season starts.

Yard: remove winter gritting sand. Rake the whole area. Sand layers prevent grass from growing properly underneath.

Sauna: after winter, a good time for a thorough clean — benches, walls, floor, heater exterior.

## Summer (June-August)

Main focus: keeping up what you have done.

Lawn: every 1-2 weeks. Skip it in June and the grass takes over fast.

Windows: July-August is a good time to wash both inside and outside.

## Autumn (September-October)

October is leaf season. Leaving it too long is not recommended: leaves prevent the lawn from breathing, and in spring you get yellow patches.

Last mowing before the first frost. Grass should go into winter at 5-7 cm — not shorter.

Check pipe insulation: critical before freezing temperatures arrive.

## Winter (November-March)

Clear snow immediately after each fall — do not let it pile up. Compacted snow turns to ice and is much harder to remove.

Keep paths gritted: sand or de-icing material.

Roof: if a thick layer of snow has built up (30+ cm) — better to remove it, especially on older houses with lower load capacity.

## What to outsource

Outsource: regular lawn mowing, snow clearing, general cleaning, demanding jobs. This frees time for everything else.

A PalveMax annual contract covers all seasons — spring, summer, autumn, winter. One agreement, one contact person.`,
  },
];

export async function generateStaticParams() {
  return enPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = enPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: { images: [{ url: post.image }] },
    alternates: { canonical: `https://palvemax.fi/en/blog/${slug}` },
  };
}

function renderContent(md: string) {
  return md
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-3" style="color:var(--blue-dark);font-family:\'DM Sans\',sans-serif">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^---$/gm, '<hr class="my-6 border-gray-200">')
    .split('\n\n')
    .map(p => {
      if (p.startsWith('<h') || p.startsWith('<hr')) return p;
      if (!p.trim()) return '';
      return `<p class="mb-4 text-gray-700 leading-relaxed text-sm">${p.trim()}</p>`;
    })
    .join('\n');
}

export default async function EnBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = enPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/en/blog" className="hover:text-gray-700">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-xs">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.65) 100%)" }} />
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="container-max max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-white/20 text-white">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-sm text-gray-400 mb-8 flex items-center gap-3">
              <span>{post.date.split("-").reverse().join(".")}</span>
              <span>·</span>
              <span>PalveMax Oy</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />
            <div className="mt-10 p-6 rounded-2xl" style={{ backgroundColor: "var(--blue-dark)" }}>
              <p className="text-white font-semibold mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Need help? Leave a request — we reply within 1 hour.
              </p>
              <Link href="/en#forma" className="btn-primary text-sm">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
