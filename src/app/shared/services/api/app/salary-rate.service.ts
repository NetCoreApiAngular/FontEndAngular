import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryRateService {

  constructor(private http: HttpClient) {}

  onCreateSalaryRate(data: any) {
    return this.http.post(ApiUrl.CreateSalaryRate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdateSalaryRate(data: any) {
    return this.http.post(ApiUrl.UpdateSalaryRate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetSalaryRateAll() : Observable<any> {
    return this.http.get(ApiUrl.GetSalaryRateAll).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );;
  }

  onGetSalaryRateById(salaryRateId: number) {
    return this.http.get(ApiUrl.GetSalaryRateById + `?salaryRateId=${salaryRateId}`).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );;
  }

  onRemoveSalaryRateById(salaryRateId: number) {
    return this.http.post(ApiUrl.RemoveSalaryRate + `?salaryRateId=${salaryRateId}`, null).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );;
  }

  onSearchSalaryRate(queryParams: any) {
    let queries = '';
    Object.keys(queryParams).map(key => {
      queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${
        queryParams[key] && (queryParams[key].toString().toLocaleLowerCase() == '' || queryParams[key] == null)
          ? ''
          : encodeURIComponent(queryParams[key])
      }`;
    });
    return this.http.get(ApiUrl.SearchSalaryRate + queries).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }
}
