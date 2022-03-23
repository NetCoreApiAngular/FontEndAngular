import { Directive, ElementRef, Input, OnInit, OnChanges, Renderer2, HostListener, OnDestroy } from '@angular/core';

@Directive({
  selector: '[inputWidthAuto]'
})
export class InputWidthAuto implements OnInit, OnDestroy {
  @Input() minWidth: number = 20;
  @Input() width: number = 20;
  @Input() value: any;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.el.nativeElement, 'width', this.width+'px')
    this.el.nativeElement.insertAdjacentHTML('beforebegin', 
    `<span style="visibility: hidden; white-space: pre; position:absolute" id="${this.el.nativeElement.name}"></span>`)
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement, 'w-100')
      this.resize()
    }, 100);
  }

  @HostListener("ngModelChange", ["$event"]) onNgModelChange(value) {
    this.resize()
  }

  
  @HostListener("change", ["$event"]) onChange(value) {
    this.resize()
  }

  resize() {
    let predict = document.getElementById(this.el.nativeElement.name);
    if(predict) {
      predict.innerHTML = this.el.nativeElement.value;
    }
    this.width = Math.max(this.minWidth, predict.offsetWidth);
    this.renderer.setStyle(this.el.nativeElement, 'width', this.width + 1 +'px')
  }

  ngOnDestroy() {
    let predict = document.getElementById(this.el.nativeElement.name);
    if(predict) {
      predict.remove();
    }
  }
}
