import { Route } from '@angular/router';

export const example4Routes: Route[] = [
  { path: '4', loadComponent: () => import('./example-4.component') },
];
