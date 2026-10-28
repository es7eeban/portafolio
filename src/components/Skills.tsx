import React, { useState } from 'react';
import {
  Server,
  Layout,
  Database,
  Wrench,
  CheckCircle2,
  Cpu,
  Zap,
} from 'lucide-react';
import { skillCategoriesData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const coreFocusSkills = [
    { name: 'Java', desc: 'Backend empresarial & transaccional', icon: '☕' },
    { name: 'Spring Boot', desc: 'Microservicios & REST APIs', icon: '🍃' },
    { name: 'Angular', desc: 'Interfaces SPA reactivas & modulares', icon: '🅰️' },
    { name: 'PostgreSQL', desc: 'Bases de datos relacionales & rendimiento', icon: '🐘' },
    { name: 'Docker', desc: 'Contenedores & entornos reproducibles', icon: '🐳' },
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategoriesData
      : skillCategoriesData.filter((c) => c.title.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="habilidades" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Stack Tecnológico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Competencias y Habilidades Técnicas
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dominio de tecnologías empresariales de extremo a extremo, desde el diseño de esquemas y optimización en bases de datos hasta la experiencia interactiva en el frontend.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Todas las Áreas
            </button>
            {skillCategoriesData.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.title
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Core Stack Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-cyan-500/30 shadow-2xl shadow-cyan-950/20">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Stack Principal de Especialización
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreFocusSkills.map((item) => (
              <div
                key={item.name}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all group"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </div>
                <div className="text-xs text-slate-400 mt-1 leading-snug">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {category.skills.length} competencias listadas
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-all ${
                      skill.isPrimary
                        ? 'bg-slate-800 text-cyan-300 border-cyan-500/40 shadow-sm'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {skill.isPrimary && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    )}
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] text-slate-500 font-mono">
                        ({skill.level})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
