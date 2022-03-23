import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeChar'
})
export class RemoveCharPipe implements PipeTransform {
    transform(value: string, char: string): string {
        if (value !== undefined && value !== null) {
            return value.replaceAll(char, "");
        } else {
            return "";
        }
    }
}