import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {

  @HostBinding("class") classes = "header-item user";
  currUser: string;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currUser = JSON.parse(localStorage.getItem('user')).fullName
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
