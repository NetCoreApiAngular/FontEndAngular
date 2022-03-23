import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[text-area-directive], [text-area]'
})
export class TextAreaDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewChecked() {
    this.onValueChange();
  }

  @HostListener('ngModelChange')
  public onValueChange() {
    this.renderer.setStyle(this.el.nativeElement, 'height', 'auto');
    this.renderer.setStyle(
      this.el.nativeElement,
      'height',
      `${Math.max(this.el.nativeElement.scrollHeight, 19)}px`
    );
  }
}
