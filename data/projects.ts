import type { Project } from "@/types/content";

export const projects: Project[] = [
    {
        slug: "kilimo",
        index: "01",
        company: "Kilimo",
        years: "2023 → now",
        title: "AI features for an agtech platform that helps farmers save water",
        summary:
            "Kilimo is an agtech company focused on water savings, helping farmers irrigate more efficiently with data. I designed and integrated multi-agent LLM features and automations that expanded what the platform offers and helped the team ship faster.",
        lead: "Bringing LLMs and multi-agent systems into a production SaaS — so the platform can do more and the team can ship faster.",
        stack: ["Azure OpenAI", "LangChain", "FastAPI", "Next.js"],
        meta: [
            { label: "Role", value: "Ssr Full-Stack Developer" },
            { label: "Timeline", value: "2023 — Present" },
            { label: "Team", value: "Cross-functional, with design and business · [team size]" },
            {
                label: "Stack",
                value: "React, Next.js, Angular, React Native, Django, FastAPI, Azure OpenAI, LangChain, AWS, Azure",
            },
        ],
        screenshots: [
            { label: "[Screenshot — main platform view]" },
            { label: "[Screenshot — AI feature or mobile app]" },
        ],
        context:
            "Kilimo is an agtech company focused on water savings: it helps farmers irrigate more efficiently using data. Its SaaS platform reaches users on web and mobile, backed by Python services running in production on AWS and Azure.",
        challenge:
            "[Describe the specific problem in 2–3 sentences: who the users were, what was missing or slow, and why it mattered for the business.]",
        contributions: [
            "Built end-to-end features across web and mobile (React, Next.js, Angular, React Native) and backend services in Django and FastAPI.",
            "Designed and integrated AI-powered solutions with multi-agent architectures using Azure OpenAI and LangChain.",
            "Created automations that expanded the platform’s capabilities and freed up the team’s time.",
            "Improved quality and efficiency with cloud-native architecture, Docker, CI/CD pipelines and unit/E2E testing.",
            "Worked with design and business on functional definition, roadmap planning and continuous-improvement initiatives.",
        ],
        flow: [
            {
                kicker: "Clients",
                title: "Web & mobile",
                detail: "React · Next.js · Angular · React Native",
            },
            { kicker: "Services", title: "APIs", detail: "Django · FastAPI" },
            { kicker: "AI layer", title: "Multi-agent system", detail: "LangChain · Azure OpenAI" },
            {
                kicker: "Platform",
                title: "Cloud & delivery",
                detail: "AWS · Azure · Docker · CI/CD",
            },
        ],
        impact: [
            {
                headline: "New capabilities",
                detail: "AI features and automations expanded what the platform offers.",
            },
            {
                headline: "Faster delivery",
                detail: "Automations helped the team speed up delivery timelines.",
            },
            {
                headline: "[Your metric]",
                detail: "[e.g. time saved, adoption of the AI feature, users reached]",
            },
        ],
    },
    {
        slug: "oracle",
        index: "02",
        company: "Oracle",
        years: "2022 → 2023",
        title: "Modernizing e-commerce used across Latin America",
        summary:
            "Led the move from Knockout.js to React, making storefronts in several countries easier to maintain and evolve — while keeping clients and stakeholders aligned on the roadmap.",
        lead: "Moving storefront features from Knockout.js to React, so platforms in several countries are easier to maintain and keep evolving.",
        stack: ["React", "Knockout.js", "E-commerce"],
        meta: [
            { label: "Role", value: "Frontend Developer" },
            { label: "Timeline", value: "2022 — 2023" },
            {
                label: "Team",
                value: "Remote, multicultural teams across Brazil and LATAM · [team size]",
            },
            { label: "Stack", value: "React, Knockout.js, JavaScript, e-commerce platforms" },
        ],
        screenshots: [
            { label: "[Screenshot — storefront before / after, or a public page]" },
            { label: "[Screenshot — migrated component]" },
        ],
        context:
            "Oracle’s e-commerce platforms power online stores for clients in multiple Latin American countries. Much of the frontend was built on Knockout.js, which made long-term maintenance and new features harder.",
        challenge:
            "[Describe the problem in 2–3 sentences: what made the legacy frontend costly, what the client needed, and how the migration had to happen without disrupting live stores.]",
        contributions: [
            "Led the migration of components and features from Knockout.js to React.",
            "Worked directly with clients and stakeholders to coordinate roadmap and functional definitions.",
            "Kept technical and business goals aligned across remote teams in Brazil and LATAM.",
            "Took part in estimation, planning and delivery so releases stayed predictable and high quality.",
        ],
        flow: [
            {
                kicker: "Before",
                title: "Knockout.js features",
                detail: "Legacy storefront components",
            },
            {
                kicker: "Plan",
                title: "Roadmap with clients",
                detail: "Scope and priorities agreed with stakeholders",
            },
            {
                kicker: "Build",
                title: "React components",
                detail: "Rebuilt features, ready to evolve",
            },
            {
                kicker: "Ship",
                title: "Multi-country release",
                detail: "Live across LATAM storefronts",
            },
        ],
        impact: [
            {
                headline: "Easier to maintain",
                detail: "A modern React frontend that is simpler to evolve long term.",
            },
            {
                headline: "Predictable releases",
                detail: "Agile planning kept delivery on track across distributed teams.",
            },
            {
                headline: "[Your metric]",
                detail: "[e.g. components migrated, countries or stores reached]",
            },
        ],
    },
    {
        slug: "bowery-creative",
        index: "03",
        company: "Bowery Creative",
        years: "2021 → 2022",
        title: "Faster time-to-market for startup MVPs",
        summary:
            "Helped clients in hospitality, healthcare and e-commerce go from idea to validated product, joining functional definition, quick user validation and continuous delivery.",
        lead: "Helping clients in hospitality, healthcare and e-commerce go from idea to a validated product — quickly.",
        stack: ["Next.js", "React Native", "Drupal", "WordPress"],
        meta: [
            { label: "Role", value: "Frontend Developer" },
            { label: "Timeline", value: "2021 — 2022" },
            {
                label: "Team",
                value: "Small agile teams, working closely with clients · [team size]",
            },
            { label: "Stack", value: "React, Next.js, React Native, Drupal, WordPress" },
        ],
        screenshots: [
            { label: "[Screenshot — a client site or MVP you can show publicly]" },
            { label: "[Screenshot — mobile view]" },
        ],
        context:
            "Bowery Creative builds digital products for brands and startups. Each client had different business needs, from hospitality and healthcare to e-commerce, and many needed to launch and validate new ideas fast.",
        challenge:
            "[Describe one project in 2–3 sentences: the client’s goal, the deadline or constraint, and what a successful launch looked like.]",
        contributions: [
            "Built interfaces and user experiences with React, Next.js and React Native, plus CMS platforms like Drupal and WordPress.",
            "Built products and MVPs in startup settings, joining functional definition and rapid user validation.",
            "Shipped through continuous delivery to shorten time-to-market for new initiatives.",
            "Added testing and automation, and contributed to technical decisions and product prioritization.",
        ],
        flow: [
            {
                kicker: "Define",
                title: "Functional definition",
                detail: "Goals and scope with the client",
            },
            { kicker: "Build", title: "MVP", detail: "React · Next.js · React Native · CMS" },
            {
                kicker: "Validate",
                title: "Quick user validation",
                detail: "Learn early, adjust fast",
            },
            { kicker: "Ship", title: "Continuous delivery", detail: "Frequent, tested releases" },
        ],
        impact: [
            {
                headline: "Faster launches",
                detail: "MVPs and continuous delivery sped up time-to-market for new initiatives.",
            },
            {
                headline: "Fit to each business",
                detail: "Solutions adapted to very different industries and needs.",
            },
            {
                headline: "[Your metric]",
                detail: "[e.g. MVPs launched, weeks from kickoff to launch]",
            },
        ],
    },
];

export function getProject(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
    const index = projects.findIndex((project) => project.slug === slug);
    return projects[(index + 1) % projects.length];
}
