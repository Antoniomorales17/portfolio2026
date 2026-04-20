import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HeaderLink {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  readonly headerLinks: HeaderLink[] = [
    { label: 'GitHub', href: 'https://github.com/Antoniomorales17', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoniomoralesgimenez/', external: true },
    { label: 'CV', href: '/Antonio_Morales_CV.pdf' },
  ];
}
