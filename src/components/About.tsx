import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <Section
      id="about"
      eyebrow={t.sections.about.eyebrow}
      titlePre={t.sections.about.titlePre}
      titleAccent={t.sections.about.titleAccent}
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="space-y-5">
          {t.profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="flex items-center gap-3 rounded-2xl border border-line-strong bg-electric/10 px-5 py-4">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              <p className="text-sm font-medium text-sky-tint sm:text-base">{t.profile.availability}</p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {t.profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.1 * i} className={i % 2 === 1 ? "sm:mt-6" : ""}>
              <div className="glass-card group h-full p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                <p className="font-heading text-3xl font-bold sm:text-4xl">
                  <span className="gradient-text">{stat.value}</span>
                </p>
                <p className="mt-2 text-sm leading-snug text-faint">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
