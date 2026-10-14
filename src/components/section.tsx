import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid scroll-mt-20 gap-6 border-t border-border pb-20 pt-12 md:grid-cols-[9rem_1fr] md:gap-12"
    >
      <h2
        id={`${id}-title`}
        className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:sticky md:top-24 md:self-start"
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
