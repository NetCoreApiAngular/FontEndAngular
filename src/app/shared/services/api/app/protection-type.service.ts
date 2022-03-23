import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { ProtectionTypeModel } from 'src/app/shared/models/protection-type/protection-type.model';

@Injectable({
  providedIn: 'root'
})
export class ProtectionTypeService {
  userInfo = JSON.parse(localStorage.getItem('user'));
  constructor(private _http: HttpClient) { }
  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.protectionTypeGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(id): Observable<any> {
    const params = `?protectionTypeId=${id}`;
    return this._http.post(ApiUrl.protectionTypeDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(protectionType): Observable<any> {
    const payLoad: ProtectionTypeModel = {
      ...protectionType,

    }
    return this._http.post(ApiUrl.protectionTypeCreate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(protectionType): Observable<any> {
    const payLoad: ProtectionTypeModel = {
      ...protectionType,

    }
    return this._http.post(ApiUrl.protectionTypeUpdate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('protectionTypeId', id);
    return this._http.get(ApiUrl.protectionTypeGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.protectionTypeSearch, {
      params: httpParams
    })
  }
}
