import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { PositionModel } from 'src/app/shared/models/position/position.model';

@Injectable({
  providedIn: 'root'
})
export class AllowanceResponsibilityService {

  userInfo = JSON.parse(localStorage.getItem('user'));


  constructor(private _http: HttpClient) { }

  onDelete(id): Observable<any> {
      const params = `?AllowanceResponsibilityTypeid=${id}`;
      return this._http.post(ApiUrl.allowanceResponsibilityDelete + params, null).pipe(
          map(ApiHelper.extractData),
          catchError(ApiHelper.onFail)
      )
  }

  onCreate(allowanceResponsibility): Observable<any> {
      const payLoad: PositionModel = {
          ...allowanceResponsibility
      }
      return this._http.post(ApiUrl.allowanceResponsibilityCreate, JSON.stringify(payLoad)).pipe(
          map(ApiHelper.extractData),
          catchError(ApiHelper.onFail)
      )
  }

  onUpdate(allowanceResponsibility): Observable<any> {
      const payLoad: PositionModel = {
          ...allowanceResponsibility
      }
      return this._http.post(ApiUrl.allowanceResponsibilityUpdate, JSON.stringify(payLoad)).pipe(
          map(ApiHelper.extractData),
          catchError(ApiHelper.onFail)
      )
  }

  onGetById(id): Observable<any> {
      let httpParams = new HttpParams();
      httpParams = httpParams.set('AllowanceResponsibilityid', id);
      return this._http.get(ApiUrl.allowanceResponsibilityGetById, { params: httpParams }).pipe(
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
      return this._http.get(ApiUrl.allowanceResponsibilitySearch, {
          params: httpParams
      })
  }
}
