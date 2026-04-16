import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page';
import { ResultsPage } from './pages/results/results-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'resultados', component: ResultsPage },
  { path: '**', redirectTo: '' },
];
