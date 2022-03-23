import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
    providedIn: 'root'
})
export class SalaryOutSourceDetailService {
    constructor(private _http: HttpClient) { }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('SalaryOutsourceDetailId', id);
        return this._http.get(ApiUrl.getSalaryOutSourceDetailById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        );
      }

    onUpdateSalaryOutSourceDetail(salary): Observable<any> {
        return this._http.post(ApiUrl.calculateSalaryOutSourceDetail, salary).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetSalaryOutSourceDetailByGroup(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.getSalaryOutSourceDetailByGroup, {
            params: httpParams
        })
    }

    onGetSalaryOutSourceDetailByDepartment(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.getSalaryOutSourceDetailByDepartment, {
            params: httpParams
        })
    }
    onUpdate(salary): Observable<any> {
        return this._http.post(ApiUrl.updateSalaryOutSourceDetail, salary).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        );
    }
    onUpdateMultiple(salary): Observable<any> {
        return this._http.post(ApiUrl.updateMultipleSalaryOutSourceDetail, salary).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        );
    }

    onSearchSalaryOutSourceReportContracts(params: any) {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key]) {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.searchSalaryOutSourceReportContract, {params: httpParams}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    getByExportData(salaryPartimeId: number) {
        return this._http.get(ApiUrl.getBySalaryPartimeIdSalaryOutSourceDetail +`?salaryPartimeId=${salaryPartimeId}`).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

}