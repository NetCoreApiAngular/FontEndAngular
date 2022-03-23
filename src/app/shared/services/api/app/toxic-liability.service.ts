import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchAllowanceTypeModel } from 'src/app/shared/models/toxic-liability/toxic-liability.model';
import { PositionModel } from 'src/app/shared/models/position/position.model';

@Injectable({
  providedIn: 'root'
})
export class ToxicLiabilityService {

  userInfo = JSON.parse(localStorage.getItem('user'));

  constructor(private http: HttpClient) {}

  onCreate(data): Observable<any> {
    return this.http.post(ApiUrl.allowancetypeCreate, JSON.stringify(data)).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
    )
}

  onUpdate(data) {
    return this.http.post(ApiUrl.allowancetypeUpdate, JSON.stringify(data)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCopy(data, allowanceTypeOldId: any) {
    return this.http.post(ApiUrl.CopyAllowanceType+`?allowanceTypeOldId=${allowanceTypeOldId}`, JSON.stringify(data)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(allowanceTypeid: number) {
    return this.http.get(ApiUrl.allowancetypeGetById + `?allowanceTypeid=${allowanceTypeid}`).pipe(
        map(ApiHelper.extractData),
        catchError(ApiHelper.onFail)
      );
  }

  onRemove(allowanceTypeid: number) {
    return this.http.post(ApiUrl.allowancetypeDelete + `?allowanceTypeid=${allowanceTypeid}`, null).pipe(
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
    return this.http.get(ApiUrl.allowancetypeSearch, {
        params: httpParams
    })
  }
}
