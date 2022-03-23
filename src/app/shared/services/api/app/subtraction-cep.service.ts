import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubtractionCepService {

  constructor(private http: HttpClient) {}

  onCreate(data: any) {
    return this.http.post(ApiUrl.subtractionCepCreate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(data: any) {
    return this.http.post(ApiUrl.subtractionCepUpdate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(subtractionCepId: number) {
    return this.http.get(ApiUrl.subtractionCepGetById + `?subtractionCepId=${subtractionCepId}`).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  onRemove(subtractionCepId: number) {
    return this.http.post(ApiUrl.subtractionCepDelete + `?subtractionCepId=${subtractionCepId}`, null).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
        if(params[key] && params[key].toString().trim() !== '') {
            httpParams = httpParams.append(key, params[key]);
        }
    })
    return this.http.get(ApiUrl.subtractionCepSearch, {
        params: httpParams
    })
  }
}
