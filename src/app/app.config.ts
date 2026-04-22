import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { AppTheme } from '../theme/my-preset';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG(AppTheme),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding(),
    ),
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    
    

  ],
};
