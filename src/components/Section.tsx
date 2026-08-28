import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  titlePre: string;
  titleAccent?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, titlePre, titleAccent, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 sm:py-24 lg:py-28 ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 lg:mb-16">
          <div className="flex flex-col items-start gap-4">
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {titlePre}
              {titleAccent ? (
                <>
                  {" "}
                  <span className="gradient-text">{titleAccent}</span>
                </>
              ) : null}
            </h2>
            {subtitle ? <p className="max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p> : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
