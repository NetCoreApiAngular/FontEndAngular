import { SeniorityModel } from './../../../models/seniority/seniority.model';
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
export class SeniorityService {

    userInfo = JSON.parse(localStorage.getItem('user'));


    constructor(private _http: HttpClient) { }


    onSearchSeniority(queryParams: any) {
      let queries = '';
      Object.keys(queryParams).map(key => {
        queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${
          queryParams[key] && (queryParams[key].toString().toLocaleLowerCase() == '' || queryParams[key] == null)
            ? ''
            : encodeURIComponent(queryParams[key])
        }`;
      });
      return this._http.get(ApiUrl.searchSeniority + queries).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
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
