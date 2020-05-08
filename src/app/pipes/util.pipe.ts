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
