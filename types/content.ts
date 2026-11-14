export type Screenshot = {
    label: string;
    src?: string;
    alt?: string;
};

export type FlowStep = {
    kicker: string;
    title: string;
    detail: string;
};

export type Impact = {
    headline: string;
    detail: string;
};

export type Project = {
    slug: string;
    index: string;
    company: string;
    years: string;
    title: string;
    summary: string;
    lead: string;
    stack: string[];
    meta: { label: string; value: string }[];
    screenshots: [Screenshot, Screenshot];
    context: string;
    challenge: string;
    contributions: string[];
    flow: FlowStep[];
    impact: Impact[];
};

export type Job = {
    years: string;
    company: string;
    role: string;
    about: string;
    points: string[];
};

export type StackGroup = {
    group: string;
    items: string;
};
