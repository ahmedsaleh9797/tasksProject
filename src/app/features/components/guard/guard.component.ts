import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guard',
  imports: [],
  templateUrl: './guard.component.html',
  styleUrl: './guard.component.scss',
})
export class GuardComponent {

  private readonly router = inject(Router);

  logout(): void {

    localStorage.removeItem('token');


    this.router.navigate(['/login']);
  }

}