import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Configs } from '../../common/configs/configs';

@Directive({
  selector: '[specialCharacterLetter]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SpecialCharacterLetterValidatorDirective),
      multi: true
    }
  ]
})
export class SpecialCharacterLetterValidatorDirective implements Validator {
  public specialCharacters = Configs.specialCharacters;
  public specialLetter = Configs.specialLetter;
  validate(c: AbstractControl): { [key: string]: any } {
    const v = c.value;
    if (v) {
      for (let i = 0; i < v.length; i++) {
        if (this.specialCharacters.indexOf(v.charAt(i)) != -1) {
          return { specialCharacter: true };
        }
        if (this.specialLetter.indexOf(v.charAt(i)) != -1) {
          return { specialLetter: true };
        }
      }
      return null;
    }
  }
}
