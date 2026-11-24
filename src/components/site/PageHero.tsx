import type { ReactNode } from "react";

export function PageHero({ tag, title, children }: { tag: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="orb left-[-8rem] top-[-6rem] bg-primary/25" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-20 md:pt-28">
        <p className="animate-fade-up font-mono text-sm text-primary">{`// ${tag}`}</p>
        <h1 className="animate-fade-up mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl [animation-delay:120ms]">
          {title}
        </h1>
        {children && (
          <div className="animate-fade-up mt-5 max-w-2xl text-lg text-muted-foreground [animation-delay:240ms]">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
