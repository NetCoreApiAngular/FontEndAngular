import { Component, OnInit } from '@angular/core';
import { CompanyInfoModel } from 'src/app/shared/models/company-info/company-info.model';
import { DepartmentModel } from 'src/app/shared/models/department/department.model';
import { ApiUrl } from 'src/app/shared/services/api-url/api-url';
import { DepartmentService } from 'src/app/shared/services/api/app/department.service';
import { ReusableService } from 'src/app/shared/services/api/app/reusable.service';
import { ClientState } from 'src/app/shared/services/client/client-state';

@Component({
  selector: 'app-preview-department-list',
  templateUrl: './preview-department-list.component.html',
  styleUrls: ['./preview-department-list.component.scss']
})
export class PreviewDepartmentListComponent implements OnInit {

  companyInfoModel: CompanyInfoModel = new CompanyInfoModel();
  departmentModel: DepartmentModel[] = [];
  currDate = new Date()
  constructor(
    private _clientState: ClientState,
    private _reusableService: ReusableService,
    private _departmentService: DepartmentService,
  ) { }

  ngOnInit(): void {
    this.onGetDepartment();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onGetCompanyInfo();
    });
  }

  onGetCompanyInfo() {
    this._clientState.isBusy = true;
    this._reusableService.onSearch(ApiUrl.getCompanyInfo, {}).subscribe(res => {
      this._clientState.isBusy = false;
      this.companyInfoModel = res.content;
    }, err => {
      this._clientState.isBusy = false;
    })
  }

  onGetDepartment() {
    this._departmentService.onGetAll().subscribe(res => {
      this.departmentModel = res.content;
    });
  }

}
