import { SeniorityContractModel } from 'src/app/shared/models/seniority-contract/seniority-contract.model';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
  providedIn: 'root'
})
export class SeniorityContractService {
  onCreateSuccess = new Subject<any>();
    userInfo = JSON.parse(localStorage.getItem('user'));


    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.getAllSeniorityContract).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?seniorityContractId=${id}`;
        return this._http.post(ApiUrl.deleteSeniorityContract + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(seniorityContract): Observable<any> {
        const payLoad: SeniorityContractModel = {
            ...seniorityContract,
            createdDate: new Date(),
            createdBy: this.userInfo.userName,
            updatedDate: new Date(),
            updatedBy: this.userInfo.userName
        }
        return this._http.post(ApiUrl.createSeniorityContract, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(seniorityContract): Observable<any> {
        const payLoad: SeniorityContractModel = {
            ...seniorityContract,
            updatedBy: this.userInfo.userName,
            updatedDate: new Date()
        }
        return this._http.post(ApiUrl.updateSeniorityContract, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('seniorityContractId', id);
        return this._http.get(ApiUrl.getSeniorityDetailContract, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: SeniorityContractModel): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.searchSeniorityContract, {
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
    //     return this._http.get(ApiUrl.positionFilter, {
    //         params: httpParams
    //     })
    // }
}
