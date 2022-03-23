import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'reusable-form-function',
    templateUrl: './reusable-form-function.component.html',
    //styleUrls: ['./detail-main.component.scss']
})
export class ReusableFormFunctionComponent implements OnInit{

    @Input() createForm : any;

    ngOnInit(): void {
        
    }

    onSubmit(f) {
        
        
        
    }

}