import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="educacion" className="py-24 bg-slate-950 relative overflow-hidden">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Formación Académica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Educación y Fundamentos de Ingeniería
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sólida preparación en ciencias de la computación, arquitectura de software, modelamiento de datos y optimización de sistemas.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    {educationData.status} ({educationData.year})
                  </span>
                  <span className="text-xs text-slate-400">
                    {educationData.field}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {educationData.degree}
                </h3>
                <p className="text-base text-cyan-300/90 font-medium">
                  {educationData.institution}
                </p>
                <p className="text-sm text-slate-400 pt-2 leading-relaxed max-w-xl">
                  Formación integral en diseño de algoritmos, sistemas distribuidos, aseguramiento de calidad, redes de computadores y gestión ágil de proyectos tecnológicos.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-xs text-slate-500 block">Grado Académico</span>
                <span className="text-sm font-semibold text-slate-200">Licenciado en Cs. de la Ingeniería</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
