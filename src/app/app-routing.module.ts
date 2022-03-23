import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './403/access-denied.component';
import { NoContentComponent } from './404/not-found.component';
import { AuthenticationGuard } from './core';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    redirectTo: '/Nhon-hoa/Phong-ban/Danh-sach',
    pathMatch: 'full'
  },
  // {
  //   path: '/Quan-ly-tai-khoan/Chi-tiet',
  //   loadChildren: () => import('src/app/modules/').then(m => m.StartMenuModule)
  // },

  // Login Module
  {
    path: 'Nhon-hoa',
    loadChildren: () => import('./modules/layout/vertical/layout-1/layout-1.module').then(m => m.VerticalLayout1Module)
  },

  /* No Content */
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
