import { Directive, forwardRef, Input, ElementRef, HostListener } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Configs } from '../../common/configs/configs';

@Directive({
  selector: '[specialUnicode][specialCharacterUni]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SpecialUnicodeValidatorDirective),
      multi: true
    }
  ]
})
export class SpecialUnicodeValidatorDirective implements Validator {
  public specialUnicodeLow = Configs.specialCharacterUnicodeLow;
  public specialUnicodeUp = Configs.specialCharacterUnicodeUp;
  public specialCharacters = Configs.specialCharacters;

  validate(c: AbstractControl): { [key: string]: any } {
    const v = c.value;
    if (v) {
      for (let i = 0; i < v.length; i++) {
        if (this.specialCharacters.indexOf(v.charAt(i)) != -1) {
          return { specialCharacterUni: true };
        }
        if (this.specialUnicodeLow.indexOf(v.charAt(i)) != -1) {
          return { specialUnicode: true };
        }
        if (this.specialUnicodeUp.indexOf(v.charAt(i)) != -1) {
          return { specialUnicode: true };
        }
      }
      return null;
    }
  }
}
