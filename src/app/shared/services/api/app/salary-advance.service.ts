import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { SalaryAdvanceModel } from 'src/app/shared/models/salary-advance/salary-advance.model';


@Injectable({
  providedIn: 'root'
})
export class SalaryAdvanceService {
  constructor(private _http: HttpClient) { }
  oncreateSalaryAdvance(data: any) {
    let params = new HttpParams();
    params = params.append('monthSalary', data.monthSalary)
    return this._http.post(ApiUrl.createSalaryAdvance, {}, { params: params }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
  onUpdateSalaryAdvance(data: any) {
    return this._http.post(ApiUrl.updateSalaryAdvance, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
  onGetMonthNewest() {
    return this._http.get(ApiUrl.GetMonthNewest).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
  onUpdateMultiSalaryAdvance(data: any) {
    return this._http.post(ApiUrl.updateMultiSalaryAdvance, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetAllSalaryAdvance(salaryId?: number) {
    let params = new HttpParams()
    if (salaryId) {
      params = params.append('salaryId', salaryId.toString())
    }
    return this._http.get(ApiUrl.getAllSalaryAdvance, { params: params }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onGetSalaryAdvanceById(salaryId: number) {
    return this._http.get(ApiUrl.getSalaryAdvanceById + `?SalaryAdvanceId=${salaryId}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onDeleteSalaryAdvance(salaryId: number) {
    return this._http.post(ApiUrl.deleteSalaryAdvance + `?SalaryAdvanceId=${salaryId}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  getSalaryAdvanceByDepartment(salaryId, departmentId, textSearch?: string) {
    let params = new HttpParams();
    params = params.append('salaryId', salaryId)
    params = params.append('departmentId', departmentId)
    if (textSearch) {
      params = params.append('textSearch', textSearch)
    }
    return this._http.get(ApiUrl.GetByDepartmentId, { params: params }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  getSalaryAdvanceByGroup(salaryId, groupId, textSearch?: string) {
    let params = new HttpParams();
    params = params.append('salaryId', salaryId)
    params = params.append('groupId', groupId)
    if (textSearch) {
      params = params.append('textSearch', textSearch)
    }
    return this._http.get(ApiUrl.GetByGroupId, { params: params }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onSearchSalaryAdvance(queryParams: any) {
    let queries = '';
    Object.keys(queryParams).map(key => {
      queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${queryParams[key] && (queryParams[key].toString().toLocaleLowerCase() == '' || queryParams[key] == null)
        ? ''
        : encodeURIComponent(queryParams[key])
        }`;
    });
    return this._http.get(ApiUrl.searchSalaryAdvance + queries).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onConvertMoneyToAlpha(moneyNumber: number) {
    return this._http.post(ApiUrl.ConvertMoneyToAlpha + `?money=${moneyNumber}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

}
