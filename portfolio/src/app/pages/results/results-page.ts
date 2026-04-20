import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

type ResultTab = 'Todo' | 'Experiencia' | 'Formacion' | 'Skills' | 'Proyectos' | 'Contacto';

interface ResultAction {
  label: string;
  href: string;
  download?: boolean;
}

interface SearchResult {
  title: string;
  displayUrl: string;
  snippet: string;
  tab: Exclude<ResultTab, 'Todo'>;
  meta?: string;
  href?: string;
  details?: string[];
  actions?: ResultAction[];
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
    'Desarrollador Full Stack Junior con enfoque en Front-End (Angular, TypeScript y Tailwind), experiencia real en producto y base solida en Java, Python y servicios cloud.';

  readonly navTabs: ResultTab[] = ['Todo', 'Experiencia', 'Formacion', 'Skills', 'Proyectos', 'Contacto'];

  readonly searchResults: SearchResult[] = [
    {
      title: 'Copyfly | Desarrollador FullStack',
      displayUrl: 'portfolio > experiencia > copyfly',
      meta: 'Almeria, Espana | Marzo 2025 - Abril 2026',
      snippet:
        'Desarrollo y maquetacion web con Angular y Tailwind, gestion de datos en Firebase y Elasticsearch, optimizacion continua y mantenimiento de CMS.',
      tab: 'Experiencia',
      details: [
        'Desarrollo y maquetacion web con HTML, CSS (Tailwind) y Angular para interfaces responsive.',
        'Gestion de datos en Back-End con Firebase y consultas en Elasticsearch.',
        'Mantenimiento evolutivo y optimizacion de rendimiento con nuevas funcionalidades.',
        'Integracion, configuracion y mantenimiento de contenidos en WordPress.',
      ],
    },
    {
      title: 'Softteck | Desarrollador FullStack',
      displayUrl: 'portfolio > experiencia > softteck',
      meta: 'Cordoba, Espana | Noviembre 2024 - Marzo 2025',
      snippet: 'Participacion en proyecto para Banco Santander trabajando con Angular y Java, incluyendo calidad de codigo y pruebas unitarias.',
      tab: 'Experiencia',
      details: [
        'Colaboracion en proyecto de Banco Santander con Angular y Java.',
        'Revision de codigo para mantener estandares de calidad y buenas practicas.',
        'Implementacion de pruebas unitarias con Jasmine y Karma.',
      ],
    },
    {
      title: 'Amvos Digital | E-commerce Manager',
      displayUrl: 'portfolio > experiencia > amvos-digital',
      meta: '2021',
      snippet: 'Analisis en profundidad de mercados B2C y B2B para detectar oportunidades de crecimiento y mejora en negocio digital.',
      tab: 'Experiencia',
      details: ['Analisis de mercados B2C y B2B identificando oportunidades de crecimiento y mejoras.'],
    },
    {
      title: 'Ayuntamiento de Almeria | Tecnico Superior en Investigacion de Mercados',
      displayUrl: 'portfolio > experiencia > ayuntamiento-almeria',
      meta: '2018',
      snippet: 'Participacion en estudio de mercado turistico local con analisis de competencia y tendencias.',
      tab: 'Experiencia',
      details: ['Proyecto de estudio del mercado de turoperadores en la ciudad.', 'Analisis de competencia y tendencias del mercado turistico local.'],
    },
    {
      title: 'Universitat Oberta de Catalunya (UOC) | Grado en Ciencia de Datos',
      displayUrl: 'portfolio > formacion > uoc-ciencia-de-datos',
      meta: 'Barcelona, Espana | Cursando',
      snippet: 'Formacion universitaria actual orientada al analisis de datos, modelado y tecnologia aplicada a negocio.',
      tab: 'Formacion',
    },
    {
      title: 'HACK A BOSS | Java / Spring Boot',
      displayUrl: 'portfolio > formacion > hack-a-boss',
      meta: 'Online, Espana | 2024',
      snippet: 'Especializacion tecnica en desarrollo de aplicaciones Java y arquitectura backend con Spring Boot.',
      tab: 'Formacion',
    },
    {
      title: '4Geeks Academy | Full Stack Developer',
      displayUrl: 'portfolio > formacion > 4geeks',
      meta: 'Online, Espana | 2023',
      snippet: 'Programa intensivo full stack con foco en desarrollo de aplicaciones web modernas.',
      tab: 'Formacion',
    },
    {
      title: 'Universidad de La Rioja (UNIR) | Master en E-Commerce',
      displayUrl: 'portfolio > formacion > unir-ecommerce',
      meta: 'Online, Espana | 2022',
      snippet: 'Formacion avanzada en comercio electronico, estrategia digital y gestion de canales online.',
      tab: 'Formacion',
    },
    {
      title: 'Universidad de Almeria | Grado en Marketing e Investigacion de Mercados',
      displayUrl: 'portfolio > formacion > ual-marketing',
      meta: 'Almeria, Espana | 2015',
      snippet: 'Base academica en marketing, investigacion de mercados y analisis de comportamiento del consumidor.',
      tab: 'Formacion',
    },
    {
      title: 'Stack tecnico y herramientas',
      displayUrl: 'portfolio > skills',
      snippet: 'Angular, TypeScript, JavaScript, Java, Spring Boot, Python, Firebase, Tailwind, WordPress y Elasticsearch.',
      tab: 'Skills',
      details: [
        'Frontend: Angular, TypeScript, JavaScript, HTML5, CSS3, Tailwind.',
        'Backend: Java, Spring Boot, Python y APIs REST.',
        'Datos y herramientas: PostgreSQL, Firebase, Elasticsearch, Git y GitHub.',
      ],
    },
    {
      title: 'Cabo Indalo (Proyecto principal)',
      displayUrl: 'www.caboindalo.es/es',
      href: 'https://www.caboindalo.es/es',
      meta: 'Proyecto destacado | Produccion',
      snippet: 'Proyecto principal en produccion orientado a presencia digital y experiencia web.',
      tab: 'Proyectos',
      actions: [
        { label: 'Ver web', href: 'https://www.caboindalo.es/es' },
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/cabo-indalo' },
      ],
    },
    {
      title: 'Kdabra',
      displayUrl: 'portfolio > proyectos > kdabra',
      meta: 'Noviembre 2024 - Actualidad | Asociado con Softteck',
      snippet: 'SPA en Angular 19 que simula una tienda basica con despliegue en Netlify.',
      tab: 'Proyectos',
      details: ['Stack: Angular 19 y frontend web.', 'Despliegue en Netlify.', 'Demo detallada disponible bajo solicitud.'],
    },
    {
      title: 'Santander App FullStack',
      displayUrl: 'portfolio > proyectos > santander-app-fullstack',
      meta: 'Enero 2025 - Febrero 2025 | Asociado con Softteck',
      snippet: 'Aplicacion fullstack inspirada en Banco Santander con backend Spring Boot y frontend Angular.',
      tab: 'Proyectos',
      details: [
        'Frontend: Angular, TypeScript, HTML, CSS, Angular Material y Tailwind.',
        'Backend: Spring Boot, Java y Maven.',
        'Base de datos: PostgreSQL.',
        'Seguridad: JWT y CORS.',
      ],
    },
    {
      title: 'Little Lemon',
      displayUrl: 'portfolio > proyectos > little-lemon',
      meta: 'Mayo 2024',
      snippet: 'Proyecto final de Meta Front-End: app de reservas con React y consumo de APIs.',
      tab: 'Proyectos',
      details: ['Proyecto academico con foco en React y experiencia de usuario.'],
    },
    {
      title: 'WebMentor',
      displayUrl: 'portfolio > proyectos > webmentor',
      meta: 'Marzo 2024 - Mayo 2024',
      snippet: 'Prototipo de formacion digital para personas mayores, enfocado en UX con Figma.',
      tab: 'Proyectos',
      details: ['Entregables hi-fi y baja fidelidad.', 'Prototipo navegable y arquitectura UX.'],
    },
    {
      title: 'Gourmet Express',
      displayUrl: 'portfolio > proyectos > gourmet-express',
      meta: 'Octubre 2023 - Enero 2024',
      snippet: 'Prototipo de app de comida de lujo a domicilio trabajado desde enfoque UX y negocio.',
      tab: 'Proyectos',
      details: ['Informe de cliente.', 'Prototipo de alta fidelidad y mockups.'],
    },
    {
      title: 'Philosophy-App',
      displayUrl: 'portfolio > proyectos > philosophy-app',
      meta: 'Noviembre 2023 - Diciembre 2023',
      snippet: 'Aplicacion React para explorar contenido filosofico con foco en UX y responsive design.',
      tab: 'Proyectos',
      details: ['Aplicacion React responsive con enfoque en arquitectura de componentes.'],
    },
    {
      title: 'finDeveloper',
      displayUrl: 'portfolio > proyectos > findeveloper',
      meta: 'Noviembre 2023',
      snippet: 'Plataforma web para facilitar la busqueda y contacto directo con desarrolladores.',
      tab: 'Proyectos',
      details: ['Proyecto orientado a matching entre talento tecnico y necesidades reales de negocio.'],
    },
    {
      title: 'Blog Personal',
      displayUrl: 'portfolio > proyectos > blog-personal',
      meta: 'Octubre 2023',
      snippet: 'Blog de aprendizaje en programacion junior construido con HTML, CSS, JavaScript y React.',
      tab: 'Proyectos',
      details: ['Roadmap futuro con Node.js, Express y MongoDB.'],
    },
    {
      title: 'lavidadeunjunior',
      displayUrl: 'portfolio > proyectos > lavidadeunjunior',
      meta: 'Octubre 2023',
      snippet: 'Blog personal en WordPress para compartir experiencia y aprendizaje del mundo digital.',
      tab: 'Proyectos',
      details: ['CMS: WordPress.', 'Enfoque en SEO y contenidos.'],
    },
    {
      title: 'Gif & Photo Search',
      displayUrl: 'portfolio > proyectos > gif-photo-search',
      meta: 'Septiembre 2023',
      snippet: 'Aplicacion web para buscar y descargar GIFs y fotos desde Giphy y Pixabay.',
      tab: 'Proyectos',
      details: ['Busqueda por palabra clave.', 'Vista ampliada y descarga de contenido.'],
    },
    {
      title: 'NonoStore',
      displayUrl: 'portfolio > proyectos > nonostore',
      meta: 'Septiembre 2023',
      snippet: 'Tienda de ropa online en version estatica con enfoque en estructura y presentacion de catalogo.',
      tab: 'Proyectos',
      details: ['Proyecto frontend orientado a maquetacion y estructura de catalogo.'],
    },
    {
      title: 'QuizGames',
      displayUrl: 'portfolio > proyectos > quizgames',
      meta: 'Septiembre 2023',
      snippet: 'Quiz retro de videojuegos desarrollado en React con progreso y puntuacion.',
      tab: 'Proyectos',
      details: ['Preguntas retro, progreso de usuario y gestion de puntuacion.'],
    },
    {
      title: 'Wizz-Mail',
      displayUrl: 'portfolio > proyectos > wizz-mail',
      meta: 'Julio 2023 - Agosto 2023 | Asociado con 4Geeks Academy Espana',
      snippet: 'App para gestion de tickets con IA, respuestas inteligentes en tiempo real y flujo 24/7.',
      tab: 'Proyectos',
      details: [
        'Frontend: React.',
        'Backend: Python y Flask.',
        'Base de datos: PostgreSQL.',
        'Integracion con API de OpenAI para respuesta automatizada en vivo.',
      ],
    },
    {
      title: 'Contacto profesional',
      displayUrl: 'portfolio > contacto',
      snippet: 'Disponible para colaboraciones freelance, roles junior y proyectos remotos. Respuesta rapida por email y LinkedIn.',
      tab: 'Contacto',
      actions: [
        { label: 'Email', href: 'mailto:antoniomora.gimenez@gmail.com' },
        { label: 'Telefono', href: 'tel:+34647664536' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoniomoralesgimenez/' },
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17' },
      ],
    },
  ];

  readonly quickActions: ActionLink[] = [
    { label: 'Ver CV', href: '/Antonio_Morales_CV.pdf' },
    { label: 'Descargar CV', href: '/Antonio_Morales_CV.pdf', download: true },
    { label: 'Email directo', href: 'mailto:antoniomora.gimenez@gmail.com' },
    { label: 'Llamar', href: 'tel:+34647664536' },
    { label: 'GitHub', href: 'https://github.com/Antoniomorales17' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoniomoralesgimenez/' },
  ];

  readonly topRightActions: ActionLink[] = [
    { label: 'GitHub', href: 'https://github.com/Antoniomorales17' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoniomoralesgimenez/' },
    { label: 'CV', href: '/Antonio_Morales_CV.pdf' },
  ];

  readonly highlights: { label: string; value: string; href?: string }[] = [
    { label: 'Email', value: 'antoniomora.gimenez@gmail.com', href: 'mailto:antoniomora.gimenez@gmail.com' },
    { label: 'Telefono', value: '647 66 45 36', href: 'tel:+34647664536' },
    { label: 'Ciudad', value: 'Almeria' },
    { label: 'Especialidad', value: 'Frontend / Full Stack Junior' },
  ];

  readonly expertiseAreas = ['Experiencia', 'Formacion', 'Skills', 'Proyectos'];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const tabParam = params.get('tab');
      this.activeTab = this.isValidTab(tabParam) ? tabParam : 'Todo';
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

  getResultHref(href: string): string {
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('/')) {
      return href;
    }
    return `https://${href}`;
  }

  isExternalLink(href: string): boolean {
    return href.startsWith('http://') || href.startsWith('https://');
  }

  private isValidTab(value: string | null): value is ResultTab {
    return !!value && this.navTabs.includes(value as ResultTab);
  }
}
