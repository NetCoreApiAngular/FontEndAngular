import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchLivingFeeModel } from 'src/app/shared/models/living-fee/living-model';

@Injectable({
  providedIn: 'root'
})
export class LivingFeeService {

  constructor(private http: HttpClient) {}

  onCreate(data: any) {
    return this.http.post(ApiUrl.livingFeeCreate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(data: any) {
    return this.http.post(ApiUrl.livingFeeUpdate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(LivingFeeTypeid: number) {
    return this.http.get(ApiUrl.livingFeeGetById + `?LivingFeeTypeid=${LivingFeeTypeid}`).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  onRemove(LivingFeeTypeid: number) {
    return this.http.post(ApiUrl.livingFeeDelete + `?LivingFeeTypeid=${LivingFeeTypeid}`, null).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  onSearch(params: SearchLivingFeeModel): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
        if(params[key] && params[key].toString().trim() !== '') {
            httpParams = httpParams.append(key, params[key]);
        }
    })
    return this.http.get(ApiUrl.livingFeeSearch, {
        params: httpParams
    })
  }
}
