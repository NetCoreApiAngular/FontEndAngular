import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
@Injectable({
  providedIn: 'root',
})
export class InactivityAllowanceService {
  constructor(private _http: HttpClient) { }

  onGetAllData(_params?: any): Observable<any> {
    return this._http
      .get(ApiUrl.inactivityAllowanceGetAllData, {
        params: _params,
      })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onDelete(data): Observable<any> {
    return this._http
      .post(ApiUrl.inactivityAllowanceDelete + `?InactivityAllowanceId=${data}`, null)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetById(_materId): Observable<any> {
    return this._http
      .get(ApiUrl.inactivityAllowanceGetById, { params: { InactivityAllowanceId: _materId } })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }


  onUpdate(_data): Observable<any> {
    return this._http
      .post(ApiUrl.inactivityAllowanceUpdate, _data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  getSalaryByEmployeeId(_data): Observable<any> {
    return this._http
      .get(ApiUrl.inactivityAllowanceGetSalaryByEmployeeId, { params: _data })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  // onGetIntimateById(id): Observable<any> {
  //     let httpParams = new HttpParams();
  //     httpParams = httpParams.set('id', id);
  //     return this._http.get(ApiUrl.incomeTaxInfoGetDetailIntimate, { params: httpParams }).pipe(
  //         map(ApiHelper.extractData),
  //         catchError(ApiHelper.onFail)
  //     )
  // }

  onSearch(_params: any): Observable<any> {
    return this._http.get(ApiUrl.inactivityAllowanceSearch, {
      params: _params,
    });
  }
  
  onCreate(submitData): Observable<any> {
    return this._http
      .post(ApiUrl.inactivityAllowanceCreate, submitData)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onUpdateDateOffForEmployee(dateTime) {
    return this._http
      .get(ApiUrl.inactivityAllowanceUpdateDateOffForEmployee, { params: { dateTime: dateTime } })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetReportInactivityAllowances(_params?: any) {
    return this._http
    .get(ApiUrl.onGetReportInactivityAllowances, {
      params: _params,
    })
    .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetReport6MonthById(_materId): Observable<any> {
    return this._http
      .get(ApiUrl.onGetReportInactivitySixMonthSalary, { params: { inactivityAllowanceId: _materId } })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  // onDeleteDetailMore(submitData): Observable<any> {
  //   return this._http
  //     .post(ApiUrl.incomeTaxInfoDeleteDetailMore, submitData)
  //     .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  // }

  // onUpdateDetailMore(submitData): Observable<any> {
  //   return this._http
  //     .post(ApiUrl.incomeTaxInfoUpdateDetailMore, submitData)
  //     .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  // }

  // onFilter(params):Observable<any>{
  //     let httpParams = new HttpParams();
  //     Object.keys(params).forEach(function (key) {
  //         if(params[key]){
  //             httpParams = httpParams.append(key, params[key]);
  //         }
  //     })
  //     return this._http.get(ApiUrl.personalIncomeTaxFilter, {
  //         params: httpParams
  //     })
  // }
}
