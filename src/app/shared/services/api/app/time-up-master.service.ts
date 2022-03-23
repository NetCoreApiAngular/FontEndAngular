import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { ApiHelper } from '../../api-helper';
import { map, catchError } from 'rxjs/operators';
import moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class TimeUpMasterService {
    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.getAllTimeUpMaster).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?timeUpMasterId=${id}`;
        return this._http.post(ApiUrl.deleteTimeUpMaster + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(timeUp): Observable<any> {
        const payLoad = {
            ...timeUp
        }
        return this._http.post(ApiUrl.createTimeUpMaster, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(timeUp): Observable<any> {
        const payLoad = {
            ...timeUp
        }
        return this._http.post(ApiUrl.updateTimeUpMaster, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCopy(timeUp, masterId): Observable<any> {
        const payLoad = {
            ...timeUp
        }
        return this._http.post(ApiUrl.copyTimeUpMaster+ `?timeUpMasterId=${masterId}`, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('TimeUpMasterid', id);
        return this._http.get(ApiUrl.getTimeUpMaster, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.searchTimeUpMaster, {
            params: httpParams
        })
    }

    calculateAmountSeniority(id): Observable<any> {
        const params = `?timeUpMasterId=${id}`;
        return this._http.post(ApiUrl.calculateAmountSeniority + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
}
