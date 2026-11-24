import { KeyRound } from "lucide-react";
import { SITE } from "@/lib/site";
import { HerokuLogo } from "./HerokuLogo";
import { cn } from "@/lib/utils";

export function PairCodeButton({ className }: { className?: string }) {
  return (
    <a
      href={SITE.pairUrl}
      target={SITE.pairUrl.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={cn(
        "group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-primary px-6 py-3.5 font-display text-base font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5",
        className,
      )}
    >
      <span className="shine" aria-hidden="true" />
      <KeyRound className="h-5 w-5" />
      Get Pair Code
    </a>
  );
}

export function HerokuButton({ className }: { className?: string }) {
  return (
    <a
      href={SITE.herokuUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-heroku px-6 py-3.5 font-display text-base font-semibold text-heroku-foreground shadow-heroku transition-transform duration-300 hover:-translate-y-0.5",
        className,
      )}
    >
      <span className="shine" aria-hidden="true" />
      <HerokuLogo className="h-5 w-5" />
      Deploy to Heroku
    </a>
  );
}

export function ActionButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      <PairCodeButton />
      <HerokuButton />
    </div>
  );
}
