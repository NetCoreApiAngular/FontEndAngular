import { Directive, ElementRef, Input,EventEmitter ,Output,HostListener} from '@angular/core';
@Directive({
    selector: '[UpperCase]',
    host: {
        '(input)': 'toUpperCase($event.target.value)',
    }

})
export class UpperCaseTextDirective  {
    @Output() ngModelChange = new EventEmitter();
    @Output() fxChange = new EventEmitter();
    constructor(private ref: ElementRef) {}
    toUpperCase(value: any) {
        value = value.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        value = value.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        value = value.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        value = value.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        value = value.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        value = value.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        value = value.replace(/đ/g,"d");
        value = value.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,"");
        this.ref.nativeElement.value = value.toUpperCase();
        this.ref.nativeElement.value = this.ref.nativeElement.value.toUpperCase();
        this.ngModelChange.emit(this.ref.nativeElement.value);
        this.fxChange.emit(this.ref.nativeElement.value);
    }
}
