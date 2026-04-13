import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-10 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center text-slate-900 text-xs font-black">
            {personalInfo.name.charAt(0)}
          </div>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            © {year} {personalInfo.name}
            <span className="text-slate-700">·</span>
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-3">
          {[
            { href: personalInfo.github,   Icon: GithubIcon,   label: "GitHub" },
            { href: personalInfo.linkedin, Icon: LinkedinIcon,  label: "LinkedIn" }
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-lg glass glass-hover text-slate-600 hover:text-cyan-400 transition-all duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
