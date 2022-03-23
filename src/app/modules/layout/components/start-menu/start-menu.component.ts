import { takeUntil } from 'rxjs/operators';
import { Subject, merge } from 'rxjs';
import { NavigationService } from './../navigation/navigation.service';
import { NavItem } from './../navigation/nav.model';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { navigation } from '../navigation/navigation'
import { I18nService } from 'src/app/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit, OnDestroy {
  toggleParent: boolean = true;
  toggleGroup: boolean = false;
  navigation: NavItem[];
  baseNavigation: NavItem[];
  parentNavigatiton: any;
  groupList: any;
  collapsableList: any;
  itemList: any;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _navigationService: NavigationService,
    public _i18nService: I18nService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.navigation = navigation;

    this.navigation = this.navigation || this._navigationService.getCurrentNavigation();

    // Subscribe to the current navigation changes
    this._navigationService.onNavigationChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {

        // Load the navigation
        this.navigation = this._navigationService.getCurrentNavigation();

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });

    // Subscribe to navigation item
    merge(
      this._navigationService.onNavigationItemAdded,
      this._navigationService.onNavigationItemUpdated,
      this._navigationService.onNavigationItemRemoved
    ).pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
    this.baseNavigation = this.navigation;
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  onShowItem(item: any) {
    this.parentNavigatiton = [...this.navigation]
    this.navigation = item.children;
    // this.toggleGroup = true;
    // this.toggleParent = false;
  }
  backNavigation(){
    this.navigation = this.parentNavigatiton;
    if(this.navigation[0] && this.navigation[0].type == 'collapsable') {
      this.parentNavigatiton = this.baseNavigation;
    }
  }



}
