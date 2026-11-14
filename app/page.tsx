export default function Home() {
    return (
        <main className="mx-auto flex max-w-[1240px] flex-col justify-center py-32 gap-6 px-8">
            <p className="font-mono text-[13px] tracking-[0.04em] text-muted">
                (01) — FULLSTACK DEVELOPER
            </p>
            <h1 className="font-serif text-[clamp(48px,6.4vw,92px)] leading-[0.98] tracking-[-0.025em]">
                Andrea Bastidas<span className="text-accent">.</span>{" "}
                <em className="text-accent">Coming soon</em>
            </h1>
            <p className="max-w-[540px] text-lg text-muted">
                Portfolio in progress — built step by step, one commit at a time.
            </p>
            <hr className="border-line" />
        </main>
    );
}
