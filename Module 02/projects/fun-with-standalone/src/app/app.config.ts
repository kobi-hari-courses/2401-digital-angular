import { ApplicationConfig } from '@angular/core';
import { MY_NUMBER } from './my-number.token';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), 
    {provide: MY_NUMBER, useValue: 42}
  ]
};
