import { createFileRoute } from "@tanstack/react-router";
import { Code2, Heart, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ActionButtons } from "@/components/site/ActionButtons";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HANS TECHY V2 WhatsApp Bot" },
      { name: "description", content: "Learn about HANS TECHY V2, the WhatsApp bot built by HansTechy for speed, safety and simplicity." },
      { property: "og:title", content: "About — HANS TECHY V2" },
      { property: "og:description", content: "The story and mission behind the HANS TECHY V2 WhatsApp bot." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Target, title: "Our mission", text: "Make powerful WhatsApp automation simple enough for anyone to set up in minutes." },
  { icon: ShieldCheck, title: "Privacy first", text: "Your session belongs to you. Pairing happens securely with a code — no password sharing." },
  { icon: Code2, title: "Always improving", text: "New commands and fixes are released regularly to keep the bot fast and stable." },
  { icon: Heart, title: "Community driven", text: "Built with feedback from users across Tanzania and beyond." },
];

const STATS = [
  { value: "200+", label: "Commands" },
  { value: "24/7", label: "Uptime" },
  { value: "1-click", label: "Deploy" },
  { value: "v2", label: "Latest" },
];

function About() {
  return (
    <>
      <PageHero tag="about us" title={<>Built for people who <span className="text-gradient">live on WhatsApp</span></>}>
        {SITE.name} is created by HansTechy — a simple, reliable bot that brings group tools,
        downloads, AI and fun to your chats.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="card-glow rounded-2xl border border-border bg-card p-6 text-center">
                <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-6 px-5 md:grid-cols-2">
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={(i % 2) * 120}>
            <div className="card-glow flex h-full gap-5 rounded-2xl border border-border bg-card/70 p-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                <v.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-primary/30 bg-card p-10 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">Start using {SITE.name} today</h2>
              <p className="mt-2 text-muted-foreground">Pair your number, then deploy.</p>
            </div>
            <ActionButtons />
          </div>
        </Reveal>
      </section>
    </>
  );
}
