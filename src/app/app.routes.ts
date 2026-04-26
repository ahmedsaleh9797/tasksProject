import { Routes } from '@angular/router';

export const routes: Routes = [
 { path: '', redirectTo: 'formarray', pathMatch: 'full' },                     
  {
    path: 'formarray',
    loadComponent: () =>
      import('./features/components/formarray/formarray.component')
        .then(m => m.FormarrayComponent),
    title: 'Form Array'
  }

    
];
