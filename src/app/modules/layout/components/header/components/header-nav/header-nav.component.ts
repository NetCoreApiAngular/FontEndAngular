import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @HostBinding('class') classes = "header-item";
  constructor() { }

  ngOnInit(): void {
  }

}
