import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/client/dialog.service';
import { animations } from 'src/app/shared/animations';
import { PagingModel } from 'src/app/shared/models/api-response/api-response';
import { Configs } from 'src/app/shared/common/configs/configs';
import { ClientState } from 'src/app/shared/services/client/client-state';

import { SnackbarData, MessageType, DialogData } from 'src/app/shared/models/material/material.model';
import { RoleService } from 'src/app/shared/services/api/app/role.service';
import { ReusableService } from 'src/app/shared/services/api/app/reusable.service';
import { ApiUrl } from 'src/app/shared/services/api-url/api-url';
import moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { FilterBaseModel } from 'src/app/shared/models/filter/filter.model';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  animations: animations
})
export class CustomerComponent implements OnInit {
  dataSource = new MatTableDataSource();

  displayedColumns: any[] = [
    { id: 'stt', name: 'Stt' },
    { id: 'code', name: 'Mã khách hàng' },
    { id: 'name', name: 'Tên khách hàng' },
    { id: 'taxCode', name: 'Mã số thuế' },
    { id: 'description', name: 'Ghi chú' },
    { id: 'action', name: 'Thao tác' }
  ];
  showColumns: string[] = [];
  componentName = 'CustomerComponent';
  showSearchField: boolean = false;
  defaultPageSize = Configs.DefaultPageSize;
  pageSizeList = Configs.PageSizeList;
  pagingModel = new PagingModel();
  searchFilter: FilterBaseModel = new FilterBaseModel();
  searchForm: FormGroup = this._fb.group({
    textSearch: '',
  })

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  sortChange = Configs.sortChange;
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private _reusableService: ReusableService,
    private _clientState: ClientState,
    private _fb: FormBuilder,
    private dialog: MatDialog,
    public roleService: RoleService,
  ) {
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
    this.paginator._intl.itemsPerPageLabel = '';
    this.onFilter();
  }

  toggleSearch() {
    this.showSearchField = !this.showSearchField;
  }

  onFilter() {
    this.searchFilter.currentPage = 1;
    this.searchFilter.pageSize = Configs.DefaultPageSize;
    this.paginator.pageIndex = 0;
    this.onSearch();
  }

  onSearch() {
    Object.assign(this.searchFilter, this.searchForm.value);
    this._clientState.isBusy = true;
    this._reusableService.onSearch(ApiUrl.searchCustomer, this.searchFilter).subscribe(
      res => {
        this._clientState.isBusy = false;
        let { customers, ...PagingModel } = res.content;
        this.dataSource.data = customers;
        this.pagingModel = PagingModel;
      }, error => {
        this._clientState.isBusy = false;
      }
    )
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

  onCreate() {
    if (!this.roleService.actionIsAllow('Customer', 'Create', true)) {
      return;
    }
    this.router.navigate(['/Nhon-hoa/Danh-sach-khach-hang/Them-moi']);
  }

  onUpdate(id: number) {
    if (!this.roleService.actionIsAllow('Customer', 'Edit', true)) {
      return;
    }
    this.router.navigate(['/Nhon-hoa/Danh-sach-khach-hang/Cap-nhat', id]);
  }

  onDetail(id: number) {
    if (!this.roleService.actionIsAllow('Customer', 'Listing', true)) {
      return;
    }
    this.router.navigate(['/Nhon-hoa/Danh-sach-khach-hang/Chi-tiet', id]);
  }



  onDelete(id: number) {
    if (!this.roleService.actionIsAllow('Customer', 'Delete', true)) {
      return;
    }
    this.dialogService.onOpenConfirmDialog(<DialogData>{
      content: Configs.deleteItem
    }, (isConfirm: boolean) => {
      if (isConfirm) {
        this._clientState.isBusy = true;
        this._reusableService.onDelete(ApiUrl.deleteCustomer, 'CustomerId', id).subscribe(
          res => {
            this._clientState.isBusy = false;
            this.dialogService.onOpenInformMessageSnackBar(<SnackbarData>{
              content: Configs.deleteSuccess,
              type: MessageType.Success
            })
            this.onFilter();
          }, error => {
            this._clientState.isBusy = false;
          }
        )
      }
    })
  }

  pageChange(event: any) {
    this.searchFilter.currentPage = event.pageIndex + 1;
    this.searchFilter.pageSize = event.pageSize;
    this.paginator.pageIndex = 0;
    this.onSearch();
  }


  cleanFilter() {
    this.searchForm.reset();
    this.onFilter();
  }

  get textSearch() {
    return this.searchForm.controls.textSearch;
  }

}
