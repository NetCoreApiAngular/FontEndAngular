import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingProcessDetailService {

  userInfo = JSON.parse(localStorage.getItem('user'));

  constructor(private http: HttpClient) {}

  onCreate(data): Observable<any> {
    return this.http.post(ApiUrl.TrainingProcessDetailCreate, data).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
    )
}

  onUpdate(data) {
    return this.http.post(ApiUrl.TrainingProcessDetailUpdate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id: number) {
    return this.http.get(ApiUrl.TrainingProcessDetailGetById + `?trainingProcessDetailId=${id}`).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  onDelete(id:number) {
    return this.http.post(ApiUrl.TrainingProcessDetailDelete + `?TrainingProcessDetailId=${id}`, null).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  
//   onGetAll(): Observable<any> {
//     return this.http.get(ApiUrl.fosterToxicGetAll).pipe(
//         map(ApiHelper.extractData),
//         catchError(ApiHelper.onFail)
//     )
//   }
  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
        if(params[key] && params[key].toString().trim() !== '') {
            httpParams = httpParams.append(key, params[key]);
        }
    })
    return this.http.get(ApiUrl.TrainingProcessDetailSearch, {
        params: httpParams
    })
  }
}
