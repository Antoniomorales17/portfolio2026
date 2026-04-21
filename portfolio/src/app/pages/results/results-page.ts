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

interface FeaturedProject {
  title: string;
  category: 'Frontend' | 'Backend' | 'Diseno UX/UI';
  summary: string;
  stack: string;
  href: string;
}

interface QuickQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-results-page',
  imports: [RouterLink],
  templateUrl: './results-page.html',
  styleUrl: './results-page.css',
})
export class ResultsPage implements OnInit {
  activeTab: ResultTab = 'Todo';
  clipboardNotice: string | null = null;
  private clipboardNoticeTimeout: ReturnType<typeof setTimeout> | null = null;

  readonly profileSummary =
    'Desarrollador Full Stack con enfoque en Front-End (Angular, TypeScript y Tailwind CSS) y diseño web. Experiencia en migración de versiones, gestión de CMS (WordPress) y uso de Figma para diseño de interfaces. Conocimientos complementarios en Back-End (Java, Python y Firebase)';

  readonly navTabs: ResultTab[] = ['Todo', 'Experiencia', 'Formacion', 'Skills', 'Proyectos', 'Contacto'];

  readonly searchResults: SearchResult[] = [
    {
      title: 'Copyfly | Desarrollador FullStack',
      displayUrl: '',
      meta: 'Almeria, España | Marzo 2025 - Abril 2026',
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
      displayUrl: '',
      meta: 'Cordoba, España | Noviembre 2024 - Marzo 2025',
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
      displayUrl: '',
      meta: '2021',
      snippet: 'Analisis en profundidad de mercados B2C y B2B para detectar oportunidades de crecimiento y mejora en negocio digital.',
      tab: 'Experiencia',
      details: ['Analisis de mercados B2C y B2B identificando oportunidades de crecimiento y mejoras.'],
    },
    {
      title: 'Ayuntamiento de Almeria | Tecnico Superior en Investigacion de Mercados',
      displayUrl: '',
      meta: '2018',
      snippet: 'Participacion en estudio de mercado turistico local con analisis de competencia y tendencias.',
      tab: 'Experiencia',
      details: ['Proyecto de estudio del mercado de turoperadores en la ciudad.', 'Analisis de competencia y tendencias del mercado turistico local.'],
    },
    {
      title: 'Universitat Oberta de Catalunya (UOC) | Grado en Ciencia de Datos',
      displayUrl: '',
      meta: 'Barcelona, España | Cursando',
      snippet: 'Formacion universitaria actual orientada al analisis de datos, modelado y tecnologia aplicada a negocio.',
      tab: 'Formacion',
    },
    {
      title: 'HACK A BOSS | Java / Spring Boot',
      displayUrl: '',
      meta: 'Online, España | 2024',
      snippet: 'Especializacion tecnica en desarrollo de aplicaciones Java y arquitectura backend con Spring Boot.',
      tab: 'Formacion',
    },
    {
      title: '4Geeks Academy | Full Stack Developer',
      displayUrl: '',
      meta: 'Online, España | 2023',
      snippet: 'Programa intensivo full stack con foco en desarrollo de aplicaciones web modernas.',
      tab: 'Formacion',
    },
    {
      title: 'Universidad de La Rioja (UNIR) | Master en E-Commerce',
      displayUrl: '',
      meta: 'Online, España | 2022',
      snippet: 'Formacion avanzada en comercio electronico, estrategia digital y gestion de canales online.',
      tab: 'Formacion',
    },
    {
      title: 'Universidad de Almeria | Grado en Marketing e Investigacion de Mercados',
      displayUrl: '',
      meta: 'Almeria, España | 2015',
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
      title: 'Cabo Indalo',
      displayUrl: '',
      href: 'https://www.caboindalo.es/es',
      meta: 'Proyecto destacado | Produccion',
      snippet: 'Web oficial de Cabo Indalo, un complejo turistico en Almeria, desarrollado con Angular y Tailwind. Producto real para mostrarse en airbnb y otras plataformas de turismo.',
      tab: 'Proyectos',
      actions: [
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/cabo-indalo' },
      ],
    },
    {
      title: 'Kdabra',
      displayUrl: '',
      href: 'https://kadabra.netlify.app/',
      meta: 'Noviembre 2024 - Actualidad | Asociado con Softteck',
      snippet: 'SPA en Angular 19 que simula una tienda basica con despliegue en Netlify.',
      
      tab: 'Proyectos',
      details: ['Stack: Angular 19 y Tailwind.', 'Despliegue en Netlify.', 'Proyecto orientado a maquetacion, estructura y despliegue.'],
      actions: [
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/kadabra' },
      ],
    },
    {
      title: 'Santander App FullStack',
      displayUrl: '',
      href: 'https://santander-inky.vercel.app/',
      meta: 'Enero 2025 - Febrero 2025 | Asociado con Softteck',
      snippet: 'Aplicacion fullstack inspirada en Banco Santander con backend Spring Boot y frontend Angular.',
      tab: 'Proyectos',
      details: [
        'Frontend: Angular, TypeScript, HTML, CSS, Angular Material y Tailwind.',
        'Backend: Spring Boot, Java y Maven.',
        'Base de datos: PostgreSQL.',
        'Seguridad: JWT y CORS.',
      ],
       actions: [
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/santander' },
      ],
    },
    {
      title: 'JobCompany',
      displayUrl: '',
      meta: 'Proyecto Java backend | JPA',
      snippet: 'Aplicacion Java para administrar la informacion de empleados usando Java Persistence API (JPA).',
      tab: 'Proyectos',
      details: ['Backend con Java orientado a gestion de empleados.', 'Persistencia de datos con JPA y SQL.'],
      actions: [{ label: 'GitHub', href: 'https://github.com/Antoniomorales17/MoralesGimenez_pruebatec1' }],
    },
    {
      title: 'tuCita',
      displayUrl: '',
      meta: 'Proyecto Java Spring Boot | Gestion de citas',
      snippet:
        'Aplicacion para pedir y gestionar citas con la administracion, incluyendo modalidad, registro de hora y cambio de estado.',
      tab: 'Proyectos',
      details: ['Java + Spring Boot + SQL.', 'Estados de cita: En espera y Atendido.'],
      actions: [{ label: 'GitHub', href: 'https://github.com/Antoniomorales17/MoralesAntonio_pruebatec2' }],
    },
    {
      title: 'Agencia & Sistema de reservas',
      displayUrl: '',
      meta: 'Proyecto API REST | Reservas de hotel y vuelos',
      snippet:
        'Simulacion de sistema de reservas de habitaciones y vuelos con arquitectura backend en Java y Spring Boot.',
      tab: 'Proyectos',
      details: [
        'API REST con Spring Boot.',
        'Testing, JPA + Hibernate y seguridad con Spring Security + JWT.',
        'Persistencia SQL.',
      ],
      actions: [{ label: 'GitHub', href: 'https://github.com/Antoniomorales17/Agencia-Java-Spring' }],
    },
    {
      title: 'Little Lemon',
      displayUrl: '',
      href: 'https://little-eight.vercel.app/',
      meta: 'Mayo 2024',
      snippet: 'Proyecto final de Meta Front-End: app de reservas con React y consumo de APIs.',
      tab: 'Proyectos',
      details: ['Proyecto academico con foco en React y experiencia de usuario.'],
        actions: [
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/LittleLemon' },
      ],
    },
    {
      title: 'WebMentor',
       displayUrl: '',
      href: 'https://www.figma.com/design/4BylQgWeCxRfaj84zN1uD1/WebMentor-hi-fi?node-id=1-69&t=6KpiaYaSRuhzHyCO-0',
      meta: 'Marzo 2024 - Mayo 2024',
      snippet: 'Prototipo de formacion digital para personas mayores, enfocado en UX con Figma.',
      tab: 'Proyectos',
      details: ['Entregables hi-fi y baja fidelidad.', 'Prototipo navegable y arquitectura UX.'],
    },
    {
      title: 'Gourmet Express',
       displayUrl: '',
      href: 'https://www.figma.com/design/JLlovkZQgY1iDY0dVrXIu8/Prototipo-de-alta-fidelidad-Gourmet-Express-%F0%9F%8D%A3?node-id=1-828&t=N2YYJJq93XBq8Xor-0',
      meta: 'Octubre 2023 - Enero 2024',
      snippet: 'Prototipo de app de comida de lujo a domicilio trabajado desde enfoque UX y negocio.',
      tab: 'Proyectos',
      details: ['Informe de cliente.', 'Prototipo de alta fidelidad y mockups.'],
    },
    {
      title: 'Philosophy-App',
       displayUrl: '',
      href: 'https://juanmogimenez.vercel.app/',
      meta: 'Noviembre 2023 - Diciembre 2023',
      snippet: 'Aplicacion React para explorar contenido filosofico con foco en UX y responsive design.',
      tab: 'Proyectos',
      details: ['Aplicacion React responsive con enfoque en arquitectura de componentes.'],
       actions: [
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/Philosophy-App' },
      ],
    },
    {
      title: 'finDeveloper',
       displayUrl: '',
      href: 'https://findeveloper.vercel.app/',
      meta: 'Noviembre 2023',
      snippet: 'Plataforma web realizada con React para facilitar la busqueda y contacto directo con desarrolladores.',
      tab: 'Proyectos',
      details: ['Proyecto orientado a matching entre talento tecnico y necesidades reales de negocio.'],
       actions: [
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/finDeveloper' },
      ],
    },
    
    
    {
      title: 'Gif & Photo Search',
      displayUrl: '',
      href: 'https://gifphotosearch.vercel.app/',
      meta: 'Septiembre 2023',
      snippet: 'Aplicacion web para buscar y descargar GIFs y fotos desde Giphy y Pixabay.',
      tab: 'Proyectos',
      details: ['Busqueda por palabra clave.', 'Vista ampliada y descarga de contenido.'],
       actions: [
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/Gif-Photo-Search-App' },
      ],
    },
    {
      title: 'NonoStore',
     displayUrl: '',
      href: 'https://nonostore.vercel.app//',
      meta: 'Septiembre 2023',
      snippet: 'Tienda de ropa online en version estatica con enfoque en estructura y presentacion de catalogo.',
      tab: 'Proyectos',
      details: ['Proyecto frontend orientado a maquetacion y estructura de catalogo.'],
       actions: [
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/NonoStore' },
      ],
    },
    {
      title: 'QuizGames',
      displayUrl: '',
      href: 'https://quizvideogames.vercel.app/',
      meta: 'Septiembre 2023',
      snippet: 'Quiz retro de videojuegos desarrollado en React con progreso y puntuacion.',
      tab: 'Proyectos',
      details: ['Preguntas retro, progreso de usuario y gestion de puntuacion.'],
       actions: [
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/QuizGames' },
      ],
    },
    {
      title: 'Wizz-Mail',
      displayUrl: '',
      meta: 'Julio 2023 - Agosto 2023 | Asociado con 4Geeks Academy Espana',
      snippet: 'App para gestion de tickets con IA, respuestas inteligentes en tiempo real y flujo 24/7.',
      tab: 'Proyectos',
      details: [
        'Frontend: React.',
        'Backend: Python y Flask.',
        'Base de datos: PostgreSQL.',
        'Integracion con API de OpenAI para respuesta automatizada en vivo.',
      ],
       actions: [
        { label: 'GitHub', href: 'https://github.com/Antoniomorales17/WizzMail' },
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
    { label: 'Especialidad', value: 'Frontend / Diseño Web' },
  ];

readonly expertiseAreas = ['Angular', 'Tailwind', 'Figma', 'WordPress', 'Firebase', 'Java', 'Spring Boot', 'Python',];

  readonly profileStats = [
    { label: 'Años de experiencia', value: '2+' },
    { label: 'Proyectos completados', value: '18+' },
    { label: 'Stack principal', value: 'Angular' },
  ];

  readonly featuredProjects: FeaturedProject[] = [
    {
      title: 'Cabo Indalo',
      category: 'Frontend',
      summary: 'Web publica para negocio real de turismo con Angular y Tailwind.',
      stack: 'Angular, Tailwind',
      href: 'https://www.caboindalo.es/es',
    },
    {
      title: 'JobCompany',
      category: 'Backend',
      summary: 'Gestion de empleados con Java, SQL y JPA.',
      stack: 'Java, SQL, JPA',
      href: 'https://github.com/Antoniomorales17/MoralesGimenez_pruebatec1',
    },
    {
      title: 'tuCita',
      category: 'Backend',
      summary: 'Sistema de citas con estados y calendario para administracion.',
      stack: 'Java, Spring Boot, SQL',
      href: 'https://github.com/Antoniomorales17/MoralesAntonio_pruebatec2',
    },
    {
      title: 'WebMentor',
      category: 'Diseno UX/UI',
      summary: 'Prototipo en Figma para formacion digital orientada a personas mayores.',
      stack: 'Figma, UX Research',
      href: 'https://www.figma.com/design/4BylQgWeCxRfaj84zN1uD1/WebMentor-hi-fi?node-id=1-69&t=6KpiaYaSRuhzHyCO-0',
    },
  ];

  readonly quickQuestions: QuickQuestion[] = [
    {
      question: 'Que tipo de proyectos puedes desarrollar?',
      answer:
        'Puedo trabajar en frontend (Angular/React), backend con Java + Spring Boot y diseno de producto en Figma.',
    },
    {
      question: 'Tienes experiencia real en empresas?',
      answer: 'Si. He trabajado en entornos reales con Angular, Java, WordPress, Firebase y mantenimiento evolutivo.',
    },
    {
      question: 'Donde puedo ver tu codigo?',
      answer: 'En GitHub publico, con proyectos de frontend, backend y APIs REST con seguridad JWT.',
    },
    {
      question: 'Como podemos colaborar?',
      answer: 'Puedes escribirme por LinkedIn o email para proyectos freelance, colaboraciones o posiciones junior.',
    },
  ];

  readonly directLinks: ActionLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoniomoralesgimenez/' },
    { label: 'GitHub', href: 'https://github.com/Antoniomorales17' },
    { label: 'Ver CV', href: '/Antonio_Morales_CV.pdf' },
    { label: 'Descargar CV', href: '/Antonio_Morales_CV.pdf', download: true },
  ];

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

  onActionClick(event: MouseEvent, action: ResultAction): void {
    if (action.href.startsWith('mailto:')) {
      event.preventDefault();
      const email = action.href.replace('mailto:', '');
      this.copyToClipboard(email, 'Email copiado al portapapeles');
      return;
    }

    if (action.href.startsWith('tel:')) {
      event.preventDefault();
      const phone = action.href.replace('tel:', '');
      this.copyToClipboard(phone, 'Telefono copiado al portapapeles');
    }
  }

  private copyToClipboard(value: string, successMessage: string): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      void navigator.clipboard
        .writeText(value)
        .then(() => this.showClipboardNotice(successMessage))
        .catch(() => this.copyWithFallback(value, successMessage));
      return;
    }
    this.copyWithFallback(value, successMessage);
  }

  private copyWithFallback(value: string, successMessage: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', 'true');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);

    if (success) {
      this.showClipboardNotice(successMessage);
    } else {
      this.showClipboardNotice('No se pudo copiar automaticamente');
    }
  }

  private showClipboardNotice(message: string): void {
    this.clipboardNotice = message;
    if (this.clipboardNoticeTimeout) {
      clearTimeout(this.clipboardNoticeTimeout);
    }
    this.clipboardNoticeTimeout = setTimeout(() => {
      this.clipboardNotice = null;
      this.clipboardNoticeTimeout = null;
    }, 2200);
  }

  private isValidTab(value: string | null): value is ResultTab {
    return !!value && this.navTabs.includes(value as ResultTab);
  }
}
