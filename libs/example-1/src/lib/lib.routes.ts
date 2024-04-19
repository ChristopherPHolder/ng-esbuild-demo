import { Route } from '@angular/router';

export const example1Routes: Route[] = [
  {
    path: '1',
    loadComponent: () => import('./example-1.component') },
];
