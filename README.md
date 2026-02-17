# gcoder.dev — Personal Portfolio

Personal developer portfolio built with Next.js 15, TypeScript, CSS Modules and Framer Motion. Bilingual (ES/EN), dark/light theme, fully responsive.

**Live:** [gcoder.dev](https://gcoder.dev)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS Variables
- **Animations:** Framer Motion
- **Icons:** Lucide React + Devicon CDN
- **Package Manager:** pnpm

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, featured projects, experience timeline, stats |
| `/about` | Skills with tech icons, education, work experience timeline |
| `/projects` | Category filters, project cards with gradients and metrics |
| `/projects/[slug]` | Full project detail with features, tech stack, navigation |
| `/contact` | Email card, social links, availability status |

## Features

- Bilingual support (Spanish / English) via React Context
- Dark / Light theme toggle with CSS variables
- Scroll-linked timeline animations
- Category-filtered project grid with animated transitions
- Bilingual CV download (auto-switches PDF by language)
- SEO: `robots.txt`, `sitemap.xml`, Open Graph meta
- Responsive design (mobile-first)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── projects/
│   │   └── [slug]/
│   └── page.tsx          # Home
├── components/
│   ├── home/             # Hero, FeaturedProjects, Timeline, Stats
│   ├── layout/           # Navbar, Footer
│   ├── projects/         # ProjectGrid, ProjectCard
│   ├── providers/        # Theme + Language providers
│   └── ui/               # ThemeToggle, LanguageToggle, Particles
├── context/              # LanguageContext
└── data/                 # projects, skills, techIcons, translations
```

## License

MIT
