export function HeroIllustration() {
    return (
        <figure className="m-0 flex w-full max-w-[560px] min-w-0 flex-col gap-3 lg:flex-[1_1_440px]">
            <svg
                viewBox="0 0 520 400"
                role="img"
                aria-label="Line illustration: a laptop with code and a blinking cursor, a sprout growing from the screen, a coffee mug with steam shaped like curly braces, a board-game meeple and a rolling die, and a small network of agent nodes."
                className="block h-auto w-full"
            >
                <g
                    fill="none"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-ink"
                >
                    <AgentNetwork />
                    <Laptop />
                    <Sprout />
                    <Coffee />
                    <Die />
                    <Meeple />
                    <Desk />
                    <StatusPill />
                    <Sparkles />
                </g>
            </svg>
            <figcaption className="flex justify-between gap-4 border-t border-line pt-2.5 font-mono text-xs text-muted">
                <span>fig. 01 — code, coffee &amp; a roll of the dice</span>
                <span className="hidden sm:inline">2021 → now</span>
            </figcaption>
        </figure>
    );
}

function AgentNetwork() {
    return (
        <g>
            <line className="animate-dash stroke-muted [stroke-dasharray:4_6] motion-reduce:animate-none" x1="70" y1="90" x2="130" y2="58" />
            <line className="animate-dash stroke-muted [stroke-dasharray:4_6] motion-reduce:animate-none" x1="130" y1="58" x2="152" y2="116" />
            <line className="animate-dash stroke-muted [stroke-dasharray:4_6] motion-reduce:animate-none" x1="70" y1="90" x2="152" y2="116" />
            <line className="animate-dash stroke-accent [stroke-dasharray:4_6] motion-reduce:animate-none" x1="152" y1="116" x2="168" y2="150" />
            <circle cx="70" cy="90" r="8" className="fill-paper" />
            <circle cx="130" cy="58" r="6" className="fill-paper" />
            <circle cx="152" cy="116" r="7" className="fill-accent stroke-accent" />
        </g>
    );
}

function Laptop() {
    return (
        <g>
            <rect x="110" y="150" width="280" height="180" rx="10" className="fill-paper" />
            <rect x="124" y="164" width="252" height="152" rx="4" />
            <rect x="88" y="330" width="324" height="12" rx="6" className="fill-paper" />
            <line x1="222" y1="336" x2="278" y2="336" className="stroke-muted" />
            <g strokeWidth={6}>
                <line x1="146" y1="188" x2="196" y2="188" className="stroke-accent" />
                <line x1="210" y1="188" x2="290" y2="188" opacity={0.28} />
                <line x1="160" y1="210" x2="200" y2="210" opacity={0.28} />
                <line x1="214" y1="210" x2="300" y2="210" />
                <line x1="174" y1="232" x2="262" y2="232" opacity={0.28} />
                <line x1="174" y1="254" x2="214" y2="254" className="stroke-accent" opacity={0.55} />
                <line x1="228" y1="254" x2="340" y2="254" opacity={0.28} />
                <line x1="160" y1="276" x2="246" y2="276" opacity={0.28} />
            </g>
            <path d="M144 292 L150 298 L144 304" />
            <rect className="animate-blink fill-accent motion-reduce:animate-none" x="158" y="291" width="9" height="14" stroke="none" />
        </g>
    );
}

function Sprout() {
    return (
        <g className="origin-[350px_150px] animate-sway [transform-box:view-box] motion-reduce:animate-none">
            <path d="M350 150 C 350 124, 344 104, 356 78" />
            <path
                d="M352 110 C 330 106, 318 92, 322 76 C 340 78, 352 92, 352 110 Z"
                className="fill-leaf"
            />
            <path
                d="M355 88 C 370 74, 388 72, 398 80 C 390 96, 372 99, 355 88 Z"
                className="fill-leaf"
            />
        </g>
    );
}

function Coffee() {
    return (
        <g>
            <g className="animate-steam [transform-box:fill-box] motion-reduce:animate-none">
                <text x="430" y="284" stroke="none" className="fill-accent font-serif text-[30px] italic">
                    {"{"}
                </text>
            </g>
            <g className="animate-steam [transform-box:fill-box] [animation-delay:1.6s] motion-reduce:animate-none">
                <text x="450" y="272" stroke="none" className="fill-accent font-serif text-[30px] italic">
                    {"}"}
                </text>
            </g>
            <path d="M480 312 C 500 312, 500 342, 480 342" strokeWidth={2} />
            <path
                d="M424 300 L 424 344 Q 424 356 436 356 L 468 356 Q 480 356 480 344 L 480 300 Z"
                className="fill-paper"
            />
            <line x1="424" y1="300" x2="480" y2="300" strokeWidth={2} />
            <line x1="424" y1="322" x2="480" y2="322" strokeWidth={2.2} className="stroke-accent" />
        </g>
    );
}

function Die() {
    const pips = [
        [-7, -7],
        [7, -7],
        [0, 0],
        [-7, 7],
        [7, 7],
    ];

    return (
        <g className="animate-roll [transform-box:fill-box] origin-center motion-reduce:animate-none">
            <g transform="translate(456 148) rotate(14)">
                <rect x="-15" y="-15" width="30" height="30" rx="6" className="fill-paper" />
                <g stroke="none" className="fill-ink">
                    {pips.map(([cx, cy]) => (
                        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" />
                    ))}
                </g>
            </g>
        </g>
    );
}

function Meeple() {
    return (
        <path
            d="M34 356 L42 336 L30 331 Q23 327 28 320 L44 317 Q38 311 40 304 Q44 295 52 295 Q60 295 64 304 Q66 311 60 317 L76 320 Q81 327 74 331 L62 336 L70 356 L57 356 L52 345 L47 356 Z"
            className="fill-accent"
        />
    );
}

function Desk() {
    return (
        <g>
            <line x1="36" y1="356" x2="500" y2="356" />
            <line x1="60" y1="368" x2="110" y2="368" className="stroke-muted" />
            <line x1="120" y1="368" x2="132" y2="368" className="stroke-muted" />
        </g>
    );
}

function StatusPill() {
    return (
        <g className="animate-bob [transform-box:fill-box] origin-center motion-reduce:animate-none">
            <rect x="22" y="262" width="66" height="26" rx="13" className="fill-paper stroke-accent" />
            <text
                x="55"
                y="279"
                textAnchor="middle"
                stroke="none"
                className="fill-accent font-mono text-[11px]"
            >
                200 OK
            </text>
        </g>
    );
}

function Sparkles() {
    return (
        <g stroke="none">
            <path
                className="animate-twinkle [transform-box:fill-box] origin-center fill-accent motion-reduce:animate-none"
                d="M418 100 Q 418 110 428 110 Q 418 110 418 120 Q 418 110 408 110 Q 418 110 418 100 Z"
            />
            <path
                className="animate-twinkle [transform-box:fill-box] origin-center fill-ink [animation-delay:0.9s] motion-reduce:animate-none"
                d="M58 196 Q 58 203 65 203 Q 58 203 58 210 Q 58 203 51 203 Q 58 203 58 196 Z"
            />
            <path
                className="animate-twinkle [transform-box:fill-box] origin-center fill-ink [animation-delay:1.7s] motion-reduce:animate-none"
                d="M494 186 Q 494 192 500 192 Q 494 192 494 198 Q 494 192 488 192 Q 494 192 494 186 Z"
            />
        </g>
    );
}
