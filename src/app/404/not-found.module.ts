import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { NoContentComponent } from './not-found.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [SharedModule, TranslateModule],
    declarations: [
        NoContentComponent
    ],
    exports: [NoContentComponent]
})
export class NotFoundModule { }