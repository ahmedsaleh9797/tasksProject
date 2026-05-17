import { Routes } from '@angular/router';
import { authGuard } from './features/components/auth/auth-guard';

export const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },    
 {path:'home', loadComponent : () => import ('./features/components/home/home/home.component').then ((c)=> c.HomeComponent),title:'home'},   
 {path:'register', loadComponent : () => import ('./features/components/auth/register/register.component').then ((c)=> c.RegisterComponent),title: 'register'},   
 {path:'login',loadComponent : () => import ('./features/components/auth/login/login/login.component').then ((c)=> c.LoginComponent),title:'login'} ,          
  {
    path: 'formarray',
    loadComponent: () =>
      import('./features/components/formarray/formarray.component')
        .then(m => m.FormarrayComponent),
    title: 'Form Array'
  } ,
  {
    path:'formdisable',
    loadComponent: () => 
      import('./features/components/formdisable/formdisable.component')
        .then(m => m.FormdisableComponent),
    title: 'Form Disable' 
  },
  {
    path: 'formchild',
    loadComponent: () =>
      import('./features/components/formchild/formchild.component')
        .then(m => m.FormchildComponent),
    title: 'Form Child'
  },
  {
    path: 'crudtable',
    loadComponent: () =>
      import('./features/components/crud-table/crud-table.component')
        .then(m => m.CrudTableComponent),
    title: 'Crud Table'
  },
  {
    path: 'guard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/components/guard/guard.component')
        .then(m => m.GuardComponent),
    title: 'Guard'
  },
   {
    path: 'interceptor',
    loadComponent: () =>
      import('./features/components/interceptor/interceptor.component')
        .then(m => m.InterceptorComponent),
    title: 'Interceptor'
  },


    
];
