import { Directive, ElementRef, HostListener, Input, OnInit, DoCheck } from '@angular/core';

@Directive({
  selector: 'img[image-cache]'
})
export class ImageCache implements OnInit, DoCheck {
  private el: any;
  private isDoChecked: boolean;
  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {}

  ngDoCheck(): void {
    if (!!this.el.src && !this.isDoChecked) {
      if(!this.el.src.includes('https://www.w3schools.com/w3images/avatar2.png') && !this.el.src.includes('data:image/png;base64') ) {
        // none default image
        this.isDoChecked = true;
        let src = this.el.src + '&time=' + new Date().getTime();
        this.el.src = src;
      }
    }
  }
}
