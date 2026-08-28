import { FileText, Download } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export default function Resume() {
  const { t } = useLanguage();
  const { profile } = t;

  return (
    <Section
      id="resume"
      eyebrow={t.sections.resume.eyebrow}
      titlePre={t.sections.resume.titlePre}
      titleAccent={t.sections.resume.titleAccent}
    >
      <Reveal>
        <div className="glass-card relative mx-auto flex max-w-2xl flex-col items-center gap-6 overflow-hidden p-8 text-center sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.62_0.19_263/0.2),transparent_65%)]"
          />
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line-strong bg-electric/10 text-electric-bright shadow-glow">
            <FileText className="h-8 w-8" aria-hidden />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold sm:text-3xl">{profile.name}</h3>
            <p className="mt-1 text-sm text-faint">{t.ui.pdfTag}</p>
          </div>
          <a
            href={profile.resume.file}
            download="Malik_Medhat_CV.pdf"
            className="btn-primary w-full sm:w-auto"
          >
            <Download className="h-4 w-4" aria-hidden />
            {profile.resume.label}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
