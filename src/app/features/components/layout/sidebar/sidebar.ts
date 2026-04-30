import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    RouterLink,
    ScrollPanelModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  collapsed = false;

  formOpen = false;
  tableOpen = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  toggleForm() {
    this.formOpen = !this.formOpen;
  }

  toggleTable() {
    this.tableOpen = !this.tableOpen;
  }

}