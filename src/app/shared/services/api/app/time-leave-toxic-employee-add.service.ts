import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { TimeLeaveToxicEmployee } from 'src/app/shared/models/time-leave-toxic-employee/time-leave-toxic-employee.model';

@Injectable({
  providedIn: 'root'
})
export class TimeLeaveToxicEmployeeAddService {

  userInfo = JSON.parse(localStorage.getItem('user'));
  constructor(private _http: HttpClient) { }
  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.TimeLeaveToxicEmployeeAddGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(id): Observable<any> {
    const params = `?TimeLeaveToxicEmployeeAddId=${id}`;
    return this._http.post(ApiUrl.TimeLeaveToxicEmployeeAddDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(timeLeaveToxicEmployee): Observable<any> {
    const payLoad: TimeLeaveToxicEmployee = {
      ...timeLeaveToxicEmployee,

    }
    return this._http.post(ApiUrl.TimeLeaveToxicEmployeeAddCreate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(timeLeaveToxicEmployee): Observable<any> {
    const payLoad: TimeLeaveToxicEmployee = {
      ...timeLeaveToxicEmployee,

    }
    return this._http.post(ApiUrl.TimeLeaveToxicEmployeeAddUpdate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('TimeLeaveToxicEmployeeAddId', id);
    return this._http.get(ApiUrl.TimeLeaveToxicEmployeeAddId, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.TimeLeaveToxicEmployeeAddSearch, {
      params: httpParams
    })
  }
}
