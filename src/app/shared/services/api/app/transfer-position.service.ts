import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferPositionService {

  constructor(private http: HttpClient) {}

  onCreate(data: any) {
    return this.http.post(ApiUrl.postTransferPosition, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(data: any) {
    return this.http.post(ApiUrl.putTransferPositionById, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(transferPositionId: number) {
    return this.http.get(ApiUrl.getTransferPositionById + `?transferPositionid=${transferPositionId}`).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  onRemove(transferPositionId: number) {
    return this.http.post(ApiUrl.deleteTransferPosition + `?transferPositionid=${transferPositionId}`, null).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
        if(params[key] && params[key].toString().trim() !== '') {
            httpParams = httpParams.append(key, params[key]);
        }
    })
    return this.http.get(ApiUrl.searchTransferPosition, {
        params: httpParams
    })
  }

  onSearchDetail(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
        if(params[key] && params[key].toString().trim() !== '') {
            httpParams = httpParams.append(key, params[key]);
        }
    })
    return this.http.get(ApiUrl.searchTransferPositionDetail, {
        params: httpParams
    })
  }

  onGetDetailById(id: any): Observable<any> {
    return this.http.get(ApiUrl.getTransferPositionDetailById + `?transferPositionid=${id}`);
  }

  onCreateDetail(data: any) {
    return this.http.post(ApiUrl.postTransferPositionDetail, data);
  }

  onRemoveDetail(transferPositionid: any) {
    return this.http.post(ApiUrl.deleteTransferPositionDetailById + `?transferPositionid=${transferPositionid}`, {});
  }
}
