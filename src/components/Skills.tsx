import { skills } from "../data/portfolio";
import { SectionHeader } from "./About";
import { Layers, Server, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Layers,
  Backend: Server,
  "DevOps & Tools": Wrench,
};

const categoryColors: Record<string, string> = {
  Frontend:       "from-cyan-400 to-sky-400",
  Backend:        "from-teal-400 to-emerald-400",
  "DevOps & Tools": "from-sky-400 to-indigo-400",
};

const extraTech = [
  "C++",
  "PHP",
  "Laravel",
  "MySQL",
  "Docker",
  "GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader label="Skills" title="What I Work With" />

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] ?? Layers;
            const grad = categoryColors[group.category] ?? "from-cyan-400 to-teal-400";
            return (
              <div
                key={group.category}
                className="glass glass-hover rounded-2xl p-7 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-7">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center text-slate-900 shadow-lg`}>
                    <Icon size={16} />
                  </div>
                  <h3 className="font-bold text-slate-200">{group.category}</h3>
                </div>

                {/* Skill bars */}
                <ul className="space-y-4">
                  {group.items.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${grad} shadow-sm`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Extra tech */}
        <div className="mt-16 glass rounded-2xl p-8">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-500 mb-6">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {extraTech.map((tech) => (
              <span key={tech} className="tag hover:bg-cyan-500/15 hover:text-cyan-200 transition-colors duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
