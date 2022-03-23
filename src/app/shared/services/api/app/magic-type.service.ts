import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchMagicTypeModel } from 'src/app/shared/models/magic-type/magic-type.model';

@Injectable({
  providedIn: 'root'
})
export class MagicTypeService {

  constructor(private http: HttpClient) { }

  onGetAll(): Observable<any> {
    return this.http.get(ApiUrl.timeLeaveGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(data: any) {
    return this.http.post(ApiUrl.timeLeaveCreate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(data: any) {
    return this.http.post(ApiUrl.timeLeaveUpdate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(TimeLeaveId: number) {
    return this.http.get(ApiUrl.timeLeaveGetById + `?TimeLeaveId=${TimeLeaveId}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onRemove(TimeLeaveId: number) {
    return this.http.post(ApiUrl.timeLeaveDelete + `?TimeLeaveId=${TimeLeaveId}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onSearch(params: SearchMagicTypeModel): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (params[key] && params[key].toString().trim() !== '') {
        httpParams = httpParams.append(key, params[key]);
      }
    })
    return this.http.get(ApiUrl.timeLeaveSearch, {
      params: httpParams
    })
  }
}
