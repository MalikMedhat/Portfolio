import type { Project } from "../data/portfolio";
import { Icon } from "./Icon";

export default function ProjectCover({ project }: { project: Project }) {
  const { accent, tint, glyph } = project.cover;
  return (
    <div className="relative flex h-full min-h-56 flex-col overflow-hidden bg-bg-raised">
      <div className={`absolute inset-0 bg-gradient-to-br ${tint}`} />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="absolute -right-10 -top-12 h-44 w-44 rounded-full blur-3xl"
        style={{ background: `color-mix(in oklch, ${accent} 45%, transparent)` }}
      />

      <div className="relative flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 hidden flex-1 rounded-md bg-bg-deep/50 px-3 py-1 text-[10px] text-faint sm:block">
          {project.title.toLowerCase().replace(/\s+/g, "-")}.app
        </span>
      </div>

      <div className="relative flex flex-1 items-center justify-center py-8">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-bg-deep/60 backdrop-blur-md"
          style={{ borderColor: `color-mix(in oklch, ${accent} 40%, transparent)` }}
        >
          <Icon name={glyph} className="h-8 w-8" color={accent} />
        </div>
        <div
          aria-hidden
          className="absolute h-28 w-28 rounded-full blur-2xl"
          style={{ background: `color-mix(in oklch, ${accent} 35%, transparent)` }}
        />
      </div>

      <div className="relative px-5 pb-5">
        <p className="font-heading text-sm font-semibold" style={{ color: accent }}>
          {project.tagline}
        </p>
      </div>
    </div>
  );
}
