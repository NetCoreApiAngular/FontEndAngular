import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation.component';
import { CollapsableComponent } from './collapsable/collapsable.component';
import { GroupComponent } from './group/group.component';
import { ItemComponent } from './item/item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ItemChildrenComponent } from './item-children/item-children.component';


@NgModule({
    imports: [CommonModule, SharedModule, TranslateModule],
    declarations: [
        NavigationComponent,
        CollapsableComponent,
        GroupComponent,
        ItemComponent,
        ItemChildrenComponent],
    exports: [NavigationComponent]
})
export class NavigationModule { }
