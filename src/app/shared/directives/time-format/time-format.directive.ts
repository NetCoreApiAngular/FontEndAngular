import { Directive, ElementRef, HostListener, Input, OnInit, DoCheck, EventEmitter, Output } from '@angular/core';
import { Configs } from 'src/app/shared/common/configs/configs';
import 'src/app/core/prototype/string-prototype';

@Directive({
  selector: '[time-format],[timeFormat]'
})
export class TimeFormatDirective implements OnInit, DoCheck {
  private el: any;
  private isDoChecked: boolean;
  private state: number;
  private OnlyNumber: boolean = true;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();
  @Input() acceptZero: boolean;
  @Input() allowNegative: boolean;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    // const outvalue = Number(this.el.value);
    // this.el.value = Number.isNaN(outvalue) ? '' : Configs.TransformCurrency(this.el.value);
  }

  ngDoCheck(): void {
    if (!!this.el.value /*&& !this.isDoChecked*/) {
    
      let outValue = this.el.value.replaceAll(Configs.THOUSANDS_SEPARATOR, Configs.BLANK);
      let numberData = Number(outValue);
      let i = 3;
      let pos = this.el.selectionStart;
      let index = (this.el.value.match(/,/g) || []).length;
      while (parseInt((Math.abs(numberData) / 1000).toString()) > 0) {
        let head = outValue.slice(0, outValue.length - i);
        let tail = outValue.slice(outValue.length - i, outValue.length);
        outValue = head + ',' + tail;
        numberData = parseInt((numberData / 1000).toString());
        if (index <= 0) {
          pos = pos + 1;
        }
        index--;
        i = i + 4;
      }
      this.el.value = outValue;
      this.el.setSelectionRange(pos, pos, 'none');
      this.isDoChecked = true;
    }
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: string) {
    // opossite of transform
    // const outvalue = Number(value.replaceAll(Configs.THOUSANDS_SEPARATOR, ''));
    // this.el.value = Number.isNaN(outvalue) ? '' : Configs.ParseCurrency(value);
    // auto pick hours
  }

  private formatTimeout: any;
  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string | number) {
    // check vaild
  }

  @HostListener('keydown', ['$event'])
  onKeyDownProcess(e: KeyboardEvent) {
    // tab event
    // only number
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
  } 
}
