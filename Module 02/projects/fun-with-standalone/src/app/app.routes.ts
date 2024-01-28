import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'page-a'},
    { path: 'page-a', 
        loadComponent: () => import('./components/page-a/page-a.component')},
    { path: 'page-b', 
        loadComponent: () => import('./components/page-b/page-b.component')},
    { path: 'page-c', 
        loadComponent: () => import('./components/page-c/page-c.component'), 
        loadChildren:() => import('./components/page-c/c-routes').then(m=>m.cRoutes)
    },
];
