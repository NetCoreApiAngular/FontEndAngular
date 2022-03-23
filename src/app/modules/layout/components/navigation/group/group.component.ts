import { Component, OnInit, HostBinding, Input, ChangeDetectorRef } from "@angular/core";
import { NavItem } from "../nav.model";
import { NavigationService } from '../navigation.service';
import { Subject, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { moduleActionsModel } from "src/app/shared/models/role/role.model";
import { StorageKey } from "src/app/shared/models/storage-key/storage-key";
import { Configs } from "src/app/shared/common/configs/configs";

@Component({
    selector: "nav-group",
    templateUrl: "./group.component.html",
    styleUrls: ["./group.component.scss"]
})
export class GroupComponent implements OnInit {
    @HostBinding("class")
    classes = "nav-group nav-item";
    @Input()
    item: NavItem;
    allNav: NavItem;
    currUser: any;
    groupAction: moduleActionsModel[];
    url: any;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     */

    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {NavigationService} _navigationService
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _navigationService: NavigationService,
        private router: Router,

    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.locationPath = this.router.url.slice(1);
                let navigationPaths = this.locationPath.split('/');
                this.item.children.forEach(parent => {
                    parent.isActive = false;
                    parent.children.map(child => {
                        if (child.id === navigationPaths[1]) {
                            child.isActive = true;
                            parent.isActive = true;
                        }
                    })
                })
            }
        })
        this.currUser = JSON.parse(localStorage.getItem(StorageKey.User));
        this.groupAction = JSON.parse(localStorage.getItem(StorageKey.User)).moduleActions;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    private locationPath: string;

    ngOnInit(): void {
        this.url = this.router.url.slice(1);
        if (this.url) {
            let locationPaths = this.router.url.slice(1);
            let navigationPaths = locationPaths.split('/');
            this.item.children.forEach(parent => {
                parent.isActive = false;
                parent.children.map(child => {
                    if (child.id === navigationPaths[1]) {
                        child.isActive = true;
                        parent.isActive = true;
                    }
                })
            })
        }
        this.allNav = JSON.parse(JSON.stringify(this.item));
        // Subscribe to navigation item
        merge(
            this._navigationService.onNavigationItemAdded,
            this._navigationService.onNavigationItemUpdated,
            this._navigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if (!this.currUser.isAdmin && this.item && this.item.children && this.item.children.length > 0) {
                    this.allNav = JSON.parse(JSON.stringify(this.item));
                    this.allNav.children.forEach(item => {
                        this.checkModule(item)
                    })
                }

                this._changeDetectorRef.markForCheck();
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

    checkModule(item: NavItem) {
        if (item.type == 'collapsable') {
            item.children.forEach(el => {
                this.checkModule(el)
            })
            if (item.children.every(child => child.hidden)) {
                item.hidden = true;
            }
        } else {
            if (item.children) {
                if (item.children.some(child => child.children && child.children.length > 0)) {
                    if (!item.children.some(par => this.groupAction.some(act => act.module == par.moduleKey && act.action == 'Listing'))) {
                        item.hidden = true;
                    }
                } else {
                    item.children.forEach(el => {
                        this.checkModule(el)
                        if (item.children.every(child => child.hidden)) {
                            item.hidden = true;
                        }
                    })
                }
            } else {
                if (!this.groupAction.some(act => act.module == item.moduleKey && act.action == 'Listing', true)) {
                    item.hidden = true;
                }
            }
        }
    }

}
