import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


import { NavigationModule } from '../../navigation/navigation.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarVerticalComponent } from './vertical.component';


@NgModule({
    imports: [CommonModule, NavigationModule, SharedModule],
    declarations: [
        NavbarVerticalComponent
    ],
    exports: [NavbarVerticalComponent]
})
export class NavbarVerticalModule { }