import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './navbar.component';
import { NavbarVerticalModule } from './vertical/vertical.module';

@NgModule({
  imports: [SharedModule, NavbarVerticalModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
