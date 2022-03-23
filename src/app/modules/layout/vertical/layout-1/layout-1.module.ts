import { NgModule } from '@angular/core';
import { VerticalLayout1RoutingModule } from './layout-1-routing.module';
import { NavigationModule } from '../../components/navigation/navigation.module';
import { FooterModule } from '../../components/footer/footer.module';
import { HeaderModule } from '../../components/header/header.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { ProgressBarModule } from '../../components/progress-bar/progress-bar.module';

import { VerticalLayout1Component } from './layout-1.component';



@NgModule({
  declarations: [VerticalLayout1Component],
  imports: [
    SharedModule,
    NavigationModule,
    NavbarModule,
    SidebarModule,
    HeaderModule,
    FooterModule,
    ProgressBarModule,
    VerticalLayout1RoutingModule
  ]
})
export class VerticalLayout1Module { }
