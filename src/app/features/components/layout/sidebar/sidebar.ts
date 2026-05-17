import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    RouterLink,
    RouterLinkActive,
    ScrollPanelModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {

  collapsed = false;
  formOpen = false;
  tableOpen = false;
  guardOpen = false;
  interceptorOpen = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScreen();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && window.innerWidth < 768) {
        this.collapsed = true;
      }
    });
  }

 
  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  checkScreen() {
    if (window.innerWidth < 768) {
      this.collapsed = true;
    }
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  toggleForm() {
    this.formOpen = !this.formOpen;
  }

  toggleTable() {
    this.tableOpen = !this.tableOpen;
  }
   toggleGuard() {
    this.guardOpen = !this.guardOpen;
  }
    toggleInterceptor() {
    this.interceptorOpen = !this.interceptorOpen;
  }
}