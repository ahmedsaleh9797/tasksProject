import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorComponent } from '@app/shared/components/error/error.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ErrorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  private router: Router = inject(Router);

  errMsg: WritableSignal<string> = signal<string>('');
  isLoading: WritableSignal<boolean> = signal<boolean>(false);

  formData = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    phone: ''
  };

  validationMessages = {
    name: {
      required: 'Name is required',
      minlength: 'Minimum 3 characters',
      maxlength: 'Maximum 20 characters'
    },

    email: {
      required: 'Email is required',
      email: 'Please provide valid email'
    },

    password: {
      required: 'Password is required',
      pattern: 'Password must start with uppercase and be valid'
    },

    rePassword: {
      required: 'Repassword is required',
      notmatch: 'Passwords do not match'
    },

    phone: {
      required: 'Phone is required',
      pattern: 'Phone is not valid'
    }
  };

  passwordMatch(): boolean {
    return this.formData.password === this.formData.rePassword;
  }

  submitRegisterForm(form: NgForm) {

    if (form.invalid || !this.passwordMatch()) {
      form.control.markAllAsTouched();
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