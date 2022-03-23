import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';


@Injectable({
  providedIn: 'root'
})
export class SalaryPartimeService {
  constructor(private _http: HttpClient) { }

  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.salaryPartimeGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onDelete(id): Observable<any> {
    const params = `?SalaryPartimeId=${id}`;
    return this._http.post(ApiUrl.salaryPartimeDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onCreate(body: any): Observable<any> {
    return this._http.post(ApiUrl.salaryPartimeCreate, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onUpdate(salary): Observable<any> {
    return this._http.post(ApiUrl.salaryPartimeUpdate, salary).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('salaryPartimeId', id);
    return this._http.get(ApiUrl.salaryPartimeGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onGetByDepartment(params: any, departmentId: any, textSearch?: string): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('salaryPartimeId', params.salaryPartimeId);
    httpParams = httpParams.append('departmentId', departmentId);
    if(textSearch) {
      httpParams = httpParams.append('textSearch', textSearch);
    }
    return this._http.get(ApiUrl.salaryPartimeGetByDepartment, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }
  onGetByMonthSalaryPartimes(id): Observable<any> {
    const params = `?salaryType=${id}`;
    return this._http.post(ApiUrl.GetByMonthSalaryPartime + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }
  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.salaryPartimeSearch, {
      params: httpParams
    });
  }

  getByExportData(month: any) {
    return this._http.get(ApiUrl.salaryPartimeGetSalaryPartimeDetailByMonth + `?month=${month}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}
