import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Section
      id="skills"
      eyebrow={t.sections.skills.eyebrow}
      titlePre={t.sections.skills.titlePre}
      titleAccent={t.sections.skills.titleAccent}
      subtitle={t.sections.skills.subtitle}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.map((group, i) => (
          <Reveal key={group.title} delay={0.07 * (i % 3)}>
            <div className="glass-card group h-full p-6 transition-transform duration-300 hover:-translate-y-1.5">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong bg-electric/10 text-electric-bright transition-shadow duration-300 group-hover:shadow-glow">
                  <Icon name={group.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
