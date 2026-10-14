import { Section } from "@/components/section";

const ROLES = [
  {
    company: "Axiaras",
    title: "Full-Stack Developer",
    location: "Melbourne, Australia",
    dates: "Jun 2025 – Nov 2025",
    highlights: [
      "Built an LLM pipeline that turns raw Jira and GitHub activity into plain-language client updates",
      "Shipped an AI timeline endpoint that summarizes any date range as a summary or weekly digest",
      "Owned the Jira integration end to end: OAuth install, token refresh and per-project webhooks",
      "Built multi-tenant org onboarding on Clerk: invitations, join requests and role management",
      "Scaffolded a Cloudflare Workers integrations service with rate limiting and Terraform",
      "Wrote 200+ automated tests across TypeScript services and Go webhook handlers",
    ],
  },
  {
    company: "Squared",
    title: "Full-Stack Developer",
    location: "Illinois, United States",
    dates: "Nov 2024 – Jun 2025",
    highlights: [
      "Introduced Prismic CMS so non-engineers could publish docs without a deploy",
      "Built task dependencies end to end, from schema and RPC service to “blocked by” UI",
      "Extended the Slate rich-text editor to 3 surfaces with task autocomplete, code blocks and MDX conversion",
      "Built @mention notifications with hover-card previews for tasks and comments",
      "Automated Postgres backups to S3 with GitHub Actions and seeded local DBs from Neon",
    ],
  },
];

const EARLIER_PROJECTS = [
  {
    name: "Chameleon",
    href: "https://github.com/Ionia-Devs/chameleon",
    description: "Open-source social app connecting photographers with cosplayers",
  },
  {
    name: "Chains of Fate Trials",
    href: "https://chains-of-fate-trials.vercel.app/",
    description: "Live multiplayer puzzles: combine ingredients to craft potions",
  },
  {
    name: "Discover Coffee",
    href: "https://discover-coffee-sigma.vercel.app/",
    description: "Finds nearby coffee shops with Foursquare geolocation",
  },
];

const SKILLS = [
  { group: "Languages", items: "TypeScript, Go" },
  { group: "AI", items: "OpenAI API, LLM prompt design, Claude Code" },
  { group: "Frontend", items: "React, Next.js, Tailwind CSS, TanStack Query/Router, Zustand" },
  { group: "Backend", items: "Node.js, Hono, ConnectRPC, Protobuf, Drizzle, Prisma" },
  { group: "Infra", items: "Cloudflare Workers, AWS, Terraform, Docker, GitHub Actions, Neon Postgres" },
];

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-14">
        {ROLES.map((role) => (
          <li key={role.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                {role.company}
                <span className="text-muted-foreground"> · {role.title}</span>
              </h3>
              <p className="font-mono text-xs tabular-nums text-muted-foreground">{role.dates}</p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>
            <ul className="mt-5 max-w-prose space-y-2.5 text-[15px] leading-relaxed">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-primary">
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <article className="rounded-lg border border-border bg-card p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-serif text-2xl font-medium tracking-tight">Party Planner</h3>
          <p className="font-mono text-xs tabular-nums text-muted-foreground">Nov 2025 – Present</p>
        </div>
        <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">
          A tabletop campaign manager built with TanStack Start and a Go ConnectRPC API on Neon. Developed
          AI-first with Claude Code, guided by a CLAUDE.md playbook that agents follow.
        </p>
      </article>
      <h3 className="mt-12 font-serif text-lg italic text-muted-foreground">Earlier work</h3>
      <ul className="mt-4 divide-y divide-border border-y border-border">
        {EARLIER_PROJECTS.map((project) => (
          <li key={project.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
            <a href={project.href} target="_blank" rel="noreferrer" className="link shrink-0 font-medium sm:w-48">
              {project.name}
            </a>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-border">
        {SKILLS.map(({ group, items }) => (
          <div key={group} className="grid gap-1 py-3 first:pt-0 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <dt className="font-medium">{group}</dt>
            <dd className="text-muted-foreground">{items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
