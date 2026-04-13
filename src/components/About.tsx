import { MapPin, Mail, Download, Code2, Briefcase } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const stats = [
  { value: "6", label: "Months Exp.", icon: Briefcase },
  { value: "10+", label: "Projects", icon: Code2 },

];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader label="About Me" title="Who I Am" />

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i} className="text-slate-300 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={14} className="text-cyan-400" />
                {personalInfo.location}
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Mail size={14} className="text-cyan-400" />
                {personalInfo.email} 
              </a>
            </div>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all duration-200"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>

          {/* Right: avatar + stats */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 blur-xl" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden ring-1 ring-white/10">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover bg-slate-900"
                />
              </div>
              {/* Online dot */}
              <span className="absolute top-3 right-3 w-3.5 h-3.5 bg-emerald-400 rounded-full ring-2 ring-[#020917]" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="glass glass-hover rounded-xl p-4 text-center transition-all duration-300 group cursor-default"
                >
                  <Icon size={16} className="text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-2xl font-black accent-text">{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-500/8 border border-cyan-500/20 mb-5">
        <span className="w-1 h-1 rounded-full bg-cyan-400" />
        {label}
      </span>
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-100">{title}</h2>
      <div className="mt-4 mx-auto w-12 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />
    </div>
  );
}
