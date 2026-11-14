import Link from "next/link";
import { site } from "@/data/site";
import { Clock } from "./Clock";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-x-8 gap-y-3 px-8 py-6 font-mono text-xs text-muted">
                <span>
                    © <CurrentYear /> {site.name}
                </span>
                <span>
                    Designed &amp; built in {site.location} — <Clock /> ART
                </span>
                <Link href="#top" className="link-underline hover:text-accent">
                    Back to top ↑
                </Link>
            </div>
        </footer>
    );
}
