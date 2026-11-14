import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { themeScript } from "@/lib/theme";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument",
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Andrea Bastidas — Fullstack Developer",
    description:
        "Fullstack developer in Buenos Aires turning product goals into shipped web, mobile and AI features.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col bg-paper font-sans leading-relaxed text-ink">
                <Script id="theme" strategy="beforeInteractive">
                    {themeScript}
                </Script>
                <Header />
                <div className="flex-1">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
