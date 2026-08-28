import { Github, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import ProjectCover from "./ProjectCover";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section
      id="projects"
      eyebrow={t.sections.projects.eyebrow}
      titlePre={t.sections.projects.titlePre}
      titleAccent={t.sections.projects.titleAccent}
      subtitle={t.sections.projects.subtitle}
    >
      <div className="space-y-8">
        {t.projects.map((project, i) => (
          <Reveal key={project.id} delay={0.05 * i}>
            <article className="glass-card group overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <div className="overflow-hidden border-b border-line lg:border-b-0 lg:border-r">
                  <ProjectCover project={project} />
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{project.problem}</p>

                  <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-bright" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost !px-5 !py-2 text-sm"
                    >
                      <Github className="h-4 w-4" aria-hidden />
                      {t.ui.viewOnGithub}
                    </a>
                    <span className="hidden text-xs text-faint sm:block">
                      {project.tech.slice(0, 3).join(" · ")}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
