import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { TranslateModule } from '@ngx-translate/core';
import { LoginRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';




@NgModule({
  imports: [SharedModule, LoginRoutingModule, TranslateModule],
  declarations: [LoginComponent, RegisterComponent, ForgotComponent],
  exports: []
})
export class AuthModule {}
