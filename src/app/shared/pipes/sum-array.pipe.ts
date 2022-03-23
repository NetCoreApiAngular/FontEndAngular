import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'SumArray' })
export class SumArray implements PipeTransform {

  transform(array: any[], property: string) {
    if (array && array.length > 0) {
      return array.map(item => item[property] ? (typeof item[property] == 'string' ? +item[property].replaceAll(',', '') : +item[property]) : 0)
        .reduce((a, b) => { return a + b })
    }
    return 0
  }
}
