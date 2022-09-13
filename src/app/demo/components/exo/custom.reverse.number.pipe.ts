import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CrevNumber'
})
export class CustomReverseNumberPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    
      return value.toString().split('').reverse().join('');

  }

}