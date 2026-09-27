export type ProjectKind = 'produccion' | 'personal' | 'practica' | 'academico';

export type ProjectLinkKind = 'live' | 'code' | 'design';

export interface ProjectLink {
  label: string;
  href: string;
  kind: ProjectLinkKind;
}

export interface ProjectImpact {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  kind: ProjectKind;
  context: string;
  period: string;
  role: string;
  displayUrl: string;
  summary: string;
  stack: string[];
  highlights: string[];
  thumbnail: string;
  links: ProjectLink[];
  impact?: ProjectImpact;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  title: string;
  period: string;
  mode: string;
  summary: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  availability: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  github: string;
  cv: string;
  yearsOfExperience: string;
  completedProjects: string;
  mainStack: string;
}

export interface ProfileLink {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

export interface QuickQuestion {
  question: string;
  answer: string;
}

export type SectionTab = 'Todo' | 'Proyectos' | 'Experiencia' | 'Formacion' | 'Skills' | 'Contacto';

export const SECTION_TABS: SectionTab[] = [
  'Todo',
  'Proyectos',
  'Experiencia',
  'Formacion',
  'Skills',
  'Contacto',
];

export const KIND_LABELS: Record<ProjectKind, string> = {
  produccion: 'Produccion',
  personal: 'Proyecto personal',
  practica: 'Practica',
  academico: 'Academico',
};

export const PROFILE: Profile = {
  name: 'Antonio Morales',
  role: 'Desarrollador Full Stack',
  tagline: 'Angular y Java para producto real, con foco en frontend y diseno web',
  summary:
    'Desarrollador Full Stack con 2+ años de experiencia en empresas de producto digital. Trabajo con Angular y TypeScript en frontend, Java y Spring Boot en backend, y Figma para el diseno de interfaces. He九条gado la evolucion de una web oficial de un complejo turistico en produccion y proyectos full stack con autenticacion, bases de datos y despliegue en la nube.',
  availability: 'Disponible para incorporar',
  location: 'Murcia, España',
  email: 'antoniomora.gimenez@gmail.com',
  phone: '647 66 45 36',
  phoneHref: 'tel:+34647664536',
  linkedin: 'https://www.linkedin.com/in/antoniomoralesgimenez/',
  github: 'https://github.com/Antoniomorales17',
  cv: '/Antonio_Morales_CV_2026.pdf',
  yearsOfExperience: '2+',
  completedProjects: '16',
  mainStack: 'Angular',
};

export const PROJECTS: Project[] = [
  {
    slug: 'cabo-indalo',
    title: 'Cabo Indalo',
    kind: 'produccion',
    context: 'Web oficial de negocio real',
    period: '2025 - Actualidad',
    role: 'Desarrollador Front-End',
    displayUrl: 'www.caboindalo.es',
    summary:
      'Web oficial de Cabo Indalo, un complejo turistico en Almeria, construida con Angular y Tailwind CSS. Esta en produccion y se usa como escaparate comercial del negocio en plataformas de reserva.',
    stack: ['JavaScript', 'Angular', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    highlights: [
      'Desarrollo y maquetacion de la web con Angular, TypeScript y Tailwind CSS sobre una interfaz responsive.',
      'Gestion de datos de contenido con Firebase y busqueda con Elasticsearch.',
      'Mantenimiento evolutivo del proyecto: rendimiento, SEO y nuevas secciones.',
      'Integracion y mantenimiento de contenidos en WordPress junto al equipo.',
    ],
    thumbnail: '/projects/cabo-indalo.jpg',
    links: [
      { label: 'Ver web', href: 'https://www.caboindalo.es/es', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/Antoniomorales17/cabo-indalo', kind: 'code' },
    ],
    featured: true,
  },
  {
    slug: 'almeriafoodmap',
    title: 'AlmeriaFoodMap',
    kind: 'personal',
    context: 'Proyecto propio desplegado',
    period: '2025',
    role: 'Desarrollador Full Stack',
    displayUrl: 'almeriafoodmap.onrender.com',
    summary:
      'Aplicacion web para encontrar restaurantes en Almeria con filtros por categoria, rango de precios y ubicacion en el mapa. Desarrollada de principio a fin, del backend al despliegue.',
    stack: [
      'Python',
      'Django',
      'Django REST Framework',
      'SQLite',
      'Google Maps API',
      'Tailwind CSS',
    ],
    highlights: [
      'API REST con Django y Django REST Framework para catalogo y filtros.',
      'Integracion con la API de Google Maps para localizar y filtrar locales.',
      'Persistencia de datos con SQLite y despliegue en Render.',
      'Interfaz responsive maquetada con Tailwind CSS.',
    ],
    thumbnail: '/projects/almeriafoodmap.jpg',
    links: [
      { label: 'Ver app', href: 'https://almeriafoodmap.onrender.com', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/Antoniomorales17/AlmeriaFoodMap', kind: 'code' },
    ],
    featured: true,
  },
  {
    slug: 'santander-app',
    title: 'Santander App FullStack',
    kind: 'practica',
    context: 'Practica realizada en Softteck',
    period: 'Enero 2025 - Febrero 2025',
    role: 'Desarrollador Full Stack',
    displayUrl: 'santander-inky.vercel.app',
    summary:
      'Aplicacion full stack inspirada en la banca online: backend con Spring Boot y autenticacion JWT, y frontend en Angular con material y Tailwind.',
    stack: [
      'Angular',
      'TypeScript',
      'Angular Material',
    ],
    highlights: [
      'Frontend con Angular, TypeScript, Angular Material y Tailwind CSS.',
      'Despliegue del frontend en Vercel.',
    ],
    thumbnail: '/projects/santander-app.jpg',
    links: [
      { label: 'Ver app', href: 'https://santander-inky.vercel.app/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/Antoniomorales17/santander', kind: 'code' },
    ],
    featured: true,
  },
  {
    slug: 'webmentor',
    title: 'WebMentor',
    kind: 'academico',
    context: 'Prototipo de producto en Figma',
    period: 'Marzo 2024 - Mayo 2024',
    role: 'Diseno UX/UI',
    displayUrl: 'Figma',
    summary:
      'Prototipo de formacion digital para personas mayores. El foco del proyecto fue la investigacion UX y el diseño de una interfaz simple para un publico que no es nativo digital.',
    stack: ['Figma', 'UX Research', 'Prototipado', 'Diseño de interfaz', 'UX'],
    highlights: [
      'Entregables de alta y baja fidelidad obtenidos en Figma.',
      'Prototipo navegable y arquitectura de informacion del producto.',
      'Investigacion UX orientada a reducir friccion para usuarios mayores.',
    ],
    thumbnail: '/projects/webmentor.jpg',
    links: [
      {
        label: 'Ver en Figma',
        href: 'https://www.figma.com/design/4BylQgWeCxRfaj84zN1uD1/WebMentor-hi-fi?node-id=1-69&t=6KpiaYaSRuhzHyCO-0',
        kind: 'design',
      },
    ],
    featured: true,
  },
  {
    slug: 'kadabra',
    title: 'Kdabra',
    kind: 'practica',
    context: 'Practica realizada en Softteck',
    period: 'Noviembre 2024 - Actualidad',
    role: 'Desarrollador Front-End',
    displayUrl: 'kadabra.netlify.app',
    summary:
      'SPA en Angular 19 que simula una tienda basica, con foco en maquetacion, estructura y despliegue.',
    stack: ['Angular 19', 'TypeScript', 'Tailwind CSS', 'Netlify'],
    highlights: [
      'Estructura de la SPA en Angular 19 y Tailwind CSS.',
      'Despliegue y configuracion en Netlify.',
      'Proyecto orientado a maquetacion y organizacion del codigo.',
    ],
    thumbnail: '/projects/kadabra.jpg',
    links: [
      { label: 'Ver app', href: 'https://kadabra.netlify.app/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/Antoniomorales17/kadabra', kind: 'code' },
    ],
  },
  {
    slug: 'jobcompany',
    title: 'JobCompany',
    kind: 'practica',
    context: 'Prueba tecnica de backend',
    period: '2024',
    role: 'Desarrollador Back-End Java',
    displayUrl: 'github.com/Antoniomorales17',
    summary:
      'Aplicacion Java para administrar la informacion de empleados con Java Persistence API y SQL.',
    stack: ['Java', 'JPA', 'Hibernate', 'SQL'],
    highlights: [
      'Modelo de dominio y persistencia con JPA e Hibernate.',
      'Gestion de empleados con operaciones CRUD sobre SQL.',
    ],
    thumbnail: '/projects/jobcompany.jpg',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Antoniomorales17/MoralesGimenez_pruebatec1',
        kind: 'code',
      },
    ],
  },
  {
    slug: 'tucita',
    title: 'tuCita',
    kind: 'practica',
    context: 'Prueba tecnica de backend',
    period: '2024',
    role: 'Desarrollador Back-End Java',
    displayUrl: 'github.com/Antoniomorales17',
    summary:
      'Aplicacion Java Spring Boot para pedir y gestionar citas con la administracion, incluyendo estado y horario.',
    stack: ['Java', 'Spring Boot', 'SQL'],
    highlights: [
      'API de gestion de citas con Spring Boot.',
      'Estados de cita: en espera y atendido, con registro de hora.',
    ],
    thumbnail: '/projects/tucita.jpg',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Antoniomorales17/MoralesAntonio_pruebatec2',
        kind: 'code',
      },
    ],
  },
  {
    slug: 'agencia-reservas',
    title: 'Agencia y sistema de reservas',
    kind: 'practica',
    context: 'Prueba tecnica de backend',
    period: '2024',
    role: 'Desarrollador Back-End Java',
    displayUrl: 'github.com/Antoniomorales17',
    summary:
      'Simulacion de una agencia con reserva de habitaciones y vuelos, resuelta con arquitectura backend en Java y Spring Boot.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA', 'Hibernate', 'Testing', 'SQL'],
    highlights: [
      'API REST con Spring Boot para reservas de hotel y vuelos.',
      'Persistencia con JPA e Hibernate sobre SQL.',
      'Seguridad con Spring Security y JWT.',
      'Codigo cubierto con pruebas automaticas.',
    ],
    thumbnail: '/projects/agencia-reservas.jpg',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Antoniomorales17/Agencia-Java-Spring',
        kind: 'code',
      },
    ],
  },
  {
    slug: 'little-lemon',
    title: 'Little Lemon',
    kind: 'academico',
    context: 'Proyecto final del bootcamp de Meta',
    period: 'Mayo 2024',
    role: 'Desarrollador Front-End',
    displayUrl: 'little-eight.vercel.app',
    summary:
      'Proyecto final del programa Front-End de Meta: aplicacion de reservas en React con consumo de APIs externas.',
    stack: ['React', 'JavaScript', 'APIs REST'],
    highlights: [
      'Aplicacion de reservas con React y comunicacion con APIs externas.',
      'Proyecto academico con foco en arquitectura de componentes y experiencia de usuario.',
    ],
    thumbnail: '/projects/little-lemon.jpg',
    links: [
      { label: 'Ver app', href: 'https://little-eight.vercel.app/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/Antoniomorales17/LittleLemon', kind: 'code' },
    ],
  },
  {
    slug: 'gourmet-express',
    title: 'Gourmet Express',
    kind: 'academico',
    context: 'Prototipo de producto en Figma',
    period: 'Octubre 2023 - Enero 2024',
    role: 'Diseno UX/UI',
    displayUrl: 'Figma',
    summary:
      'Prototipo de una app de comida de lujo a domicilio, trabajado desde la doble vertiente de UX y modelo de negocio.',
    stack: ['Figma', 'UX', 'Modelo de negocio', 'Diseño de interfaz'],
    highlights: [
      'Informe de cliente y propuesta de valor.',
      'Prototipo de alta fidelidad y mockups finales.',
    ],
    thumbnail: '/projects/gourmet-express.jpg',
    links: [
      {
        label: 'Ver en Figma',
        href: 'https://www.figma.com/design/JLlovkZQgY1iDY0dVrXIu8/Prototipo-de-alta-fidelidad-Gourmet-Express-%F0%9F%8D%A3?node-id=1-828&t=N2YYJJq93XBq8Xor-0',
        kind: 'design',
      },
    ],
  },
  {
    slug: 'philosophy-app',
    title: 'Philosophy-App',
    kind: 'practica',
    context: 'Practica de 4Geeks Academy',
    period: 'Noviembre 2023 - Diciembre 2023',
    role: 'Desarrollador Front-End',
    displayUrl: 'juanmogimenez.vercel.app',
    summary:
      'Aplicacion React para explorar contenido filosofico, con enfoque en responsive design y arquitectura de componentes.',
    stack: ['React', 'JavaScript', 'CSS3'],
    highlights: [
      'Aplicacion React responsive y organizada por componentes.',
      'Consumo de contenido dinamico y maquetacion adaptable a movil.',
    ],
    thumbnail: '/projects/philosophy-app.jpg',
    links: [
      { label: 'Ver app', href: 'https://juanmogimenez.vercel.app/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/Antoniomorales17/Philosophy-App', kind: 'code' },
    ],
  },
  {
    slug: 'findeveloper',
    title: 'finDeveloper',
    kind: 'practica',
    context: 'Practica de 4Geeks Academy',
    period: 'Noviembre 2023',
    role: 'Desarrollador Front-End',
    displayUrl: 'findeveloper.vercel.app',
    summary:
      'Plataforma web en React para facilitar la busqueda y el contacto directo con desarrolladores.',
    stack: ['React', 'JavaScript', 'CSS3'],
    highlights: [
      'Interfaz de busqueda y contacto entre talento tecnico y empresas.',
      'Proyecto orientado a matching entre needy de negocio y perfiles tecnicos.',
    ],
    thumbnail: '/projects/findeveloper.jpg',
    links: [
      { label: 'Ver app', href: 'https://findeveloper.vercel.app/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/Antoniomorales17/finDeveloper', kind: 'code' },
    ],
  },
  {
    slug: 'gif-photo-search',
    title: 'Gif & Photo Search',
    kind: 'practica',
    context: 'Practica de 4Geeks Academy',
    period: 'Septiembre 2023',
    role: 'Desarrollador Front-End',
    displayUrl: 'gifphotosearch.vercel.app',
    summary:
      'Aplicacion web para buscar y descargar GIFs y fotos integrando los catalogos de Giphy y Pixabay.',
    stack: ['React', 'JavaScript', 'CSS3'],
    highlights: [
      'Busqueda por palabra clave sobre dos catalogos externos.',
      'Vista ampliada y descarga del contenido encontrado.',
    ],
    thumbnail: '/projects/gif-photo-search.jpg',
    links: [
      { label: 'Ver app', href: 'https://gifphotosearch.vercel.app/', kind: 'live' },
      {
        label: 'GitHub',
        href: 'https://github.com/Antoniomorales17/Gif-Photo-Search-App',
        kind: 'code',
      },
    ],
  },
  {
    slug: 'nonostore',
    title: 'NonoStore',
    kind: 'practica',
    context: 'Practica de 4Geeks Academy',
    period: 'Septiembre 2023',
    role: 'Desarrollador Front-End',
    displayUrl: 'nonostore.vercel.app',
    summary:
      'Tienda de ropa online en version estatica, con foco en estructura de catalogo y presentacion.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    highlights: [
      'Catalogo de productos con navegacion por categorias.',
      'Proyecto frontend orientado a maquetacion y estructura.',
    ],
    thumbnail: '/projects/nonostore.jpg',
    links: [
      { label: 'Ver app', href: 'https://nonostore.vercel.app/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/Antoniomorales17/NonoStore', kind: 'code' },
    ],
  },
  {
    slug: 'quizgames',
    title: 'QuizGames',
    kind: 'practica',
    context: 'Practica de 4Geeks Academy',
    period: 'Septiembre 2023',
    role: 'Desarrollador Front-End',
    displayUrl: 'quizvideogames.vercel.app',
    summary:
      'Quiz retro de videojuegos en React, con progreso del usuario y gestion de puntuacion.',
    stack: ['React', 'JavaScript', 'CSS3'],
    highlights: [
      'Preguntas retro con progreso persistente en la sesion.',
      'Logica de puntuacion y final de partida.',
    ],
    thumbnail: '/projects/quizgames.jpg',
    links: [
      { label: 'Ver app', href: 'https://quizvideogames.vercel.app/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/Antoniomorales17/QuizGames', kind: 'code' },
    ],
  },
  {
    slug: 'wizz-mail',
    title: 'Wizz-Mail',
    kind: 'practica',
    context: 'Practica de 4Geeks Academy',
    period: 'Julio 2023 - Agosto 2023',
    role: 'Desarrollador Full Stack',
    displayUrl: 'github.com/Antoniomorales17',
    summary:
      'App de gestion de tickets con IA, con respuestas automaticas en tiempo real y flujo de atencion 24/7.',
    stack: ['React', 'Python', 'Flask', 'PostgreSQL', 'OpenAI API'],
    highlights: [
      'Frontend en React y backend en Python con Flask.',
      'Persistencia de tickets y conversaciones con PostgreSQL.',
      'Integracion con la API de OpenAI para respuesta automatizada en vivo.',
    ],
    thumbnail: '/projects/wizz-mail.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/Antoniomorales17/WizzMail', kind: 'code' },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'copyfly',
    company: 'Copyfly',
    role: 'Desarrollador Full Stack',
    period: 'Marzo 2025 - Abril 2026',
    location: 'Almeria, España',
    summary:
      'Desarrollo y mantenimiento de una web de producto en Angular, con gestion de contenidos y optimizacion continua.',
    highlights: [
      'Desarrollo y maquetacion de interfaces responsive con Angular, TypeScript y Tailwind CSS.',
      'Gestion de datos en backend con Firebase y consultas con Elasticsearch.',
      'Mantenimiento evolutivo, optimizacion de rendimiento y nuevas funcionalidades.',
      'Integracion, configuracion y mantenimiento de contenidos en WordPress.',
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Elasticsearch', 'WordPress'],
  },
  {
    id: 'softteck',
    company: 'Softteck',
    role: 'Desarrollador Full Stack',
    period: 'Noviembre 2024 - Marzo 2025',
    location: 'Cordoba, España',
    summary:
      'Participacion en un proyecto para Banco Santander con Angular y Java, incluyendo calidad de codigo y pruebas unitarias.',
    highlights: [
      'Desarrollo sobre un proyecto de un cliente del sector bancario con Angular y Java.',
      'Revision de codigo para mantener estandares de calidad y buenas practicas.',
      'Implementacion de pruebas unitarias con Jasmine y Karma.',
    ],
    stack: ['Angular', 'Java', 'Jasmine', 'Karma'],
  },
  {
    id: 'amvos',
    company: 'Amvos Digital',
    role: 'E-commerce Manager',
    period: '2021',
    location: 'España',
    summary:
      'Analisis de mercados B2C y B2B para detectar oportunidades de crecimiento y mejora del negocio digital.',
    highlights: [
      'Analisis de mercados B2C y B2B identificando oportunidades de crecimiento y mejora.',
    ],
    stack: ['E-commerce', 'Analisis de mercado', 'SEO'],
  },
  {
    id: 'ayto-almeria',
    company: 'Ayuntamiento de Almeria',
    role: 'Tecnico Superior en Investigacion de Mercados',
    period: '2018',
    location: 'Almeria, España',
    summary:
      'Participacion en un estudio del mercado turistico local con analisis de competencia y tendencias.',
    highlights: [
      'Estudio del mercado de turoperadores en la ciudad.',
      'Analisis de competencia y tendencias del mercado turistico local.',
    ],
    stack: ['Investigacion de mercados', 'Analisis de competencia'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'daw',
    school: 'Instituto José Planés',
    title: 'Desarrollo de Aplicaciones Web (DAW) ',
    period: 'Cursando',
    mode: 'Murcia, España',
    summary:
      'Formación profesional oficial en el ciclo de Grado Superior en Desarrollo de Aplicaciones Web (DAW)  .',
  },
  {
    id: 'uoc',
    school: 'Universitat Oberta de Catalunya (UOC)',
    title: 'Grado en Ciencia de Datos',
    period: 'Cursando',
    mode: 'Online, España',
    summary:
      'Formacion universitaria actual orientada al analisis de datos, el modelado y su aplicacion a negocio.',
  },
  {
    id: 'hack-a-boss',
    school: 'HACK A BOSS',
    title: 'Java / Spring Boot',
    period: '2024',
    mode: 'Online, España',
    summary:
      'Especializacion tecnica en desarrollo de aplicaciones Java y arquitectura backend con Spring Boot.',
  },
  {
    id: '4geeks',
    school: '4Geeks Academy',
    title: 'Full Stack Developer',
    period: '2023',
    mode: 'Online, España',
    summary:
      'Programa intensivo full stack con foco en desarrollo web moderna, React, Python y despliegue.',
  },
  {
    id: 'unir',
    school: 'Universidad de La Rioja (UNIR)',
    title: 'Master en E-Commerce',
    period: '2022',
    mode: 'Online, España',
    summary:
      'Formacion avanzada en comercio electronico, estrategia digital y gestion de canales online.',
  },
  {
    id: 'ual',
    school: 'Universidad de Almeria',
    title: 'Grado en Marketing e Investigacion de Mercados',
    period: '2015',
    mode: 'Almeria, España',
    summary:
      'Base academica en marketing, investigacion de mercados y analisis del comportamiento del consumidor.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Frontend',
    items: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Angular Material',
    ],
  },
  {
    label: 'Backend',
    items: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'APIs REST', 'JWT'],
  },
  { label: 'Datos', items: ['PostgreSQL', 'SQLite', 'MySQL', 'Firebase', 'Elasticsearch'] },
  {
    label: 'Herramientas',
    items: ['Git', 'GitHub', 'Figma', 'WordPress', 'Vercel', 'Netlify', 'Render', 'Testing'],
  },
];

