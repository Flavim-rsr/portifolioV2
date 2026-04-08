"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = (): boolean => {
    const newErrors: FieldErrors = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.subject.trim()) newErrors.subject = "Required";
    if (!form.message.trim() || form.message.length < 10) newErrors.message = "At least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const contactLinks = [
    { icon: Mail, label: t.contact.info.emailLabel, value: "flaviorsr.22@gmail.com", href: "mailto:flaviorsr.22@gmail.com", external: false },
    { icon: SiGithub, label: t.contact.info.githubLabel, value: "github.com/Flavim-rsr", href: "https://github.com/Flavim-rsr", external: true },
    { icon: FaLinkedinIn, label: t.contact.info.linkedinLabel, value: "linkedin.com/in/flavio-rodrigo", href: "https://www.linkedin.com/in/flavio-rodrigo-462854270/", external: true },
  ];

  const inputBase =
    "w-full bg-muted/30 border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200";

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-[2px] bg-accent-teal" />
          <span className="text-accent-teal text-sm font-semibold tracking-wider uppercase">
            {t.contact.sectionLabel}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Title + Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight whitespace-pre-line"
            >
              {t.contact.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-10 max-w-md"
            >
              {t.contact.description}
            </motion.p>

            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 mb-10"
            >
              {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-background hover:border-accent-teal/30 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-accent-teal/10 text-accent-teal group-hover:bg-accent-teal/15 transition-colors duration-200">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{label}</div>
                    <div className="text-sm font-medium text-foreground">{value}</div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Available for */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 rounded-2xl border border-accent-teal/20 bg-accent-teal/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                <span className="text-sm font-semibold text-accent-teal">
                  {t.contact.info.availableTitle}
                </span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {t.contact.info.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent-teal/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 rounded-2xl border border-accent-teal/20 bg-accent-teal/5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-accent-teal mb-4 mx-auto" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">Mensagem enviada!</h3>
                <p className="text-muted-foreground text-sm">
                  Obrigado pelo contato. Retornarei em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange("name")}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder={t.contact.form.namePlaceholder}
                      className={cn(
                        inputBase,
                        focused === "name" || form.name
                          ? "border-accent-teal/50 bg-accent-teal/3"
                          : "border-border/50",
                        errors.name && "border-red-400/60"
                      )}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder={t.contact.form.emailPlaceholder}
                      className={cn(
                        inputBase,
                        focused === "email" || form.email
                          ? "border-accent-teal/50 bg-accent-teal/3"
                          : "border-border/50",
                        errors.email && "border-red-400/60"
                      )}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={handleChange("subject")}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    placeholder={t.contact.form.subjectPlaceholder}
                    className={cn(
                      inputBase,
                      focused === "subject" || form.subject
                        ? "border-accent-teal/50 bg-accent-teal/3"
                        : "border-border/50",
                      errors.subject && "border-red-400/60"
                    )}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={handleChange("message")}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={5}
                    className={cn(
                      inputBase,
                      "resize-none",
                      focused === "message" || form.message
                        ? "border-accent-teal/50 bg-accent-teal/3"
                        : "border-border/50",
                      errors.message && "border-red-400/60"
                    )}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-accent-teal text-white font-semibold text-sm hover:bg-accent-teal/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-accent-teal/20 hover:shadow-accent-teal/30"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      {t.contact.form.send}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
