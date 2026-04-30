import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validation',
  standalone: true
})
export class ValidationPipe implements PipeTransform {

  transform(messages: any, errors: any): string | null {

    if (!messages || !errors) return null;

    const errorKeys = Object.keys(errors);

    if (!errorKeys.length) return null;

    const firstErrorKey = errorKeys[0];

    return messages[firstErrorKey] ?? null;
  }
}