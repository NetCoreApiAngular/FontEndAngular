import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ApiUrl } from '../../api-url/api-url';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root'
})
export class TimeLeaveManagementService {
  constructor(private _http: HttpClient) { }

  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.timeLeaveManagementGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(id): Observable<any> {
    const params = `?TimeLeaveManagementId=${id}`;
    return this._http.post(ApiUrl.timeLeaveManagementDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(year): Observable<any> {
    const params = `?year=${year}`;
    return this._http.post(ApiUrl.timeLeaveManagementCreate + params, {}).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
  onDeleteMultiple(id): Observable<any> {
    const params = `?year=${id}`;
    return this._http.post(ApiUrl.timeLeaveManagementDeleteMultiple + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
  onUpdate(TimeLeaveManagement): Observable<any> {
    return this._http.post(ApiUrl.timeLeaveManagementUpdate, JSON.stringify(TimeLeaveManagement)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('TimeLeaveManagementId', id);
    return this._http.get(ApiUrl.timeLeaveManagementGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.timeLeaveManagementSearch, {
      params: httpParams
    })
  }

  onMultiUpdate(TimeLeaveManagement): Observable<any> {
    return this._http.post(ApiUrl.timeLeaveManagementMultiUpdate, JSON.stringify(TimeLeaveManagement)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearchTimeLeaveSummaryReport(year: number) {
    return this._http.get(ApiUrl.searchTimeLeaveSummaryReport + `?year=${year}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
  onPrintTimeLeaveSummaryReport(params: any) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.searchTimeLeaveSummaryReport, {
      params: httpParams
    })
  }
  onPrintTimeLeaveOf11MonthReport(params: any) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.searchTimeLeaveOf11MonthReport, {
      params: httpParams
    })
  }

  onGetLastestYear(): Observable<any> {
    return this._http.get(ApiUrl.timeLeaveManagementGetNewYear).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}