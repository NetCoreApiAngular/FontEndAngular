import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeBlockService } from 'src/app/shared/services/api/app/time-block.service';
import { SearchTimeBlockModel } from 'src/app/shared/models/timeblock/time-block.model';
import { ClientState } from 'src/app/shared/services/client/client-state';
import { MatPaginator } from '@angular/material/paginator';
import { PagingModel } from 'src/app/shared/models/api-response/api-response';
import { Configs } from 'src/app/shared/common/configs/configs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['timeBlockCode', 'morningHour', 'middleHour', 'afternoonHour', 'createdBy', 'createdDate', 'action'];
  searchFilter: SearchTimeBlockModel = new SearchTimeBlockModel();
  pagingModel = new PagingModel();
  defaultPageSize = Configs.DefaultPageSize;
  pageSizeList = Configs.PageSizeList;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private timeBlockService: TimeBlockService,
    private _clientState: ClientState
  ) { }

  ngOnInit(): void {
    this.searchFilter.currentPage = 1;
    this.searchFilter.pageSize = this.defaultPageSize;
    this.onSearchSalaryRate();
    this.paginator._intl.itemsPerPageLabel = '';
  }

  onSearchSalaryRate() {
    this._clientState.isBusy = true;
    this.timeBlockService.onSearchTimeBlock(this.searchFilter).subscribe(res => {
      this._clientState.isBusy = false;
      let { timeBlocks, ...PagingModel } = res.content;
      this.dataSource = timeBlocks;
      this.pagingModel = PagingModel;
    }, error => {
      this._clientState.isBusy = false;
    })
  }

  pageChange(event: any) {
    this.searchFilter.currentPage = event.pageIndex + 1;
    this.searchFilter.pageSize = event.pageSize;
    this.onSearchSalaryRate();
  }

}
