import { SeniorityEmployeeContractModel } from './../../../models/seniority-employee-contract/seniority-employee-contract.model';


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root'
})
export class SeniorityEmployeeContractService {

    userInfo = JSON.parse(localStorage.getItem('user'));


    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.getAllSeniorityEmployeeContract).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?seniorityEmployeeContractId=${id}`;
        return this._http.post(ApiUrl.deleteSeniorityEmployeeContract + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(seniorityContract): Observable<any> {
        const payLoad: SeniorityEmployeeContractModel = {
            ...seniorityContract
        }
        return this._http.post(ApiUrl.createSeniorityEmployeeContract, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(seniorityContract): Observable<any> {
        const payLoad: SeniorityEmployeeContractModel = {
            ...seniorityContract
        }
        return this._http.post(ApiUrl.updateSeniorityEmployeeContract , JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetBySeniorityContractId(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('seniorityContractId', id);
        return this._http.get(ApiUrl.getSeniorityEmployeeDetailContract, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.searchSeniorityEmployeeContract, {
            params: httpParams
        })
    }

    onUpdateProfileEmployee(seniorityContractId: number): Observable<any> {
        const params = `?seniorityContractId=${seniorityContractId}`;
        return this._http.post(ApiUrl.updateProfileEmployee + params , {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    // onFilter(params):Observable<any>{
    //     let httpParams = new HttpParams();
    //     Object.keys(params).forEach(function (key) {
    //         if(params[key]){
    //             httpParams = httpParams.append(key, params[key]);
    //         }
    //     })
    //     return this._http.get(ApiUrl.positionFilter, {
    //         params: httpParams
    //     })
    // }
}
