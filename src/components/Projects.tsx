import React from 'react';
import {
  FolderGit2,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './icons/BrandIcons';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portafolio de Proyectos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Proyectos Seleccionados
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Muestra estructurada de proyectos que demuestran capacidades en arquitectura de software, integración backend y frontend moderno.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="flex flex-col rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-colors duration-300 shadow-xl hover:shadow-cyan-950/30 overflow-hidden group"
            >
              {/* Project Preview Header / Banner with decorative glow */}
              <div className="h-44 bg-gradient-to-br from-slate-900 via-slate-800/60 to-slate-950 p-6 flex flex-col justify-between border-b border-slate-800/80 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/25 transition-all duration-500" />

                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-800/80 text-cyan-400 border border-slate-700">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <div className="z-10">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900 border border-slate-800/80 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions & Links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    <span>Ver Proyecto</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Repositorio</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
