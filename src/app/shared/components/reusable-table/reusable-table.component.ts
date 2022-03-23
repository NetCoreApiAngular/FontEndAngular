import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


// expirement not usable now
@Component({
    selector: 'reusable-table',
    templateUrl: './reusable-table.component.html',
    //styleUrls: ['./detail-main.component.scss']
})
export class ReusableTableComponent implements OnInit{

    @Input() dataSource : MatTableDataSource<any>;
    @Input() showColumns : string[];
    @Input() displayedColumns: any [];
    @Input() customIndex : number[];

    @Input() customTemplate : TemplateRef<any>[];
    ngOnInit(): void {
        
    }

}