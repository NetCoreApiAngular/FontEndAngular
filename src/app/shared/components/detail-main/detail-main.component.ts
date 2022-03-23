import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';


@Component({
    selector: 'reusable-detail-main',
    templateUrl: './detail-main.component.html',
    styleUrls: ['./detail-main.component.scss']
})
export class DetailReusableMainComponent implements OnInit{


    @Input() labels :string[];

    @Input() data : any[];

    @Input() customIndex : number[] = [];

    @Input() customTemplate : TemplateRef<any>[];


    ngOnInit(): void {
        
    }

}
