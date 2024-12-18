import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
})
export class SqrtPipe implements PipeTransform {
  transform(value: number): number {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Value must be a non-negative number');
    }
    return Math.sqrt(value);
  }
}
