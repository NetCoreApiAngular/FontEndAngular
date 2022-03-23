import { Directive, forwardRef, Input, ElementRef, HostListener } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Configs } from '../../common/configs/configs';

@Directive({
  selector: '[specialSpace][specialAccent]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SpecialSpaceValidatorDirective),
      multi: true
    }
  ]
})
export class SpecialSpaceValidatorDirective implements Validator {
  public specialCharacters = Configs.specialCharactersNotSpace;
  public specialUnicodeLow = Configs.specialCharacterUnicodeLow;
  public specialUnicodeUp = Configs.specialCharacterUnicodeUp;
  validate(c: AbstractControl): { [key: string]: any } {
    const v = c.value;
    if (v) {
      for (let i = 0; i < v.length; i++) {
        if (this.specialCharacters.indexOf(v.charAt(i)) != -1) {
          return { specialSpace: true };
        }
        if (this.specialUnicodeLow.indexOf(v.charAt(i)) != -1) {
          return { specialAccent: true };
        }
        if (this.specialUnicodeUp.indexOf(v.charAt(i)) != -1) {
          return { specialAccent: true };
        }
      }
      return null;
    }
  }
}
