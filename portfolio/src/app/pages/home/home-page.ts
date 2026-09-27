import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContactDialog } from '../../components/contact-dialog/contact-dialog';
import { ProjectCard } from '../../components/project-card/project-card';
import { KIND_LABELS, PROFILE, PROFILE_LINKS, PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, ProjectCard, ContactDialog],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  readonly profile = PROFILE;
  readonly kindLabels = KIND_LABELS;
  readonly profileLinks = PROFILE_LINKS;
  readonly featuredProjects = PROJECTS.filter((project) => project.featured);
  readonly quickTechs = ['Angular', 'Java', 'Spring Boot', 'Tailwind CSS', 'Figma', 'Python'];
  readonly query = signal('');

  constructor(private readonly router: Router) {}

  onQueryInput(value: string): void {
    this.query.set(value);
  }

  search(): void {
    const q = this.query().trim();
    void this.router.navigate(['/resultados'], {
      queryParams: { tab: 'Proyectos', q: q || null },
    });
  }

  onThumbnailError(event: Event): void {
    const img = event.target as HTMLImageElement | null;
    if (img && !img.dataset['fallback']) {
      img.dataset['fallback'] = 'true';
      img.src = '/project-placeholder.svg';
    }
  }
}
