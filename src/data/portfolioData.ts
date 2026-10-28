import type { ProfileData, ExperienceItem, SkillCategory, ProjectItem, EducationItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Esteban Andrés Rojas Rojas',
  title: 'Ingeniero Civil en Computación',
  subtitle: 'Full-Stack Developer & Backend Specialist',
  location: 'Santiago, Chile',
  phone: '+(569) 3244 5611',
  phoneRaw: '56932445611',
  email: 'earojasr96@gmail.com',
  linkedin: 'linkedin.com/in/earojasr',
  linkedinUrl: 'https://linkedin.com/in/earojasr',
  githubUrl: 'https://github.com/earojasr',
  summary:
    'Ingeniero Civil en Computación con experiencia en desarrollo de software empresarial y soluciones Full Stack. Especializado en backend robusto con Java y arquitectura de datos con Oracle PL/SQL, además de desarrollo frontend en Angular, React y TypeScript. Con sólida base en aseguramiento de calidad técnica (QA), diagnóstico de incidencias complejas y optimización de rendimiento. Enfocado en construir sistemas escalables, mantenibles y alineados a las necesidades críticas del negocio.',
  stats: [
    { label: 'Años de Experiencia', value: '+3' },
    { label: 'Proyectos Críticos', value: 'Nivel Nacional' },
    { label: 'Enfoque', value: 'Full Stack & QA' },
    { label: 'Disponibilidad', value: 'Inmediata' },
  ],
};