export const PROFILE_LINKS: ProfileLink[] = [
  { label: 'GitHub', href: PROFILE.github, external: true },
  { label: 'LinkedIn', href: PROFILE.linkedin, external: true },
  { label: 'CV', href: PROFILE.cv },
];

export const CONTACT_LINKS: ProfileLink[] = [
  { label: 'Email', href: `mailto:${PROFILE.email}` },
  { label: 'LinkedIn', href: PROFILE.linkedin, external: true },
  { label: 'GitHub', href: PROFILE.github, external: true },
  { label: 'Ver CV', href: PROFILE.cv },
];

export const QUICK_QUESTIONS: QuickQuestion[] = [
  {
    question: 'Que tipo de proyectos puedes desarrollar?',
    answer:
      'Frontend con Angular, TypeScript y Tailwind CSS; backend con Java y Spring Boot o con Python; y diseno de interfaces en Figma. Me siento comodo tanto en el detalle de la interfaz como en el modelo de datos y la API.',
  },
  {
    question: 'Tienes experiencia real en empresas?',
    answer:
      'Si. Dos años en empresas de producto digital, con entrega continua sobre una web en produccion, Firebase, Elasticsearch y WordPress.',
  },
  {
    question: 'Donde puedo ver tu codigo?',
    answer:
      'En mi GitHub publico, con proyectos de frontend, backend y APIs REST con seguridad JWT.',
  },
  {
    question: 'Como podemos colaborar?',
    answer:
      'Escríbeme por LinkedIn o email. Estoy disponible para colaboraciones, proyectos freelance y posiciones junior o semior.',
  },
];
