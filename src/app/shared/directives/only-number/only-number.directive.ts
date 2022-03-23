import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Configs } from '../../common/configs/configs';
@Directive({
  selector: '[OnlyNumber],[onlynumber],[onlyNumber]'
})
export class OnlyNumber {
  constructor(private el: ElementRef) { }
  @Input() allowNegative: boolean;
  @Input() allowThousandSeperator: boolean = false;
  @Input() zeroFirst: boolean;
  @Input() min: number;
  private OnlyNumber: boolean = true;

  @HostListener('keydown', ['$event'])
  onKeyDownProcess(e: KeyboardEvent) {
    if (this.OnlyNumber) {
      if (
        [46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        // let it happen, don't do anything
        return;
      }

      if (this.allowNegative) {
        if (e.keyCode == 189) {
          return;
        }
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    }

    this.parseInt();
  }

  @HostListener('keyup', ['$event'])
  onKeyupProcess(e: KeyboardEvent) {
    this.parseInt();
  }

  parseInt() {
    if (
      !this.el.nativeElement.value ||
      this.el.nativeElement.value == '-' ||
      this.el.nativeElement.value == ''
    ) {
      if (this.el.nativeElement.value == '' && this.min) {
        this.el.nativeElement.value = this.min;
      } else {
        return;
      }
    }
    let current: string = `${this.el.nativeElement.value}`;
    current = current.replaceAll(Configs.THOUSANDS_SEPARATOR, Configs.BLANK);
    if (!this.zeroFirst) {
      let intVal = parseInt(current);
      if (!!current) {
        this.el.nativeElement.value = !isNaN(intVal) ? (this.allowNegative ? intVal : intVal >= 0 ? intVal : '') : '';
        this.el.nativeElement.dispatchEvent(new Event('input'));
      }
    }
  }
}
