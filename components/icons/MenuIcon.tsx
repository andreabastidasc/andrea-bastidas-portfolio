import type { SVGProps } from "react";

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            {...props}
        >
            <path d="M4 8h16M4 16h16" />
        </svg>
    );
}
