import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary glow */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-sky-900/5 blur-[100px]" />

        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Horizontal accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left column */}
        <div>
          {/* Status badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-cyan-300 text-xs font-medium tracking-wide mb-8">
            <Sparkles size={12} className="text-cyan-400" />
            Available for new opportunities
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
          </div>

          {/* Name & title */}
          <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-5">
            <span className="text-slate-100">Hi, I'm</span>
            <br />
            <span className="accent-text">{personalInfo.name}</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-xl sm:text-2xl font-semibold text-slate-400 mb-5 flex items-center gap-2">
            <span className="w-8 h-px bg-cyan-500/60 inline-block" />
            {personalInfo.title}
          </p>

          <p className="animate-fade-up-delay-3 text-base text-slate-400 leading-relaxed mb-10 max-w-lg">
            {personalInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-4 flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
              View My Work
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass glass-hover active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
              <Mail size={15} />
              Get In Touch
            </a>
          </div>

          {/* Socials */}
          <div className="animate-fade-up-delay-4 flex items-center gap-3">
            <span className="text-xs text-slate-600 tracking-widest uppercase">Find me on</span>
            <div className="flex gap-2">
              {[
                { href: personalInfo.github, Icon: GithubIcon, label: "GitHub" },
                { href: personalInfo.linkedin, Icon: LinkedinIcon, label: "LinkedIn" }
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg glass glass-hover text-slate-400 hover:text-cyan-300 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — avatar card */}
        <div className="hidden lg:flex justify-center items-center animate-fade-in">
          <div className="relative">
            {/* Spinning ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                background: "conic-gradient(from 0deg, transparent 60%, rgba(34,211,238,0.4) 80%, rgba(45,212,191,0.4) 90%, transparent 100%)",
                padding: "2px",
                borderRadius: "9999px",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#020917]" />
            </div>

            {/* Glow behind avatar */}
            <div className="absolute inset-4 rounded-full bg-cyan-500/15 blur-2xl" />

            {/* Avatar image */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden ring-1 ring-white/10 glass animate-float">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover bg-slate-900"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -left-12 top-1/4 px-4 py-2 rounded-xl glass border border-white/10 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
              <p className="text-xs text-slate-400">Experience</p>
              <p className="text-lg font-bold text-cyan-300">6 Months</p>
            </div>
            <div className="absolute -right-12 bottom-1/4 px-4 py-2 rounded-xl glass border border-white/10 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
              <p className="text-xs text-slate-400">Projects</p>
              <p className="text-lg font-bold text-teal-300">10+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors duration-200 animate-bounce z-10"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  );
}
