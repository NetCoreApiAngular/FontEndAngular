import { Optional, SimpleChanges } from '@angular/core';
import { Directive, ElementRef, Input, OnInit, HostListener, EventEmitter, Output } from '@angular/core';
import { BaseDropDownList } from '../../models/base.model';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';

@Directive({
  selector: '[FilterAutoComplete]'
})
export class FilterAutoComplete implements OnInit {
  private suggestionIndex: number;
  private suggestionItem: MatOption;
  @Output() setValue: EventEmitter<BaseDropDownList> = new EventEmitter();
  @Input() filterKey: string;
  @Input() autoCompleteEl: MatAutocomplete;
  @Input() autoSelectOption: boolean = true;
  constructor(
    @Optional() private autoTrigger: MatAutocompleteTrigger,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {

  }

  suggesstValue() {
    this.autoCompleteEl.showPanel = true;
    if (!this.autoCompleteEl.options || typeof this.filterKey != 'string') {
      return;
    }
    let dataArray = this.autoCompleteEl.options.toArray();
    this.suggestionIndex = dataArray.findIndex(item => item.viewValue.toLowerCase().includes(this.filterKey.toLowerCase()))
    if (this.suggestionIndex >= 0) {
      if(this.autoCompleteEl.panel) {
        this.autoCompleteEl.panel.nativeElement.scrollTop = 48 * this.suggestionIndex;
      } else {
        if(this.autoCompleteEl.panel != undefined){
          setTimeout(() => {
            this.autoCompleteEl.panel.nativeElement.scrollTop = 48 * this.suggestionIndex;
          }, 100);
        }
      }
      if(this.suggestionItem) {
        this.suggestionItem.deselect()
        this.suggestionItem = null;
      }
      dataArray.forEach((item, i) => {
        if(this.suggestionIndex == i && this.filterKey) {
          item.setActiveStyles()
          this.suggestionItem = item;
        } else {
          item.setInactiveStyles();
        }
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.filterKey) {
      this.suggesstValue();
    }
  }

  @HostListener('focus', ['$event']) onFocus() {
    this.suggesstValue();
  }

  @HostListener('keydown.enter', ['$event']) onEnterKey() {
    if(this.suggestionItem && this.autoSelectOption) {
      this.suggestionItem.select();
      this.autoTrigger.writeValue(this.suggestionItem.value);
    } else {
      this.autoTrigger.closePanel();
    }
  }

  @HostListener('keydown.tab', ['$event.target']) onTabKey() {
    if(this.suggestionItem && this.autoSelectOption) {
      this.suggestionItem.select();
      this.autoTrigger.writeValue(this.suggestionItem.value);
    }
  }
}
