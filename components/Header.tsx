import Link from "next/link";
import { navigation, site } from "@/data/site";
import { Clock } from "./Clock";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    return (
        <header id="top" className="relative border-b border-line">
            <div className="page-container flex items-center justify-between gap-6 py-4 sm:py-5">
                <Link href="/" className="font-serif text-[22px] leading-none sm:text-[26px]">
                    {site.name}
                    <span className="text-accent">.</span>
                </Link>

                <nav aria-label="Main" className="hidden gap-x-7 text-sm lg:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="link-underline hover:text-accent"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3 sm:gap-4">
                    <p className="hidden items-center gap-2 font-mono text-xs text-muted sm:flex">
                        <span
                            aria-hidden="true"
                            className="inline-block size-[7px] rounded-full bg-accent"
                        />
                        <span>
                            {site.location} · <Clock />
                        </span>
                    </p>
                    <ThemeToggle />
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
