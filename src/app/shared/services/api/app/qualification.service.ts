import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { QualificationModel } from 'src/app/shared/models/qualification/qualification.model';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
    providedIn: 'root'
})
export class QualificationService {
  userInfo = JSON.parse(localStorage.getItem('user'));


  constructor(private _http: HttpClient) { }

  onGetAll(): Observable<any> {
      return this._http.get(ApiUrl.academyGetAll).pipe(
          map(ApiHelper.extractData),
          catchError(ApiHelper.onFail)
      )
  }

  onDelete(id): Observable<any> {
    const params = `?academyId=${id}`;
    return this._http.post(ApiUrl.academyDelete + params, null).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
    )
  }
  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('academyId', id);
    return this._http.get(ApiUrl.academyGetById, { params: httpParams }).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
    )
  }

  onCreate(department): Observable<any> {
    const payLoad: QualificationModel = {
        ...department
    }
    return this._http.post(ApiUrl.academyCreate, JSON.stringify(payLoad)).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
    )
  }


  onUpdate(department): Observable<any> {
    const payLoad: QualificationModel = {
        ...department
    }
    return this._http.post(ApiUrl.academyUpdate, JSON.stringify(payLoad)).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
    )
  }

  onSearch(queryParams: any) {
    let queries = '';
    Object.keys(queryParams).map(key => {
      queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${
        queryParams[key] && (queryParams[key].toString().toLocaleLowerCase() == '' || queryParams[key] == null)
          ? ''
          : encodeURIComponent(queryParams[key])
      }`;
    });
    return this._http.get(ApiUrl.academySearch + queries).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

}
