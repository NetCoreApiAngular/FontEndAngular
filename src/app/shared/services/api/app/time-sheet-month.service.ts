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
export class TimeSheetMonthyService {
    userInfo = JSON.parse(localStorage.getItem('user'));
    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.TimeSheetMonthyDetailGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    // onDelete(id): Observable<any> {
    //     const params = `?TimeSheetDailyid=${id}`;
    //     return this._http.post(ApiUrl.timeSheetDailyDelete + params, null).pipe(
    //         map(ApiHelper.extractData),
    //         catchError(ApiHelper.onFail)
    //     )
    // }

    // onCreate(_data): Observable<any> {
    //     return this._http.post(ApiUrl.TimeSheetMonthyDetailCreate, JSON.stringify(_data)).pipe(
    //         map(ApiHelper.extractData),
    //         catchError(ApiHelper.onFail)
    //     )
    // }
    onCreate(_data): Observable<any> {
      const params = `?monthy=${_data}`;
      return this._http
        .post(ApiUrl.TimeSheetMonthyDetailCreate + params, null)
        .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
    }
    onUpdateMulti(data): Observable<any> {
        return this._http.post(ApiUrl.TimeSheetMonthyDetailUpdateMulti, data).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    // onGetById(id): Observable<any> {
    //     let httpParams = new HttpParams();
    //     httpParams = httpParams.set('TimeSheetDailyid', id);
    //     return this._http.get(ApiUrl.timeSheetDailyGetById, { params: httpParams }).pipe(
    //         map(ApiHelper.extractData),
    //         catchError(ApiHelper.onFail)
    //     )
    // }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key]) 
                httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.TimeSheetMonthyDetailSearch, {
            params: httpParams
        })
    }

    onCheckIsOldMonth(month): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('month', month);
        return this._http.get(ApiUrl.TimeSheetMonthyDetailCheckIsOldMonth, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
}
