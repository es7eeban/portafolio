import React from 'react';
import {
  MapPin,
  ArrowDown,
  Code2,
} from 'lucide-react';
import { LinkedinIcon } from './icons/BrandIcons';
import { profileData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-emerald-400">Disponible para nuevos desafíos</span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {profileData.location}
            </span>
          </div>

          {/* Name & Title */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              {profileData.name}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              {profileData.title} & Full-Stack Developer
            </p>
          </div>

          {/* Key Specialization Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl">
            {['Java', 'Spring Boot', 'Angular', 'React', 'PostgreSQL', 'Docker', 'Oracle PL/SQL', 'QA Avanzado'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs sm:text-sm font-medium rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Value Proposition / Summary */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Especializado en <strong className="text-white font-semibold">backend empresarial con Java</strong> y arquitectura de datos con <strong className="text-white font-semibold">Oracle & PostgreSQL</strong>, junto al desarrollo frontend reactivo con <strong className="text-white font-semibold">React y Angular</strong>. Con amplia solidez en <strong className="text-white font-semibold">QA Técnico</strong> y optimización en plataformas de alto tráfico a nivel nacional.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="#experiencia"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 transition-all text-sm sm:text-base flex items-center gap-2"
            >
              <span>Ver Experiencia</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#proyectos"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold transition-all text-sm sm:text-base flex items-center gap-2"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Ver Proyectos</span>
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-400 transition-all text-sm sm:text-base flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 w-full max-w-4xl border-t border-slate-800/80">
            {profileData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
