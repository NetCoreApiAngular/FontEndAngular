import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FilterNotification } from 'src/app/shared/models/filter/filter.model';
import { NotificationService } from 'src/app/shared/services/api/app/notification.service';
import { RoleService } from 'src/app/shared/services/api/app/role.service';
import { ClientState } from 'src/app/shared/services/client/client-state';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  filter: FilterNotification = new FilterNotification();
  notificationList: any[] = [];
  loadAble: boolean = true;
  loading: boolean = false;
  totalRecords: number = null;
  viewRole = {
    UserListing: false,
    RoleListing:  false,
    WarningListing: false,
    CompanyListing: false,
  }
  @ViewChild('notification', { static: false }) notification: ElementRef;
  constructor(
    public roleService: RoleService,
    private notificationService: NotificationService,
    private router: Router,
    public clientState: ClientState
  ) { }

  ngOnInit(): void {
    this.viewRole.RoleListing = this.roleService.actionIsAllow('Role', 'Listing');
    this.viewRole.UserListing = this.roleService.actionIsAllow('User', 'Listing');
    this.viewRole.WarningListing = this.roleService.actionIsAllow('Warning', 'Listing');
    this.viewRole.CompanyListing = this.roleService.actionIsAllow('CompanyInfo', 'Listing');
    this.filter.show = true;
    this.filter.pageSize = 20;
    this.filter.currentPage = 1;
    this.notificationService.onLoad.subscribe(
      res => {
        this.notificationList = [];
        this.filter.pageSize = this.filter.currentPage * this.filter.pageSize;
        this.filter.currentPage = 1;
        this.onGetNotification();
      }
    )
  }

  onGetNotification() {
    this.loading = true;
    this.notificationService.onSearch(this.filter).subscribe(
      res => {
        this.loading = false;
        let { warningListModels, ...PagingModel } = res.content;
        if(PagingModel.pageIndex * PagingModel.pageSize >= PagingModel.totalRecords) {
          this.loadAble = false;
        }
        this.totalRecords = PagingModel.numberOfProcessFalse;
        this.notificationList = this.notificationList.concat(warningListModels) || []
      }, error => {
        this.loading = false;
      }
    )
  }

  onViewNotification() {
    if (!this.roleService.actionIsAllow('Warning', 'Listing', true)) {
      return;
    }
    this.router.navigate(['/Nhon-hoa/Thong-bao']);
  }

  scrollDown(event: any) {
    if (this.notification.nativeElement.scrollTop + this.notification.nativeElement.offsetHeight >= this.notification.nativeElement.scrollHeight && this.loadAble) { 
      this.filter.currentPage += 1;
      this.onGetNotification();
    }
  }

  goToNotificatioin(element: any) {
    if (!this.roleService.actionIsAllow('Warning', 'Edit', true)) {
      return;
    }
    switch (element.decisionType) {
      case 1:
        this.router.navigate(['/Nhon-hoa/Quyet-dinh-nhan-su/Chi-tiet', element.appointmentModel.id])
        break;
      case 2:
        this.router.navigate(['/Nhon-hoa/Danh-sach-CNV-den-han-tham-nien/Chi-tiet', element.seniorityEmployeeContractModel.id])
        break;
      case 3:
        this.router.navigate(['/Nhon-hoa/Quyet-dinh-nhan-vien-nghi/Chi-tiet', element.timeOffMasterModel.id])
        break;
      case 4:
        this.router.navigate(['/Nhon-hoa/Bao-cao-dao-han-hop-dong/Chi-tiet', element.expiredContractReportModel.id])
        break;
      case 5:
        this.router.navigate(['/Nhon-hoa/Bao-cao-dao-han-nang-bac/Chi-tiet', element.expiredSalaryIncreaseReportModel.id])
        break;
      default:
        break;
    }
  }

}
