import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSubtractionCepService {

  constructor(private http: HttpClient) {}

  onSearch(apiUrl:string, params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
        if(params[key] && params[key].toString().trim() !== '') {
            httpParams = httpParams.append(key, params[key]);
        }
    })
    return this.http.get(apiUrl, { params: httpParams })
  }
  onGetById(apiUrl:string, subtractionCepId: number) {
    return this.http.get(apiUrl + `?subtractionCepId=${subtractionCepId}`).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  onRemove(apiUrl:string, subtractionCepId: number) {
    return this.http.post(apiUrl + `?subtractionCepId=${subtractionCepId}`, null).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  onCreate(apiUrl: string, model: any) {
    return this.http.post(apiUrl, model).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(apiUrl:string, model: any) {
    return this.http.post(apiUrl, model).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}
