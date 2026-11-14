import Link from "next/link";
import { navigation, site } from "@/data/site";
import { Clock } from "./Clock";

export function Header() {
    return (
        <header id="top" className="border-b border-line">
            <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-8 py-5">
                <Link href="/" className="font-serif text-[26px] leading-none">
                    {site.name}
                    <span className="text-accent">.</span>
                </Link>

                <nav aria-label="Main" className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
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

                <p className="flex items-center gap-2 font-mono text-xs text-muted">
                    <span
                        aria-hidden="true"
                        className="inline-block size-[7px] rounded-full bg-accent"
                    />
                    <span>
                        {site.location} · <Clock />
                    </span>
                </p>
            </div>
        </header>
    );
}
