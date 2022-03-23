import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterKey'
})

export class FilterKeyPipe implements PipeTransform {
    transform(items: any[], key: string, value: any): any[] {
        if (!items) return [];
        if (!key) return items;

        return items.filter(item => item[key] == value );
    }
}
