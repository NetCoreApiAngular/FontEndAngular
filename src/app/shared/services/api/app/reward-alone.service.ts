import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root'
})
export class RewardAloneService {

  constructor(private _http: HttpClient) { }

  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.RewardAloneGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(RewardAloneId: number): Observable<any> {
    return this._http.get(ApiUrl.RewardAloneGetById, {
      params: new HttpParams().set('RewardAloneId', RewardAloneId.toString())
    }).pipe(
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
    return this._http.get(ApiUrl.RewardAloneSearch, {
      params: httpParams
    })
  }

  onCreate(body: any): Observable<any> {
    return this._http.post(ApiUrl.RewardAloneCreate, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(body: any): Observable<any> {
    return this._http.post(ApiUrl.RewardAloneUpdate, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(RewardAloneId: number): Observable<any> {
    return this._http.post(ApiUrl.RewardAloneDelete, {}, {
      params: new HttpParams().set('RewardAloneId', RewardAloneId.toString())
    }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  writeA(rewardMasterId: number, deparmentId?: any, groupId?: any): Observable<any> {
    let httpParams = new HttpParams();
    rewardMasterId? httpParams = httpParams.append('rewardMasterId', rewardMasterId.toString()) : null
    deparmentId? httpParams = httpParams.append('deparmentId', deparmentId) : null
    groupId? httpParams = httpParams.append('groupId', groupId) : null
    return this._http.post(ApiUrl.RewardAloneWriteA, {}, {
      params: httpParams
    }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}
