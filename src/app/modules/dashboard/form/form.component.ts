import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/shared/models/employee/employee.model';
import { Configs } from 'src/app/shared/common/configs/configs';
import { IssuerPlaceService } from 'src/app/shared/services/api/app/issuer-place.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  employee: EmployeeModel = new EmployeeModel();
  listMarries = Configs.Marries;
  listPlaceCode: any[];

  constructor(
    private issuerPlaceService: IssuerPlaceService
  ) { }

  ngOnInit(): void {
    this.onGetIssuePlace();
  }

  onGetIssuePlace() {
    this.issuerPlaceService.onSearchIssuerPlace({}).subscribe(
      res => {
        this.listPlaceCode = res.content.issuerPlaces;
      }
    )
  }
}
