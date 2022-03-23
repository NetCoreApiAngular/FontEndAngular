import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { SalaryAnalysisParams } from 'src/app/shared/models/salary/salary.model';

@Injectable({
    providedIn: 'root'
})
export class SalaryService {
    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.salaryGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?salaryId=${id}`;
        return this._http.post(ApiUrl.salaryDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(salary): Observable<any> {
        return this._http.post(ApiUrl.salaryCreate, salary).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(salary): Observable<any> {
        return this._http.post(ApiUrl.salaryUpdate, salary).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('salaryId', id);
        return this._http.get(ApiUrl.salaryGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if (params[key]) {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.salarySearch, {
            params: httpParams
        })
    }

    onDeleteSalaryDetail(id): Observable<any> {
        const params = `?salaryId=${id}`;
        return this._http.post(ApiUrl.salaryDetailDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreateSalaryDetail(salary): Observable<any> {
        return this._http.post(ApiUrl.salaryDetailCreate, salary).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onReCreateSalaryDetail(month: string): Observable<any> {
        return this._http.post(ApiUrl.salaryDetailRe_Create + `?month=${month}`, {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdateSalaryDetail(salary): Observable<any> {
        return this._http.post(ApiUrl.salaryDetailUpdate, salary).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdateMultiSalaryDetail(salary): Observable<any> {
        return this._http.post(ApiUrl.salaryDetailUpdateMulti, salary).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetSalaryDetailById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('salaryId', id);
        return this._http.get(ApiUrl.salaryDetailGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearchSalaryDetail(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.salaryDetailSearch, {
            params: httpParams
        })
    }

    onGetSalaryDetailByDepartment(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.salaryDetailGetByDepartment, {
            params: httpParams
        })
    }

    onGetSalaryDetailByGroup(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.salaryDetailGetByGroup, {
            params: httpParams
        })
    }

    onGetBySummaryGroup(month, groupId): Observable<any> {
        const params = `?month=${month}&groupid=${groupId}`;
        return this._http.get(ApiUrl.salaryDetailGetBySummaryGroup + params, {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreateSalaryByDepartment(data): Observable<any> {
        return this._http.post(ApiUrl.salaryDetailCreateByDepartment, data).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreateSalaryByGroup(data): Observable<any> {
        return this._http.post(ApiUrl.salaryDetailCreateByDepartment, data).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
    onGetSalaryPaymentReports(id): Observable<any> {
        const params = `?salaryId=${id}`;
        return this._http.get(ApiUrl.salaryPaymentReport + params).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
    onGetSalaryDetailStatistics(month): Observable<any> {
        const params = `?month=${month}`;
        return this._http.get(ApiUrl.salaryDetailStatistic + params).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    roundSalaryRaySecond(salary: number) {
        const params = `?paySecond=${salary}`;
        return this._http.post(ApiUrl.roundSalaryRaySecond + params, {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetSalaryOtReports(salaryId: number, departmentId?: number) {
        let params = `?salaryId=${salaryId}`;
        if (departmentId) params += `&departmentId=${departmentId}`;
        return this._http.get(ApiUrl.salaryOTReport + params).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetSalaryRiceReports(salaryId: number, departmentId?: number) {
        let params = `?salaryId=${salaryId}`;
        if (departmentId) params += `&departmentId=${departmentId}`;
        return this._http.get(ApiUrl.salaryRiceReport + params).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetSalaryAnalysisReports(month: string, params?: SalaryAnalysisParams) {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('month', month);
        if (params)
            Object.keys(params).forEach(function (key) {
                if (params[key]) {
                    httpParams = httpParams.append(key, params[key]);
                }
            })
        return this._http.get(ApiUrl.SalaryAnalysisReports, {
            params: httpParams
        }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetSummarySalaryAnalysisReports(month: string, params?: SalaryAnalysisParams) {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('month', month);
        if (params)
            Object.keys(params).forEach(function (key) {
                if (params[key]) {
                    httpParams = httpParams.append(key, params[key]);
                }
            })
        return this._http.get(ApiUrl.SummarySalaryAnalysisReports, {
            params: httpParams
        }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDownloadExcelRewardSalaryAnalysisReports(month: string, params?: SalaryAnalysisParams) {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('month', month);
        if (params.summaryRewardMonth13) {
            httpParams = httpParams.append('summaryRewardMonth13', params.summaryRewardMonth13.toString());
        }
        if (params.summaryRewardTimeLeave) {
            httpParams = httpParams.append('summaryRewardTimeLeave', params.summaryRewardTimeLeave.toString());
        }
        return this._http.get(ApiUrl.RewardSalaryAnalysisReports, {
            params: httpParams,
            responseType: 'blob',
        })
    }

    onDownloadExcelSalaryAnalysisReports(month: string, params?: SalaryAnalysisParams) {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('month', month);
        if (params)
            Object.keys(params).forEach(function (key) {
                if (params[key]) {
                    httpParams = httpParams.append(key, params[key]);
                }
            })
        return this._http.get(ApiUrl.ExcelSalaryAnalysisReports, {
            params: httpParams,
            responseType: 'blob'
        })
    }
}