import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const { profile, navLinks, contact, ui } = t;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const githubHref = contact.socials.find((s) => s.icon === "github")?.href ?? "#";
  const linkedinHref = contact.socials.find((s) => s.icon === "linkedin")?.href ?? "#";
  const emailHref = contact.socials.find((s) => s.icon === "mail")?.href ?? "#";

  return (
    <footer className="border-t border-line bg-bg-deep/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTop();
            }}
            className="font-heading text-lg font-bold tracking-tight"
          >
            {profile.firstName}
            <span className="gradient-text">.</span>
          </a>
          <p className="text-sm text-faint">© {new Date().getFullYear()} {profile.name}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm text-faint transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.githubAria}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-electric hover:text-ink"
          >
            <Github className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.linkedinAria}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-electric hover:text-ink"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={emailHref}
            aria-label={ui.emailAria}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-electric hover:text-ink"
          >
            <Mail className="h-4 w-4" aria-hidden />
          </a>
          <button
            type="button"
            onClick={scrollTop}
            aria-label={ui.backToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-electric/10 text-electric-bright transition-colors hover:bg-electric/20"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}
