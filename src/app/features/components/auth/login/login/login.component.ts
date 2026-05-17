import { Component, inject, signal, WritableSignal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorComponent } from '@app/shared/components/error/error.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PageHeaderComponent } from '@app/shared/components/page-header/page-header.component';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
@Component({
  imports: [
    ReactiveFormsModule,
    ErrorComponent,
    InputTextModule,
    FloatLabelModule,
    PageHeaderComponent ,
  
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
private http = inject(HttpClient);
  private messageService = inject(MessageService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  errMsg: WritableSignal<string> = signal('');
  isLoading: WritableSignal<boolean> = signal(false);
pageTitle = 'Reactive Form';

  loginForm: FormGroup = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],

    password: ['', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{7,20}$/)
    ]]
  });

  validationMessages = {
    email: {
      required: 'Email is required',
      email: 'Please provide valid email'
    },

    password: {
      required: 'Password is required',
      pattern: 'Password must start with uppercase and be valid'
    }
  };
 

  submitLoginForm(): void {

  if (this.loginForm.invalid) {

    this.loginForm.markAllAsTouched();

    this.errMsg.set('Please fix form errors');

    this.messageService.add({
      severity: 'error',
      summary: 'Validation Error',
      detail: 'Please fix form errors',
      life: 2500
    });

    return;
  }

  this.isLoading.set(true);

  this.messageService.add({
    severity: 'info',
    summary: 'Logging In',
    detail: 'Checking credentials...',
    life: 1500
  });

  setTimeout(() => {

  this.isLoading.set(false);


  localStorage.setItem('token', '123');

  this.messageService.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Logged in successfully',
    life: 2000
  });

 
  this.router.navigate(['/guard']);

}, 1000);
}
}