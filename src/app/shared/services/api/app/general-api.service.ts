import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { ApiListPagingResponse, ApiResponse, ApiListResponse } from 'src/app/shared/models/api-response/api-response';
import { HttpClient } from '@angular/common/http';
import { FileModel } from 'src/app/shared/models/file/file.model';

export interface GeneralApi {
  onDownloadFile(url: string, body: any): any;
  onDownloadTemplateFile(apiUrl: string): any;
  onUploadExcelFile(file: FileModel, apiUrl: string): any;
}

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService implements GeneralApi {
  constructor(private http: HttpClient) {}

  onDownloadFile(url: string, body: any) {
    return this.http.post(url, body, { observe: 'response', responseType: 'blob' });
  }

  onDownloadTemplateFile(apiUrl: string) {
    let body = {};
    return this.http.post(apiUrl, body, { observe: 'response', responseType: 'blob' });
  }

  onUploadExcelFile(file: FileModel, apiUrl: string) {
    const formData = new FormData();

    formData.append('postedFile', file.file);

    return this.http.post(apiUrl, formData);
  }

  onDownloadExcelReport(url: string, fromDate?: string, toDate?: string) {
    let queries = '';

    let body = {};
    if (fromDate) {
      queries = '?fromDate=' + fromDate;

      if (toDate) {
        queries += '&toDate=' + toDate;
      }
    } else if (toDate) {
      queries = '?toDate=' + toDate;
    }

    return this.http.post(url + queries, body, { observe: 'response', responseType: 'blob' });
  }
}
