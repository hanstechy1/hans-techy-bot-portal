import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HANS TECHY V2 Support" },
      { name: "description", content: "Contact HansTechy by email at hanstechy@outlook.com or call/WhatsApp +255686005775." },
      { property: "og:title", content: "Contact — HANS TECHY V2" },
      { property: "og:description", content: "Get help with your HANS TECHY V2 WhatsApp bot." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Contact,
});

const OG_IMAGE =
  "https://id-preview--c06a1821-9666-49c5-9f44-2695f29e43ae.lovable.app/__l5e/assets-v1/0b60f9e8-e07c-46ff-a17e-d14b9331a3e4/hans-techy-og.png";

const CHANNELS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: SITE.phone, href: SITE.whatsapp },
];

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "website visitor"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero tag="contact us" title={<>Let's <span className="text-gradient">talk</span></>}>
        Questions, setup help or a custom bot? Reach out — we usually reply quickly.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.label} delay={i * 110}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-glow flex items-center gap-5 rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                  <c.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7">
            <h2 className="font-display text-2xl font-semibold">Send a message</h2>
            <label className="mt-6 block font-mono text-xs uppercase tracking-widest text-muted-foreground" htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
              placeholder="John Doe"
            />
            <label className="mt-5 block font-mono text-xs uppercase tracking-widest text-muted-foreground" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
              placeholder="How can we help?"
            />
            <button
              type="submit"
              className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-3.5 font-display font-semibold text-primary-foreground shadow-glow"
            >
              <span className="shine" aria-hidden="true" />
              <Send className="h-4 w-4" /> Send via email
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
