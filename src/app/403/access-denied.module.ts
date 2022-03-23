import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { AccessDeniedComponent } from './access-denied.component';


@NgModule({
    imports: [SharedModule, TranslateModule],
    declarations: [
        AccessDeniedComponent
    ],
    exports: [AccessDeniedComponent]
})
export class AccessDeniedModule { }