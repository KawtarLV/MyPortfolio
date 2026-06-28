import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaoutar Sadik — Full Stack Engineer" },
      { name: "description", content: "Full stack engineer building thoughtful software across React, Spring Boot, PHP, and SQL." },
      { property: "og:title", content: "Kaoutar Sadik — Full Stack Engineer" },
      { property: "og:description", content: "Full stack engineer building thoughtful software across React, Spring Boot, PHP, and SQL." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "Banking Platform",
    year: "2026",
    duration: "3 months",
    tags: ["Spring Boot", "Vue 3", "Docker", "JWT", "JUnit"],
    blurb:
      "Vue 3 + Vite + Tailwind frontend on a Spring Boot monolith with clean layered architecture handling auth, accounts, and transactions. JWT, RBAC, IBAN generation, transaction reconciliation. Containerized with Docker; Swagger/OpenAPI docs and JUnit tests.",
  },
  {
    title: "Altis Groep — AI Financial Intelligence",
    year: "2026",
    duration: "1-day hackathon",
    tags: ["React", "Node.js", "PostgreSQL", "Supabase", "Gemini Flash"],
    blurb:
      "Reconciled €12M+ across 4 accounting systems into a single source of truth. 4-layer GL mapping engine: exact rules → sample analysis → learning DB → AI fallback → human approval. Weather-aware cash flow forecasting via Open-Meteo.",
  },
  {
    title: "Capture — Event Memory PWA",
    year: "2026",
    duration: "EurHack · 48 hours",
    tags: ["React", "TypeScript", "Claude API", "Geolocation"],
    blurb:
      "Full-stack PWA shipped in 48 hours: photo capture, voice notes, QR badge scanning, real-time geolocation on an interactive map. Claude Sonnet 4 multi-modal for analysis, transcription, and summarization.",
  },
  {
    title: "Someren — Student & Activity System",
    year: "2025",
    duration: "3 months",
    tags: ["ASP.NET Core", "C#", "SQL Server", "ADO.NET"],
    blurb:
      "CRUD for students, lecturers, rooms, and activities on a normalised 7-table schema with complex joins. Role-based Razor + Bootstrap views handling data integrity, concurrency, and constraints.",
  },
  {
    title: "Inventory Platform",
    year: "2023",
    duration: "4 months",
    tags: ["React", "TypeScript", "Laravel", "MySQL", "JWT"],
    blurb:
      "React + TypeScript frontend on a Laravel REST API with JWT auth and RBAC. Product catalog, inventory, order processing, and sales analytics across a responsive multi-user dashboard.",
  },
];

const skills = [
  { label: "Frontend", items: "React · TypeScript · Next.js · Vue 3 · Tailwind" },
  { label: "Backend", items: "Java · Spring Boot · Node.js · Laravel · Python" },
  { label: "Databases", items: "PostgreSQL · MySQL · SQL Server · Supabase · EF" },
  { label: "Architecture", items: "SOLID · OOP · Layered · DI · REST · JWT" },
  { label: "Cloud / DevOps", items: "Azure · Docker · GitHub Actions · Linux · Swagger" },
];

