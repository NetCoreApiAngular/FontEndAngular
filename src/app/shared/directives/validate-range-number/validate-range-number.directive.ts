import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validateRangeNumber][formControlName],[validateRangeNumber][formControl],[validateRangeNumber][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RangeNumberValidator, multi: true }]
})
export class RangeNumberValidator implements Validator{

  @Input() maxRangeNumber: number;
  @Input() minRangeNumber: number;

  constructor(
    @Attribute('validateRangeNumber') public validateRangeNumber: string,
  ) { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    const value = control.value;
    const max = (typeof this.maxRangeNumber === 'number') ? this.maxRangeNumber : 100;
    const min = (typeof this.maxRangeNumber === 'number') ? this.minRangeNumber : 0;

    if (value === null) {
      return;
    } else {
      return (value < min || value > max) ? {validateRangeNumber: true} : null;
    }
  }

}
