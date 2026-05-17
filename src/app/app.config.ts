import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, inject, provideBrowserGlobalErrorListeners, provideEnvironmentInitializer } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { AppTheme } from '../theme/my-preset';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { IconloaderService } from './core/services/iconloader.service';
import { errorInterceptor } from './core/interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    providePrimeNG(AppTheme),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding(),
    ),
    provideHttpClient(withFetch(),withInterceptors([errorInterceptor])),
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(FormsModule),
    provideAngularSvgIcon(),
    provideEnvironmentInitializer(() => {
      inject(IconloaderService).loadIcons();
    }),
  ],
};