import { Configs } from '../../common/configs/configs';
import { Directive } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@Directive({
  selector: '[monthFormat]',
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: Configs.MONTH_FORMAT},
  ],
})
export class CustomDateFormatMonthDirective {
}
