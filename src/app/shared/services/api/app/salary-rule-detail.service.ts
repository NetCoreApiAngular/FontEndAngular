import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { SalaryRuleDetailModel } from 'src/app/shared/models/salary-rule-detail/salary-rule-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryRuleDetailService {

  onCreateSuccess = new Subject<any>();

  constructor(private _http: HttpClient) { }

  onGetAll(): Observable<any> {
      return this._http.get(ApiUrl.salaryRuleDetailGetAll).pipe(
          map(ApiHelper.extractData),
          catchError(ApiHelper.onFail)
      );
  }

  onDelete(id): Observable<any> {
      const params = `?SalaryRuleDetailTypeid=${id}`;
      return this._http.post(ApiUrl.salaryRuleDetailDelete + params, null).pipe(
          map(ApiHelper.extractData),
          catchError(ApiHelper.onFail)
      );
  }

  onCreate(salaryRuleDetail: SalaryRuleDetailModel): Observable<any> {
      const payLoad = {
          ...salaryRuleDetail
      };
      return this._http.post(ApiUrl.salaryRuleDetailCreate, JSON.stringify(payLoad)).pipe(
          map(ApiHelper.extractData),
          catchError(ApiHelper.onFail)
      );
  }

  onUpdate(salaryRuleDetail: SalaryRuleDetailModel): Observable<any> {
      const payLoad = {
          ...salaryRuleDetail,
      };
      return this._http.post(ApiUrl.salaryRuleDetailUpdate, JSON.stringify(payLoad)).pipe(
          map(ApiHelper.extractData),
          catchError(ApiHelper.onFail)
      );
  }

  onUpdateMulti(salaryRuleDetail: SalaryRuleDetailModel[]): Observable<any> {
    return this._http.post(ApiUrl.salaryRuleDetailUpdateMulti, JSON.stringify(salaryRuleDetail)).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
    );
}

  onGetById(id): Observable<any> {
      let httpParams = new HttpParams();
      httpParams = httpParams.set('SalaryRuleDetailTypeid', id);
      return this._http.get(ApiUrl.salaryRuleDetailGetById, { params: httpParams }).pipe(
          map(ApiHelper.extractData),
          catchError(ApiHelper.onFail)
      );
  }

  onSearch(params: any): Observable<any> {
      let httpParams = new HttpParams();
      Object.keys(params).forEach(key => {
          if(params[key])
            httpParams = httpParams.append(key, params[key]);
      });
      return this._http.get(ApiUrl.salaryRuleDetailSearch, {
          params: httpParams
      });
  }
}
