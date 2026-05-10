import { Component, Input } from '@angular/core';
import { ValidationPipe } from '@app/shared/pipes/validation-pipe';
import { NgModel, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  imports: [ValidationPipe],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {

  @Input() control!: AbstractControl | NgModel | null;
  @Input() errorMessages!: any;

  @Input() useDirty: boolean = false;
  @Input() useTouched: boolean = true;

  get currentControl(): AbstractControl | null {
    if (!this.control) return null;

    return this.control instanceof NgModel
      ? this.control.control
      : this.control;
  }

  shouldShowErrors(): boolean {
    const ctrl = this.currentControl;
    if (!ctrl) return false;

    const isTouched = ctrl.touched;
    const isDirty = ctrl.dirty;

    if (this.useDirty && this.useTouched) {
      return ctrl.invalid && (isTouched || isDirty);
    }

    if (this.useDirty) {
      return ctrl.invalid && isDirty;
    }

    if (this.useTouched) {
      return ctrl.invalid && isTouched;
    }

    return ctrl.invalid;
  }

  get errors(): any {
    return this.currentControl?.errors;
  }
}