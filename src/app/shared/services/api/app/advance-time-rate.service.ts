import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { AdvanceTimeRateModel } from 'src/app/shared/models/advance-time-rate/advance-time-rate.model';
@Injectable({
  providedIn: 'root'
})
export class AdvanceTimeRateService {
  userInfo = JSON.parse(localStorage.getItem('user'));
  constructor(private _http: HttpClient) { }
  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.advanceTimeRateGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(id): Observable<any> {
    const params = `?id=${id}`;
    return this._http.post(ApiUrl.advanceTimeRateDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(advanceTimeRate): Observable<any> {
    const advance: AdvanceTimeRateModel = {
      ...advanceTimeRate,
      // code: +advanceTimeRate.code,
      rate: +advanceTimeRate.rate,
      // description: +advanceTimeRate.description
    }
    return this._http.post(ApiUrl.advanceTimeRateCreate, JSON.stringify(advance)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(advanceTimeRate): Observable<any> {
    const advance: AdvanceTimeRateModel = {
      ...advanceTimeRate,
      // code: +advanceTimeRate.code,
      rate: +advanceTimeRate.rate,
      // description: +advanceTimeRate.description
    }
    return this._http.post(ApiUrl.advanceTimeRateUpdate, JSON.stringify(advance)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('id', id);
    return this._http.get(ApiUrl.advanceTimeRateGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.advanceTimeRateSearch, {
      params: httpParams
    })
  }
}
