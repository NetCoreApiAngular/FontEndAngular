import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { ApiHelper } from '../../api-helper';
import { map, catchError } from 'rxjs/operators';
import moment, { Moment } from 'moment';
import { TimeSheetDailyModel } from 'src/app/shared/models/time-sheet/time-sheet-daily.model';

@Injectable({
    providedIn: 'root'
})
export class TimeSheetDailyService {
    userInfo = JSON.parse(localStorage.getItem('user'));
    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.timeSheetDailyGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?TimeSheetDailyDetailId=${id}`;
        return this._http.post(ApiUrl.timeSheetDailyDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(timeSheetDaily): Observable<any> {
        const payLoad: TimeSheetDailyModel = {
            ...timeSheetDaily
        }
        return this._http.post(ApiUrl.timeSheetDailyCreate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(timeSheetDaily): Observable<any> {
        const payLoad: TimeSheetDailyModel = {
            ...timeSheetDaily
        }
        return this._http.post(ApiUrl.timeSheetDailyUpdate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
    onUpdateAll(dataSubmit) {

        return this._http.post(ApiUrl.timeSheetDailyUpdateAll, dataSubmit).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('TimeSheetDailyid', id);
        return this._http.get(ApiUrl.timeSheetDailyGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if ((params[key] && params[key].toString().trim() !== '') || params[key] === 0 ) {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.timeSheetDailySearch, {
            params: httpParams
        })
    }

    onGetOnline(_params): Observable<any> {
        // let httpParams = new HttpParams();
        // httpParams = httpParams.set('TimeSheetDailyid', id);
        return this._http.get(ApiUrl.timeSheetDailyGetNumberOfOnline, { params: _params }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetOffline(_params): Observable<any> {
        // let httpParams = new HttpParams();
        // httpParams = httpParams.set('TimeSheetDailyid', id);
        return this._http.get(ApiUrl.timeSheetDailyGetNumberOfOffline, { params: _params }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetLate(_params): Observable<any> {
        // let httpParams = new HttpParams();
        // httpParams = httpParams.set('TimeSheetDailyid', id);
        return this._http.get(ApiUrl.timeSheetDailyGetNumberOfLate, { params: _params }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
    onGetEaly(_params): Observable<any> {
        // let httpParams = new HttpParams();
        // httpParams = httpParams.set('TimeSheetDailyid', id);
        return this._http.get(ApiUrl.timeSheetDailyGetNumberOfEaly, { params: _params }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetCheckInTime(employeeId: any, dayno: Moment) {
        return this._http.get(ApiUrl.GetEmployeeIdAndDayNo + `?employeeId=${employeeId}&dayNo=${dayno.format('YYYY-MM-DD')}`).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCheckInCode(dataSubmit) {
        return this._http.post(ApiUrl.CheckInCode, dataSubmit).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCheckOutCode(dataSubmit) {
        return this._http.post(ApiUrl.CheckOutCode, dataSubmit).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
}
