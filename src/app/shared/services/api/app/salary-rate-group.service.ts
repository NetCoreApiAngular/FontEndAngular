import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { SalaryRateGroupModel } from 'src/app/shared/models/salary-rate-group/salary-rate-group.model';
import { FilterBaseModel } from 'src/app/shared/models/filter/filter.model';

@Injectable({
    providedIn: 'root'
})
export class SalaryRateGroupService {

    userInfo = JSON.parse(localStorage.getItem('user'));


    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.salaryRateGroupGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?SalaryRateGroupId=${id}`;
        return this._http.post(ApiUrl.salaryRateGroupDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(salaryRateGroup): Observable<any> {
        const payLoad: SalaryRateGroupModel = {
            ...salaryRateGroup
        }
        return this._http.post(ApiUrl.salaryRateGroupCreate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(salaryRateGroup): Observable<any> {
        const payLoad: SalaryRateGroupModel = {
            ...salaryRateGroup
        }
        return this._http.post(ApiUrl.salaryRateGroupUpdate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('SalaryRateGroupId', id);
        return this._http.get(ApiUrl.salaryRateGroupGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: FilterBaseModel): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.salaryRateGroupSearch, {
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
    //     return this._http.get(ApiUrl.salaryRateGroupFilter, {
    //         params: httpParams
    //     })
    // }
}