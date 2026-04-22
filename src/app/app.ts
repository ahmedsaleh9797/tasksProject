import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './features/components/layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  template: `

   <div class="flex min-h-screen flex-col justify-between ">
   <app-sidebar></app-sidebar>
   <router-outlet></router-outlet>
   </div>
  `
  ,
  styleUrl: './app.css'
})
export class App {

}
