"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "./language-provider";
import Reveal from "./reveal";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const inputClass =
  "h-12 w-full rounded-lg border border-border bg-[var(--bg-2)] px-3.5 text-sm text-foreground placeholder:text-[var(--text-faint)] transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";

const Contact = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<EmailData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      emailjs.init("h44gOczMwSZS3CZwA");

      const templateParams = {
        from_name: email.name,
        from_email: email.email,
        subject: email.subject,
        message: email.message,
      };

      await emailjs.send("service_4uqkr5b", "template_gdrw09o", templateParams);

      setIsSent(true);
      setEmail({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    } finally {
      setTimeout(() => setIsSent(false), 3000);
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1160px] px-6 py-[clamp(56px,9vw,120px)]"
    >
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card p-[clamp(32px,7vw,72px)] text-center">
        {/* Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-[-30%] h-[300px] w-[480px] -translate-x-1/2 opacity-50 blur-[50px]"
          style={{
            background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
          }}
        />
        <div className="relative">
          <div className="eyebrow mb-4">06 — {t.contact.eyebrow}</div>
          <h2 className="mb-4 font-display text-[clamp(2.1rem,5.5vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.025em] text-foreground">
            {t.contact.tagline}
          </h2>
          <p className="mx-auto mb-8 max-w-[520px] text-[1.08rem] leading-[1.7] text-muted-foreground">
            {t.contact.subtitle}
          </p>

          {/* Quick CTA buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <Link
              href="mailto:mrengels2648@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-[22px] py-3.5 font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-14px_var(--accent-glow)]"
            >
              <Mail className="h-4 w-4" />
              mrengels2648@gmail.com
            </Link>
            <Link
              href="https://github.com/engelsgermosen"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-[var(--bg-2)] px-[22px] py-3.5 font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/engels-germosen-4a08b5354/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-[var(--bg-2)] px-[22px] py-3.5 font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>

          {/* Divider */}
          <div className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]">
            <span className="h-px flex-1 bg-border" />
            {t.contact.orWrite}
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto grid max-w-2xl gap-5 text-left"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  {t.contact.name}
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  value={email.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  {t.contact.email}
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  value={email.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-foreground"
              >
                {t.contact.subject}
              </label>
              <input
                required
                id="subject"
                name="subject"
                value={email.subject}
                onChange={handleChange}
                className={inputClass}
                placeholder={t.contact.subjectPlaceholder}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                {t.contact.message}
              </label>
              <textarea
                required
                id="message"
                name="message"
                value={email.message}
                onChange={handleChange}
                className="min-h-[150px] w-full rounded-lg border border-border bg-[var(--bg-2)] px-3.5 py-3 text-sm text-foreground placeholder:text-[var(--text-faint)] transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[0_16px_40px_-14px_var(--accent-glow)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {t.contact.send}
            </button>
          </form>
        </div>
      </Reveal>

      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-5 left-5 z-[1000] rounded-lg bg-[#16a34a] px-6 py-4 font-medium text-white shadow-xl"
          >
            {t.contact.success}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
