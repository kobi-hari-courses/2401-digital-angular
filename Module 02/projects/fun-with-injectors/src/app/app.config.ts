import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ThisService } from './services/this.service';
import { OtherService } from './services/other.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    OtherService
  ]
};
