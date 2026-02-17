export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skills: SkillCategory[] = [
    {
        title: "Frontend",
        skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Redux", "Zustand"]
    },
    {
        title: "Backend",
        skills: ["NestJS 11", "Node.js", "Express", "Prisma ORM", "TypeORM", "REST API", "GraphQL", "WebSockets"]
    },
    {
        title: "Mobile & Desktop",
        skills: ["React Native", "Expo", "Tauri 2", "Rust", "Electron"]
    },
    {
        title: "Database",
        skills: ["PostgreSQL", "MongoDB", "SQL Server", "Redis"]
    },
    {
        title: "DevOps & Cloud",
        skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD", "Linux"]
    },
    {
        title: "Tools & Others",
        skills: ["Git", "Figma", "Postman", "Mapbox", "OpenAI API", "Stripe"]
    }
];
