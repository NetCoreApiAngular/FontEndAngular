import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract, AuthenticationGuard } from 'src/app/core';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { RoleGuard } from 'src/app/core/authentication/role.guard';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'Danh-sach',
        pathMatch: 'full'
    },
    {
        path: 'Danh-sach',
        canActivate: [RoleGuard],
        component: DepartmentListComponent,
        data: {
            moduleAction: {
                module: 'Department',
                action: 'Listing'
            }
        }
    },
    {
        path: 'Them-moi',
        canActivate: [RoleGuard],
        component: DepartmentAddComponent,
        data: {
            title: extract('Components.Department.DepartmentAdd.Title'),
            moduleAction: {
                module: 'Department',
                action: 'Create'
            }
        }
    },
    {
        path: 'Cap-nhat/:id',
        canActivate: [RoleGuard],
        component: DepartmentAddComponent,
        data: {
            title: extract('Components.Department.DepartmentUpdate.Title'),
            moduleAction: {
                module: 'Department',
                action: 'Edit'
            }
        }
    },
    {
        path: 'Chi-tiet/:id',
        canActivate: [RoleGuard],
        component: DepartmentViewComponent,
        data: {
            title: extract('Components.Department.DepartmentView.Title'),
            moduleAction: {
                module: 'Department',
                action: 'Listing'
            }
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule { }
