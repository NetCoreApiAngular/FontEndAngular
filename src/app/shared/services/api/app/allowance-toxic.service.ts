import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { PositionModel } from 'src/app/shared/models/position/position.model';
import { AllowanceToxicFilterModel } from 'src/app/shared/models/allowance-toxic/allowance-toxic.model';

@Injectable({
    providedIn: 'root'
})
export class AllowanceToxicService {

    userInfo = JSON.parse(localStorage.getItem('user'));


    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.allowanceToxicGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?allowanceTypeid=${id}`;
        return this._http.post(ApiUrl.allowanceToxicDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(allowanceToxic): Observable<any> {
        const payLoad: PositionModel = {
            ...allowanceToxic,
        }
        return this._http.post(ApiUrl.allowanceToxicCreate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(allowanceToxic): Observable<any> {
        const payLoad: PositionModel = {
            ...allowanceToxic
        }
        return this._http.post(ApiUrl.allowanceToxicUpdate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('allowanceid', id);
        return this._http.get(ApiUrl.allowanceToxicGetById, { params: httpParams }).pipe(
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
        return this._http.get(ApiUrl.allowanceToxicSearch, {
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
