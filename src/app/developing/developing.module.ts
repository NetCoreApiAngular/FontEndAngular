import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { DevelopingComponent } from './developing.component';
import { DevelopingRoutingModule } from "./developing-routing.module";



@NgModule({
  imports: [SharedModule, TranslateModule, DevelopingRoutingModule],
    declarations: [
        DevelopingComponent
    ],
    exports: [DevelopingComponent]
})
export class DevelopingModule { }
