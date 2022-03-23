import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';

import { ProgressBarComponent } from './progress-bar.component';


@NgModule({
    imports: [SharedModule],
    declarations: [
        ProgressBarComponent
    ],
    exports: [ProgressBarComponent]
})
export class ProgressBarModule { }