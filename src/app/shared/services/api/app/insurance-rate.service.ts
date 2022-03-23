import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { ApiUrl } from '../../api-url/api-url';

@Injectable({
  providedIn: 'root'
})
export class InsuranceRateService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get(ApiUrl.InsuranceRateGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(InsuranceRateId: number) {
    return this._http.get(ApiUrl.InsuranceRateGetById + `?InsuranceRateId=${InsuranceRateId}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onCreate(model: any): Observable<any> {
    return this._http.post(ApiUrl.InsuranceRateCreate, model).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(model: any): Observable<any> {
    return this._http.post(ApiUrl.InsuranceRateUpdate, model).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(InsuranceRateId: number) {
    return this._http.post(ApiUrl.InsuranceRateDelete + `?InsuranceRateId=${InsuranceRateId}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams()
    Object.keys(params).forEach(function (key) {
      if (params[key]) {
        if(moment.isMoment(params[key])) {
          httpParams = httpParams.append(key, params[key].format('YYYY-MM-DD'));
        } else {
          httpParams = httpParams.append(key, params[key]);
        }
      }
    })
    return this._http.get(ApiUrl.InsuranceRateSearch, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}