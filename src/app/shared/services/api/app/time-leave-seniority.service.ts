import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { TimeLeaveSeniority } from 'src/app/shared/models/time-leave-seniority/time-leave-seniority.model';

@Injectable({
  providedIn: 'root'
})
export class TimeLeaveSeniorityService {

  userInfo = JSON.parse(localStorage.getItem('user'));
  constructor(private _http: HttpClient) { }
  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.timeLeaveSeniorityGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(id): Observable<any> {
    const params = `?TimeLeaveSeniorityId=${id}`;
    return this._http.post(ApiUrl.timeLeaveSeniorityDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(year): Observable<any> {
    const params = `?year=${year}`;
    return this._http.post(ApiUrl.timeLeaveSeniorityCreate + params, {}).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(TimeLeaveSeniority): Observable<any> {
    const payLoad: TimeLeaveSeniority = {
      ...TimeLeaveSeniority,

    }
    return this._http.post(ApiUrl.timeLeaveSeniorityUpdate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('TimeLeaveSeniorityId', id);
    return this._http.get(ApiUrl.timeLeaveSeniorityGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.timeLeaveSenioritySearch, {
      params: httpParams
    })
  }
}
