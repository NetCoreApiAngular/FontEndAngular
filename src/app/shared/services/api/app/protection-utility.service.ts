import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ApiUrl } from '../../api-url/api-url';
import { ApiHelper } from 'src/app/shared/services/api-helper';

import { ProtectionUtilityDetailModel } from 'src/app/shared/models/protection-utility/protection-utility.model';

@Injectable({
  providedIn: 'root'
})
export class ProtectionUtilityService {

  constructor(private http: HttpClient) { }
  onCreate(data: any) {
    return this.http.post(ApiUrl.protectionUtilityCreate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(data: any) {
    return this.http.post(ApiUrl.protectionUtilityUpdate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(protectionUtilityId: number) {
    return this.http.get(ApiUrl.protectionUtilityGetById + `?protectionUtilityId=${protectionUtilityId}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onRemove(protectionUtilityId: number) {
    return this.http.post(ApiUrl.protectionUtilityDelete + `?protectionUtilityId=${protectionUtilityId}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (params[key] && params[key].toString().trim() !== '') {
        httpParams = httpParams.append(key, params[key]);
      }
    })
    return this.http.get(ApiUrl.protectionUtilitySearch, {
      params: httpParams
    })
  }

  onSearchDetail(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (params[key] && params[key].toString().trim() !== '') {
        httpParams = httpParams.append(key, params[key]);
      }
    })
    return this.http.get(ApiUrl.protectionUtilityDetailSearch, {
      params: httpParams
    })
  }

  onGetDetailById(id: any): Observable<any> {
    return this.http.get(ApiUrl.protectionUtilityDetailGetById + `?protectionUtilityDetailId=${id}`);
  }

  onCreateDetail(protectionUtility): Observable<any> {
    const payLoad: ProtectionUtilityDetailModel = {
      ...protectionUtility,
    }

    return this.http.post(ApiUrl.protectionUtilityDetailCreate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdateDetail(protectionUtility): Observable<any> {
    const payLoad: ProtectionUtilityDetailModel = {
      ...protectionUtility,
    }

    return this.http.post(ApiUrl.protectionUtilityDetailUpdate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onRemoveDetail(id: any) {
    return this.http.post(ApiUrl.protectionUtilityDetailDelete + `?protectionUtilityDetailId=${id}`, {});
  }

  onGetProtectionUtilityId(id: number): Observable<any> {
    return this.http.get(ApiUrl.protectionUtilityDetailSearch + `?protectionUtilityId=${id}`);
  }

  onSearchEmployeeByDepartment(id: number): Observable<any> {
    return this.http.get(ApiUrl.employeeSearch + `?departmentIds=${id}`)
  }
}
