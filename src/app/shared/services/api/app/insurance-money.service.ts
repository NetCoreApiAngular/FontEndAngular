import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';

import { ApiHelper } from '../../api-helper';
import { ApiUrl } from '../../api-url/api-url';

@Injectable({
  providedIn: 'root'
})
export class InsuranceMoneyService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get(ApiUrl.InsuranceMoneyGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(model: any): Observable<any> {
    return this._http.post(ApiUrl.InsuranceMoneyCreate, model).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(model: any): Observable<any> {
    return this._http.post(ApiUrl.InsuranceMoneyUpdate, model).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearch(year): Observable<any> {
    let httpParams = new HttpParams()
      .set('year', year);

    return this._http.get(ApiUrl.InsuranceMoneySearch, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}