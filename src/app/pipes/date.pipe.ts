import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatFR'
})
export class DateFormatFRPipe implements PipeTransform {

  transform(value: string, separator: string = '/'): string {
    if(!value) {
      return '';
    }
    const [year, month, day] = value.split('-');

    return day + separator + month + separator + year;
  }
}

@Pipe({
  name: 'dateFormatEN'
})
export class DateFormatENPipe implements PipeTransform {

  transform(value: string, separator: string = '-'): string {
    const [day, month, year] = value.split('/');

    return year + separator + month + separator + day;
  }
}
