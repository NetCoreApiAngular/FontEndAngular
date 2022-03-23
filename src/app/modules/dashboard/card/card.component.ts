import { Component, OnInit } from '@angular/core';
import { QualificationModel } from 'src/app/shared/models/qualification/qualification.model';
import { QualificationService } from 'src/app/shared/services/api/app/qualification.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  qualification: QualificationModel = new QualificationModel();
  academyId: number = 4;
  constructor(
      private _qualificationService: QualificationService
  ) {

  }

  ngOnInit(): void {
    this._qualificationService.onGetById(this.academyId).subscribe(res => {
      this.qualification = res.content;
    });
  }
}
