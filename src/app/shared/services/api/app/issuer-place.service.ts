import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient } from '@angular/common/http';
import { GroupModel } from 'src/app/shared/models/group/group.model';


@Injectable({
  providedIn: 'root'
})
export class IssuerPlaceService {
  constructor(private http: HttpClient) { }

  onCreateIssuerPlace(data: any) {
    return this.http.post(ApiUrl.CreateIssuerPlace, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdateIssuerPlace(data: any) {
    return this.http.post(ApiUrl.UpdateIssuerPlace, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetIssuerPlaceAll() {
    return this.http.get(ApiUrl.GetIssuerPlaceAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onGetIssuerPlaceById(IssuerPlaceId: number) {
    return this.http.get(ApiUrl.GetIssuerPlaceById + `?issuerPlaceId=${IssuerPlaceId}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onRemoveIssuerPlaceById(IssuerPlaceId: number) {
    return this.http.post(ApiUrl.RemoveIssuerPlace + `?issuerPlaceId=${IssuerPlaceId}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }
  onGetIssueDistricts(id){
    return this.http.get(ApiUrl.GetIssuerDistricts + `?issuePlaceId=${id}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }
  onGetIssueWards(id){
    return this.http.get(ApiUrl.GetIssueWards + `?issueDistrictId=${id}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }
  onSearchIssuerPlace(queryParams: any) {
    let queries = '';
    Object.keys(queryParams).map(key => {
      queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${
        queryParams[key] && (queryParams[key].toString().toLocaleLowerCase() == '' || queryParams[key] == null)
          ? ''
          : encodeURIComponent(queryParams[key])
        }`;
    });
    return this.http.get(ApiUrl.SearchIssuerPlace + queries).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }
}
