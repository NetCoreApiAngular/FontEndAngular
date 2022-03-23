import { Component, Input, OnInit } from '@angular/core';
import { I18nService } from 'src/app/core';
import { NavItem } from '../nav.model';

@Component({
  selector: 'app-item-children',
  templateUrl: './item-children.component.html',
  styleUrls: ['./item-children.component.scss']
})
export class ItemChildrenComponent implements OnInit {

  @Input()
  item: NavItem;
  constructor(
    public _i18nService: I18nService
  ) { }

  ngOnInit(): void {
  }

}
