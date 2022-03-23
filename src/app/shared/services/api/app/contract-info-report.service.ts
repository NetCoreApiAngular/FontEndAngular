import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
    providedIn: 'root'
})
export class ContractInfoReportService {
    onCreateSuccess: Subject<boolean> = new Subject();
    constructor(private _http: HttpClient) { }

    onGetAll(apiUrl: string): Observable<any> {
        return this._http.get(apiUrl).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(apiUrl: string, params: any): Observable<any> {
        let queries = '';
        Object.keys(params).map(key => {
        queries += `${Object.keys(params)[0] == key ? '?' : '&'}${key}=${
            params[key] && (params[key].toString().toLocaleLowerCase() == '' || params[key] == null)
            ? ''
            : encodeURIComponent(params[key])
        }`;
        });
        return this._http.get(apiUrl + queries).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail))
    }

    onDelete(apiUrl: string, paramName: string, id: number): Observable<any> {

        const params = `?${paramName}=${id}`;
        return this._http.post(apiUrl + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(apiUrl: string, paramName: string, id: number) {
        const params = `?${paramName}=${id}`;
        return this._http.get(apiUrl + params).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }


    onCreate(apiUrl: string, model: any): Observable<any> {
        const payLoad: any = {
            ...model
        }
        return this._http.post(apiUrl, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(apiUrl: string, model: any): Observable<any> {
        const payLoad: any = {
            ...model
        }
        return this._http.post(apiUrl, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetDepartmentIdForSalaryAssignments(apiUrl: string): Observable<any> {
        return this._http.get(apiUrl).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCalculateAmountSeniority(): Observable<any> {
        return this._http.post(ApiUrl.calculateSeniority, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetByDate(apiUrl: string, paramName: string, Date: string) {
        const params = `?${paramName}=${Date}`;
        return this._http.get(apiUrl + params).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCalculateTimeReview(apiUrl: string, paramName: string, param: number, paramName2: string, param2: string): Observable<any> {
        const params = `?${paramName}=${param}&${paramName2}=${param2}`;
        return this._http.post(apiUrl + params, {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreateMultipleRequirementRecruitment(apiUrl: string, paramName: string, param: number, paramName2: string, param2: string): Observable<any> {
        const params = `?${paramName}=${param}&${paramName2}=${param2}`;
        return this._http.post(apiUrl + params, {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetContractDynamic(apiUrl: string) {
        return this._http.get(apiUrl).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
}