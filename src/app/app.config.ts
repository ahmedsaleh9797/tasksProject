import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, Inject, inject, provideBrowserGlobalErrorListeners, provideEnvironmentInitializer } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { AppTheme } from '../theme/my-preset';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { IconloaderService } from './core/services/iconloader.service';

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    providePrimeNG(AppTheme),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding(),
    ),
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
importProvidersFrom(FormsModule)   ,
 provideAngularSvgIcon(),
provideEnvironmentInitializer(() => {
      inject(IconloaderService).loadIcons();
    }),

  ],
};
