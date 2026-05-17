import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ToastService {

  constructor(private messageService: MessageService) {}

  error(msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: msg
    });
  }

  success(msg: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: msg
    });
  }
}