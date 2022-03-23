import { ElementRef, Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[percent]'
})
export class PercentDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) onkeydown(e: KeyboardEvent) {
    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [current.slice(0, position), e.key == 'Decimal' ? '.' : e.key, current.slice(position)].join(
      ''
    );

    const value = Number.parseInt(next);

    if (value < 0 || value > 100) {
      e.preventDefault();
    }
  }
}
