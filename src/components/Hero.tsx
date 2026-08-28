import { motion, useReducedMotion, type Variants } from "motion/react";
import { MapPin, ArrowRight, Download, Send } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const { profile, ui } = t;

  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.62_0.19_263/0.32),transparent_65%)] blur-3xl"
      />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-electric/10 px-4 py-1.5 text-sm text-sky-tint">
              <MapPin className="h-4 w-4 text-electric-bright" aria-hidden />
              {profile.location}
              <span className="hidden h-1 w-1 rounded-full bg-electric-bright/60 sm:inline-block" />
              <span className="hidden sm:inline">{ui.relocationBadge}</span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
            <span className="gradient-text">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-heading text-xl font-semibold text-sky-tint sm:text-2xl lg:text-3xl"
          >
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              {ui.viewProjects}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href={profile.resume.file} download className="btn-ghost">
              <Download className="h-4 w-4" aria-hidden />
              {ui.downloadResume}
            </a>
            <a href="#contact" className="btn-ghost">
              <Send className="h-4 w-4" aria-hidden />
              {ui.contactMe}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-3 text-sm text-faint">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,oklch(0.62_0.19_263/0.55),oklch(0.79_0.13_214/0.18),transparent_70%)] blur-2xl"
            />
            <div
              aria-hidden
              className="absolute inset-0 animate-pulse-ring rounded-[2rem] border border-electric/40"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface-2 shadow-glow-lg">
              <picture>
                <source type="image/avif" srcSet="/images/portrait-480.avif 480w, /images/portrait-640.avif 640w, /images/portrait-960.avif 960w" sizes="(min-width:1024px) 480px, 320px" />
                <source type="image/webp" srcSet="/images/portrait-480.webp 480w, /images/portrait-640.webp 640w, /images/portrait-960.webp 960w" sizes="(min-width:1024px) 480px, 320px" />
                <img
                  src="/images/portrait-640.jpg"
                  alt={`Portrait of ${t.profile.name}`}
                  width={640}
                  height={800}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </picture>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-bg-deep/50 via-transparent to-transparent"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
