import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  protected readonly work = [
    {
      role: 'E-commerce Manager',
      company: 'Amvos Digital',
      year: '2021',
      detail:
        'Analisis en profundidad de mercados B2C y B2B para detectar oportunidades de crecimiento y mejora.',
    },
    {
      role: 'Tecnico Superior en Investigacion de Mercados',
      company: 'Ayuntamiento de Almeria',
      year: '2018',
      detail:
        'Participacion en un proyecto integral sobre el mercado de turoperadores y tendencias turisticas locales.',
    },
  ];

  protected readonly education = [
    { title: 'Java / Spring Boot', center: 'Hack A Boss', year: '2024' },
    { title: 'Full Stack Developer', center: '4Geeks Academy', year: '2023' },
    { title: 'Master en E-commerce', center: 'UNIR', year: '2019' },
    {
      title: 'Grado en Marketing e Investigacion de Mercados',
      center: 'Universidad de Almeria (UAL)',
      year: '2015',
    },
  ];
}
