import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root'
})
export class RewardMonth13Service {

  constructor(private _http: HttpClient) { }

  onGetById(RewardMonth13Id: number): Observable<any> {
    return this._http.get(ApiUrl.getByIdRewardMonth13, {
      params: new HttpParams().set('RewardMonth13Id', RewardMonth13Id.toString())
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
    return this._http.get(ApiUrl.searchRewardMonth13, {
      params: httpParams
    })
  }

  onCreate(body: any): Observable<any> {
    return this._http.post(ApiUrl.createRewardMonth13, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(body: any): Observable<any> {
    return this._http.post(ApiUrl.updateRewardMonth13, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdateABC(rewardMasterId: number, deparmentId?: any, groupId?: any): Observable<any> {
    let httpParams = new HttpParams();
    rewardMasterId? httpParams = httpParams.append('rewardMasterId', rewardMasterId.toString()) : null
    deparmentId? httpParams = httpParams.append('deparmentId', deparmentId) : null
    groupId? httpParams = httpParams.append('groupId', groupId) : null
    return this._http.post(ApiUrl.WriteABC, {}, {
      params: httpParams
    }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(RewardMonth13Id: number): Observable<any> {
    return this._http.post(ApiUrl.deleteRewardMonth13, {}, {
      params: new HttpParams().set('RewardMonth13Id', RewardMonth13Id.toString())
    }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}
