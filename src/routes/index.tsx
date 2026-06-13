import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Check, Download, Infinity as InfinityIcon, ShieldCheck, Sparkles, Star,
  Zap, Rocket, Bot, TrendingUp, Target, Palette, Library, Briefcase,
  DollarSign, Globe, Package, Lightbulb, GraduationCap, Lock, BadgeCheck,
  ChevronDown, Mail, ArrowRight, Flame, Clock, Gift,
} from "lucide-react";
import heroAsset from "@/assets/images/hero.png";
import ChatGPTAsset from "@/assets/images/Chat150.png";
import BundleAsset from "@/assets/chatgpt-prompts-bundle.jpeg.asset.json";
import { Countdown } from "@/components/Countdown";
import { StickyCTA } from "@/components/StickyCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digit Fortune — 1M+ Digital Assets Bundle @ ₹999 | Lifetime Access" },
      { name: "description", content: "Get instant access to 1,000,000+ digital assets — ChatGPT prompts, Canva templates, planners, eBooks & more. Lifetime access, commercial rights, ₹999 only." },
      { property: "og:title", content: "1Million+ Digital Products Bundle — ₹999 Only" },
      { property: "og:description", content: "1M+ assets, lifetime access, commercial rights. One-time payment of ₹999." },
      { property: "og:image", content: heroAsset},
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroAsset },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "1Million All in One Digital Products Bundle",
        brand: { "@type": "Brand", name: "Digit Fortune" },
        description: "1,000,000+ digital assets including ChatGPT prompts, Midjourney prompts, PLR eBooks, Canva templates, worksheets, planners and more.",
        image: heroAsset,
        offers: {
          "@type": "Offer",
          price: "999",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.92",
          reviewCount: "126",
        },
      }),
    }],
  }),
  component: Landing,
});

/* ---------------- Data ---------------- */

const bundles = [
  { title: "150,000+ ChatGPT Prompts Bundle 2.0", desc: "Advanced prompts for content, marketing, sales, coding and productivity.", count: "150K+", tone: "from-emerald-500/30 to-emerald-900/10", image: ChatGPTAsset},
  { title: "21,000+ Midjourney Prompts", desc: "AI-generated business visuals and startup concepts.", count: "21K+", tone: "from-indigo-500/30 to-indigo-900/10", image: BundleAsset.url2},
  { title: "17,500+ ChatGPT Business Prompts", desc: "Business growth, marketing and automation prompts.", count: "17.5K+", tone: "from-teal-500/30 to-teal-900/10", image: BundleAsset.url3},
  { title: "12,000+ Midjourney Prompts Bundle", desc: "Creative AI image generation prompts.", count: "12K+", tone: "from-purple-500/30 to-purple-900/10", image: BundleAsset.url4},
  { title: "14,000+ Kids Worksheets Collection", desc: "Educational printable activities.", count: "14K+", tone: "from-sky-500/30 to-sky-900/10" , image: BundleAsset.url5},
  { title: "8,000+ Recipe & Food PLR Articles", desc: "Ready-to-use food niche content.", count: "8K+", tone: "from-orange-500/30 to-orange-900/10" , image: BundleAsset.url6},
  { title: "1,700+ Digital Planners", desc: "Journals, habit trackers and productivity planners.", count: "1.7K+", tone: "from-pink-500/30 to-pink-900/10" , image: BundleAsset.url7},
  { title: "420 Canva Templates", desc: "Professional editable designs.", count: "420", tone: "from-cyan-500/30 to-cyan-900/10" , image: BundleAsset.url8},
  { title: "400 PLR eBooks", desc: "Ready-made digital content.", count: "400", tone: "from-amber-500/30 to-amber-900/10" , image: BundleAsset.url9},
  { title: "300+ Landing Page Templates", desc: "Conversion-focused page designs.", count: "300+", tone: "from-blue-500/30 to-blue-900/10" , image: BundleAsset.url10},
  { title: "300+ Resume Templates", desc: "Modern professional resumes.", count: "300+", tone: "from-slate-500/30 to-slate-900/10" , image: BundleAsset.url11},
  { title: "3,000+ MS Office Templates", desc: "Excel, Word and PowerPoint resources.", count: "3K+", tone: "from-blue-600/30 to-blue-950/10" , image: BundleAsset.url12},
  { title: "1,800+ Cooking eBooks & Articles", desc: "Recipes and food resources.", count: "1.8K+", tone: "from-rose-500/30 to-rose-900/10" , image: BundleAsset.url13},
  { title: "450+ Sound Effects", desc: "Video editing and content creation assets.", count: "450+", tone: "from-violet-500/30 to-violet-900/10" , image: BundleAsset.url14},
  { title: "Ultimate Guide to Selling Digital Products", desc: "Step-by-step business blueprint.", count: "Guide", tone: "from-yellow-500/30 to-yellow-900/10" , image: BundleAsset.url15},
];

