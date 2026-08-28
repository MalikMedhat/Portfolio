import { useLanguage, type Lang } from "../i18n/LanguageContext";

const options: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / Sprache"
      className={`flex items-center rounded-full border border-line bg-surface/60 p-1 backdrop-blur-md ${className ?? ""}`}
    >
      {options.map((option) => {
        const active = lang === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition-colors duration-200 ${
              active
                ? "bg-electric text-white shadow-glow"
                : "text-muted hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
