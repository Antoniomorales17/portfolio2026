import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services = [
    {
      title: 'Diseno Web y Maquetacion',
      description:
        'Creo experiencias visuales atractivas y funcionales, cuidando usabilidad, jerarquia y detalle.',
    },
    {
      title: 'Desarrollo Front-End con React',
      description:
        'Construyo interfaces interactivas y dinamicas, enfocadas en rendimiento, accesibilidad y escalabilidad.',
    },
    {
      title: 'Experiencia en Java y Spring Boot',
      description:
        'Tambien trabajo en back-end con APIs y sistemas robustos para soportar aplicaciones modernas.',
    },
  ];
}
