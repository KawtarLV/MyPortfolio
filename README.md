# Kaoutar Sadik — Portfolio

Personal portfolio site built with TanStack Start, React 19, and Tailwind CSS v4.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) + [TanStack Router](https://tanstack.com/router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 · shadcn/ui (Radix UI primitives) |
| Build | Vite 8 via `@lovable.dev/vite-tanstack-config` |
| Server | Nitro (Cloudflare target) |
| Fonts | Instrument Serif · Inter · JetBrains Mono |

## Getting started

```bash
# Install dependencies
npm install   # or: bun install

# Start dev server at http://localhost:8080
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project structure

```
src/
├── routes/
│   ├── __root.tsx        # Root layout / HTML shell
│   └── index.tsx         # Portfolio page (all sections)
├── components/ui/        # shadcn/ui component library
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and error reporting
├── styles.css            # Global styles + design tokens
├── router.tsx            # Router configuration
└── server.ts             # SSR server entry (Nitro)
```

## Sections

| # | Section | Description |
|---|---|---|
| — | Nav | Sticky top nav with smooth-scroll links |
| — | Hero | Name, tagline, current study + stack |
| 01 | About | Short personal bio |
| 02 | Selected Work | 5 projects with tags, year, and description |
| 03 | Toolkit | Skills grouped by category |
| 04 | Experience | PullFrame · SPAR |
| 05 | Education | Inholland BASc IT · NTIC Associate Degree |
| 06 | Contact | Email + phone + LinkedIn + GitHub |

## Design tokens

Custom OKLCH colour palette defined in `src/styles.css`:

- `--cream` — warm off-white background
- `--ink` — near-black foreground
- `--clay` — terracotta accent (headings, highlights, CTA)
- `--moss` — muted green (reserved)

Custom utilities: `text-display` (Instrument Serif), `grain-bg` (dot-grid texture).

## Scripts

```bash
npm run dev       # Dev server with hot reload
npm run build     # Production SSR build
npm run lint      # ESLint
npm run format    # Prettier
```

## Contact

Kaoutar Sadik · sadikkawtar37@gmail.com · [LinkedIn](https://www.linkedin.com/in/kawtar-sadik-developer/) · [GitHub](https://github.com/KawtarLV)
