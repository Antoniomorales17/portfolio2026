import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Project, ProjectLinkKind } from '../../data/portfolio.data';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  host: { class: 'block' },
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly kindLabels = input.required<Record<string, string>>();
  readonly imageError = output<Event>();

  readonly linkIcons: Record<ProjectLinkKind, string> = {
    live: 'M12 4a8 8 0 100 16 8 8 0 000-16zm0 0c2.5 2.7 3.8 5.3 3.8 8S14.5 17.3 12 20m0-16C9.5 6.7 8.2 9.3 8.2 12s1.3 5.3 3.8 8',
    code: 'M9 19l-5-5 5-5m6-4l5 5-5 5',
    design: 'M4 20h4l10-10a2.8 2.8 0 10-4-4L4 16v4z',
  };

  onError(event: Event): void {
    this.imageError.emit(event);
  }
}
