import { Route } from "@angular/router";
import { C1Component } from "./c-1/c-1.component";
import { C2Component } from "./c-2/c-2.component";

export const cRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: '1'},
    { path: '1', component: C1Component }, 
    { path: '2', component: C2Component }
]