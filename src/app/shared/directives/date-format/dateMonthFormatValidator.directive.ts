import { ElementRef, HostListener } from '@angular/core';
import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';
import moment from 'moment';

@Directive({
    selector: '[appDateMonthFormatvalidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useClass: DateMonthFormatValidatorDirective,
            multi: true
        }
    ]
})
export class DateMonthFormatValidatorDirective implements Validator {
    validator: ValidatorFn;
    constructor(private elementRef: ElementRef) {
        this.validator = this.DateFormatValidator();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    DateFormatValidator(): ValidatorFn {
        return (control: FormControl) => {
            if (control && this.elementRef.nativeElement.value && !moment(this.elementRef.nativeElement.value, 'MM/YYYY', true).isValid()) {
                return { 'dateMonthValidator': true };
            }
            return null;
        }
    }

    // @HostListener("dateChange", ["$event"]) onInput(value) {
    //     this.elementRef.nativeElement.value = value;
    // }
}