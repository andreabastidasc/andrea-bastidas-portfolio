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
                {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>

            {open && (
                <nav
                    id="mobile-menu"
                    aria-label="Main"
                    className="absolute inset-x-0 top-full z-50 border-b border-line bg-paper"
                >
                    <ul className="page-container flex flex-col py-4">
                        {navigation.map((item) => (
                            <li key={item.href} className="border-b border-line last:border-b-0">
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
            )}
        </div>
    );
}
