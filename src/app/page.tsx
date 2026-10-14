import { Github, Linkedin } from "lucide-react";
import { Contact } from "@/components/contact";
import { Experience, Projects, Skills } from "@/components/resume";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_PATH } from "@/lib/profile";

const NAV = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-20 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
          <a href="#main" className="link font-mono text-xs uppercase tracking-[0.18em] no-underline">
            BB
          </a>
          <ul className="flex gap-5 text-sm text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.href} className={item.href === "#skills" ? "hidden sm:block" : undefined}>
                <a href={item.href} className="link no-underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-5xl px-6">
        <section className="pb-20 pt-20 sm:pt-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Full-stack engineer</p>
          <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl">
            Benjamin Bruington
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground [text-wrap:pretty] sm:text-xl">
            I build AI features and tools that make technical systems usable by non-engineers, like an LLM
            pipeline that turns engineering activity into client updates. I work in{" "}
            <span className="text-foreground">React, Next.js, TypeScript and Go</span>.
          </p>
          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <li>
              <a href={`mailto:${EMAIL}`} className="link">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={RESUME_PATH} download className="link">
                Resume (PDF)
              </a>
            </li>
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="link inline-flex">
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="link inline-flex">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </section>

        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="mx-auto max-w-5xl border-t border-border px-6 py-8 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Benjamin Bruington
      </footer>
    </>
  );
}
