import { Component, OnInit, HostBinding, Input, ChangeDetectorRef } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { NavItem } from "../nav.model";
import { NavigationService } from "../navigation.service";
import { takeUntil} from 'rxjs/operators';
import { Subject, merge  } from 'rxjs';
import { I18nService } from 'src/app/core';

@Component({
  selector: "nav-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
  animations: [
    trigger('slideInOut', [
      state('0', style({
        height: '0px'
      })),
      state('1', style({
        height: '*',
        overflow: 'unset'
      })),
      transition('1 => 0', animate('200ms ease-out')),
      transition('0 => 1', animate('200ms ease-in'))
    ]),
  ]
})
export class ItemComponent implements OnInit
{
  @HostBinding("class")
  classes = "nav-item";

  @HostBinding("class.open")
  isOpen = false;

  @Input()
  item: NavItem;

  @Input()
  childOfLast: boolean;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   */

  /**
   * @param {I18nService } _i18nService 
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {NavigationService} _navigationService
   */
  constructor(
      private _changeDetectorRef: ChangeDetectorRef,
      private _navigationService: NavigationService,
      public _i18nService: I18nService,
  )
  {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
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
      this._navigationService.onItemCollapsed
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(
            (clickedItem) => {
                if ( clickedItem && clickedItem.children )
                {
                    // Check if the clicked item is one
                    // of the children of this item
                    if ( this.isChildrenOf(this.item, clickedItem) )
                    {
                        return;
                    }

                    // Check if the url can be found in
                    // one of the children of this item
                    // if ( this.isUrlInChildren(this.item, this._router.url) )
                    // {
                    //     return;
                    // }

                    // If the clicked item is not this item, collapse...
                    if ( this.item !== clickedItem )
                    {
                        this.collapse();
                    }
                }
            }
        );
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  onClickItem($event) {
    // this._navigationService.onItemCollapsed.next(this.item);
  }
  toggleOpen(ev): void
  {
      ev.preventDefault();

      this.isOpen = !this.isOpen;

      // Navigation collapse toggled...
      this._navigationService.onItemCollapsed.next(this.item);
      this._navigationService.onItemCollapseToggled.next();
  }
  toggleClosed(ev): void
  {
      ev.preventDefault();
      this.isOpen = !this.isOpen;


      // Navigation collapse toggled...
      this._navigationService.onItemCollapsed.next(this.item);
      this._navigationService.onItemCollapseToggled.next();
  }

  /**
   * Expand the collapsable navigation
   */
  expand(): void
  {
      if ( this.isOpen )
      {
          return;
      }

      this.isOpen = true;

      // Mark for check
      this._changeDetectorRef.markForCheck();

      this._navigationService.onItemCollapseToggled.next();
  }

  /**
   * Collapse the collapsable navigation
   */
  collapse(): void
  {
      if ( !this.isOpen )
      {
          return;
      }

      this.isOpen = false;

      // Mark for check
      this._changeDetectorRef.markForCheck();

      this._navigationService.onItemCollapseToggled.next();
  }

  /**
   * Check if the given parent has the
   * given item in one of its children
   *
   * @param parent
   * @param item
   * @returns {boolean}
   */
  isChildrenOf(parent, item): boolean
  {
      const children = parent.children;
      if ( !children )
      {
          return false;
      }

      if ( children.indexOf(item) > -1 )
      {
          return true;
      }

      for ( const child of children )
      {
          if ( child.children )
          {
              if ( this.isChildrenOf(child, item) )
              {
                  return true;
              }
          }
      }

      return false;
  }

  /**
   * Check if the given url can be found
   * in one of the given parent's children
   *
   * @param parent
   * @param url
   * @returns {boolean}
   */
  isUrlInChildren(parent, url): boolean
  {
      const children = parent.children;
      if ( !children )
      {
          return false;
      }

      for ( const child of children )
      {
          if ( child.children )
          {
              if ( this.isUrlInChildren(child, url) )
              {
                  return true;
              }
          }

          if ( child.routerLink === url || url.includes(child.routerLink) )
          {
              return true;
          }
      }

      return false;
  }
}
