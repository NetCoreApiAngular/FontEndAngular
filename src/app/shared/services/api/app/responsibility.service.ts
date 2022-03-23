import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchresponsibilityModel } from 'src/app/shared/models/responsibility/responsibility.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsibilityService {

  constructor(private http: HttpClient) { }

  onCreate(data: any) {
    return this.http.post(ApiUrl.responsibilityCreate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(data: any) {
    return this.http.post(ApiUrl.responsibilityUpdate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetAll() {
    return this.http.get(ApiUrl.responsibilityGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onGetForResponsibility(code?: string, name?: string) {
    let httpParams = new HttpParams();
    if (code && code.toString().trim() !== '') {
      httpParams = httpParams.append('code', code);
    }
    if (name && name.toString().trim() !== '') {
      httpParams = httpParams.append('name', name);
    }
    return this.http.get(ApiUrl.responsibilitySubSearch, {params: httpParams}).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onGetById(responsibilityId: number) {
    return this.http.get(ApiUrl.responsibilityGetById + `?responsibilityId=${responsibilityId}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onRemove(responsibilityId: number) {
    return this.http.post(ApiUrl.responsibilityDelete + `?responsibilityId=${responsibilityId}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (params[key] && params[key].toString().trim() !== '') {
        httpParams = httpParams.append(key, params[key]);
      }
    })
    return this.http.get(ApiUrl.responsibilitySearch, {
      params: httpParams
    })

  }

  onSearchResponsibility(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (params[key] && params[key].toString().trim() !== '') {
        httpParams = httpParams.append(key, params[key]);
      }
    })

    return this.http.get(ApiUrl.responsibilitySubSearch, {
      params: httpParams
    })

  }

  onSearchToxic(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (params[key] && params[key].toString().trim() !== '') {
        httpParams = httpParams.append(key, params[key]);
      }
    })

    return this.http.get(ApiUrl.responsibilitySubToxicSearch, {
      params: httpParams
    })
  }

  // onSearch(queryParams: any) {
  //   let queries = '';
  //   Object.keys(queryParams).map(key => {
  //     queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${
  //       queryParams[key] && (queryParams[key].toString().toLocaleLowerCase() == '' || queryParams[key] == null)
  //         ? ''
  //         : encodeURIComponent(queryParams[key])
  //     }`;
  //   });
  //   return this.http.get(ApiUrl.responsibilitySearch + queries).pipe(
  //     map(ApiHelper.extractData),
  //     catchError(ApiHelper.onFail)
  //   );;
  // }
}
