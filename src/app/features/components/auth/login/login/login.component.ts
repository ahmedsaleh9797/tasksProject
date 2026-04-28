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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ErrorComponent,
    InputTextModule,
    FloatLabelModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  private router = inject(Router);
  private fb = inject(FormBuilder);

  errMsg: WritableSignal<string> = signal('');
  isLoading: WritableSignal<boolean> = signal(false);

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
      return;
    }

    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
      this.router.navigate(['/home']);
    }, 1000);
  }

}