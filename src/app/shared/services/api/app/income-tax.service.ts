import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root',
})
export class IncomeTaxService {
  userInfo = JSON.parse(localStorage.getItem('user'));

  constructor(private _http: HttpClient) {}

  onGetAll(): Observable<any> {
    return this._http
      .get(ApiUrl.incomeTaxGetAll)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onDelete(id): Observable<any> {
    let params = {
      masterId: id,
    };
    return this._http
      .post(ApiUrl.incomeTaxDelete + `?masterId=${id}`,null)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onCreate(data): Observable<any> {
    return this._http
      .post(ApiUrl.incomeTaxCreate, data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onUpdate(data): Observable<any> {
    return this._http
      .post(ApiUrl.incomeTaxUpdate, data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('id', id);
    return this._http
      .get(ApiUrl.incomeTaxGetById, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (params[key] && params[key].toString().trim() !== '') {
        httpParams = httpParams.append(key, params[key]);
      }
    });
    return this._http.get(ApiUrl.incomeTaxGetAll, {
      params: httpParams,
    });
  }

  onCopy(id, data): Observable<any> {
    return this._http
      .post(ApiUrl.incomeTaxCopy + `?employeePersonalTaxMasterId=${id}`, data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

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
