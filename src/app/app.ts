import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './features/components/layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  template: `

   <div class="flex h-screen overflow-hidden">


  <aside class=" h-screen border-r border-gray-200">
    <app-sidebar></app-sidebar>
  </aside>


  <main class="flex-1 h-screen overflow-y-auto p-6">
    <router-outlet></router-outlet>
  </main>

</div>
  `
  ,
  styleUrl: './app.css'
})
export class App {

}
