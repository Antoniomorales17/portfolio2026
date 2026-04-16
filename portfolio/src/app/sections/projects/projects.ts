import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = [
    { name: 'Wizz Mail', type: 'Backend + AI', stack: 'React, JavaScript, Python, Flask, PostgreSQL' },
    { name: 'AlmeriaFoodMap', type: 'Frontend', stack: 'Python, Django, SQLite, Railway' },
    { name: 'Philosophy App', type: 'Frontend', stack: 'React, Tailwind' },
    { name: 'finDeveloper', type: 'Frontend', stack: 'React, Tailwind' },
    { name: 'NonoStore', type: 'Frontend', stack: 'React, Tailwind' },
    { name: 'Quiz VideoGames', type: 'Frontend', stack: 'React, Tailwind' },
    { name: 'Gif & Photo Search', type: 'Frontend', stack: 'React, Tailwind' },
    { name: 'tuCita', type: 'Backend', stack: 'Java, Spring Boot, SQL' },
    { name: 'Agencia & Sistema de reservas', type: 'Backend', stack: 'Java, Spring Boot, SQL, JWT' },
  ];
}
