import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer.component';



@NgModule({
    imports: [SharedModule, TranslateModule],
    declarations: [
        FooterComponent
    ],
    exports: [FooterComponent]
})
export class FooterModule { }