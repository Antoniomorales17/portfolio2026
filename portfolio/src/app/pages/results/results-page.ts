import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContactDialog } from '../../components/contact-dialog/contact-dialog';
import { ProjectCard } from '../../components/project-card/project-card';
import { ProjectRow } from '../../components/project-row/project-row';
import { copyText } from '../../utils/clipboard';
import {
  CONTACT_LINKS,
  EDUCATION,
  EXPERIENCE,
  KIND_LABELS,
  PROFILE,
  PROFILE_LINKS,
  PROJECTS,
  QUICK_QUESTIONS,
  SECTION_TABS,
  SKILL_GROUPS,
  EducationItem,
  ExperienceItem,
  Project,
  SectionTab,
  SkillGroup,
} from '../../data/portfolio.data';

@Component({
  selector: 'app-results-page',
  imports: [RouterLink, ProjectCard, ProjectRow, ContactDialog],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './results-page.html',
  styleUrl: './results-page.css',
})
export class ResultsPage {
  readonly profile = PROFILE;
  readonly kindLabels = KIND_LABELS;
  readonly sectionTabs = SECTION_TABS;
  readonly quickQuestions = QUICK_QUESTIONS;
  readonly profileLinks = PROFILE_LINKS;
  readonly contactLinks = CONTACT_LINKS;

  readonly activeTab = signal<SectionTab>('Todo');
  readonly query = signal('');
  readonly selectedStack = signal<string[]>([]);
  readonly clipboardNotice = signal<string | null>(null);
  private clipboardNoticeTimeout: ReturnType<typeof setTimeout> | null = null;

  readonly allTechs = computed(() => {
    const counts = new Map<string, number>();
    for (const project of PROJECTS) {
      for (const tech of project.stack) {
        counts.set(tech, (counts.get(tech) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tech]) => tech);
  });

  readonly filteredProjects = computed(() => {
    const terms = this.queryTerms();
    const stack = this.selectedStack();

    return PROJECTS.filter((project) => {
      if (stack.length && !stack.every((tech) => project.stack.includes(tech))) {
        return false;
      }
      if (!terms.length) {
        return true;
      }
      return this.matchesTerms(
        this.tokens([
          project.title,
          project.summary,
          project.role,
          project.context,
          project.displayUrl,
          project.period,
          KIND_LABELS[project.kind],
          ...project.stack,
          ...project.highlights,
        ]),
        terms,
      );
    });
  });

  readonly featuredProjects = computed(() =>
    this.filteredProjects().filter((project) => project.featured),
  );
  readonly otherProjects = computed(() =>
    this.filteredProjects().filter((project) => !project.featured),
  );

  readonly filteredExperience = computed(() =>
    this.matchItems(EXPERIENCE, this.query(), (item) => [
      item.company,
      item.role,
      item.summary,
      item.location,
      ...item.stack,
      ...item.highlights,
    ]),
  );

  readonly filteredEducation = computed(() =>
    this.matchItems(EDUCATION, this.query(), (item) => [
      item.school,
      item.title,
      item.summary,
      item.mode,
    ]),
  );

  readonly filteredSkillGroups = computed(() =>
    this.matchItems(SKILL_GROUPS, this.query(), (item) => [item.label, ...item.items]),
  );

  readonly hasActiveFilters = computed(
    () => this.query().trim() !== '' || this.selectedStack().length > 0,
  );

  readonly visibleCount = computed(() => {
    let count = 0;
    if (this.showsProjects()) {
      count += this.filteredProjects().length;
    }
    if (this.showsExperience()) {
      count += this.filteredExperience().length;
    }
    if (this.showsEducation()) {
      count += this.filteredEducation().length;
    }
    if (this.showsSkills()) {
      count += this.filteredSkillGroups().reduce((total, group) => total + group.items.length, 0);
    }
    return count;
  });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.route.queryParamMap.subscribe((params) => {
      const tab = params.get('tab');
      if (this.isValidTab(tab)) {
        this.activeTab.set(tab);
      }
      this.query.set(params.get('q') ?? '');
      this.selectedStack.set(this.parseStack(params.get('stack')));
    });
  }

