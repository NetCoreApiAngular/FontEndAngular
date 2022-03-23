import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/client/dialog.service';
import { ClientState } from 'src/app/shared/services/client/client-state';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private _clientState: ClientState,
    private _fb: FormBuilder,
    private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
  
  }

}
