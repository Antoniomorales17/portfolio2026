import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly isOpen = signal(false);

  protected readonly links = [
    { label: 'Home', href: '#home' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Contactame', href: '#contacto' },
  ];

  protected toggleMenu(): void {
    this.isOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isOpen.set(false);
  }
}
