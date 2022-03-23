import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
@Injectable({
  providedIn: 'root',
})
export class IncomeTaxInfoService {
  userInfo = JSON.parse(localStorage.getItem('user'));

  constructor(private _http: HttpClient) {}

  // onGetAllDetailMore(): Observable<any> {
  //   return this._http
  //     .get(ApiUrl.incomeTaxInfoGetAllDetailMore)
  //     .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  // }

  onDelete(data): Observable<any> {
    return this._http
      .post(ApiUrl.incomeTaxInfoDelete, data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetByMasterId(_materId): Observable<any> {
    return this._http
      .get(ApiUrl.incomeTaxInfoByMasterId, { params: { masterid: _materId } })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onCreate(submitData): Observable<any> {
    return this._http
      .post(ApiUrl.incomeTaxInfoCreate, submitData)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }


  onUpdate(_data): Observable<any> {
    return this._http
      .post(ApiUrl.incomeTaxInfoUpdate, _data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onMultiUpdate(_data): Observable<any> {
    return this._http
      .post(ApiUrl.incomeTaxInfoMultiUpdate, _data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onCalcAmountSubtraction(_data): Observable<any> {
    return this._http
      .post(ApiUrl.autoCalcAmountSubtraction,{}, {params: _data})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
  
  onGetIntimateById(id): Observable<any> {
      let httpParams = new HttpParams();
      httpParams = httpParams.set('id', id);
      return this._http.get(ApiUrl.incomeTaxInfoGetDetailIntimate, { params: httpParams }).pipe(
          map(ApiHelper.extractData),
          catchError(ApiHelper.onFail)
      )
  }


  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (params[key] && params[key].toString().trim() !== '') {
        httpParams = httpParams.append(key, params[key]);
      }
    });
    return this._http.get(ApiUrl.incomeTaxInfoByMasterId, {
      params: httpParams,
    });
  }

  onGetAllDetailMore(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('detailId', id);
    return this._http.get(ApiUrl.incomeTaxInfoGetAllDetailMore, { params: httpParams }).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
    )
  }
  onCreateDetailMore(submitData): Observable<any> {
    return this._http
      .post(ApiUrl.incomeTaxInfoCreateDetailMore, submitData)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
  onDeleteDetailMore(submitData): Observable<any> {
    return this._http
      .post(ApiUrl.incomeTaxInfoDeleteDetailMore + `?id=${submitData.id}`,{})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
  onUpdateDetailMore(submitData): Observable<any> {
    return this._http
      .post(ApiUrl.incomeTaxInfoUpdateDetailMore, submitData)
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
