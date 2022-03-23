import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
    imports: [CommonModule, SharedModule, TranslateModule, NavbarModule],
    declarations: [
        HeaderComponent,
        UserProfileComponent,
        LanguageSelectorComponent,
        HeaderNavComponent,
        ConfigurationComponent
    ],
    exports: [HeaderComponent, LanguageSelectorComponent, UserProfileComponent, LanguageSelectorComponent, HeaderNavComponent]
})
export class HeaderModule { }
