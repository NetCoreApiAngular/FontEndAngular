import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalLayout1Component } from './layout-1.component';

const routes: Routes = [
  {
    path: '',
    component: VerticalLayout1Component,
    children: [
      {
        path: '',
        redirectTo: 'Phong-ban',
        pathMatch: 'full',
      },
      {
        path: 'Phong-ban',
        loadChildren: () =>
          import(
            'src/app/modules/categories/department/department.module'
          ).then((m) => m.DepartmentModule),
      },
      
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerticalLayout1RoutingModule {}
