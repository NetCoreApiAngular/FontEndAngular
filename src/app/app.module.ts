import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from './core/core.module';
import { AccessDeniedModule } from './403/access-denied.module';
import { NotFoundModule } from './404/not-found.module';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StorageKey } from './shared/models/storage-key/storage-key';
import { themeConfig } from './theme';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    NgbModule,
    AccessDeniedModule,
    NotFoundModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        throwNoTokenError: false,
        tokenGetter: GetToken,
      },
    }),
    TranslateModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(themeConfig),
    AppRoutingModule,
  ],
  entryComponents: [

  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
export function GetToken() {
  return localStorage.getItem(StorageKey.Token);
}
