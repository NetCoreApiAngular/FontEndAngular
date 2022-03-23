import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-developing',
  templateUrl: './developing.component.html',
  styleUrls: ['./developing.component.scss']
})
export class DevelopingComponent {

  constructor(
    private _location: Location
  ) { }
  
  onBack() {
    this._location.back();
  }

}
