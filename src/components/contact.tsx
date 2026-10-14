import { Section } from "@/components/section";
import { EMAIL, PHONE } from "@/lib/profile";

const FIELD_CLASS =
  "mt-2 block w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="max-w-sm font-serif text-2xl leading-snug tracking-tight [text-wrap:balance]">
            Open to full-time roles. Send a note and I&apos;ll get back to you.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div>
              <dt className="sr-only">Email</dt>
              <dd>
                <a href={`mailto:${EMAIL}`} className="link">
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Phone</dt>
              <dd>
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="link">
                  {PHONE}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <form action="https://formsubmit.co/bibruington@gmail.com" method="POST" className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Name
            <input type="text" name="name" required autoComplete="name" className={FIELD_CLASS} />
          </label>
          <label className="text-sm font-medium">
            Email
            <input type="email" name="email" required autoComplete="email" className={FIELD_CLASS} />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
            <input type="tel" name="phone" autoComplete="tel" className={FIELD_CLASS} />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Message
            <textarea name="message" required rows={5} className={FIELD_CLASS} />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
