import { Route } from '@angular/router';
import { example1Routes } from '@esbuild-demo/example1';
import { example4Routes } from '@esbuild-demo/example-4';

export const appRoutes: Route[] = [
  ...example1Routes,
  ...example4Routes
];
