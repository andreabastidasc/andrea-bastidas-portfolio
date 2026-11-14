"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

function subscribe(onChange: () => void) {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
}

const getIsDark = () => document.documentElement.classList.contains("dark");
const getServerIsDark = () => false;

export function ThemeToggle() {
    const isDark = useSyncExternalStore(subscribe, getIsDark, getServerIsDark);

    function toggle() {
        const next = !getIsDark();
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch {}
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line transition-colors hover:border-ink hover:text-accent"
        >
            {isDark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
        </button>
    );
}
