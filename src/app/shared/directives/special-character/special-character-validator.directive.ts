import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Configs } from '../../common/configs/configs';

@Directive({
  selector: '[specialCharacter]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SpecialCharacterValidatorDirective),
      multi: true
    }
  ]
})
export class SpecialCharacterValidatorDirective implements Validator {
  public specialCharacters = Configs.specialCharacters;
  validate(c: AbstractControl): { [key: string]: any } {
    const v = c.value;
    if (v) {
      for (let i = 0; i < v.length; i++) {
        if (this.specialCharacters.indexOf(v.charAt(i)) != -1) {
          return { specialCharacter: true };
        }
      }
      return null;
    }
  }
}
