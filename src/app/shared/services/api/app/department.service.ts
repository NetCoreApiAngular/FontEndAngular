import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  DepartmentModel,
  DepartmentFilterModel,
} from 'src/app/shared/models/department/department.model';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  // userInfo = JSON.parse(localStorage.getItem('user'));

  constructor(private _http: HttpClient) {}

  onGetAll(): Observable<any> {
    return this._http
      .get(ApiUrl.departmentGetAll)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetDepartmentBySalaryOutsourceDetail(salaryParttimeId: number): Observable<any> {
    let httpParams = new HttpParams()
    httpParams = httpParams.append('salaryParttimeId', salaryParttimeId.toString())
    return this._http
      .get(ApiUrl.getDepartmentBySalaryOutsourceDetail, {params: httpParams})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetDepartmentBySalaryParttimeDetail(salaryParttimeId: number): Observable<any> {
    let httpParams = new HttpParams()
    httpParams = httpParams.append('salaryParttimeId', salaryParttimeId.toString())
    return this._http
      .get(ApiUrl.getDepartmentBySalaryParttimeDetail, {params: httpParams})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onDelete(id): Observable<any> {
    const params = `?departmentId=${id}`;
    return this._http
      .post(ApiUrl.departmentDelete + params, null)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onCreate(department): Observable<any> {
    const payLoad: DepartmentModel = {
      ...department,
    };
    return this._http
      .post(ApiUrl.departmentCreate, JSON.stringify(payLoad))
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onUpdate(department): Observable<any> {
    const payLoad: DepartmentModel = {
      ...department,
    };
    return this._http
      .post(ApiUrl.departmentUpdate, JSON.stringify(payLoad))
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('departmentId', id);
    return this._http
      .get(ApiUrl.departmentGetById, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    });
    return this._http.get(ApiUrl.departmentSearch, {
      params: httpParams,
    });
  }

  onFilter(params: DepartmentFilterModel): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (
        (params[key] && params[key].toString().trim() !== '') ||
        (key == 'status' && params[key] != null)
      ) {
        httpParams = httpParams.append(key, params[key]);
      }
    });
    return this._http.get(ApiUrl.departmentFilter, {
      params: httpParams,
    });
  }
}
