import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Send, CheckCircle, MessageSquare, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolio";
import { SectionHeader } from "./About";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const socials = [
    { href: personalInfo.github, Icon: GithubIcon, label: "GitHub" },
    { href: personalInfo.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader label="Contact" title="Let's Work Together" />
        <p className="mt-4 text-center text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
          Have a project in mind or just want to say hi? My inbox is always open
          — I'll get back to you within 24 hours.
        </p>

        <div className="mt-20 grid lg:grid-cols-5 gap-10 max-w-4xl mx-auto items-start">
          {/* Left sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact info */}
            <div className="glass rounded-2xl p-6 space-y-5">
              <InfoRow
                icon={Mail}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />
              <InfoRow
                icon={Clock}
                label="Response time"
                value="Within 24 hours"
              />
              <InfoRow
                icon={MessageSquare}
                label="Preferred"
                value="Email or LinkedIn"
              />
            </div>

            {/* Availability note */}
            <div className="rounded-2xl p-5 bg-gradient-to-br from-cyan-500/10 to-teal-500/5 border border-cyan-500/20">
              <p className="text-sm text-slate-300 leading-relaxed">
                Open to{" "}
                <span className="text-cyan-300 font-semibold">
                  full-time roles
                </span>{" "}
                and{" "}
                <span className="text-teal-300 font-semibold">
                  freelance projects
                </span>
                .
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                Find me on
              </p>
              <div className="flex gap-2">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass glass-hover text-slate-400 hover:text-cyan-300 transition-all duration-200 text-xs"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center gap-4 text-center border border-emerald-500/20 min-h-64">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 flex items-center justify-center">
                  <CheckCircle size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">
                  Message sent!
                </h3>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out — I'll be in touch soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-7 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    id="name"
                    label="Your Name"
                    type="text"
                    placeholder="Jane Smith"
                    required
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <Field
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="jane@example.com"
                    required
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/8 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 disabled:opacity-60 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-cyan-500/20"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
function Field({
  id,
  label,
  type,
  placeholder,
  required,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/8 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
        <Icon size={14} className="text-cyan-400" />
      </div>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-sm text-slate-300 font-medium">{value}</p>
      </div>
    </div>
  );
  if (href)
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {inner}
      </a>
    );
  return <div>{inner}</div>;
}
