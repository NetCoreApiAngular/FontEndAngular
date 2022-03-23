import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root'
})
export class RewardTimeLeaveService {

  constructor(private _http: HttpClient) { }
  
  onGetById(RewardTimeLeaveId: number): Observable<any> {
    return this._http.get(ApiUrl.RewardTimeLeaveGetById, {
      params: new HttpParams().set('RewardTimeLeaveId', RewardTimeLeaveId.toString())
    }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.RewardTimeLeaveSearch, {
      params: httpParams
    })
  }

  onCreate(body: any): Observable<any> {
    return this._http.post(ApiUrl.RewardTimeLeaveCreate, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(body: any): Observable<any> {
    return this._http.post(ApiUrl.RewardTimeLeaveUpdate, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(RewardTimeLeaveId: number): Observable<any> {
    return this._http.post(ApiUrl.RewardTimeLeaveDelete, {}, {
      params: new HttpParams().set('RewardTimeLeaveId', RewardTimeLeaveId.toString())
    }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}
