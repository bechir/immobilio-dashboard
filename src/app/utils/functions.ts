import { Predicate } from "@angular/core";

export async function asyncFilter(arr: any[], predicate: Predicate<any>): Promise<any[]> {
    const result = await Promise.all(arr.map(predicate));

    return arr.filter((_v, index) => result[index]);
}
