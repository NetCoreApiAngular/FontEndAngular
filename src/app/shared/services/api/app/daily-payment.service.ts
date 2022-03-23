import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { DailyPaymentModel } from 'src/app/shared/models/daily-payment/daily-payment.model';

@Injectable({
    providedIn: 'root'
})
export class DailyPaymentService {

    userInfo = JSON.parse(localStorage.getItem('user'));
    onCreateSuccess = new Subject<any>();
    
    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.dailyPaymentGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?DailyPaymentTypeid=${id}`;
        return this._http.post(ApiUrl.dailyPaymentDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(dailyPayment): Observable<any> {
        const payLoad: DailyPaymentModel = {
            ...dailyPayment,
            workingNumber: +dailyPayment.workingNumber,
            shp: +dailyPayment.shp,
            bhxh: +dailyPayment.bhxh,
            bhyt: +dailyPayment.bhyt,
            bhtn: +dailyPayment.bhtn,
            dateCreate: new Date()
        }
        return this._http.post(ApiUrl.dailyPaymentCreate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(dailyPayment): Observable<any> {
        const payLoad: DailyPaymentModel = {
            ...dailyPayment,
            workingNumber: +dailyPayment.workingNumber,
            shp: +dailyPayment.shp,
            bhxh: +dailyPayment.bhxh,
            bhyt: +dailyPayment.bhyt,
            bhtn: +dailyPayment.bhtn,
            dateCreate: new Date()
        }
        return this._http.post(ApiUrl.dailyPaymentUpdate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('DailyPaymentTypeid', id);
        return this._http.get(ApiUrl.dailyPaymentGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.dailyPaymentSearch, {
            params: httpParams
        })
    }

    // onFilter(params: DepartmentFilterModel):Observable<any>{
    //     let httpParams = new HttpParams();
    //     Object.keys(params).forEach(function (key) {
    //         if((params[key]&&params[key].toString().trim() !== '') || (key == 'status' && params[key] != null) ){
    //             httpParams = httpParams.append(key, params[key]);
    //         }
    //     })
    //     return this._http.get(ApiUrl.departmentFilter, {
    //         params: httpParams
    //     })
    // }
}