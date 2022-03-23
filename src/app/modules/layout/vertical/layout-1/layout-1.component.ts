import { Component, OnInit, AfterViewChecked, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ThemeConfigService } from 'src/app/theme/config.service';
import { navigation } from '../../components/navigation/navigation';
import { takeUntil } from 'rxjs/operators';
import { ClientState } from 'src/app/shared/services/client/client-state';
import { RoleService } from 'src/app/shared/services/api/app/role.service';
import { StorageKey } from 'src/app/shared/models/storage-key/storage-key';

@Component({
    selector: 'vertical-layout-1',
    templateUrl: './layout-1.component.html',
    styleUrls: ['./layout-1.component.scss']
})
export class VerticalLayout1Component implements OnInit, AfterViewChecked {

    themeConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ThemeConfigService} _themeConfigService
     * @param {ClientStateService} clientStateService;
     */
    constructor(
        public roleService: RoleService,
        private _themeConfigService: ThemeConfigService,
        public clientState: ClientState,
        private _cd: ChangeDetectorRef,
    ) {
        // Set the defaults
        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to config changes
        this._themeConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.themeConfig = config;
            });
    }


    onActivate(event) {
        let top = document.getElementById('router-content').scrollTo(0, 0);
    }

    /**
     * On destroy
     */
    ngAfterViewChecked() {
        this._cd.detectChanges();
        let list = document.getElementsByClassName("mat-form-field-required-marker")
        Array.prototype.forEach.call(list, function (el) {
          // Do stuff here
          el.parentNode.style.color = 'black';
          el.parentNode.style.fontWeight = '550';
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
