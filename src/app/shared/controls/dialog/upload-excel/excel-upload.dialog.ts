import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientState } from 'src/app/shared/services/client/client-state';
import { FileModel } from 'src/app/shared/models/file/file.model';
import { GeneralApiService } from 'src/app/shared/services/api/app/general-api.service';
import { HttpResponse } from '@angular/common/http';
import { Configs } from 'src/app/shared/common/configs/configs';
import { ExcelApiUrlModel } from 'src/app/shared/models/excel/excel-api-url.model';

@Component({
  selector: 'excel-upload-dialog',
  templateUrl: './excel-upload.dialog.html'
})
export class ExcelUploadDialog implements OnInit {
  file: FileModel = new FileModel();
  postedFile: any = {};
  excelValidationMsg: string;
  uploadApiUrl: string = '';
  downloadTemplateUrl: string = '';

  constructor(
    public dialogRef: MatDialogRef<ExcelUploadDialog>,
    public clientState: ClientState,
    private generalApiService: GeneralApiService,
    @Inject(MAT_DIALOG_DATA) public data: ExcelApiUrlModel
  ) {}

  ngOnInit(): void {
    this.uploadApiUrl = this.data.uploadApiUrl;
    this.downloadTemplateUrl = this.data.downloadTemplateApiUrl;
  }

  onFileChange(event: any) {
    let file: File = event.target.files && <File>event.target.files[0];

    if (file) {
      this.file.fileName = file.name;
      this.file.mediaType = file.type;

      this.excelValidationMsg = Configs.validateFile(file, Configs.FileExtensionsContainer, Configs.FileMaximumSize);

      var reader = new FileReader();

      if (!this.excelValidationMsg) {
        reader.onload = (e: any) => {
          this.file.data = e.target.result;
        };
      } else {
        this.file.data = null;
      }

      reader.readAsDataURL(file);
      this.postedFile.postedFile = file;
    }
  }

  onUploadFile(f: any) {
    this.excelValidationMsg = Configs.validateFile(
      this.postedFile.postedFile,
      Configs.FileExtensionsContainer,
      Configs.FileMaximumSize
    );

    if (!f.valid || this.excelValidationMsg) {
      return;
    }

    if (this.file) {
      this.file.file = this.postedFile.postedFile;
    }

    this.clientState.isBusy = true;
    this.generalApiService.onUploadExcelFile(this.file, this.uploadApiUrl).subscribe(
      okResponse => {
        this.clientState.isBusy = false;
        this.dialogRef.close(true);
      },
      error => {
        if (error.error.content) {
          let errorLink = error.error.content;
          let body = {};

          this.generalApiService.onDownloadFile(errorLink, body).subscribe(
            (response: HttpResponse<any>) => {
              this.clientState.isBusy = false;
              this.downloadFile(response);
            },
            error => {
              this.clientState.isBusy = false;
            }
          );
        } else {
          this.clientState.isBusy = false;
        }
      }
    );
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  downloadTemplateFile() {
    this.generalApiService.onDownloadTemplateFile(this.downloadTemplateUrl).subscribe((response: HttpResponse<any>) => {
      this.downloadFile(response);
    });
  }

  downloadFile(response: HttpResponse<any>) {
    let contentDispositionHeader = response.headers.get('content-disposition');
    let fileName = contentDispositionHeader
      .split(';')[1]
      .trim()
      .split('=')[1];

    const blob = new Blob([response.body], { type: 'application/ms-excel' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    
    link.click();
  }
}