  showsProjects(): boolean {
    return this.activeTab() === 'Todo' || this.activeTab() === 'Proyectos';
  }

  showsExperience(): boolean {
    return this.activeTab() === 'Todo' || this.activeTab() === 'Experiencia';
  }

  showsEducation(): boolean {
    return this.activeTab() === 'Todo' || this.activeTab() === 'Formacion';
  }

  showsSkills(): boolean {
    return this.activeTab() === 'Todo' || this.activeTab() === 'Skills';
  }

  showsContact(): boolean {
    return this.activeTab() === 'Todo' || this.activeTab() === 'Contacto';
  }

  selectTab(tab: SectionTab): void {
    this.activeTab.set(tab);
    this.syncUrl();
  }

  isTabActive(tab: SectionTab): boolean {
    return this.activeTab() === tab;
  }

  onQueryInput(value: string): void {
    this.query.set(value);
    this.syncUrl();
  }

  isTechSelected(tech: string): boolean {
    return this.selectedStack().includes(tech);
  }

  toggleTech(tech: string): void {
    const current = this.selectedStack();
    this.selectedStack.set(
      current.includes(tech) ? current.filter((item) => item !== tech) : [...current, tech],
    );
    this.syncUrl();
  }

  clearFilters(): void {
    this.query.set('');
    this.selectedStack.set([]);
    this.syncUrl();
  }

  isExternalLink(href: string): boolean {
    return href.startsWith('http://') || href.startsWith('https://');
  }

  onLinkClick(event: Event, href: string): void {
    if (href.startsWith('mailto:')) {
      event.preventDefault();
      this.copyToClipboard(href.replace('mailto:', ''), 'Email copiado al portapapeles');
      return;
    }
    if (href.startsWith('tel:')) {
      event.preventDefault();
      this.copyToClipboard(href.replace('tel:', ''), 'Telefono copiado al portapapeles');
    }
  }

  onThumbnailError(event: Event): void {
    const img = event.target as HTMLImageElement | null;
    if (img && !img.dataset['fallback']) {
      img.dataset['fallback'] = 'true';
      img.src = '/project-placeholder.svg';
    }
  }

  trackProject(_index: number, project: Project): string {
    return project.slug;
  }

  trackById(_index: number, item: ExperienceItem | EducationItem): string {
    return item.id;
  }

  trackSkillGroup(_index: number, group: SkillGroup): string {
    return group.label;
  }

  private matchItems<T>(items: T[], query: string, fields: (item: T) => string[]): T[] {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      return items;
    }
    return items.filter((item) => this.matchesTerms(this.tokens(fields(item)), terms));
  }

  private queryTerms(): string[] {
    return this.query().trim().toLowerCase().split(/\s+/).filter(Boolean);
  }

  private tokens(values: string[]): string[] {
    return values
      .join(' ')
      .toLowerCase()
      .split(/[^a-z0-9+#.]+/)
      .filter(Boolean);
  }

  private matchesTerms(tokens: string[], terms: string[]): boolean {
    return terms.every((term) =>
      tokens.some((token) => token === term || (term.length >= 6 && token.startsWith(term))),
    );
  }

  private syncUrl(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tab: this.activeTab(),
        q: this.query().trim() || null,
        stack: this.selectedStack().join(',') || null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  private parseStack(value: string | null): string[] {
    return value ? value.split(',').filter(Boolean) : [];
  }

  private isValidTab(value: string | null): value is SectionTab {
    return !!value && SECTION_TABS.includes(value as SectionTab);
  }

  private async copyToClipboard(value: string, successMessage: string): Promise<void> {
    const success = await copyText(value);
    this.showClipboardNotice(success ? successMessage : 'No se pudo copiar automaticamente');
  }

  private showClipboardNotice(message: string): void {
    this.clipboardNotice.set(message);
    if (this.clipboardNoticeTimeout) {
      clearTimeout(this.clipboardNoticeTimeout);
    }
    this.clipboardNoticeTimeout = setTimeout(() => {
      this.clipboardNotice.set(null);
      this.clipboardNoticeTimeout = null;
    }, 2200);
  }
}
