import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { THEME_CONFIG } from './config.service';

@NgModule()
export class ThemeModule
{
    constructor(@Optional() @SkipSelf() parentModule: ThemeModule)
    {
        if ( parentModule )
        {
            throw new Error('ThemeModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders<any>
    {
        return {
            ngModule : ThemeModule,
            providers: [
                {
                    provide : THEME_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
