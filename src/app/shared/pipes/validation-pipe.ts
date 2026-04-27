import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validation',
  standalone: true
})
export class ValidationPipe implements PipeTransform {

  transform(messages: any, errors: any): string | null {

    if (!messages || !errors) return null;

    const firstErrorKey = Object.keys(errors)[0];

    return messages[firstErrorKey] || null;
  }
}