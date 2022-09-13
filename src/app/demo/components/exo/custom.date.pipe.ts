import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';

@Pipe({
  name: 'Cdate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {

      return moment.duration(value, 'seconds').format('dd:hh:mm:ss');

  }

}