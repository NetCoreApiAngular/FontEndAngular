import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root'
})
export class RewardMasterService {

  constructor(private _http: HttpClient) { }

  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.RewardMasterGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(RewardMasterId: number): Observable<any> {
    return this._http.get(ApiUrl.RewardMasterGetById, {
      params: new HttpParams().set('RewardMasterId', RewardMasterId.toString())
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
    return this._http.get(ApiUrl.RewardMasterSearch, {
      params: httpParams
    })
  }

  onCreate(body: any): Observable<any> {
    return this._http.post(ApiUrl.RewardMasterCreate, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(body: any): Observable<any> {
    return this._http.post(ApiUrl.RewardMasterUpdate, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(RewardMasterId: number): Observable<any> {
    return this._http.post(ApiUrl.RewardMasterDelete, {}, {
      params: new HttpParams().set('RewardMasterId', RewardMasterId.toString())
    }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}
