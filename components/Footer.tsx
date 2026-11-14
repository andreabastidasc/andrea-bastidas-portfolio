import Link from "next/link";
import { site } from "@/data/site";
import { Clock } from "./Clock";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="page-container flex flex-col gap-2 py-6 font-mono text-xs text-muted sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-8">
                <span>
                    © <CurrentYear /> {site.name}
                </span>
                <Link href="#top" className="link-underline w-fit hover:text-accent">
                    Back to top ↑
                </Link>
            </div>
        </footer>
    );
}
