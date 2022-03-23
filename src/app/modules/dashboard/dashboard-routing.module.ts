import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract, AuthenticationGuard } from 'src/app/core';
import { TableComponent } from './table/table.component'
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import {FontComponent} from "./font/font.component";
import {ColorsComponent} from "./colors/colors.component";


const routes: Routes = [
  {
      path: '',
      redirectTo: 'table',
      pathMatch: 'full'
  },
  {
    path: 'font',
    canActivate: [AuthenticationGuard],
    component: FontComponent,
    data: { title: extract('Components.Department.DepartmentList.Title') }
  },
  {
    path: 'colors',
    canActivate: [AuthenticationGuard],
    component: ColorsComponent,
    data: { title: extract('Components.Department.DepartmentList.Title') }
  },
  {
      path: 'table',
      canActivate: [AuthenticationGuard],
      component: TableComponent,
      data: { title: extract('Components.Department.DepartmentList.Title') }
  },
  {
    path: 'form',
    canActivate: [AuthenticationGuard],
    component: FormComponent,
    data: { title: extract('Components.Department.DepartmentList.Title') }
  },
  {
    path: 'card',
    canActivate: [AuthenticationGuard],
    component: CardComponent,
    data: { title: extract('Components.Department.DepartmentList.Title') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
