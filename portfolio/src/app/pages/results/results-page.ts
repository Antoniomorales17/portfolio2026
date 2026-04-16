import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

type ResultTab = 'Todo' | 'Experiencia' | 'Formacion' | 'Skills' | 'Proyectos' | 'Contacto';

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  tab: Exclude<ResultTab, 'Todo'>;
  meta?: string;
  details?: string[];
  links?: ActionLink[];
}

interface ActionLink {
  label: string;
  href: string;
  download?: boolean;
}

@Component({
  selector: 'app-results-page',
  imports: [RouterLink],
  templateUrl: './results-page.html',
  styleUrl: './results-page.css',
})
export class ResultsPage implements OnInit {
  activeTab: ResultTab = 'Todo';

  readonly profileSummary =
    'Desarrollador Full Stack con enfoque en Front-End (Angular, HTML, CSS/Tailwind) y diseno web. Experiencia en migraciones de versiones y gestion de CMS (WordPress), complementado con conocimientos en Back-End (Java, Python, Firebase).';

  readonly navTabs: ResultTab[] = ['Todo', 'Experiencia', 'Formacion', 'Skills', 'Proyectos', 'Contacto'];

  readonly searchResults: SearchResult[] = [
    {
      title: 'Copyfly | Desarrollador FullStack',
      url: 'antoniomorales.dev/experiencia/copyfly',
      meta: 'Almeria, Espana | Marzo 2025 - Abril 2026',
      snippet:
        'Desarrollo y maquetacion web con Angular y Tailwind, gestion de datos en Firebase y Elasticsearch, optimizacion continua y mantenimiento de CMS.',
      tab: 'Experiencia',
      details: [
        'Desarrollo y maquetacion web con HTML, CSS (Tailwind) y Angular para interfaces responsive.',
        'Gestion avanzada de datos en Back-End con Firebase y consultas complejas en Elasticsearch.',
        'Mantenimiento evolutivo y optimizacion de rendimiento con nuevas features y resolucion de bugs.',
        'Integracion, configuracion y mantenimiento de contenidos en WordPress.',
      ],
    },
    {
      title: 'Softteck | Desarrollador FullStack',
      url: 'antoniomorales.dev/experiencia/softteck',
      meta: 'Cordoba, Espana | Noviembre 2024 - Marzo 2025',
      snippet:
        'Participacion en proyecto para Banco Santander trabajando con Angular y Java, incluyendo calidad de codigo y pruebas unitarias.',
      tab: 'Experiencia',
      details: [
        'Apoyo y colaboracion en un proyecto de Banco Santander con Angular y Java.',
        'Revision de codigo para mantener estandares de calidad y buenas practicas.',
        'Implementacion de pruebas y test unitarios con Jasmine y Karma.',
      ],
    },
    {
      title: 'Amvos Digital | E-commerce Manager',
      url: 'antoniomorales.dev/experiencia/amvos-digital',
      meta: '2021',
      snippet:
        'Analisis en profundidad de mercados B2C y B2B para detectar oportunidades de crecimiento y mejora en negocio digital.',
      tab: 'Experiencia',
      details: ['Analisis de mercados B2C y B2B, identificando oportunidades de crecimiento y areas de mejora.'],
    },
    {
      title: 'Ayuntamiento de Almeria | Tecnico Superior en Investigacion de Mercados',
      url: 'antoniomorales.dev/experiencia/ayuntamiento-almeria',
      meta: '2018',
      snippet:
        'Participacion en proyecto integral de estudio de mercado turistico local, analisis de competencia y tendencias.',
      tab: 'Experiencia',
      details: [
        'Proyecto de estudio del mercado de turoperadores en la ciudad.',
        'Analisis de competencia y tendencias del mercado turistico local.',
      ],
    },
    {
      title: 'Universitat Oberta de Catalunya (UOC) | Grado en Ciencia de Datos',
      url: 'antoniomorales.dev/formacion/uoc-ciencia-de-datos',
      meta: 'Barcelona, Espana | Cursando',
      snippet: 'Formacion universitaria actual orientada al analisis de datos, modelado y tecnologia aplicada a negocio.',
      tab: 'Formacion',
    },
    {
      title: 'HACK A BOSS | Java / Spring Boot',
      url: 'antoniomorales.dev/formacion/hack-a-boss',
      meta: 'Online, Espana | 2024',
      snippet: 'Especializacion tecnica en desarrollo de aplicaciones Java y arquitectura backend con Spring Boot.',
      tab: 'Formacion',
    },
    {
      title: '4Geeks Academy | Full Stack Developer',
      url: 'antoniomorales.dev/formacion/4geeks',
      meta: 'Online, Espana | 2023',
      snippet: 'Programa intensivo full stack con foco en desarrollo de aplicaciones web modernas.',
      tab: 'Formacion',
    },
    {
      title: 'Universidad de La Rioja (UNIR) | Master en E-Commerce',
      url: 'antoniomorales.dev/formacion/unir-ecommerce',
      meta: 'Online, Espana | 2022',
      snippet: 'Formacion avanzada en comercio electronico, estrategia digital y gestion de canales online.',
      tab: 'Formacion',
    },
    {
      title: 'Universidad de Almeria | Grado en Marketing e Investigacion de Mercados',
      url: 'antoniomorales.dev/formacion/ual-marketing',
      meta: 'Almeria, Espana | 2015',
      snippet: 'Base academica en marketing, investigacion de mercados y analisis de comportamiento del consumidor.',
      tab: 'Formacion',
    },
    {
      title: 'Stack tecnico y herramientas',
      url: 'antoniomorales.dev/skills',
      snippet: 'Angular, TypeScript, JavaScript, Java, Spring, Python, Firebase, Tailwind, WordPress, Elasticsearch.',
      tab: 'Skills',
    },
    {
      title: 'Cabo Indalo (Proyecto principal)',
      url: 'https://www.caboindalo.es/es',
      meta: 'Proyecto destacado | Produccion',
      snippet: 'Proyecto principal en produccion orientado a presencia digital y experiencia web.',
      tab: 'Proyectos',
      links: [
        { label: 'Web', href: 'https://www.caboindalo.es/es' },
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/cabo-indalo' },
      ],
    },
    {
      title: 'Kdabra',
      url: 'antoniomorales.dev/proyectos/kdabra',
      meta: 'Noviembre 2024 - Actualidad | Asociado con Softteck',
      snippet: 'SPA en Angular 19 que simula una tienda basica, con despliegue en Netlify.',
      tab: 'Proyectos',
      details: ['Stack: Angular 19, frontend web.', 'Repositorio en GitHub.', 'Deploy en Netlify.'],
    },
    {
      title: 'Santander App FullStack',
      url: 'antoniomorales.dev/proyectos/santander',
      meta: 'Enero 2025 - Febrero 2025 | Asociado con Softteck',
      snippet: 'Aplicacion fullstack inspirada en Banco Santander con backend Spring Boot y frontend Angular.',
      tab: 'Proyectos',
      details: [
        'Frontend: Angular, TypeScript, HTML, CSS, Angular Material, Tailwind.',
        'Backend: Spring Boot, Java, Maven.',
        'Base de datos: PostgreSQL.',
        'Seguridad: JWT y CORS.',
        'Despliegue: Vercel (frontend) y servidor dedicado (backend).',
      ],
    },
    {
      title: 'Little Lemon',
      url: 'antoniomorales.dev/proyectos/little-lemon',
      meta: 'Mayo 2024',
      snippet: 'Proyecto final de Meta Front-End: app de reservas con React y consumo de APIs.',
      tab: 'Proyectos',
      details: ['Repositorio disponible.', 'Demo disponible.'],
    },
    {
      title: 'WebMentor',
      url: 'antoniomorales.dev/proyectos/webmentor',
      meta: 'Marzo 2024 - Mayo 2024',
      snippet: 'Prototipo de formacion digital para personas mayores, enfocado en UX con Figma.',
      tab: 'Proyectos',
      details: ['Entregables hi-fi y baja fidelidad.', 'Prototipo navegable y arquitectura UX.'],
    },
    {
      title: 'Gourmet Express',
      url: 'antoniomorales.dev/proyectos/gourmet-express',
      meta: 'Octubre 2023 - Enero 2024',
      snippet: 'Prototipo de app de comida de lujo a domicilio trabajado desde enfoque UX y negocio.',
      tab: 'Proyectos',
      details: ['Informe de cliente.', 'Prototipo de alta fidelidad y mockups.'],
    },
    {
      title: 'Philosophy-App',
      url: 'antoniomorales.dev/proyectos/philosophy-app',
      meta: 'Noviembre 2023 - Diciembre 2023',
      snippet: 'Aplicacion React para explorar contenido filosofico con foco en UX y responsive design.',
      tab: 'Proyectos',
      details: ['Demo disponible.', 'Repositorio disponible.'],
    },
    {
      title: 'finDeveloper',
      url: 'antoniomorales.dev/proyectos/findeveloper',
      meta: 'Noviembre 2023',
      snippet: 'Plataforma web para facilitar la busqueda y contacto directo con desarrolladores.',
      tab: 'Proyectos',
      details: ['Demo disponible.', 'Repositorio disponible.'],
    },
    {
      title: 'Blog Personal',
      url: 'antoniomorales.dev/proyectos/blog-personal',
      meta: 'Octubre 2023',
      snippet: 'Blog de aprendizaje en programacion junior construido con HTML, CSS, JavaScript y React.',
      tab: 'Proyectos',
      details: ['Demo disponible.', 'Repositorio disponible.', 'Roadmap futuro con Node.js, Express y MongoDB.'],
    },
    {
      title: 'lavidadeunjunior',
      url: 'antoniomorales.dev/proyectos/lavidadeunjunior',
      meta: 'Octubre 2023',
      snippet: 'Blog personal en WordPress para compartir experiencia y aprendizaje del mundo digital.',
      tab: 'Proyectos',
      details: ['CMS: WordPress.', 'Enfoque en SEO y contenidos.'],
    },
    {
      title: 'Gif & Photo Search',
      url: 'antoniomorales.dev/proyectos/gif-photo-search',
      meta: 'Septiembre 2023',
      snippet: 'Aplicacion web para buscar y descargar GIFs y fotos desde Giphy y Pixabay.',
      tab: 'Proyectos',
      details: ['Busqueda por palabra clave.', 'Vista ampliada y descarga de contenido.', 'Demo y repositorio disponibles.'],
    },
    {
      title: 'NonoStore',
      url: 'antoniomorales.dev/proyectos/nonostore',
      meta: 'Septiembre 2023',
      snippet: 'Tienda de ropa online en version estatica con enfoque en estructura y presentacion de catalogo.',
      tab: 'Proyectos',
      details: ['Demo disponible.', 'Repositorio disponible.'],
    },
    {
      title: 'QuizGames',
      url: 'antoniomorales.dev/proyectos/quizgames',
      meta: 'Septiembre 2023',
      snippet: 'Quiz retro de videojuegos desarrollado en React con progreso y puntuacion.',
      tab: 'Proyectos',
      details: ['Preguntas desafiantes retro.', 'UI amigable.', 'Demo y repositorio disponibles.'],
    },
    {
      title: 'Wizz-Mail',
      url: 'antoniomorales.dev/proyectos/wizz-mail',
      meta: 'Julio 2023 - Agosto 2023 | Asociado con 4Geeks Academy Espana',
      snippet: 'App para gestion de tickets con IA, respuestas inteligentes en tiempo real y flujo 24/7.',
      tab: 'Proyectos',
      details: [
        'Frontend: React.',
        'Backend: Python y Flask.',
        'Base de datos: PostgreSQL.',
        'Integracion con API de OpenAI para respuesta automatizada en vivo.',
        'Demo y repositorio disponibles.',
      ],
    },
    
    {
      title: 'Contacto profesional',
      url: 'antoniomorales.dev/contacto',
      snippet: 'Disponible para colaboraciones freelance, roles junior y proyectos remotos. Respuesta rapida por email y LinkedIn.',
      tab: 'Contacto',
      links: [
        { label: 'Email', href: 'mailto:antonio@example.com' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoniomoralesgimenez/' },
      ],
    },
  ];

  readonly quickActions: ActionLink[] = [
    { label: 'Ver CV', href: '/Antonio_Morales_CV.pdf' },
    { label: 'Descargar CV', href: '/Antonio_Morales_CV.pdf', download: true },
    { label: 'GitHub', href: 'https://github.com/Antoniomorales17' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoniomoralesgimenez/' },
    { label: 'Contactar', href: 'mailto:antonio@example.com' },
  ];

  readonly highlights = [
    'Email: antoniomora.gimenez@gmail.com',
    'Teléfono: 647 66 45 36',
    'Ciudad: Almería',
    'Especialidad: Frontend / Full Stack Junior',
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const tabParam = params.get('tab');
      if (this.isValidTab(tabParam)) {
        this.activeTab = tabParam;
      } else {
        this.activeTab = 'Todo';
      }
    });
  }

  get filteredResults(): SearchResult[] {
    if (this.activeTab === 'Todo') {
      return this.searchResults;
    }
    return this.searchResults.filter((result) => result.tab === this.activeTab);
  }

  selectTab(tab: ResultTab): void {
    this.activeTab = tab;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab },
      queryParamsHandling: 'merge',
    });
  }

  isTabActive(tab: ResultTab): boolean {
    return this.activeTab === tab;
  }

  getResultHref(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('/')) {
      return url;
    }
    return `https://${url}`;
  }

  private isValidTab(value: string | null): value is ResultTab {
    return !!value && this.navTabs.includes(value as ResultTab);
  }
}
