import { SimpleChanges } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table-display-columns',
  templateUrl: './table-display-columns.component.html'
})
export class TableDisplayColumnsComponent implements OnInit {
  @Input() tableName: string;
  @Input() baseColumns: any;
  @Input() showColumns: string[];
  @Input() defaultHideColumns: string[];
  @Output() onColumnsChange: EventEmitter<any> = new EventEmitter<any>();
  cols: string[];
  constructor() {

  }

  ngOnInit(): void {
    this.getTableColumn();
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.baseColumns) {
  //     this.getTableColumn();
  //   }
  // }

  getTableColumn() {
    let item = localStorage.getItem(this.tableName);
    if (item) {
      let data = JSON.parse(item);
      this.showColumns = []
      data.forEach((col) => {
        if(this.baseColumns.some(item => item.id == col)) {
          this.showColumns.push(col)
        }
      })
      this.onColumnsChange.emit(this.showColumns);
    } else {
      this.cols = []
      this.baseColumns.forEach(element => {
        if(this.defaultHideColumns && this.defaultHideColumns.length > 0){
          if(this.defaultHideColumns.indexOf(element.id) == -1) {
            this.cols.push(element.id)
          }
        } else {
          this.cols.push(element.id)
        }
      });
     
      this.showColumns = this.cols;
      this.onColumnsChange.emit(this.showColumns);
      if(this.defaultHideColumns && this.defaultHideColumns.length > 0) {
        this.saveTableDisplay(this.tableName, this.showColumns);
      }
    }
  }

  saveTableDisplay(tableName: string, displayColumn: any) {
    localStorage.setItem(tableName, JSON.stringify(displayColumn));
  }

  onChangeColumn(columnName: string, index: number) {
    let i = this.showColumns.indexOf(columnName);
    if (i != -1) {
      this.showColumns.splice(i, 1);
    } else {
      let columns = [];
      this.baseColumns.forEach((item, ind) => {
        if(this.showColumns.some(element => item.id == element) || ind == index){
          columns.push(item.id);
        }
      })
      this.showColumns = columns;
    }
    this.saveTableDisplay(this.tableName, this.showColumns);
    this.onColumnsChange.emit(this.showColumns);
  }
}
