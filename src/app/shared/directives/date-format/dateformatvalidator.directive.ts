import { ElementRef, HostListener } from '@angular/core';
import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';
import moment from 'moment';

@Directive({
    selector: '[appDateFormatvalidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useClass: DateFormatValidatorDirective,
            multi: true
        }
    ]
})
export class DateFormatValidatorDirective implements Validator {
    validator: ValidatorFn;
    constructor(private elementRef: ElementRef) {
        this.validator = this.DateFormatValidator();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    DateFormatValidator(): ValidatorFn {
        return (control: FormControl) => {
            if (control && this.elementRef.nativeElement.value && !moment(this.elementRef.nativeElement.value, 'DD/MM/YYYY', true).isValid()) {
                return { 'dateValidator': true };
            }
            return null;
        }
    }

    // @HostListener("dateChange", ["$event"]) onInput(value) {
    //     this.elementRef.nativeElement.value = value;
    // }
}