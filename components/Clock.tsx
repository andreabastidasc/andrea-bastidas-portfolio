"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: site.timeZone,
    hour: "2-digit",
    minute: "2-digit",
});

export function Clock() {
    const [time, setTime] = useState("--:--");

    useEffect(() => {
        const update = () => setTime(formatter.format(new Date()));
        update();
        const id = setInterval(update, 15_000);
        return () => clearInterval(id);
    }, []);

    return <time suppressHydrationWarning>{time}</time>;
}
