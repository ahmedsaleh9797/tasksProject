import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toast = inject(ToastService);

  return next(req).pipe(
    catchError((err) => {

      let message = 'Something went wrong';

      if (err.status === 0) {
        message = 'Network error';
      }
      else if (err.status === 401) {
        message = 'Unauthorized';
      }
      else if (err.status === 403) {
        message = 'Forbidden';
      }
      else if (err.status === 500) {
        message = 'Server error';
      }
      else if (err.error?.message) {
        message = err.error.message;
      }

      toast.error(message);

      return throwError(() => err);
    })
  );
};