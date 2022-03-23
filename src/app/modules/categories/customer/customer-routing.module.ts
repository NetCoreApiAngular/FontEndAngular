import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { RoleGuard } from 'src/app/core/authentication/role.guard';
import { CustomerFormComponent } from './customer-form/customer-form.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'Danh-sach',
        pathMatch: 'full'
    },
    {
        path: 'Danh-sach',
        canActivate: [RoleGuard],
        component: CustomerComponent,
        data: {
            moduleAction: {
                module: 'Customer',
                action: 'Listing'
            }
        }
    },
    {
        path: 'Them-moi',
        canActivate: [RoleGuard],
        component: CustomerFormComponent,
        data: {
            moduleAction: {
                module: 'Customer',
                action: 'Create'
            }
        }
    },
    {
        path: 'Cap-nhat/:id',
        canActivate: [RoleGuard],
        component: CustomerFormComponent,
        data: {
            moduleAction: {
                module: 'Customer',
                action: 'Edit'
            }
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }
