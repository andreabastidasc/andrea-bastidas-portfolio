export const site = {
    name: "Andrea Bastidas",
    role: "Fullstack Developer",
    location: "Buenos Aires",
    timeZone: "America/Argentina/Buenos_Aires",
    email: "andrea.bcolina@gmail.com",
    links: {
        linkedin: "https://www.linkedin.com/in/andreabastidasc",
        github: "https://github.com/andreabastidasc",
        cv: "/cv/AndreaBastidas-CV.pdf",
    },
} as const;

export const navigation = [
    { href: "/#work", label: "Work" },
    { href: "/#experience", label: "Experience" },
    { href: "/#stack", label: "Stack" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
] as const;
