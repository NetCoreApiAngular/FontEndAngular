import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { SharedDirectives } from './share-directives';
import { SharedControls } from './share-controls';
import { SharedPipes } from './share-pipes';
import { GooglePlacesDirective } from './directives/google-places/google-places.directive';

import { ExcelUploadDialog, SnackBarComponent, MaterialConfirmDialogComponent } from './controls';
import { SharedComponents } from './share-components';

import { ImageCropperModule } from 'ngx-image-cropper';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getDutchPaginatorIntl } from './directives/custom-paginator/custom-paginator';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule, RouterModule, ImageCropperModule, TranslateModule ],
  declarations: [SharedDirectives, SharedControls, SharedPipes,SnackBarComponent, SharedComponents, GooglePlacesDirective, ExcelUploadDialog, MaterialConfirmDialogComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, SharedDirectives, SharedControls, SharedPipes, SharedComponents, ExcelUploadDialog, GooglePlacesDirective, SnackBarComponent, MaterialModule, FlexLayoutModule, RouterModule, ImageCropperModule, TranslateModule],
  providers: [
    { provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() }
  ]
})
export class SharedModule {}
