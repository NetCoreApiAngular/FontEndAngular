
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(private _http: HttpClient) { }

  onDelete(id): Observable<any> {
    const params = `?userId=${id}`;
    return this._http.post(ApiUrl.UserDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(data): Observable<any> {
    return this._http.post(ApiUrl.UserRegister, JSON.stringify(data)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(data): Observable<any> {
    return this._http.post(ApiUrl.UserUpdate, JSON.stringify(data)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('userId', id);
    return this._http.get(ApiUrl.UserGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
        if(params[key]) {
            httpParams = httpParams.append(key, params[key]);
        }
    })
    return this._http.get(ApiUrl.UserSearch, {
      params: httpParams
    })
  }

  onForgotPassword(email: string){
    return this._http.post(ApiUrl.UserForgotPassword + `?toEmail=${email}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}
