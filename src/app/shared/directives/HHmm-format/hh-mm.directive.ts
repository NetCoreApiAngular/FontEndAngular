import { Directive, ElementRef, HostListener, Input, OnInit, DoCheck, EventEmitter, Output } from '@angular/core';
import { Configs } from 'src/app/shared/common/configs/configs';
import 'src/app/core/prototype/string-prototype';

@Directive({
  selector: '[time-hhmm],[HHmm]'
})
export class HhmmDirective implements OnInit, DoCheck {
  private el: any;
  private isDoChecked: boolean;
  @Output() valueChanged: EventEmitter<string> = new EventEmitter();
  @Input() acceptZero: boolean;
  @Input() allowNegative: boolean;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    let outvalue = this.el.value?  this.el.value : ''
    this.el.value = outvalue 
    outvalue = this.el.value.replaceAll(Configs.COLON, Configs.BLANK);
  }

  ngDoCheck(): void {
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    let e = <KeyboardEvent>event;
    if (
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
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
      this.convertTime();
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)||(e.target as HTMLInputElement).value.length > 3) {
      e.preventDefault();
    }
    // if (this.el.value < 0 && !this.acceptZero) {
    //   this.el.value = ''
    // }


  }

  @HostListener('keyup', ['$event']) onKeyUp(event: any) {
    let e = <KeyboardEvent>event;
    if (
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
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
      if(e.keyCode === 65 && (e.ctrlKey || e.metaKey)) {
         // Allow: Ctrl+A event 
         return
      }
      this.convertTime();
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) ) {
     
      e.preventDefault();
    }
    // if (this.el.value == 0 && !this.acceptZero) {
    //   this.el.value = ''
    // }
    const key = e.key
    const reg = new RegExp('^[0-9]*$')
    if(reg.test(key)) {
      this.convertTime();
    }
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: string) {
    // opossite of transform
    // const outvalue = Number(value.replaceAll(Configs.THOUSANDS_SEPARATOR, ''));
    // this.el.value = Number.isNaN(outvalue) ? '' : Configs.ParseCurrency(value);
  }

  // private formatTimeout: any;
  // @HostListener('blur', ['$event.target.value'])
  // onBlur(value: string | number) {
  //   if (value == 0 && this.acceptZero == true) {
  //     return;
  //   }

  //   if (this.formatTimeout) {
  //     clearTimeout(this.formatTimeout);
  //   }
  //   // this.parseIntValue();
  //   this.convertTime();
  // }


  convertTime() {
    if (this.el.value === '-') return;
    if (!!this.el.value /*&& !this.isDoChecked*/) {
      // const outvalue = Number(`${this.el.value}`.replaceAll(Configs.THOUSANDS_SEPARATOR, ''));
      // this.el.value = (Number.isNaN(outvalue) ? '' : Configs.TransformCurrency(outvalue));
      if (this.el.value.length < 5 ) {
        this.el.value = this.el.value.replaceAll(Configs.COLON, Configs.BLANK);
      }
      let outValue = this.el.value
      // let numberData = Number(outValue);
      let i = 2;
      let pos = this.el.selectionStart;
      if (this.el.value.length === 4 && !this.el.value.includes(":")) {
        let head = outValue.slice(0, outValue.length - i) > 23 ? '23':outValue.slice(0, outValue.length - i);
        let tail = outValue.slice(outValue.length - i, outValue.length) > 59 ? '59':outValue.slice(outValue.length - i, outValue.length);
        outValue = head + ':' + tail;
      }
      this.el.value = outValue;
      this.el.setSelectionRange(pos+1, pos+1, 'none');
      this.isDoChecked = true;
    }
  }
}
