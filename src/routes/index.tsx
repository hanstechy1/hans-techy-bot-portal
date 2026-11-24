import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Bot,
  Download,
  KeyRound,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { ActionButtons } from "@/components/site/ActionButtons";
import { Reveal } from "@/components/site/Reveal";
import { HerokuLogo } from "@/components/site/HerokuLogo";
import { SITE } from "@/lib/site";
import bannerAsset from "@/assets/hans-techy-v2.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HANS TECHY V2 — Fast WhatsApp Bot | Pair & Deploy" },
      {
        name: "description",
        content:
          "HANS TECHY V2 is a powerful WhatsApp bot. Get your pair code, copy your session and deploy to Heroku in one click.",
      },
      { property: "og:title", content: "HANS TECHY V2 — Fast WhatsApp Bot" },
      {
        property: "og:description",
        content: "Get your pair code and deploy HANS TECHY V2 to Heroku in one click.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Index,
});

const OG_IMAGE =
  "https://id-preview--c06a1821-9666-49c5-9f44-2695f29e43ae.lovable.app/__l5e/assets-v1/0b60f9e8-e07c-46ff-a17e-d14b9331a3e4/hans-techy-og.png";

const LINES = [
  "$ connecting to whatsapp...",
  "✓ pair code verified",
  "✓ session saved",
  "$ deploying to heroku...",
  "✓ HANS TECHY V2 is online 🚀",
];

function Terminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const current = LINES[lineIdx] ?? "";
    if (chars < current.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 38);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      if (lineIdx < LINES.length - 1) {
        setLineIdx((i) => i + 1);
        setChars(0);
      } else {
        setLineIdx(0);
        setChars(0);
      }
    }, lineIdx === LINES.length - 1 ? 2600 : 500);
    return () => clearTimeout(t);
  }, [chars, lineIdx]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 shadow-glow backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-destructive/80" />
        <span className="h-3 w-3 rounded-full bg-chart-4/80" />
        <span className="h-3 w-3 rounded-full bg-primary/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">hans-techy-v2 ~ bash</span>
      </div>
      <div className="relative min-h-[220px] p-5 font-mono text-sm leading-7">
        <div className="animate-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        {LINES.slice(0, lineIdx).map((l) => (
          <p key={l} className={l.startsWith("✓") ? "text-primary" : "text-muted-foreground"}>
            {l}
          </p>
        ))}
        <p
          className={`caret ${(LINES[lineIdx] ?? "").startsWith("✓") ? "text-primary" : "text-muted-foreground"}`}
        >
          {(LINES[lineIdx] ?? "").slice(0, chars)}
        </p>
      </div>
    </div>
  );
}

const FEATURES = [
  { icon: Zap, title: "Lightning fast", text: "Replies in milliseconds with optimized command handling." },
  { icon: Users, title: "Group tools", text: "Welcome messages, anti-link, kick, promote and more." },
  { icon: Download, title: "Media downloader", text: "Grab videos, music and images from popular platforms." },
  { icon: Sparkles, title: "AI chat", text: "Smart AI replies right inside your WhatsApp chats." },
  { icon: ShieldCheck, title: "Secure session", text: "Your session stays private — linked with a pair code." },
  { icon: MessageSquare, title: "Auto reply", text: "Set custom auto replies, status view and presence." },
];

const STEPS = [
  { icon: KeyRound, title: "Get pair code", text: "Enter your WhatsApp number and link the bot with a pair code." },
  { icon: ShieldCheck, title: "Save your session", text: "Copy the session ID sent to your WhatsApp and keep it safe." },
  { icon: HerokuLogo, title: "Deploy to Heroku", text: "Paste the session ID and launch the bot in one click." },
];

const TAGS = ["Group Manager", "AI Chat", "Sticker Maker", "Downloader", "Anti-Link", "Auto Status", "Games", "24/7 Online"];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="orb left-[-10rem] top-[-8rem] bg-primary/25" aria-hidden="true" />
        <div className="orb right-[-10rem] top-40 bg-accent/20 [animation-delay:-6s]" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-2 md:pt-24">
          <div>
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Bot online · v2
            </span>
            <h1 className="animate-fade-up mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl [animation-delay:100ms]">
              Your WhatsApp,
              <br />
              <span className="text-gradient">supercharged.</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-lg text-lg text-muted-foreground [animation-delay:200ms]">
              {SITE.name} is a fast, feature-packed WhatsApp bot. Get your pair code, save your
              session and deploy to Heroku — no coding needed.
            </p>
            <ActionButtons className="animate-fade-up mt-9 [animation-delay:300ms]" />
          </div>

          <div className="animate-fade-up relative [animation-delay:350ms]">
            <div className="absolute -inset-6 -z-10 rounded-full border border-dashed border-primary/20 animate-spin-slow" />
            <div className="animate-float">
              <Terminal />
            </div>
            <img
              src="/images/bot-hero.png"
              alt="HANS TECHY V2 bot mascot"
              className="absolute -right-6 -top-14 w-28 rounded-2xl border border-primary/40 shadow-glow animate-float [animation-delay:-2s] md:-right-10 md:w-36"
            />
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-glow">
              <Bot className="h-6 w-6 text-primary" />
              <div>
                <p className="font-display text-sm font-semibold">200+ commands</p>
                <p className="font-mono text-xs text-muted-foreground">ready to use</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-y border-border/60 bg-card/40 py-4">
          <div className="animate-marquee flex w-max gap-10 font-mono text-sm text-muted-foreground">
            {[...TAGS, ...TAGS].map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t} <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <Reveal>
          <img
            src={bannerAsset.url}
            alt="HANS TECHY V2 WhatsApp bot banner"
            className="card-glow w-full rounded-3xl border border-border object-cover"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="font-mono text-sm text-primary">// how it works</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Live in 3 simple steps</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="card-glow h-full rounded-2xl border border-border bg-card p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-5xl font-bold text-border">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Reveal>
          <p className="font-mono text-sm text-primary">// features</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Everything your chats need</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <div className="card-glow h-full rounded-2xl border border-border bg-card/70 p-6">
                <f.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 text-center md:p-16">
            <div className="orb left-1/2 top-[-12rem] -translate-x-1/2 bg-primary/20" aria-hidden="true" />
            <Rocket className="relative mx-auto h-10 w-10 text-primary animate-float" />
            <h2 className="relative mt-5 font-display text-3xl font-bold md:text-5xl">Ready to launch your bot?</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
              Grab your pair code, then deploy to Heroku in one click.
            </p>
            <ActionButtons className="relative mt-8 justify-center" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
