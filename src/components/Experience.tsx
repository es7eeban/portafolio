import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import { experiencesData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Desarrollo' | 'QA & Soporte'>('All');

  const filteredExperiences =
    filter === 'All'
      ? experiencesData
      : experiencesData.filter((item) =>
          filter === 'Desarrollo'
            ? item.type === 'Desarrollo' || item.type === 'Full Stack'
            : item.type === 'QA & Soporte'
        );

  return (
    <section id="experiencia" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trayectoria Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experiencia en Desarrollo y Calidad
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Combinación estratégica de desarrollo de aplicaciones web de alta demanda y aseguramiento de calidad (QA) en plataformas de alcance nacional.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {(
              [
                { label: 'Todas las experiencias', value: 'All' },
                { label: 'Desarrollo de Software', value: 'Desarrollo' },
                { label: 'QA & Soporte Crítico', value: 'QA & Soporte' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === tab.value
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline / Cards Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-[0_0_10px_rgba(6,182,212,0.6)]" />

              {/* Company & Period Badge (Desktop Left Offset indicator) */}
              <div className="hidden md:block absolute -left-36 top-0 w-28 text-right">
                <span className="text-xs font-semibold text-cyan-400/90 font-mono block">
                  {exp.period}
                </span>
                <span className="text-xs text-slate-500 block truncate">
                  {exp.type}
                </span>
              </div>

              {/* Main Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 transition-all shadow-xl hover:shadow-cyan-950/20">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        {exp.company}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {exp.type}
                      </span>
                      <span className="md:hidden text-xs text-slate-400 font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Specific Highlight Points */}
                <ul className="space-y-3 mb-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                    Tecnologías & Herramientas Clave
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
