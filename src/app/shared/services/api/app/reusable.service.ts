import { ApiUrl } from 'src/app/shared/services/api-url/api-url';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
    providedIn: 'root'
})
export class ReusableService {
    onCreateSuccess: Subject<boolean> = new Subject();
    constructor(private _http: HttpClient) { }

    onGetAll(apiUrl: string, params?: any): Observable<any> {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach(function (key) {
                if ((params[key] && params[key].toString().trim() !== '') || (key == 'status' && params[key] != null)) {
                    httpParams = httpParams.append(key, params[key]);
                }
            })
        }
        return this._http.get(apiUrl, {
            params: httpParams
        }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(apiUrl: string, params: any): Observable<any> {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach(function (key) {
                if ((params[key] && params[key].toString().trim() !== '') || (key == 'status' && params[key] != null)) {
                    httpParams = httpParams.append(key, params[key]);
                }
            })
        }
        return this._http.get(apiUrl, {
            params: httpParams
        }).pipe(
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

    onGetById(apiUrl: string, paramName: string, id: any) {
        const params = `?${paramName}=${id}`;
        return this._http.get(apiUrl + params).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }


    onCreate(apiUrl: string, model: any): Observable<any> {
        return this._http.post(apiUrl, model).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(apiUrl: string, model: any): Observable<any> {
        return this._http.post(apiUrl, model).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdateMulti(apiUrl: string, model: any): Observable<any> {
        return this._http.post(apiUrl, JSON.stringify(model)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreateByParam(apiUrl: string, paramName: string, id: number) {
        const params = `?${paramName}=${id}`;
        return this._http.post(apiUrl + params, {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreateByDate(apiUrl: string, date: string) {
        const params = `?date=${date}`;
        return this._http.post(apiUrl + params, {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdateByParam(apiUrl: string, params: any) {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach(function (key) {
                if ((params[key] && params[key].toString().trim() !== '') || (key == 'status' && params[key] != null)) {
                    httpParams = httpParams.append(key, params[key]);
                }
            })
        }
        return this._http.post(apiUrl, {}, {
            params: httpParams
        }).pipe(
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

    onGetFileByPost(apiUrl: string, params: any) {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach(function (key) {
                if ((params[key] && params[key].toString().trim() !== '') || (key == 'status' && params[key] != null)) {
                    httpParams = httpParams.append(key, params[key]);
                }
            })
        }
        return this._http.post(apiUrl, {}, {
            params: httpParams,
            responseType: 'blob'
        })
    }

    onGetFile(apiUrl: string, params: any) {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach(function (key) {
                if ((params[key] && params[key].toString().trim() !== '') || (key == 'status' && params[key] != null)) {
                    httpParams = httpParams.append(key, params[key]);
                }
            })
        }
        return this._http.get(apiUrl, {
            params: httpParams,
            responseType: 'blob'
        })
    }
}
