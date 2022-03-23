import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { TimeLeaveYear } from 'src/app/shared/models/time-leave-year/time-leave-year.model';

@Injectable({
  providedIn: 'root'
})
export class TimeLeaveYearService {

  userInfo = JSON.parse(localStorage.getItem('user'));
  constructor(private _http: HttpClient) { }
  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.TimeLeaveYearGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(id): Observable<any> {
    const params = `?TimeLeaveYearId=${id}`;
    return this._http.post(ApiUrl.TimeLeaveYearDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
  onDeleteMultiple(id): Observable<any> {
    const params = `?year=${id}`;
    return this._http.post(ApiUrl.TimeLeaveYearDeleteMultiple + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
  onCreate(year): Observable<any> {
    const params = `?year=${year}`;
    return this._http.post(ApiUrl.TimeLeaveYearCreate + params, {}).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(TimeLeaveYear): Observable<any> {
    const payLoad: TimeLeaveYear = {
      ...TimeLeaveYear,

    }
    return this._http.post(ApiUrl.TimeLeaveYearUpdate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdateTimeLeaveAddition(): Observable<any> {
    return this._http.post(ApiUrl.TimeLeaveAddition, {}).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('TimeLeaveYearId', id);
    return this._http.get(ApiUrl.TimeLeaveYearGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetByYear(year: number) {
    return this._http.get(ApiUrl.TimeLeaveYearGetByYear + `?year=${year}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.TimeLeaveYearSearch, {
      params: httpParams
    })
  }

  onGetLastestYear(): Observable<any> {
    return this._http.get(ApiUrl.TimeLeaveYearGetNewYear).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}
