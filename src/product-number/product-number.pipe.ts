import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fpProductNumber' })
export class ProductNumberPipe implements PipeTransform {
  transform(input: string): string {
    if (input) {
      if (input.length !== 12) {
        return 'Unrecognized UPC: ' + input;
      }
      return input.substr(6, 5);
    } else {
      return 'Missing UPC';
    }
  }
}
