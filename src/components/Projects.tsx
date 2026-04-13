import { ExternalLink, Star, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projects } from "../data/portfolio";
import { SectionHeader } from "./About";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader label="Projects" title="Things I've Built" />

        {/* Featured */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other */}
        {others.length > 0 && (
          <>
            <div className="mt-20 mb-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Other Noteworthy Projects
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((project) => (
                <SmallCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

        {/* Links overlay */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg glass text-slate-300 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg glass text-slate-300 hover:text-cyan-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-slate-100 mb-2 text-lg group-hover:text-cyan-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed flex-1">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-200 transition-colors"
            >
              <GithubIcon size={12} /> Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-300 transition-colors ml-auto"
            >
              Live Demo <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <article className="glass glass-hover rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-0.5 group">
      <div className="flex items-start justify-between">
        <Star size={15} className="text-cyan-400 mt-0.5 shrink-0" />
        <div className="flex gap-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-200 transition-colors">
              <GithubIcon size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-300 transition-colors">
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
      <h3 className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-slate-600">{tag}</span>
        ))}
      </div>
    </article>
  );
}
