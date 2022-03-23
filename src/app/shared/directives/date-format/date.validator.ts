import { AbstractControl } from '@angular/forms';
import moment from 'moment';

export class DateValidator {
    static dateValidator(AC: AbstractControl) {
        if (AC && AC.value && !moment(AC.value, 'DD/MM/YYYY', true).isValid()) {
            return { 'dateValidator': true };
        }
        return null;
    }
}