import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Configs } from '../../common/configs/configs';

@Directive({
  selector: '[specialCharacterNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SpecialCharacterNumberValidatorDirective),
      multi: true
    }
  ]
})
export class SpecialCharacterNumberValidatorDirective implements Validator {
  public specialCharacters = Configs.specialCharacters;
  public notNumber = Configs.notNumber;
  validate(c: AbstractControl): { [key: string]: any } {
    const v = c.value;
    if (v) {
      for (let i = 0; i < v.length; i++) {
        if (this.specialCharacters.indexOf(v.charAt(i)) != -1) {
          return { specialCharacter: true };
        }
        if (this.notNumber.indexOf(v.charAt(i)) != -1) {
          return { notNumber: true };
        }
      }
      return null;
    }
  }
}
