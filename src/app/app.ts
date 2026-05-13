import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './features/components/layout/sidebar/sidebar';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar,ToastModule],
  template: `

   <div class="flex h-screen overflow-hidden">


  <aside class=" h-screen border-r border-gray-200">
    <app-sidebar></app-sidebar>
  </aside>


  <main class="flex-1 h-screen overflow-y-auto px-6 pt-3">
     <p-toast position="top-right" />
    
    <router-outlet></router-outlet>
  </main>

</div>
  `
  ,
  styleUrl: './app.css'
})
export class App {

}
