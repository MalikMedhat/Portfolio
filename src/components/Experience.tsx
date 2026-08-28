import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Section
      id="experience"
      eyebrow={t.sections.experience.eyebrow}
      titlePre={t.sections.experience.titlePre}
      titleAccent={t.sections.experience.titleAccent}
      subtitle={t.sections.experience.subtitle}
    >
      <div className="relative max-w-3xl">
        <span
          aria-hidden
          className="absolute bottom-4 left-[7px] top-2 w-px bg-gradient-to-b from-electric/70 via-line-strong to-transparent"
        />
        <div className="space-y-8">
          {t.experience.map((item, i) => (
            <Reveal key={item.title} delay={0.07 * i}>
              <div className="relative pl-12">
                <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 animate-ping rounded-full bg-electric/50" />
                  <span className="relative h-4 w-4 rounded-full border-2 border-electric bg-bg-deep shadow-glow" />
                </span>
                <div className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-electric/10 px-3 py-1 text-xs font-semibold text-sky-tint">
                      <Icon name={item.icon} className="h-3.5 w-3.5" />
                      {item.type}
                    </span>
                    <span className="text-xs font-medium text-faint">{item.period}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold sm:text-2xl">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-electric-bright">{item.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
