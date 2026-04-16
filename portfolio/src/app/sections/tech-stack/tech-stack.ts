import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css',
})
export class TechStack {
  protected readonly technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Python',
    'SQL',
    'GitHub',
    'Bootstrap',
    'Tailwind',
    'Postman',
    'Flask',
    'Java',
    'Spring Boot',
  ];
}
