import React, { useRef } from 'react';
import {
  MapPin,
  ArrowDown,
  Code2,
  Sparkles,
} from 'lucide-react';
import type { Variants } from 'framer-motion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LinkedinIcon } from './icons/BrandIcons';
import { profileData } from '../data/portfolioData';
import { TypewriterRole } from './ui/TypewriterRole';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transform layers
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacityContent = useTransform(scrollYProgress, [0, 0.85], [1, 0.1]);
  const scaleContent = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const yGlow1 = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const yGlow2 = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);

  const roles = [
    'Ingeniero Civil en Computación',
    'Full-Stack Developer (React & TypeScript)',
    'Backend Specialist (Java & Spring Boot)',
    'Arquitectura de Datos (Oracle PL/SQL & PostgreSQL)',
    'Analista QA Técnico & Pruebas Integrales',
  ];

  const nameWords = ['Esteban', 'Andrés', 'Rojas', 'Rojas'];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Background glow effects with parallax movement */}
      <motion.div
        style={{ y: yGlow1 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ y: yGlow2 }}
        className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating ambient subtle particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-cyan-400 blur-[1px]"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-indigo-400 blur-[1px]"
        />
      </div>

      <motion.div
        style={{ y: yContent, opacity: opacityContent, scale: scaleContent }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8"
        >
          
          {/* Status Badge with pulse animation */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-inner hover:border-cyan-500/40 transition-colors"
          >
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
          </motion.div>

          {/* Name & Animated Dynamic Title */}
          <div className="space-y-4 max-w-4xl">
            {/* Animated Name with Word Stagger and Shimmer */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white flex flex-wrap justify-center gap-x-3 sm:gap-x-4"
            >
              {nameWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block relative transition-transform duration-300 hover:scale-105 hover:text-cyan-200"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Typewriter Dynamic Title */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold flex items-center justify-center min-h-[2.5rem]"
            >
              <TypewriterRole roles={roles} />
            </motion.div>
          </div>

          {/* Key Specialization Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl"
          >
            {['Java', 'Spring Boot', 'Angular', 'React', 'PostgreSQL', 'Docker', 'Oracle PL/SQL', 'QA Avanzado'].map(
              (tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-3 py-1 text-xs sm:text-sm font-medium rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>

          {/* Value Proposition / Summary */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed"
          >
            Especializado en <strong className="text-white font-semibold">backend empresarial con Java</strong> y arquitectura de datos con <strong className="text-white font-semibold">Oracle & PostgreSQL</strong>, junto al desarrollo frontend reactivo con <strong className="text-white font-semibold">React y Angular</strong>. Con amplia solidez en <strong className="text-white font-semibold">QA Técnico</strong> y optimización en plataformas de alto tráfico a nivel nacional.
          </motion.p>

          {/* Call to Actions with spring physics */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#experiencia"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 transition-all text-sm sm:text-base flex items-center gap-2"
            >
              <span>Ver Experiencia</span>
              <ArrowDown className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#proyectos"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold transition-all text-sm sm:text-base flex items-center gap-2"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Ver Proyectos</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-400 transition-all text-sm sm:text-base flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 w-full max-w-4xl border-t border-slate-800/80"
          >
            {profileData.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3, borderColor: 'rgba(6,182,212,0.3)' }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-center transition-colors"
              >
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-70" />
                  <span>{stat.value}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};
