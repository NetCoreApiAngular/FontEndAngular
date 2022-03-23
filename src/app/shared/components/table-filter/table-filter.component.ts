import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { animations } from '../../animations';


@Component({
  selector: 'table-filter',
  templateUrl: './table-filter.component.html',
  animations: animations
})
export class TableFilterComponent implements OnInit {

  @Input() showSearchField: boolean = false;
  @Input() labelSearch: string = "Bộ lọc"
  constructor() {

  }


  ngOnInit(): void {

  }

  toggleSearch() {
    this.showSearchField = !this.showSearchField;
  }



}
