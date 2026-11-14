"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";
import { Clock } from "./Clock";
import { CloseIcon, MenuIcon } from "./icons";

export function MobileMenu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open]);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line transition-colors hover:border-ink hover:text-accent"
            >
                {open ? (
                    <CloseIcon className="size-5 animate-spin-in motion-reduce:animate-none" />
                ) : (
                    <MenuIcon className="size-5 animate-spin-in motion-reduce:animate-none" />
                )}
            </button>

            <nav
                id="mobile-menu"
                aria-label="Main"
                inert={!open}
                className={`absolute inset-x-0 top-full z-50 border-b border-line bg-paper transition-[opacity,translate,visibility] duration-300 ease-out motion-reduce:transition-none ${
                    open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
                }`}
            >
                <ul className="page-container flex flex-col py-4">
                    {navigation.map((item, index) => (
                        <li
                            key={item.href}
                            style={{ transitionDelay: open ? `${100 + index * 50}ms` : "0ms" }}
                            className={`border-b border-line transition-[opacity,translate] duration-300 ease-out last:border-b-0 motion-reduce:transition-none ${
                                open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                            }`}
                        >
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block py-3 font-serif text-3xl hover:text-accent"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="page-container pb-5 font-mono text-xs text-muted sm:hidden">
                    {site.location} · <Clock />
                </p>
            </nav>
        </div>
    );
}
