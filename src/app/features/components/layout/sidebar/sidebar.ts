import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-sidebar',
  imports: [
    DrawerModule,
    ButtonModule,
    AvatarModule,
    RippleModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  sidebarVisible = false;

  formOpen = false;
  tableOpen = false;

  toggleForm() {
    this.formOpen = !this.formOpen;
  }

  toggleTable() {
    this.tableOpen = !this.tableOpen;
  }

}