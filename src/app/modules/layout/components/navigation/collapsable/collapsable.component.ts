import { Component, OnInit, HostBinding, Input, OnDestroy, ChangeDetectorRef, HostListener, ElementRef } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { Subject, merge } from "rxjs";
import { takeUntil, filter } from "rxjs/operators";
import { NavItem } from "../nav.model";
import { NavigationService } from "../navigation.service";
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { I18nService } from 'src/app/core';
import { Location } from "@angular/common";

@Component({
  selector: "nav-collapsable",
  templateUrl: "./collapsable.component.html",
  styleUrls: ["./collapsable.component.scss"],
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
export class CollapsableComponent implements OnInit, OnDestroy {
  @HostBinding("class")
  classes = "nav-collapsable nav-item";

  @Input()
  item: NavItem;

  @Input()
  last: boolean;

  @HostBinding("class.open")
  isOpen = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target)){
        this.isOpen = false;
    }
  }
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {I18nService } _i18nService 
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {NavigationService} _navigationService
   * @param {Router} _router
   */
  constructor(
      private  location: Location,
      private _eref: ElementRef,
      private _changeDetectorRef: ChangeDetectorRef,
      private _navigationService: NavigationService,
      private _router: Router,
      public _i18nService: I18nService 
  )
  {
      // Set the private defaults
      this._unsubscribeAll = new Subject();

      _router.events.subscribe(
        (event) => {
            if (event instanceof NavigationStart) {
                this.isOpen = false;
            }
        });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Listen for router events
      this._router.events
          .pipe(
              filter(event => event instanceof NavigationEnd),
              takeUntil(this._unsubscribeAll)
          )
          .subscribe((event: NavigationEnd) => {

              // Check if the url can be found in
              // one of the children of this item
            //   if ( this.isUrlInChildren(this.item, event.urlAfterRedirects) )
            //   {
            //       this.expand();
            //   }
            //   else
            //   {
            //       this.collapse();
            //   }
          });

      // Listen for collapsing of any navigation item
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

      // Check if the url can be found in
      // one of the children of this item
    //   if ( this.isUrlInChildren(this.item, this._router.url) )
    //   {
    //       this.expand();
    //   }
    //   else
    //   {
    //       this.collapse();
    //   }

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

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle collapse
   *
   * @param ev
   */
  toggleOpen(ev): void
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
