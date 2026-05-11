import { Component, inject } from '@angular/core';

import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule
} from '@angular/forms';

import { ErrorComponent } from '@app/shared/components/error/error.component';

import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [
    ReactiveFormsModule,

    ErrorComponent,

    InputTextModule,
    FloatLabelModule
  ],
  templateUrl: './personal-info.component.html'
})
export class PersonalInfoComponent {

  private rootFormGroup = inject(FormGroupDirective);

  personalForm!: FormGroup;

  validationMessages = {

    firstName: {
      required: 'First name is required',
      minlength: 'Minimum 3 characters'
    },

    lastName: {
      required: 'Last name is required',
      minlength: 'Minimum 3 characters'
    }

  };

  ngOnInit(): void {

    this.personalForm =
      this.rootFormGroup.control.get('personalInfo') as FormGroup;

  }

}