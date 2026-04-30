import { Component, Input } from '@angular/core';
import { ValidationPipe } from '@app/shared/pipes/validation-pipe';
import { NgModel, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [ValidationPipe],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {

  @Input() control!: AbstractControl | NgModel | null;
  @Input() errorMessages!: any;

  // 🔥 الجديد: نتحكم هل نستخدم dirty ولا touched
  @Input() useDirty: boolean = false;

  // helper عشان نتعامل مع NgModel و Reactive
  get currentControl(): AbstractControl | null {
    if (!this.control) return null;

    return this.control instanceof NgModel
      ? this.control.control
      : this.control;
  }

  // 🔥 الشرط الأساسي لعرض الخطأ
  shouldShowErrors(): boolean {
    const ctrl = this.currentControl;
    if (!ctrl) return false;

    if (this.useDirty) {
      return ctrl.invalid && ctrl.dirty;
    }

    return ctrl.invalid && ctrl.touched;
  }

  // errors
  get errors(): any {
    return this.currentControl?.errors;
  }
}