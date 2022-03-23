import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { animations } from 'src/app/shared/animations';
import { Configs } from 'src/app/shared/common/configs/configs';
import { ApiUrl } from 'src/app/shared/services/api-url/api-url';
import { ClientState } from 'src/app/shared/services/client/client-state';
import { PagingModel } from 'src/app/shared/models/api-response/api-response';

import { RoleService } from 'src/app/shared/services/api/app/role.service';
import { DialogService } from 'src/app/shared/services/client/dialog.service';
import { ReusableService } from 'src/app/shared/services/api/app/reusable.service';
import { DepartmentService } from 'src/app/shared/services/api/app/department.service';

import { CompanyInfoModel } from 'src/app/shared/models/company-info/company-info.model';
import { DialogData, MessageType, SnackbarData } from 'src/app/shared/models/material/material.model';
import { DepartmentFilterModel, DepartmentModel } from 'src/app/shared/models/department/department.model';
import { PreviewDepartmentListComponent } from './preview-department-list/preview-department-list.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-department-list',
    templateUrl: './department-list.component.html',
    animations: animations
})

export class DepartmentListComponent implements OnInit {
    status = Configs.statusList;
    showSearchField: boolean = false;
    timeBlockList: any;
    searchForm: FormGroup;
    displayedColumns: any[] = [
        { id: 'stt', name: 'STT' },
        { id: 'code', name: 'Mã' },
        { id: 'name', name: 'Tên' },
        { id: 'createdDate', name: 'Ngày ghi' },
        { id: 'num', name: 'Stt in' },
        { id: 'isCalculateSalaryAssignment', name: 'Có lương khoán sản phẩm' },
        { id: 'status', name: 'Trạng thái' },
        { id: 'action', name: 'Thao tác' }
    ];
    showColumns: string[];
    componentName = 'DepartmentListComponent';
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
    companyInfoModel: CompanyInfoModel = new CompanyInfoModel();
    departmentModel: DepartmentModel[] = [];
    filterDepartment = new DepartmentFilterModel()
    defaultPageSize = Configs.DefaultPageSize;
    pageSizeList = Configs.PageSizeList;
    pagingModel = new PagingModel();

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    sortChange = Configs.sortChange;

    constructor(
        private _dialog: MatDialog,
        private _departmentService: DepartmentService,
        private _dialogService: DialogService,
        private _router: Router,
        private _fb: FormBuilder,
        private _reusableService: ReusableService,
        private _clientState: ClientState,
        private route: ActivatedRoute,
        public roleService: RoleService
        
    ) {
       
    }

    ngOnInit(): void {
        this.createSearchForm();
        this.filterDepartment.pageSize = Configs.DefaultPageSize;
        this.filterDepartment.currentPage = 1;
        this.route.queryParams.subscribe(param => {
            Object.keys(param).forEach(key => {
                if (param[key]) {
                    this.filterDepartment[key] = param[key];
                }
            })
            if(this.filterDepartment.status) this.filterDepartment.status = +this.filterDepartment.status;
            this.searchForm.patchValue(this.filterDepartment);
        })
        this.onSearch();
        // this.onGetCompanyInfo();
    }

    ngAfterViewInit() {
        // Disable mat sort -> BE sort 
        this.dataSource.sortingDataAccessor = (item, prop) => {
            switch (prop) {
                default:
                    return '';
            }
        }
    }

    // onGetCompanyInfo() {
    //     this._clientState.isBusy = true;
    //     this._reusableService.onSearch(ApiUrl.getCompanyInfo, {}).subscribe(res => {
    //         this._clientState.isBusy = false;
    //         this.companyInfoModel = res.content;
    //     }, err => {
    //         this._clientState.isBusy = false;
    //     })
    // }

    // onGetDepartment() {
    //     this._departmentService.onGetAll().subscribe(res => {
    //         this.departmentModel = res.content;
    //     });
    // }

    previewDepartmentList() {
        const dialogRef = this._dialog.open(PreviewDepartmentListComponent, {
            data: {
                departmentModel: this.departmentModel
            },
            width: '90%',
            maxWidth: '90vw',
            height: '90%',
            autoFocus: false,
          })
    }

    createSearchForm() {
        this.searchForm = this._fb.group({
            code: [''],
            name: [''],
            status: ['']
        })
    }

    onFilter() {
        Object.assign(this.filterDepartment, this.searchForm.value);
        this.filterDepartment.currentPage = 1;
        this.paginator.pageIndex = 0;
        this._router.navigate(['.'], { relativeTo: this.route, queryParams: this.filterDepartment, queryParamsHandling: 'merge' });
        this.onSearch()
    }

    onSearch() {
        this._clientState.isBusy = true;
        this._departmentService.onFilter(this.filterDepartment).subscribe(res => {
            this._clientState.isBusy = false;
            let { departments, ...PagingModel } = res.content;
            this.dataSource.data = departments;
            this.dataSource.sort = this.sort;
            this.sort.disableClear = true;
            this.pagingModel = PagingModel;
        }, error => {
            this._clientState.isBusy = false;
        })

    }

    onDeleteDepartment(department: DepartmentModel) {
        if (!this.roleService.actionIsAllow('Department', 'Delete', true)) {
            return;
        }
        let data = <DialogData>{
            content: Configs.deleteItem
        };
        this._dialogService.onOpenConfirmDialog(data, (isConfirm: boolean) => {
            if (isConfirm) {
                this._clientState.isBusy = true;
                this._departmentService.onDelete(department.departmentId).subscribe(res => {
                    this._clientState.isBusy = false;
                    let data = <SnackbarData>{
                        content: Configs.deleteSuccess,
                        type: MessageType.Success
                    };
                    this._dialogService.onOpenInformMessageSnackBar(data);
                    this.onSearch();
                }, error => {
                    this._clientState.isBusy = false;
                })
            }
        })
    }

    cleanFilter() {
        this.searchForm.reset();
        this.onFilter();
    }

    onFilterStatus(value) {
        this.dataSource.data = this.dataSource.data.filter(item => {
            return item.status == value;
        })
    }

    onCreateDepartment() {
        if (!this.roleService.actionIsAllow('Department', 'Create', true)) {
            return;
        }
        this._router.navigate(['/Nhon-hoa/Phong-ban/Them-moi'])
    }

    onUpdateDepartment(department: DepartmentModel) {
        if (!this.roleService.actionIsAllow('Department', 'Edit', true)) {
            return;
        }
        this._router.navigate(['/Nhon-hoa/Phong-ban/Cap-nhat/' + department.departmentId])
    }

    onViewDepartment(department: DepartmentModel) {
        if (!this.roleService.actionIsAllow('Department', 'Listing', true)) {
            return;
        }
        this._router.navigate(['/Nhon-hoa/Phong-ban/Chi-tiet/' + department.departmentId])
    }

    toggleSearch() {
        this.showSearchField = !this.showSearchField;
    }

    pageChange(event: any) {
        this.filterDepartment.currentPage = event.pageIndex + 1;
        this.filterDepartment.pageSize = event.pageSize;
        this._router.navigate(['.'], { relativeTo: this.route, queryParams: this.filterDepartment, queryParamsHandling: 'merge' });
        this.onSearch();
    }
}