const valueRows = [
  ["ChatGPT Prompts Bundle", 999],
  ["Midjourney Business Prompts", 999],
  ["Business ChatGPT Prompts", 999],
  ["Midjourney Prompt Bundle", 999],
  ["Kids Worksheets", 799],
  ["Food PLR Articles", 699],
  ["Digital Planners", 599],
  ["Canva Templates", 499],
  ["PLR eBooks", 599],
  ["Landing Page Templates", 599],
  ["Resume Templates", 399],
  ["Office Templates", 499],
  ["Cooking eBooks", 399],
  ["Sound Effects", 399],
  ["Digital Product Guide", 199],
] as const;

const whyChoose = [
  { icon: Download, t: "Instant Download" },
  { icon: InfinityIcon, t: "Lifetime Access" },
  { icon: Briefcase, t: "Commercial Rights" },
  { icon: BadgeCheck, t: "Resell Friendly" },
  { icon: Clock, t: "Massive Time Savings" },
  { icon: Star, t: "High Quality Assets" },
  { icon: GraduationCap, t: "Beginner Friendly" },
  { icon: DollarSign, t: "One-Time Payment" },
];

const perfectFor = [
  "Digital Product Sellers", "Content Creators", "Freelancers", "Designers",
  "Agencies", "Bloggers", "Affiliate Marketers", "Small Business Owners",
  "Dropshippers", "AI Enthusiasts",
];

const benefits = [
  { icon: Rocket, t: "Save Hundreds of Hours", d: "Skip months of work with done-for-you assets." },
  { icon: DollarSign, t: "Build & Scale Your Business", d: "Launch products, services and offers fast." },
  { icon: Bot, t: "Leverage the Power of AI", d: "Premium ChatGPT & Midjourney prompts inside." },
  { icon: TrendingUp, t: "Increase Productivity", d: "Templates that get you shipping in minutes." },
  { icon: Target, t: "Multiple Niches Supported", d: "From food to finance to fitness." },
  { icon: Palette, t: "Create Professional Content", d: "Designs that look like a senior designer made them." },
  { icon: Library, t: "Massive Content Library", d: "Over 1M assets at your fingertips." },
  { icon: Briefcase, t: "Commercial Rights Included", d: "Use in client work & sell as your own." },
  { icon: Sparkles, t: "Incredible Value", d: "Pay once. Use for life." },
  { icon: Zap, t: "Instant Access", d: "Download immediately after checkout." },
  { icon: InfinityIcon, t: "Lifetime Access", d: "Yours forever, no subscriptions." },
  { icon: GraduationCap, t: "Beginner Friendly", d: "Plug-and-play. No experience needed." },
  { icon: Globe, t: "Work Anywhere", d: "Cloud-ready resources. Use on any device." },
  { icon: Package, t: "All-In-One Resource Vault", d: "Everything in one organized library." },
  { icon: Lightbulb, t: "Endless Content Ideas", d: "Never run out of things to publish or sell." },
];

