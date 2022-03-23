import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading',
  styleUrls: ['./loading.component.scss'],
  templateUrl: './loading.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LoadingComponent {
    @Input()
    fullScreen = false;
  
    @Input()
    show = false;
  
    @Input()
    size = 'md';
  
    @Input()
    loadingText = 'Loading';

    @Input() 
    subTextShow = false;
}
