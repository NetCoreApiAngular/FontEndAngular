import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoleService } from '../../services/api/app/role.service';

@Component({
  selector: 'table-icon',
  templateUrl: './table-icon.component.html'
})
export class TableIconComponent implements OnInit {

  @Input() element: any;
  @Input() isShow: boolean;
  @Input() moduleName: string;
  @Output() onViewEvent = new EventEmitter<any>();
  @Output() onDeleteEvent = new EventEmitter<any>();
  @Output() onUpdateEvent = new EventEmitter<any>();

  constructor(
    public roleService: RoleService,
  ) { }

  ngOnInit(): void { }

  onDelete(element: any) {
    this.onDeleteEvent.emit(element);
  }

  onView(element: any) {
    this.onViewEvent.emit(element);
  }

  onUpdate(element: any) {
    this.onUpdateEvent.emit(element);
  }
}
