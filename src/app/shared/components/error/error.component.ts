import { Component, Input } from '@angular/core';

import { ValidationPipe } from '@app/shared/pipes/validation-pipe';
import { NgModel,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  imports: [ValidationPipe],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  
})
export class ErrorComponent {
 @Input() control!: AbstractControl | NgModel | null;
  @Input() errorMessages!: any

}
