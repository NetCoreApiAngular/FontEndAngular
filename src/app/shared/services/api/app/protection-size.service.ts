import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { ProtectionSizeModel } from 'src/app/shared/models/protection-size/protection-size.model';
@Injectable({
  providedIn: 'root'
})
export class ProtectionSizeService {
  userInfo = JSON.parse(localStorage.getItem('user'));
  constructor(private _http: HttpClient) { }
  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.protectionSizeGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(id): Observable<any> {
    const params = `?ProtectionSizeId=${id}`;
    return this._http.post(ApiUrl.protectionSizeDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(protectionSize): Observable<any> {
    const payLoad: ProtectionSizeModel = {
      ...protectionSize,

    }
    return this._http.post(ApiUrl.protectionSizeCreate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(protectionSize): Observable<any> {
    const payLoad: ProtectionSizeModel = {
      ...protectionSize,

    }
    return this._http.post(ApiUrl.protectionSizeUpdate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('ProtectionSizeId', id);
    return this._http.get(ApiUrl.protectionSizeGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.protectionSizeSearch, {
      params: httpParams
    })
  }
}
