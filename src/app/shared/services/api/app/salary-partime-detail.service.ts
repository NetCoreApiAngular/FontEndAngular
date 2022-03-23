import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root'
})
export class SalaryPartimeDetailService {
  constructor(private _http: HttpClient) { }

  onGetAll(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(function (key) {
        if ((params[key] && params[key].toString().trim() !== '') || (key == 'status' && params[key] != null)) {
          httpParams = httpParams.append(key, params[key]);
        }
      })
    }
    return this._http.get(ApiUrl.salaryPartimeDetailGetAll, {
      params: httpParams
    }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onDelete(id): Observable<any> {
    const params = `?SalaryPartimeDetailId=${id}`;
    return this._http.post(ApiUrl.salaryPartimeDetailDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onCreate(body: any): Observable<any> {
    return this._http.post(ApiUrl.salaryPartimeDetailCreate, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onUpdate(salary): Observable<any> {
    return this._http.post(ApiUrl.salaryPartimeDetailUpdate, salary).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('salaryId', id);
    return this._http.get(ApiUrl.salaryPartimeDetailGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.salaryPartimeDetailSearch, {
      params: httpParams
    });
  }

  onUpdateSalaryDetail(salaryDetail: any) {
    return this._http.post(ApiUrl.salaryPartimeDetailUpdate, salaryDetail);
  }

  onUpdateMultiSalaryDetails(salaryDetails: any) {
    return this._http.post(ApiUrl.salaryPartimeDetailMultiUpdate, salaryDetails);
  }

  salaryCreate(params: any) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.post(ApiUrl.getBySalaryPartimeSalaryCreate, {}, {
      params: httpParams
    });
  }
}
