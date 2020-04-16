import { Injectable } from '@angular/core';
import { MONTHS } from '../mocks/locales';


@Injectable({
    providedIn: 'root'
})
export class ChartUtilsService {

    /**
     * 
     * @param string[]: the dates with format Y-m
     * @return string[]: array containing months 
     */
    getChartLabelsForMonths(dates: string[]): string[] {
        return dates.map(month => {
            const [y, m] = month.split('-').map(s => Number(s));
            const date = new Date(y, m, 0);

            // return `${date.getUTCDate()} ${MONTHS.fr[date.getMonth()]}`;
            return `${MONTHS.fr[date.getMonth()]}`;
        });
    }

    /**
     * 
     * @param data the JSON resluts
     */
    transFormJsonForBarChart(data: any[]) {
        const dates = Object.keys(data);
        const transformedData = new Map<string, number[]>();

        dates.forEach(month => {
            Object.entries(data[month]).forEach(i => {
              const value: number = Number.parseInt(i[1].toString())
              const key: string = i[0];
              
              if(transformedData.has(key)) {
                transformedData.get(key).push(value)
              } else {
                transformedData.set(key, [value]);
              }
            });
        });

        return transformedData;
    }

    formatMillions(num) {
      num = Number(num);
      return num != 0 ? (Math.sign(num)* Number((Math.abs(num) / 1_000_000).toFixed(1)) ) + ' M' : num;
    }
}