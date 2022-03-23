import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    onLoad: BehaviorSubject<any> = new BehaviorSubject(undefined);
    reLoadNotification: any;
    constructor(private _http: HttpClient) { 
        this.reLoadNotification = setInterval(() => {
            this.onLoad.next(Math.random());
        }, 60000 * 15)
    }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.warningGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?WarningId=${id}`;
        return this._http.post(ApiUrl.warningDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(warning): Observable<any> {
        return this._http.post(ApiUrl.warningCreate, JSON.stringify(warning)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(warning): Observable<any> {
        return this._http.post(ApiUrl.warningUpdate, JSON.stringify(warning)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('WarningId', id);
        return this._http.get(ApiUrl.warningGetById, { params: httpParams }).pipe(
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
        return this._http.get(ApiUrl.warningSearch, {
            params: httpParams
        })
    }

    onSetTimeLoad() {
        clearInterval(this.reLoadNotification);
        this.onLoad.next(Math.random());
        this.reLoadNotification = setInterval(() => {
            this.onLoad.next(Math.random());
        },  60000 * 15)
    }
}