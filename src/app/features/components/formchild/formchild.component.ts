import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { AccountInfoComponent } from '../account-info/account-info.component';

@Component({
  selector: 'app-formchild',
  imports: [ReactiveFormsModule, ButtonModule, PersonalInfoComponent, AccountInfoComponent],
  templateUrl: './formchild.component.html',
  styleUrl: './formchild.component.scss',
})
export class FormchildComponent {
     private fb = inject(FormBuilder);

  registerForm: FormGroup;

  constructor() {

    this.registerForm = this.fb.group({

      personalInfo: this.fb.group({

        firstName: ['', [
          Validators.required,
          Validators.minLength(3)
        ]],

        lastName: ['', [
          Validators.required,
          Validators.minLength(3)
        ]]

      }),

      accountInfo: this.fb.group({

        email: ['', [
          Validators.required,
          Validators.email
        ]],

        password: ['', [
          Validators.required,
          Validators.pattern(/^[A-Z][a-z0-9]{7,20}$/)
        ]]

      })

    });

  }

  submitForm(): void {

    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);

  }

}