const testimonials = [
  { name: "Rahul K.", role: "Digital Marketer", text: "This bundle paid for itself in a week. The ChatGPT prompts alone saved me 40+ hours." },
  { name: "Priya S.", role: "Freelance Designer", text: "Canva templates are gorgeous. My clients keep asking how I deliver so fast." },
  { name: "Arjun M.", role: "Small Business Owner", text: "Insane value for ₹999. We use the landing pages, planners and prompts daily." },
  { name: "Neha P.", role: "Content Creator", text: "Endless content ideas. My Instagram & YouTube finally have a consistent flow." },
  { name: "Vishal R.", role: "Affiliate Marketer", text: "The PLR eBooks and landing pages are 🔥. Conversion went up almost overnight." },
  { name: "Sneha T.", role: "Etsy Seller", text: "Started selling Canva templates in 3 days. Made my money back in week one." },
  { name: "Imran A.", role: "Agency Owner", text: "We resell parts of this to clients. Margins are insane. Worth every rupee." },
  { name: "Kavya N.", role: "Beginner Entrepreneur", text: "I was overwhelmed before this. Now I have a whole digital business in a box." },
  { name: "Deepak G.", role: "AI Enthusiast", text: "150K ChatGPT prompts + 21K Midjourney prompts? Yes please. Worth 10x the price." },
];

const faqs = [
  { q: "How will I receive the bundle after purchase?", a: "Right after payment, you'll get instant access via email with a secure download link to your entire vault. No waiting." },
  { q: "Do I get commercial rights with this bundle?", a: "Yes. You can use the assets for personal projects, client work and even resell most of them as your own digital products." },
  { q: "Is this bundle suitable for beginners?", a: "Absolutely. Everything is plug-and-play. No design or AI experience is needed — we include a step-by-step guide too." },
  { q: "What types of files are included?", a: "PDFs, DOCX, XLSX, PPTX, Canva templates, .txt prompt packs, MP3 sound effects, eBooks, landing page templates and more." },
  { q: "Is this a one-time payment?", a: "Yes. Pay ₹999 once and enjoy lifetime access. No subscriptions, no hidden fees, no renewals." },
  { q: "How quickly can I access my files?", a: "Instantly. The moment your payment is confirmed, you'll receive your download links by email." },
];

