import { createFileRoute } from "@tanstack/react-router";
import { Bot, Download, Gamepad2, Image, Server, Shield, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ActionButtons } from "@/components/site/ActionButtons";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — HANS TECHY V2 Bot Features" },
      { name: "description", content: "Group management, media downloads, AI chat, stickers, games and one-click Heroku hosting with HANS TECHY V2." },
      { property: "og:title", content: "Services — HANS TECHY V2" },
      { property: "og:description", content: "Explore everything the HANS TECHY V2 WhatsApp bot can do." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Services,
});

const OG_IMAGE =
  "https://id-preview--c06a1821-9666-49c5-9f44-2695f29e43ae.lovable.app/__l5e/assets-v1/0b60f9e8-e07c-46ff-a17e-d14b9331a3e4/hans-techy-og.png";

const SERVICES = [
  { icon: Users, title: "Group Management", text: "Welcome & goodbye messages, anti-link, kick, promote, demote and tag-all.", cmd: ".antilink on" },
  { icon: Download, title: "Media Downloader", text: "Download videos and music from TikTok, YouTube, Instagram and Facebook.", cmd: ".play song name" },
  { icon: Sparkles, title: "AI Assistant", text: "Ask questions, get answers and generate text with smart AI replies.", cmd: ".ai hello" },
  { icon: Image, title: "Sticker Maker", text: "Turn any photo or short video into a WhatsApp sticker instantly.", cmd: ".sticker" },
  { icon: Gamepad2, title: "Fun & Games", text: "Quizzes, jokes, tic-tac-toe and more to keep groups active.", cmd: ".ttt" },
  { icon: Shield, title: "Privacy Tools", text: "Anti-delete, anti-call, auto status view and presence control.", cmd: ".anticall on" },
  { icon: Server, title: "Heroku Hosting", text: "Deploy the bot to Heroku in one click and keep it online 24/7.", cmd: "deploy → heroku" },
  { icon: Bot, title: "Custom Setup", text: "Need a custom bot or help setting up? Contact us for personal support.", cmd: ".owner" },
];

function Services() {
  return (
    <>
      <PageHero tag="services" title={<>Everything <span className="text-gradient">one bot</span> can do</>}>
        Powerful features out of the box — just pair, deploy and type a command.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 90}>
            <div className="card-glow group flex h-full flex-col rounded-2xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition-transform duration-500 group-hover:rotate-[360deg]">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.text}</p>
              <code className="mt-5 rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs text-primary">
                {s.cmd}
              </code>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <Reveal>
          <div className="rounded-3xl border border-primary/30 bg-card p-10 text-center md:p-14">
            <h2 className="font-display text-3xl font-bold">Get started now</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Step 1: get your pair code. Step 2: deploy to Heroku with your session.
            </p>
            <ActionButtons className="mt-8 justify-center" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
