import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SalaryRuleModel } from 'src/app/shared/models/salary-rule/salary-rule.model';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
    providedIn: 'root'
})
export class SalaryRuleService {

    onCreateSuccess = new Subject<any>();

    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.salaryRuleGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(salaryRule): Observable<any> {
        const payLoad: SalaryRuleModel = {
            ...salaryRule
        }
        return this._http.post(ApiUrl.salaryRuleCreate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(salaryRule): Observable<any> {
        const payLoad: SalaryRuleModel = {
            ...salaryRule,
        }
        return this._http.post(ApiUrl.salaryRuleUpdate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCopy(salaryRule: any, salaryRuleId: number): Observable<any> {
        const payLoad: SalaryRuleModel = {
            ...salaryRule,
        }
        return this._http.post(ApiUrl.salaryRuleCopy + `?salaryRuleId=${salaryRuleId}`, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        return this._http.get(ApiUrl.salaryRuleGetById, {
            params: new HttpParams()
                .set('SalaryRuleTypeid', id)
        }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        );
    }

    onDelete(id): Observable<any> {
        const params = `?SalaryRuleTypeid=${id}`;
        return this._http.post(ApiUrl.salaryRuleDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.salaryRuleSearch, {
            params: httpParams
        })
    }

    // onFilter(params: salaryRuleFilterModel):Observable<any>{
    //     let httpParams = new HttpParams();
    //     Object.keys(params).forEach(function (key) {
    //         if((params[key]&&params[key].toString().trim() !== '') || (key == 'status' && params[key] != null) ){
    //             httpParams = httpParams.append(key, params[key]);
    //         }
    //     })
    //     return this._http.get(ApiUrl.salaryRuleFilter, {
    //         params: httpParams
    //     })
    // }
}
