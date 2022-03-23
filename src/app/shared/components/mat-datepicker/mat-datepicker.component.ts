import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { Configs } from '../../common/configs/configs';

@Component({
  selector: 'app-mat-datepicker',
  templateUrl: './mat-datepicker.component.html',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'vi_VN'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE , MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    {provide : MAT_MOMENT_DATE_ADAPTER_OPTIONS , useValue : {useUtc : true}},
    {provide: MAT_DATE_FORMATS, useValue: Configs.DATE_FORMATS},
  ]
})
export class MatDatepickerComponent implements OnInit, OnChanges {

  date = new FormControl(null);

  @Input() required = true;
  @Input() label = 'Thời gian';
  @Input() dateInput: Date;
  @Input() minDay: Date;
  @Input() maxDay: Date;
  @Output() dateInputChange = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes?.minDay && this.date.value){
      if(new Date(changes.minDay.currentValue).getTime() > new Date(this.date.value).getTime()){
        this.date.setValue(null);
        // this.date.setErrors({minDate: true});
        return;
      }else {
        this.date.setErrors(null);
      }
    }
    if(changes?.maxDay && this.date.value){
    if(new Date(changes.maxDay.currentValue).getTime() < new Date(this.date.value).getTime()){
      this.date.setValue(null);
      // this.date.setErrors({maxDate: true});
      return;
    }else {
      this.date.setErrors(null);
    }
  }
  }

  onDateSelectChange() {
    this.dateInput = this.date.value;
    this.dateInputChange.emit(this.dateInput);
  }

  onChange(){
    if(this.date.value == '' || this.date.value == null  || this.date.value == undefined){
      this.date.setValue(null);
      this.date.setErrors({required: true});
      return;
  }else{
      this.date.setErrors(null);
  }
    if(new Date(this.minDay).getTime() > new Date(this.date.value).getTime()){
      this.date.setErrors({minDate: true});
      return;
    }else {
      this.date.setErrors(null);
    }
    if(new Date(this.maxDay).getTime() < new Date(this.date.value).getTime()){
      this.date.setErrors({maxDate: true});
      return;
    }else {
      this.date.setErrors(null);
    }
  }

}
