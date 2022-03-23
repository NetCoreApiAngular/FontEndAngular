import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { NgxPrintModule } from 'ngx-print';
import { PreviewDepartmentListComponent } from './department-list/preview-department-list/preview-department-list.component';

@NgModule({
  declarations: [DepartmentListComponent, DepartmentAddComponent, DepartmentViewComponent, PreviewDepartmentListComponent],
  imports: [
    SharedModule,
    DepartmentRoutingModule,
    NgxPrintModule
  ]
})
export class DepartmentModule { }
