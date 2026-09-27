const NavTitles = [
  { title: 'Perfil', link: '#perfil' },
  { title: 'Conocimientos', link: '#conocimientos' },
  { title: 'Educación', link: '#educacion' },
  { title: 'Experiencia', link: '#experiencia' },
  { title: 'Portafolio', link: '#portafolio' },
];

const Skills = [
  { title: 'React / Next.js', percentage: 85 },
  { title: 'TypeScript', percentage: 80 },
  { title: 'Java / Spring Boot', percentage: 78 },
  { title: 'Python', percentage: 82 },
  { title: 'PostgreSQL', percentage: 80 },
  { title: 'Power BI', percentage: 75 },
];

const KnowledgeList = [
  { title: 'Desarrollo Web', text: 'Interfaces modernas con React, Next.js y TypeScript.', icon: 'solar:code-bold-duotone' },
  { title: 'Backend y APIs', text: 'Servicios REST con Java y Spring Boot.', icon: 'solar:server-square-bold-duotone' },
  { title: 'Bases de Datos', text: 'Modelado relacional con PostgreSQL y Supabase.', icon: 'solar:database-bold-duotone' },
  { title: 'Analítica de Datos', text: 'Validación y visualización con Python y Power BI.', icon: 'solar:chart-2-bold-duotone' },
];

const Projects = [
  { title: 'Plataforma Web Comercial', text: 'Plataforma para fortalecer la presencia digital de Soluciones Informáticas Urabá.', description: 'Desarrollé funciones para publicar productos, servicios y novedades, centralizando la información comercial.', technologies: ['React', 'Next.js', 'TypeScript', 'Supabase'] },
  { title: 'Doméstica API', text: 'API REST para gestionar usuarios, hogares y tareas domésticas.', description: 'Implementé la lógica de registro, consulta y administración con una arquitectura backend organizada.', technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'] },
  { title: 'Darwin Core', text: 'Estandarización y validación de colecciones de la Universidad de Antioquia.', description: 'Colaboro en la transformación y validación de registros bajo el estándar Darwin Core.', technologies: ['Python', 'Datos', 'Kanban', 'Darwin Core'] },
];

export { NavTitles, Skills, KnowledgeList, Projects };