const experience = [
  {
    role: "Frontend Developer",
    org: "PullFrame — Gig Platform for Filmmakers",
    period: "Sep 2024 — Present",
    points: [
      "7-person startup; shipped Vue.js components from Figma to production.",
      "Rapid prototyping and feature delivery in tight feedback loops.",
      "Contributed to MVP delivery across Agile sprints and user testing.",
      "Peer code reviews and Git branching conventions.",
    ],
  },
  {
    role: "Retail Associate",
    org: "SPAR Alkmaar",
    period: "2024 — Present",
    points: [
      "Customer-facing role in a high-traffic international location.",
      "Sharpened communication and problem-solving with diverse customers.",
    ],
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground grain-bg">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="text-display text-2xl">
          Kaoutar<span className="text-clay">.</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="mailto:sadikkawtar37@gmail.com"
          className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-clay transition"
        >
          Say hi
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-24 pb-24">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
        <span className="h-px w-10 bg-foreground/40" />
        Alkmaar, NL · Available for internships
      </div>
      <h1 className="text-display text-[clamp(3rem,9vw,7.5rem)] leading-[1.02]">
        Hey, I'm Kaoutar.
        <br />
        Full-stack <em className="text-clay not-italic">engineer</em> in training.
      </h1>
      <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
        <p className="md:col-span-7 text-lg leading-relaxed text-muted-foreground max-w-xl">
          Software engineering student in Alkmaar, originally from Morocco, currently a year into my degree at Inholland. I build with React, Spring Boot, PHP, and SQL — and I love the moment something finally clicks after hours of being stuck.
        </p>
        <div className="md:col-span-5 md:justify-self-end flex flex-col gap-2 text-sm">
          <Stat k="Year" v="BASc IT · Inholland" />
          <Stat k="Stack" v="React · Spring Boot · Node" />
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-6 border-t border-border pt-2">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <SectionLabel n="01" label="About" />
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed">
          <p>
            I'm the kind of person who takes things apart just to see how they work — code included. There's a specific kind of satisfaction in being stuck on something for hours and then it just clicks. That's basically why I do this.
          </p>
          <p className="text-muted-foreground">
            Outside of code I draw (seriously, it's a whole thing), I'm slowly picking up Dutch, and I'm pretty much always into some new random thing. Ask me about it, I'll probably talk too much.
          </p>
          <p className="text-muted-foreground">
            Projects are below if you want the actual proof I can do this stuff.
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <SectionLabel n="02" label="Selected Work" />
        </div>
        <h2 className="md:col-span-8 text-display text-5xl md:text-6xl">
          Things I've shipped, in order of <em className="text-clay">recency</em>.
        </h2>
      </div>
      <ul className="divide-y divide-border border-y border-border">
        {projects.map((p, i) => (
          <li key={p.title} className="group py-8 grid md:grid-cols-12 gap-6 items-start hover:bg-card/60 transition px-2 -mx-2 rounded-lg">
            <div className="md:col-span-1 text-sm font-mono text-muted-foreground pt-1">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="md:col-span-4">
              <h3 className="text-display text-3xl leading-tight group-hover:text-clay transition">
                {p.title}
              </h3>
              <p className="mt-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {p.year} · {p.duration}
              </p>
            </div>
            <div className="md:col-span-7 space-y-4">
              <p className="text-base leading-relaxed text-foreground/90">{p.blurb}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-border bg-background text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <SectionLabel n="03" label="Toolkit" dark />
        </div>
        <div className="md:col-span-8">
          <h2 className="text-display text-5xl md:text-6xl mb-12">
            The stack I reach for <em className="text-clay">first</em>.
          </h2>
          <dl className="divide-y divide-white/10 border-y border-white/10">
            {skills.map((s) => (
              <div key={s.label} className="py-5 grid grid-cols-12 gap-4 items-baseline">
                <dt className="col-span-12 md:col-span-3 text-sm font-mono uppercase tracking-wider text-white/60">
                  {s.label}
                </dt>
                <dd className="col-span-12 md:col-span-9 text-lg">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <SectionLabel n="04" label="Experience" />
      </div>
      <div className="md:col-span-8 space-y-12">
        {experience.map((e) => (
          <article key={e.role} className="border-l-2 border-clay pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-display text-3xl">{e.role}</h3>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {e.period}
              </span>
            </div>
            <p className="text-muted-foreground mb-4">{e.org}</p>
            <ul className="space-y-2 text-foreground/90">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="text-clay mt-2 h-1 w-1 rounded-full bg-clay shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <SectionLabel n="05" label="Education" />
        </div>
        <div className="md:col-span-8 space-y-8">
          <EduItem
            period="2024 — 2028"
            school="Inholland University of Applied Sciences · Haarlem"
            degree="BASc Information Technology"
            note="Propedeuse completed 2025, no resits. Coursework: Software Development, Advanced Java, Spring Boot, Cloud Computing, Security, CI/CD, Data & AI."
          />
          <EduItem
            period="2021 — 2023"
            school="NTIC — Morocco"
            degree="Associate Degree, Full Stack Web Development"
            note="Backend, frontend, databases, and Agile methodology. 5 years total IT education between NTIC and Inholland."
          />
          <div className="pt-4 grid sm:grid-cols-2 gap-3 text-sm">
            <Cert label="Microsoft Office Specialist (MOS)" year="2022" />
            <Cert label="Full Stack Web Development — NTIC" year="2023" />
            <Cert label="Languages" year="EN · AR · FR · NL (learning)" />
          </div>
        </div>
      </div>
    </section>
  );
}

function EduItem({ period, school, degree, note }: { period: string; school: string; degree: string; note: string }) {
  return (
    <article>
      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{period}</p>
      <h3 className="text-display text-3xl">{degree}</h3>
      <p className="text-muted-foreground mb-2">{school}</p>
      <p className="text-foreground/90 max-w-2xl">{note}</p>
    </article>
  );
}

function Cert({ label, year }: { label: string; year: string }) {
  return (
    <div className="flex justify-between border-t border-border pt-2">
      <span>{label}</span>
      <span className="text-muted-foreground font-mono text-xs">{year}</span>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-clay text-accent-foreground">
      <div className="mx-auto max-w-6xl px-6 py-32 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.3em] mb-8 opacity-80">06 — Let's talk</p>
        <h2 className="text-display text-[clamp(3rem,9vw,7rem)] leading-[0.95]">
          Got something <em>worth building</em>?
        </h2>
        <a
          href="mailto:sadikkawtar37@gmail.com"
          className="inline-block mt-12 text-display text-3xl md:text-5xl underline decoration-2 underline-offset-8 hover:opacity-80 transition"
        >
          sadikkawtar37@gmail.com
        </a>
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          <a href="tel:+31653787543" className="hover:underline">+31 6 53787543</a>
          <span className="opacity-50">·</span>
          <a href="https://www.linkedin.com/in/kawtar-sadik-developer/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <span className="opacity-50">·</span>
          <a href="https://github.com/KawtarLV" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} Kaoutar Sadik</span>
        <span>Built with care in Alkmaar.</span>
      </div>
    </footer>
  );
}

function SectionLabel({ n, label, dark }: { n: string; label: string; dark?: boolean }) {
  return (
    <div className="sticky top-24">
      <p className={`text-xs font-mono uppercase tracking-[0.3em] ${dark ? "text-white/60" : "text-muted-foreground"}`}>
        {n} — {label}
      </p>
    </div>
  );
}
