
import { NavItem } from './../../navigation/nav.model';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['../start-menu.component.scss']
})
export class GroupComponent implements OnInit {

  toggleParent: boolean = true;
  toggleCollapable: boolean = false;
  @Input()
  itemList: NavItem[];
  selectedIndex: number;

  constructor() {

   }

  ngOnInit(): void {
  }

}
