import { FooterModule } from './../footer/footer.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../../shared/shared.module';

import { HeaderModule } from './../header/header.module';
import { StartMenuComponent } from './start-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core';
import { GroupComponent } from './group/group.component';
import { CollapsableComponent } from './collapsable/collapsable.component';
import { BigItemComponent } from './big-item/big-item.component';


const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      canActivate: [AuthenticationGuard],
      component: StartMenuComponent
  }
];

@NgModule({
  declarations: [
    StartMenuComponent,
    GroupComponent,
    CollapsableComponent,
    BigItemComponent,

  ],
  imports: [
    RouterModule.forChild(routes),
    HeaderModule,
    CommonModule,
    SharedModule,
    FooterModule,
    TranslateModule
  ]
})
export class StartMenuModule { }
