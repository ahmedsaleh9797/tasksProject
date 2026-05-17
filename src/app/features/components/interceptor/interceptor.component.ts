import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-interceptor',
  imports: [],
  templateUrl: './interceptor.component.html',
  styleUrl: './interceptor.component.scss',
})
export class InterceptorComponent implements OnInit  {
    private http = inject(HttpClient);
 ngOnInit() {
  this.http.get('https://invalid-url-123456.com').subscribe();
}
}
