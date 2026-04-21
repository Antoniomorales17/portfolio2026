import { Component } from '@angular/core';

interface ProjectItem {
  name: string;
  type: string;
  stack: string;
  github: string;
  demo?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects: ProjectItem[] = [
    {
      name: 'Cabo Indalo',
      type: 'Frontend',
      stack: 'Angular, Tailwind',
      github: 'https://github.com/Antoniomorales17/cabo-indalo',
      demo: 'https://www.caboindalo.es/es',
    },
    {
      name: 'Wizz Mail',
      type: 'Backend + AI',
      stack: 'React, JavaScript, Python, Flask, PostgreSQL',
      github: 'https://github.com/Antoniomorales17/WizzMail',
    },
    {
      name: 'Philosophy App',
      type: 'Frontend',
      stack: 'React, Tailwind',
      github: 'https://github.com/Antoniomorales17/Philosophy-App',
      demo: 'https://juanmogimenez.vercel.app/',
    },
    {
      name: 'finDeveloper',
      type: 'Frontend',
      stack: 'React, Tailwind',
      github: 'https://github.com/Antoniomorales17/finDeveloper',
      demo: 'https://findeveloper.vercel.app/',
    },
    {
      name: 'NonoStore',
      type: 'Frontend',
      stack: 'React, Tailwind',
      github: 'https://github.com/Antoniomorales17/NonoStore',
      demo: 'https://nonostore.vercel.app/',
    },
    {
      name: 'Quiz VideoGames',
      type: 'Frontend',
      stack: 'React, Tailwind',
      github: 'https://github.com/Antoniomorales17/QuizGames',
      demo: 'https://quizvideogames.vercel.app/',
    },
    {
      name: 'Gif & Photo Search',
      type: 'Frontend',
      stack: 'React, Tailwind',
      github: 'https://github.com/Antoniomorales17/Gif-Photo-Search-App',
      demo: 'https://gifphotosearch.vercel.app/',
    },
    {
      name: 'JobCompany',
      type: 'Backend',
      stack: 'Java, SQL, JPA',
      github: 'https://github.com/Antoniomorales17/MoralesGimenez_pruebatec1',
    },
    {
      name: 'tuCita',
      type: 'Backend',
      stack: 'Java, Spring Boot, SQL',
      github: 'https://github.com/Antoniomorales17/MoralesAntonio_pruebatec2',
    },
    {
      name: 'Agencia & Sistema de reservas',
      type: 'Backend',
      stack: 'Java, Spring Boot, SQL, JWT',
      github: 'https://github.com/Antoniomorales17/Agencia-Java-Spring',
    },
    {
      name: 'WebMentor',
      type: 'Diseno UX/UI',
      stack: 'Figma, UX',
      github: 'https://www.figma.com/design/4BylQgWeCxRfaj84zN1uD1/WebMentor-hi-fi?node-id=1-69&t=6KpiaYaSRuhzHyCO-0',
    },
  ];
}
