import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    args = args.toLocaleLowerCase()

    return value.filter((val) => {
      let rVal = false;
      const items = Object.values(val);

      items.forEach(item => {
        rVal = rVal || item.toString().toLocaleLowerCase().includes(args);
      })

      return rVal;
    })
  }

}
