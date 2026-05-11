import { Component, inject } from '@angular/core';

import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule
} from '@angular/forms';

import { ErrorComponent } from '@app/shared/components/error/error.component';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [
    ReactiveFormsModule,

    ErrorComponent,

    InputTextModule,
    PasswordModule,
    FloatLabelModule
  ],
  templateUrl: './account-info.component.html'
})
export class AccountInfoComponent {

  private rootFormGroup = inject(FormGroupDirective);

  accountForm!: FormGroup;

  validationMessages = {

    email: {
      required: 'Email is required',
      email: 'Please enter valid email'
    },

    password: {
      required: 'Password is required',
      pattern: 'Password must start with uppercase'
    }

  };

  ngOnInit(): void {

    this.accountForm =
      this.rootFormGroup.control.get('accountInfo') as FormGroup;

  }

}