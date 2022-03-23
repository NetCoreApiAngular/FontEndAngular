import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { ApiHelper } from '../../api-helper';
import { catchError, map } from 'rxjs/operators';
import { RewardByDateSignedModel } from 'src/app/shared/models/reward-by-date-signed/reward-by-date-signed.model';

@Injectable({
  providedIn: 'root'
})
export class RewardByDateSignedService {
  userInfo = JSON.parse(localStorage.getItem('user'));

  onCreateSuccess: Subject<boolean> = new Subject();
    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.rewardByDateSignedGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?rewardByDatesignedId=${id}`;
        return this._http.post(ApiUrl.rewardByDateSignedDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(rewardByDateSigned): Observable<any> {
        const payLoad: RewardByDateSignedModel = {
            ...rewardByDateSigned
        }
        return this._http.post(ApiUrl.rewardByDateSignedCreate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(rewardByDateSigned): Observable<any> {
        const payLoad: RewardByDateSignedModel = {
            ...rewardByDateSigned
        }
        return this._http.post(ApiUrl.rewardByDateSignedUpdate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('rewardByDatesignedId', id);
        return this._http.get(ApiUrl.rewardByDateSignedGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.rewardByDateSignedSearch, {
            params: httpParams
        })
    }

    // onFilter(params):Observable<any>{
    //     let httpParams = new HttpParams();
    //     Object.keys(params).forEach(function (key) {
    //         if(params[key]){
    //             httpParams = httpParams.append(key, params[key]);
    //         }
    //     })
    //     return this._http.get(ApiUrl.positionFilter, {
    //         params: httpParams
    //     })
    // }
}