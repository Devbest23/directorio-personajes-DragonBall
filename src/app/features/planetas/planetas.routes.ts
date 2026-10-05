import { Routes } from '@angular/router';

export const PLANETAS_ROUTES: Routes = [
  {
    path: '',
    title: 'Planetas',
    loadComponent: () => import('./pages/lista-planetas/lista-planetas').then((m) => m.ListaPlanetas),
  },
];
