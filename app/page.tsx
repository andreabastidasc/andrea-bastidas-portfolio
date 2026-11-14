export default function Home() {
    return (
        <main className="page-container flex flex-col justify-center gap-6 py-20 sm:py-32">
            <p className="font-mono text-[13px] tracking-[0.04em] text-muted">
                (01) — FULLSTACK DEVELOPER
            </p>
            <h1 className="font-serif text-[clamp(40px,6.4vw,92px)] leading-[0.98] tracking-[-0.025em]">
                Andrea Bastidas<span className="text-accent">.</span>{" "}
                <em className="text-accent">Coming soon</em>
            </h1>
            <p className="max-w-[540px] text-base text-muted sm:text-lg">
                Portfolio in progress — built step by step, one commit at a time.
            </p>
            <hr className="border-line" />
        </main>
    );
}
