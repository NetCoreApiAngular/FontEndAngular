import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { PositionModel, PositionFilterModel } from 'src/app/shared/models/position/position.model';

@Injectable({
    providedIn: 'root'
})
export class PositionService {

    userInfo = JSON.parse(localStorage.getItem('user'));


    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.positionGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?possitionId=${id}`;
        return this._http.post(ApiUrl.positionDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(position): Observable<any> {
        const payLoad: PositionModel = {
            ...position
        }
        return this._http.post(ApiUrl.positionCreate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(position): Observable<any> {
        const payLoad: PositionModel = {
            ...position
        }
        return this._http.post(ApiUrl.positionUpdate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('possitionId', id);
        return this._http.get(ApiUrl.positionGetById, { params: httpParams }).pipe(
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
        return this._http.get(ApiUrl.positionSearch, {
            params: httpParams
        })
    }

    onFilter(params):Observable<any>{
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key]){
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.positionFilter, {
            params: httpParams
        })
    }
}