/* ---------------- Helpers ---------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), obs.disconnect()),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={shown ? "animate-fade-up" : "opacity-0"}
    >
      {children}
    </div>
  );
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, shown } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, value]);
  return <span ref={ref} className="tabular-nums">{n.toLocaleString("en-IN")}{suffix}</span>;
}

/* ---------------- Sections ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-24 sm:pt-16 sm:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Top bar */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="glass rounded-full px-4 py-1.5 text-xs sm:text-sm inline-flex items-center gap-2">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              Trusted by 370+ Entrepreneurs
            </span>
            <span className="glass rounded-full px-4 py-1.5 text-xs sm:text-sm inline-flex items-center gap-2 text-primary">
              <Flame className="h-3.5 w-3.5" /> SUMMER SALE — 90% OFF
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Start Your{" "}
                <span className="text-gradient-primary">Digital Product</span>{" "}
                Business Today
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
                Get instant access to over <span className="text-foreground font-semibold">1,000,000 digital assets</span> built to help entrepreneurs, freelancers, creators and marketers save time, create faster, and scale their digital business.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "1M+", l: "Digital Assets" },
                  { v: "∞", l: "Lifetime Access" },
                  { v: "✓", l: "Commercial Rights" },
                  { v: "⚡", l: "Instant Download" },
                ].map((s) => (
                  <div key={s.l} className="glass rounded-xl p-3 text-center">
                    <div className="font-display text-xl sm:text-2xl font-bold text-primary">{s.v}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 glass-strong rounded-2xl p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" /> Limited Time Offer — ends soon
                </div>
                <div className="mt-3"><Countdown hours={3} minutes={26} /></div>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <a href="https://superprofile.bio/vp/1-million--digital-assets-mega-bundle" target="_blank" rel="noopener noreferrer" className="btn-primary rounded-2xl px-6 py-4 text-base sm:text-lg inline-flex items-center justify-center gap-1 animate-pulse-glow basis-3/4">
                  Get Lifetime Access @ ₹999 <ArrowRight className="h-5 w-5" />
                </a>
                <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> Secure checkout</span>
                  <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> SSL Protected</span>
                  <span className="inline-flex items-center gap-1"><BadgeCheck className="h-3.5 w-3.5" /> 3-Day Guarantee</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={440}>
              
              <div className="mt-6 inline-flex items-center gap-3 glass rounded-xl px-4 py-3 blink-div" > 
                <Gift className="h-5 w-5 text-gold" />
                <div className="text-sm">
                  Use coupon{" "}
                  <span className="font-mono font-bold text-primary tracking-widest">SAVE50</span>{" "}
                  for an extra <span className="font-semibold">50% OFF</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero image */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-3xl -z-10" />
              <div className="glass-strong rounded-3xl p-3 sm:p-4 shadow-card animate-float">
                <img
                  src={heroAsset}
                  alt="1 Million+ Digital Assets bundle preview"
                  className="rounded-2xl w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="bundles" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Inside the Bundle</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">15 Premium Bundles, <span className="text-gradient-primary">One Price</span></h2>
            <p className="mt-4 text-muted-foreground">Everything you need to launch, grow and scale a digital business — neatly organized and ready to download.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bundles.map((b, i) => (
            <Reveal key={b.title} delay={i * 40}>
              <article className="glass rounded-2xl p-5 h-full hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group">
                <div className={`relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br ${b.tone} border border-white/5 flex items-center justify-center`}>
                  {"image" in b && (b as { image?: string }).image ? (
                    <img
                      src={heroAsset}
                      alt={b.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
                      <div className="relative font-display text-4xl sm:text-5xl font-black text-white/90 drop-shadow-lg text-center px-4 leading-none">
                        {b.count}
                      </div>
                    </>
                  )}
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest glass-strong rounded-full px-2.5 py-1">
                    Bundle
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueTable() {
  const total = valueRows.reduce((s, [, v]) => s + (v as number), 0);
  return (
    <section id="value" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Real Value Breakdown</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">Worth <span className="text-gradient-gold">₹9,999+</span>. Yours for <span className="text-gradient-primary">₹999</span>.</h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 glass-strong rounded-3xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 sm:px-10 py-4 border-b border-white/10 bg-white/[0.03]">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Bundle / Product</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold text-right">Value</div>
            </div>

            {/* Table Rows */}
            <ul className="divide-y divide-white/5">
              {valueRows.map(([name, price]) => (
                <li key={name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 sm:px-10 py-3.5 hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className="truncate text-sm sm:text-base">{name}</span>
                  </div>
                  <div className="font-display font-semibold text-sm sm:text-base tabular-nums text-muted-foreground text-right whitespace-nowrap">
                    ₹{(price as number).toLocaleString("en-IN")}
                  </div>
                </li>
              ))}
            </ul>

            {/* Table Footer / Summary */}
            <div className="px-6 sm:px-10 py-6 border-t border-white/10 grid sm:grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Total Value</div>
                <div className="mt-1 font-display text-2xl font-bold line-through text-muted-foreground">
                  ₹<AnimatedNumber value={total} />+
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary">Today's Price</div>
                <div className="mt-1 font-display text-3xl font-bold text-gradient-primary">₹999</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gold">You Save</div>
                <div className="mt-1 font-display text-2xl font-bold text-gradient-gold">
                  ₹<AnimatedNumber value={total - 999} />+
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Why This Bundle</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">Built for Speed, <span className="text-gradient-primary">Scale and Profit</span></h2>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {whyChoose.map((w, i) => (
            <Reveal key={w.t} delay={i * 50}>
              <div className="glass rounded-2xl p-5 h-full hover:border-primary/40 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary grid place-items-center">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold">{w.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerfectFor() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Perfect For</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">Whoever You Are, <span className="text-gradient-primary">This Works For You</span></h2>
          </div>
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-6" >
          {perfectFor.map((p, i) => (
            <Reveal key={p} delay={i * 40}>
              <span className="glass-strong rounded-full px-5 py-2.5 text-sm hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition">
                {p}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Benefits</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">Everything You Need <span className="text-gradient-primary">In One Vault</span></h2>
          </div>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={i * 35}>
              <div className="glass rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 text-primary grid place-items-center shadow-glow-sm">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{b.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const list = [...testimonials, ...testimonials];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Loved by 370+ Entrepreneurs</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">Real Results from <span className="text-gradient-primary">Real People</span></h2>
            <div className="mt-5 inline-flex items-center gap-3 glass rounded-full px-5 py-2">
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <span className="font-semibold">4.2/5</span>
              <span className="text-muted-foreground text-sm">from 126+ customers</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-5 w-max animate-marquee">
          {list.map((t, i) => (
            <article key={i} className="glass rounded-2xl p-6 w-[330px] sm:w-[380px] shrink-0">
              <div className="flex">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/40 grid place-items-center font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">FAQ</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">Got Questions? <span className="text-gradient-primary">We've Got Answers</span></h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div className="glass rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 text-left hover:bg-white/5 transition   cursor-pointer"
                  >
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalPricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 bg-accent/15 blur-3xl rounded-full" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <span className="rounded-full bg-accent/20 text-accent px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5" /> Summer Sale
                </span>
                <span className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-semibold">90% OFF</span>
              </div>

              <h2 className="text-center text-3xl sm:text-5xl font-bold">
                Lock In <span className="text-gradient-primary">Lifetime Access</span>
              </h2>

              <div className="mt-8 text-center">
                <div className="text-muted-foreground line-through text-lg">Regular Price ₹9,999</div>
                <div className="mt-2 font-display text-6xl sm:text-7xl font-black text-gradient-primary">₹999</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">One-time payment · INR</div>
              </div>

              <div className="mt-8 glass rounded-2xl p-5 text-center blink-div">
                <div className="text-sm text-muted-foreground">Use coupon for extra 50% OFF</div>
                <div className="mt-2 font-mono font-black text-3xl text-primary tracking-[0.3em]">SAVE50</div>
              </div>

              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {["Instant Download", "Lifetime Access", "Commercial Rights", "One-Time Payment", "3-Day Guarantee", "UPI · Cards · Net Banking"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>

              <a href="https://superprofile.bio/vp/1-million--digital-assets-mega-bundle" target="_blank" rel="noopener noreferrer" className="btn-primary mt-10 w-full rounded-2xl py-5 text-lg inline-flex items-center justify-center gap-2 animate-pulse-glow">
                🚀 Get Lifetime Access Now
              </a>

              <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> Secure Checkout</span>
                <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> SSL Protected</span>
                <span className="inline-flex items-center gap-1"><BadgeCheck className="h-3.5 w-3.5" /> 3-Day Money Back</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-32">
      <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/40 grid place-items-center">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">Digit Fortune</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Premium digital product bundles to help you launch, grow and scale your online business.
          </p>
          <a href="mailto:fortunemechanics@gmail.com" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <Mail className="h-4 w-4" /> fortunemechanics@gmail.com
          </a>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy" className="hover:text-primary">Refund Policy</Link></li>
            <li><Link to="/contact-us" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Product</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#bundles" className="hover:text-primary">What's Inside</a></li>
            <li><a href="#value" className="hover:text-primary">Pricing</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 mx-auto max-w-7xl px-4 text-xs text-muted-foreground text-center border-t border-white/5 pt-6">
        © 2026 Digit Fortune. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Top announcement strip */}
      <div className="bg-gradient-to-r from-primary/15 via-primary/5 to-accent/15 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center text-xs sm:text-sm flex items-center justify-center gap-2 blink-div">
          <Flame className="h-3.5 w-3.5 text-accent" />
          <span className="text-muted-foreground">
            Summer Sale — Use code <span className="font-mono font-bold text-primary">SAVE50</span> for extra 50% OFF
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 h-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <a href="#" className="flex min-w-0 items-center gap-2">
            <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-primary to-primary/40 grid place-items-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="truncate font-display font-bold text-lg">Digit Fortune</span>
          </a>
          <a href="https://superprofile.bio/vp/1-million--digital-assets-mega-bundle" target="_blank" rel="noopener noreferrer" className="btn-primary rounded-xl px-4 py-2 text-sm whitespace-nowrap inline-flex items-center gap-1.5">
            Get @ ₹999 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Showcase />
        <ValueTable />
        <WhyChoose />
        <PerfectFor />
        <Benefits />
        <Testimonials />
        <Faq />
        <FinalPricing />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
