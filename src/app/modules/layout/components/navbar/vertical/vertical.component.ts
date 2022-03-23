import { Component, OnInit, Input, HostListener, HostBinding, OnDestroy } from "@angular/core";
import { Subscription, Subject } from 'rxjs';
import { SidebarService } from '../../sidebar/sidebar.service';
import { PerfectScrollbarDirective } from 'src/app/shared/directives';
import { ThemeConfigService } from 'src/app/theme/config.service';
import { NavigationService } from '../../navigation/navigation.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: "app-navbar-vertical",
  templateUrl: "./vertical.component.html",
  styleUrls: ["./vertical.component.scss"]
})
export class NavbarVerticalComponent implements OnInit, OnDestroy {
  @HostBinding("class") classes = "app-navbar-vertical";
  Config: any;
  navigation: any;

  // Private
  private _perfectScrollbar: PerfectScrollbarDirective;
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {ThemeConfigService} _themeConfigService
   * @param {NavigationService} _navigationService
   * @param {SidebarService} _sidebarService
   * @param {Router} _router
   */
  constructor(
      private _themeConfigService: ThemeConfigService,
      private _navigationService: NavigationService,
      private _sidebarService: SidebarService,
      private _router: Router
  )
  {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  // Directive
  // @ViewChild(PerfectScrollbarDirective, {static: true})
  // set directive(theDirective: PerfectScrollbarDirective)
  // {
  //     if ( !theDirective )
  //     {
  //         return;
  //     }

  //     this._PerfectScrollbar = theDirective;

  //     // Update the scrollbar on collapsable item toggle
  //     this._NavigationService.onItemCollapseToggled
  //         .pipe(
  //             delay(500),
  //             takeUntil(this._unsubscribeAll)
  //         )
  //         .subscribe(() => {
  //             this._PerfectScrollbar.update();
  //         });

  //     // Scroll to the active item position
  //     this._router.events
  //         .pipe(
  //             filter((event) => event instanceof NavigationEnd),
  //             take(1)
  //         )
  //         .subscribe(() => {
  //                 setTimeout(() => {
  //                     this._PerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
  //                 });
  //             }
  //         );
  // }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      this._router.events
          .pipe(
              filter((event) => event instanceof NavigationEnd),
              takeUntil(this._unsubscribeAll)
          )
          .subscribe(() => {
                  if ( this._sidebarService.getSidebar('navbar') )
                  {
                      this._sidebarService.getSidebar('navbar').close();
                  }
              }
          );

      // Subscribe to the config changes
      this._themeConfigService.config
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((config) => {
              this.Config = config;
          });

      // Get current navigation
      this._navigationService.onNavigationChanged
          .pipe(
              filter(value => value !== null),
              takeUntil(this._unsubscribeAll)
          )
          .subscribe(() => {
              this.navigation = this._navigationService.getCurrentNavigation();
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
   * Toggle sidebar opened status
   */
  toggleSidebarOpened(): void
  {
      this._sidebarService.getSidebar('navbar').toggleOpen();
  }

  /**
   * Toggle sidebar folded status
   */
  toggleSidebarFolded(): void
  {
      this._sidebarService.getSidebar('navbar').toggleFold();
  }
}
