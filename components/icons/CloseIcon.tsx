import type { SVGProps } from "react";

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d="M6 6l12 12M18 6L6 18" />
        </svg>
    );
}
