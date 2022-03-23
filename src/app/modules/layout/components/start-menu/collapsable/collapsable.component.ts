import { I18nService } from './../../../../../core/i18n.service';
import { Router } from '@angular/router';
import { NavigationService } from './../../navigation/navigation.service';
import { Subject } from 'rxjs';
import { NavItem } from './../../navigation/nav.model';
import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['../start-menu.component.scss']

})
export class CollapsableComponent implements OnInit, OnDestroy {
  toggleParent: boolean = true;
  toggleItem: boolean = false;
  item: NavItem;

  @Input() itemList: NavItem;
  @Input() index: number;




  private _unsubscribeAll: Subject<any>;
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
      private _navigationService: NavigationService,
      private _router: Router,
      public _i18nService: I18nService
  ) {
    this._unsubscribeAll = new Subject();
   }

  ngOnInit(): void {
    this.item = this.itemList[this.index];

  }
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  onShowItem() {
    this.toggleItem = true;
    this.toggleParent = false;
  }

  onGoToUrl(item) {
    this._router.navigate([`${item.routerLink}`]);
  }

}
