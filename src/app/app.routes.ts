import { Routes } from '@angular/router';

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
  }


    
];
