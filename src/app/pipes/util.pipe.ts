import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkable'
})
export class CheckablePipe implements PipeTransform {

  transform(items: any[], isChecked: boolean = false): unknown {
    items?.map(item => {
      return {
        ...item,
        checked: isChecked
      };
    });

    return items;
  }
}

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(num, currency: string = 'CFA'): string {
    // Not working on Safari
    // return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ') + ` ${currency}`;

    return String(num).split(',').join(' ') + ` ${currency}`;
  }
}
