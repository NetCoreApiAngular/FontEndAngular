import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiUrl } from '../../api-url/api-url';
import { ApiHelper } from '../../api-helper';
import { catchError, map } from 'rxjs/operators';
import { AppointmentModel } from 'src/app/shared/models/appointment/appointment.model';


@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    userInfo = JSON.parse(localStorage.getItem('user'));
    onCreateSuccess = new Subject<any>();
    
    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.appointmentGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
    onGetAllDetail(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('appointmentId', id);
        return this._http.get(ApiUrl.appointmentDetailGetAll, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
    onGetAppointmentDetailReport(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('appointmentId', id);
        return this._http.get(ApiUrl.appointmentDetailReport, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
    
    onDelete(id): Observable<any> {
        const params = `?Appointmentid=${id}`;
        return this._http.post(ApiUrl.appointmentDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(appointment): Observable<any> {

        return this._http.post(ApiUrl.appointmentCreate, JSON.stringify(appointment)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(appointment): Observable<any> {

        return this._http.post(ApiUrl.appointmentUpdate, JSON.stringify(appointment)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('Appointmentid', id);
        return this._http.get(ApiUrl.appointmentGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.appointmentSearch, {
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