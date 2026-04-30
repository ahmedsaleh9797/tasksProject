import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ErrorComponent } from '@app/shared/components/error/error.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PageHeaderComponent } from '@app/shared/components/page-header/page-header.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    ErrorComponent,
    InputTextModule,
    FloatLabelModule,
    PageHeaderComponent,
  
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  private messageService = inject(MessageService);
  errMsg: WritableSignal<string> = signal('');
  isLoading: WritableSignal<boolean> = signal(false);
  isRegistered: WritableSignal<boolean> = signal(false);
pageTitle = 'Template Driven Form';

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


    if (this.isRegistered()) {
      this.isRegistered.set(false);

      this.messageService.add({
        severity:'info',
        summary:'Edit Mode',
        detail:'You can edit your data now'
      });

      return;
    }

    if (form.invalid || !this.passwordMatch()) {

      form.control.markAllAsTouched();

      this.errMsg.set('Please fix form errors');

      this.messageService.add({
        severity:'error',
        summary:'Validation Error',
        detail:'Please fix form errors'
      });

      return;
    }

    this.isLoading.set(true);

    this.messageService.add({
      severity:'info',
      summary:'Submitting',
      detail:'Creating your account...'
    });

    setTimeout(() => {

      this.isLoading.set(false);

   
      this.isRegistered.set(true);

      this.messageService.add({
        severity:'success',
        summary:'Success',
        detail:'Registered successfully'
      });

    },1000);

  }

}