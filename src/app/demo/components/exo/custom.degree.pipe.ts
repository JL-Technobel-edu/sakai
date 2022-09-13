import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Cdegree'
})
export class CustomDegreePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {

      return ((value * 9/5) + 32).toString();

  }

}