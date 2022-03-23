import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard, extract } from 'src/app/core';
import { DevelopingComponent } from './developing.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dev',
        pathMatch: 'full'
    },
    {
        path: 'dev',
        canActivate: [AuthenticationGuard],
        component: DevelopingComponent,
        data: { title: extract('') }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopingRoutingModule { }
