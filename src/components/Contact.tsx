import { useMemo, useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { saveContactMessage, isSupabaseConfigured } from "../lib/supabase";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", subject: "", message: "" };

const fieldOrder: { key: keyof FormValues; type?: string; textarea?: boolean }[] = [
  { key: "name" },
  { key: "email", type: "email" },
  { key: "subject" },
  { key: "message", textarea: true },
];

export default function Contact() {
  const { t } = useLanguage();
  const formStrings = t.contact.form;

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, formStrings.schema.name),
        email: z.string().trim().email(formStrings.schema.email),
        subject: z.string().trim().min(3, formStrings.schema.subject),
        message: z.string().trim().min(10, formStrings.schema.message),
      }),
    [formStrings.schema],
  );

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);

  function setValue(key: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const flat = result.error.flatten().fieldErrors;
      setErrors({
        name: flat.name?.[0],
        email: flat.email?.[0],
        subject: flat.subject?.[0],
        message: flat.message?.[0],
      });
      toast.error(formStrings.errorInvalid);
      return;
    }

    setErrors({});
    setSending(true);
    try {
      if (isSupabaseConfigured) {
        await saveContactMessage(result.data);
        toast.success(formStrings.success);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 900));
        toast.success(formStrings.successDemo);
      }
      setValues(initialValues);
    } catch {
      toast.error(formStrings.errorGeneral);
    } finally {
      setSending(false);
    }
  }

  const errorClass = "border-rose-400/60 focus:border-rose-400";
  const okClass = "border-line focus:border-electric";
  const inputClass =
    "w-full rounded-xl border bg-bg-deep/60 px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:outline-none";

  return (
    <Section
      id="contact"
      eyebrow={t.sections.contact.eyebrow}
      titlePre={t.sections.contact.titlePre}
      titleAccent={t.sections.contact.titleAccent}
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <Reveal>
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">{t.contact.subheading}</p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {t.contact.socials.map((social, i) => (
              <Reveal key={social.label} delay={0.07 * i}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card group flex items-center gap-4 p-4 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-electric/10 text-electric-bright transition-shadow duration-300 group-hover:shadow-glow">
                    <Icon name={social.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium uppercase tracking-wider text-faint">
                      {social.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-ink">{social.value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-electric-bright" aria-hidden />
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="glass-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {fieldOrder.map((field) => {
                const fieldStrings = formStrings.fields[field.key];
                const fieldError = errors[field.key];
                if (field.textarea) {
                  return (
                    <div key={field.key} className="sm:col-span-2">
                      <label htmlFor={field.key} className="mb-2 block text-sm font-medium text-muted">
                        {fieldStrings.label}
                      </label>
                      <textarea
                        id={field.key}
                        rows={5}
                        placeholder={fieldStrings.placeholder}
                        value={values.message}
                        onChange={(e) => setValue("message", e.target.value)}
                        aria-invalid={Boolean(fieldError)}
                        className={`${inputClass} resize-none ${fieldError ? errorClass : okClass}`}
                      />
                      {fieldError ? <p className="mt-1.5 text-xs text-rose-300">{fieldError}</p> : null}
                    </div>
                  );
                }
                return (
                  <div key={field.key}>
                    <label htmlFor={field.key} className="mb-2 block text-sm font-medium text-muted">
                      {fieldStrings.label}
                    </label>
                    <input
                      id={field.key}
                      type={field.type ?? "text"}
                      placeholder={fieldStrings.placeholder}
                      value={values[field.key]}
                      onChange={(e) => setValue(field.key, e.target.value)}
                      aria-invalid={Boolean(fieldError)}
                      className={`${inputClass} ${fieldError ? errorClass : okClass}`}
                    />
                    {fieldError ? <p className="mt-1.5 text-xs text-rose-300">{fieldError}</p> : null}
                  </div>
                );
              })}
            </div>

            <button type="submit" disabled={sending} className="btn-primary mt-6 w-full sm:w-auto">
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  {formStrings.sending}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden />
                  {formStrings.submit}
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
