import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { Configs } from 'src/app/shared/common/configs/configs';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { NgxPrintModule } from 'ngx-print';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    TranslateModule,
    SharedModule,
    NgxPrintModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'vi_VN' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: Configs.DATE_FORMATS },
    DatePipe
  ],
  entryComponents: [
  ]
})
export class CustomerModule { }
