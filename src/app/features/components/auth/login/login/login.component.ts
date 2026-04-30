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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ErrorComponent,
    InputTextModule,
    FloatLabelModule,
    PageHeaderComponent ,
    ToastModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  private router = inject(Router);
  private fb = inject(FormBuilder);

  errMsg: WritableSignal<string> = signal('');
  isLoading: WritableSignal<boolean> = signal(false);
private messageService = inject(MessageService);


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

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Logged in successfully',
      life: 2000
    });

    this.router.navigate(['/home']);

  }, 1000);
}
}