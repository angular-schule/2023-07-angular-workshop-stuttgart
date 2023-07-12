import { ApplicationConfig, isDevMode } from '@angular/core';
import { TitleStrategy, provideRouter, withDebugTracing } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';


import { routes } from './app.routes';
import { CustomTitleStrategy } from './custom-title-strategy';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes /*, withDebugTracing() */),
    provideHttpClient(),
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
    provideStore(),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
