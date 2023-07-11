import { ApplicationConfig } from '@angular/core';
import { TitleStrategy, provideRouter, withDebugTracing } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';


import { routes } from './app.routes';
import { CustomTitleStrategy } from './custom-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes /*, withDebugTracing() */),
    provideHttpClient(),
    { provide: TitleStrategy, useClass: CustomTitleStrategy }
  ]
};
