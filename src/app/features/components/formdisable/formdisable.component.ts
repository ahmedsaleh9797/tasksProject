import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ErrorComponent } from '@app/shared/components/error/error.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formdisable',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ErrorComponent,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ToastModule,
    FloatLabelModule
  ],
  providers: [MessageService],
  templateUrl: './formdisable.component.html',
  styleUrl: './formdisable.component.scss',
})
export class FormdisableComponent {

  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);

  profileForm: FormGroup;

  editMode: any = {
    firstName: false,
    lastName: false,
    email: false,
    password: false
  };

  validationMessages = {

    firstName: {
      required: 'First name is required',
      minlength: 'Minimum 3 characters'
    },

    lastName: {
      required: 'Last name is required',
      minlength: 'Minimum 3 characters'
    },

    email: {
      required: 'Email is required',
      email: 'Please enter valid email'
    },

    password: {
      required: 'Password is required',
      pattern: 'Password must start with uppercase'
    }

  };

  constructor() {

    this.profileForm = this.fb.group({

      firstName: [{
        value: 'Ahmed',
        disabled: true
      }, [
        Validators.required,
        Validators.minLength(3)
      ]],

      lastName: [{
        value: 'Saleh',
        disabled: true
      }, [
        Validators.required,
        Validators.minLength(3)
      ]],

      email: [{
        value: 'ahmed@gmail.com',
        disabled: true
      }, [
        Validators.required,
        Validators.email
      ]],

      password: [{
        value: 'A1w2q1w2q',
        disabled: true
      }, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{7,20}$/)
      ]]

    });

  }

  toggleEdit(field: string): void {

    const control = this.profileForm.get(field);

    if (!this.editMode[field]) {

      this.editMode[field] = true;
      control?.enable();

    } else {

      control?.markAsTouched();

      if (control?.invalid) {
        return;
      }

      this.editMode[field] = false;
      control?.disable();

      this.messageService.add({
        severity: 'success',
        summary: 'Saved',
        detail: `${field} updated successfully`
      });

    }

  }

}