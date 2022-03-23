import { Configs } from '../../common/configs/configs';
import { Directive } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@Directive({
    selector: '[yearFormat]',
    providers: [
        {provide: MAT_DATE_FORMATS, useValue: Configs.MY_FORMAT_YEAR },
    ],
})
export class CustomYearFormatDirective {
}
