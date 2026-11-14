import Link from "next/link";
import { site } from "@/data/site";
import { HeroIllustration } from "../HeroIllustration";

export function Hero() {
    return (
        <section className="page-container flex flex-col items-center gap-12 pt-12 pb-14 sm:pt-18 lg:flex-row">
            <div className="flex min-w-0 flex-col gap-6 sm:gap-7 lg:flex-[1_1_520px]">
                <p className="font-mono text-[13px] tracking-[0.04em] text-muted">
                    (01) — FULLSTACK DEVELOPER
                </p>
                <h1 className="font-serif text-[clamp(40px,6.4vw,92px)] leading-[0.98] tracking-[-0.025em]">
                    I build software <em className="text-accent">end to end</em> — and make sure it
                    moves the business forward.
                </h1>
                <p className="max-w-[540px] text-base text-muted sm:text-lg">
                    Fullstack developer in {site.location}. I turn product goals into shipped web,
                    mobile and AI features, working with design and business from the first sketch
                    to production.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                    <Link
                        href="#work"
                        className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-ink px-5.5 text-[15px] font-medium text-paper transition-opacity hover:opacity-85"
                    >
                        See my work <span aria-hidden="true">→</span>
                    </Link>
                    <a
                        href={`mailto:${site.email}`}
                        className="inline-flex min-h-12 items-center rounded-full border border-line px-5.5 text-[15px] font-medium transition-colors hover:border-ink"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
            <HeroIllustration />
        </section>
    );
}