export const experiencesData: ExperienceItem[] = [
  {
    id: 'decalink',
    role: 'Ingeniero Desarrollo de Software',
    company: 'DECALINK',
    location: 'Santiago, Chile',
    period: '12/2024 – 07/2026',
    type: 'Desarrollo',
    highlights: [
      'Diseño e implementación de lógica de negocio en backend con Java para sistemas empresariales de alta demanda, asegurando transaccionalidad e integración continua con bases de datos Oracle.',
      'Desarrollo y optimización de procedimientos almacenados (PL/SQL), paquetes y funciones complejas, mejorando tiempos de respuesta y eficiencia en el procesamiento masivo de datos.',
      'Liderazgo en diagnóstico y resolución de incidencias críticas (debugging en código y queries SQL), aplicando refactorizaciones que aumentaron la estabilidad y mantenibilidad de la plataforma.',
      'Construcción de módulos frontend interactivos con JSF y PrimeFaces, garantizando una navegación fluida, consistencia visual y adherencia a requerimientos funcionales.',
    ],
    technologies: ['Java', 'Oracle', 'PL/SQL', 'JSF', 'PrimeFaces', 'REST APIs', 'Microservicios', 'Git'],
  },
  {
    id: 'ine',
    role: 'Analista QA',
    company: 'INSTITUTO NACIONAL DE ESTADÍSTICAS (INE)',
    location: 'Santiago, Chile',
    period: '08/2023 – 11/2024',
    type: 'QA & Soporte',
    highlights: [
      'Validación técnica y funcional de la plataforma de recolección para el primer Censo Digital de Chile, proyecto de impacto nacional con manejo de millones de registros ciudadanos.',
      'Diseño y ejecución de planes de prueba integrales (funcionales, de regresión y de integración) basados en casos de uso críticos para asegurar la robustez de los flujos de captura.',
      'QA técnico avanzado: diagnóstico de errores en backend mediante análisis de código en C# (.NET) y validación de consistencia e integridad de datos en SQL Server.',
      'Gestión de soporte nivel técnico y capacitación a más de cientos de usuarios operativos en terreno, garantizando continuidad operativa durante el levantamiento censal.',
    ],
    technologies: ['QA Técnico', 'C# (.NET)', 'SQL Server', 'Pruebas Integrales', 'Regresión', 'Soporte N2/N3', 'Jira'],
  },
  {
    id: 'forcast',
    role: 'Desarrollador FrontEnd / Full Stack',
    company: 'FORCAST',
    location: 'Santiago, Chile',
    period: '05/2022 – 10/2022',
    type: 'Full Stack',
    highlights: [
      'Desarrollo de interfaces modulares y reactivas con Angular para una plataforma orientada a Blockchain, maquetando con alta fidelidad a partir de prototipos en Figma.',
      'Evolución a rol Full Stack mediante el diseño y consumo de APIs RESTful construidas con Node.js y Express, comunicadas con MongoDB.',
      'Uso de Docker para gestionar y ejecutar entornos de desarrollo contenerizados, facilitando la configuración del entorno local y manteniendo la consistencia durante el desarrollo de aplicaciones.',
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Blockchain', 'Figma'],
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: 'Backend & Arquitectura',
    iconName: 'Server',
    skills: [
      { name: 'Java', level: 'Avanzado', isPrimary: true },
      { name: 'Spring Boot', level: 'Avanzado', isPrimary: true },
      { name: 'Node.js & Express', level: 'Intermedio-Avanzado' },
      { name: 'C# (.NET)', level: 'Intermedio' },
      { name: 'REST APIs & Microservicios', level: 'Avanzado', isPrimary: true },
      { name: 'Java EE / JSF', level: 'Avanzado' },
    ],
  },
  {
    title: 'Frontend & UI',
    iconName: 'Layout',
    skills: [
      { name: 'React', level: 'Avanzado', isPrimary: true },
      { name: 'TypeScript', level: 'Avanzado', isPrimary: true },
      { name: 'Angular', level: 'Avanzado', isPrimary: true },
      { name: 'JavaScript (ES6+)', level: 'Avanzado' },
      { name: 'HTML5 & CSS3', level: 'Avanzado' },
      { name: 'Tailwind CSS', level: 'Avanzado' },
      { name: 'PrimeFaces', level: 'Intermedio-Avanzado' },
    ],
  },
  {
    title: 'Bases de Datos & SQL',
    iconName: 'Database',
    skills: [
      { name: 'Oracle (PL/SQL)', level: 'Avanzado', isPrimary: true },
      { name: 'PostgreSQL', level: 'Avanzado', isPrimary: true },
      { name: 'SQL Server', level: 'Avanzado' },
      { name: 'MongoDB', level: 'Intermedio' },
      { name: 'Procedimientos Almacenados & Optimización', level: 'Avanzado', isPrimary: true },
    ],
  },
  {
    title: 'DevOps, QA & Herramientas',
    iconName: 'Wrench',
    skills: [
      { name: 'Docker', level: 'Intermedio-Avanzado', isPrimary: true },
      { name: 'Git & GitHub', level: 'Avanzado', isPrimary: true },
      { name: 'Aseguramiento de Calidad (QA)', level: 'Avanzado', isPrimary: true },
      { name: 'Pruebas Integrales & Regresión', level: 'Avanzado' },
      { name: 'Jira & Metodologías Ágiles', level: 'Avanzado' },
      { name: 'Figma', level: 'Intermedio' },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proyecto-1',
    title: 'Proyecto 1',
    subtitle: 'Solución Empresarial Full Stack',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://example.com/demo-proyecto-1',
    githubUrl: 'https://github.com/earojasr/proyecto-1',
    category: 'Full Stack',
  },
  {
    id: 'proyecto-2',
    title: 'Proyecto 2',
    subtitle: 'Plataforma de Datos y Microservicios',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    liveUrl: 'https://example.com/demo-proyecto-2',
    githubUrl: 'https://github.com/earojasr/proyecto-2',
    category: 'Backend & Cloud',
  },
  {
    id: 'proyecto-3',
    title: 'Proyecto 3',
    subtitle: 'Sistema Transaccional & Monitoreo QA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.',
    technologies: ['TypeScript', 'Oracle PL/SQL', 'REST APIs', 'Tailwind CSS'],
    liveUrl: 'https://example.com/demo-proyecto-3',
    githubUrl: 'https://github.com/earojasr/proyecto-3',
    category: 'Arquitectura & Datos',
  },
];

export const educationData: EducationItem = {
  institution: 'Universidad Tecnológica Metropolitana (UTEM)',
  degree: 'Ingeniería Civil en Computación',
  field: 'Mención Informática',
  year: '2023',
  status: 'Titulado',
};
