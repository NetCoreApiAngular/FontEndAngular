import { Component, OnInit, HostListener, HostBinding } from "@angular/core";
import { SidebarService } from '../sidebar/sidebar.service';
import { Subject } from 'rxjs';
import { ThemeConfigService } from 'src/app/theme/config.service';
import { filter, pairwise, takeUntil } from 'rxjs/operators';
import { Router, RoutesRecognized } from "@angular/router";
import { RoleService } from "src/app/shared/services/api/app/role.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @HostBinding("class") classes = "app-header";

  themeConfig: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _sidebarService: SidebarService,
    private _themeConfigService: ThemeConfigService,
    private router: Router,
    private roleService: RoleService,
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
    this.router.events
    .pipe(filter((e: any) => e instanceof RoutesRecognized),
        pairwise()
    ).subscribe((e: any) => {
        this.roleService.prevPageUrl.next(e[0].urlAfterRedirects) // prevUrl
    });
  }

  ngOnInit() {
    // Subscribe to config changes
    this._themeConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(config => {
        this.themeConfig = config;
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


  onToggleSidebarOpen(key) {
    this._sidebarService.getSidebar(key).toggleOpen();
  }

  
  /**
   * Toggle sidebar folded status
   */
  toggleSidebarFolded(): void
  {
      this._sidebarService.getSidebar('navbar').toggleFold();
  }

}
