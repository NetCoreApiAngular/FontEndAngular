import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MomentDateAdapter, MatMomentDateModule } from '@angular/material-moment-adapter';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { FontComponent } from './font/font.component';
import { ColorsComponent } from './colors/colors.component';

@NgModule({
  declarations: [FormComponent, CardComponent, TableComponent, FontComponent, ColorsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    SharedModule,
    MatNativeDateModule, 
    MatMomentDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    DatePipe
  ]
})
export class DashboardModule { }
