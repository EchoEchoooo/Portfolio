import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { experience } from "../data/portfolio";
import { SectionHeader } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute left-1/4 top-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader label="Experience" title="Where I've Worked" />

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-5 top-3 bottom-3 w-px">
              <div className="w-full h-full bg-gradient-to-b from-cyan-500/50 via-teal-500/20 to-transparent" />
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={job.id} className="relative pl-14 group">
                  {/* Timeline node */}
                  <div className="absolute left-5 top-6 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 border-[#020917] z-10 transition-transform duration-300 group-hover:scale-125 ${
                        index === 0
                          ? "bg-gradient-to-br from-cyan-400 to-teal-400 shadow-lg shadow-cyan-400/30"
                          : "bg-slate-700 group-hover:bg-cyan-500/50"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <article className="glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/5">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-100">{job.role}</h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <ArrowRight size={12} className="text-cyan-500" />
                          <p className="text-cyan-400 font-semibold text-sm">{job.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-white/3 border border-white/6 px-2.5 py-1 rounded-full">
                          <Calendar size={10} />
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <MapPin size={10} />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
