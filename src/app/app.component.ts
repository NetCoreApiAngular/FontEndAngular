import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { I18nService, AuthenticationService, untilDestroyed } from './core';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge, Subject } from 'rxjs';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { navigation } from './modules/layout/components/navigation/navigation';
import { NavigationService } from './modules/layout/components/navigation/navigation.service';
import { SplashScreenService } from './modules/layout/components/splash-screen/splash-screen.service';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ThemeConfigService } from './theme/config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'nhonhoa';
  navigation: any;
  themeConfig: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {NavigationService} _navigationService
   * @param {TranslateService} _translateService
   */

  constructor(
    @Inject(DOCUMENT) private document: any,
    private i18nService: I18nService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private authenService: AuthenticationService,
    private _navigationService: NavigationService,
    private _splashScreenService: SplashScreenService,
    private _platform: Platform,
    private _themeConfigService: ThemeConfigService
  ) {
    // Get default navigation
    this.navigation = navigation;

    // Register the navigation to the service
    this._navigationService.register('main', this.navigation);

    // Set the main navigation as our current navigation
    this._navigationService.setCurrentNavigation('main');

    // Add is-mobile class to the body if the platform is mobile
    if (this._platform.ANDROID || this._platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }
  ngOnInit() {
    // Init i18nService
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    // merge(this.translateService.onLangChange, onNavigationEnd)
    //   .pipe(
    //     map(() => {
    //       let route = this.activatedRoute;
    //       while (route.firstChild) {
    //         route = route.firstChild;
    //       }
    //       return route;
    //     }),
    //     filter(route => route.outlet === 'primary'),
    //     switchMap(route => route.data),
    //     untilDestroyed(this)
    //   )
    //   .subscribe(event => {
    //     const title = event['title'];
    //     if (title) {
    //       this.titleService.setTitle(this.translateService.instant(title));
    //     }
    //   });



    // Subscribe to config changes
    this._themeConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        this.themeConfig = config;

        // Color theme - Use normal for loop for IE11 compatibility
        for (let i = 0; i < this.document.body.classList.length; i++) {
          const className = this.document.body.classList[i];

          if (className.startsWith('theme-')) {
            this.document.body.classList.remove(className);
          }
        }

        this.document.body.classList.add(this.themeConfig.colorTheme);
      });

  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
    this.i18nService.destroy();
  }

}
