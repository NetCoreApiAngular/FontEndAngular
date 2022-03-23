import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupTeamService {
  constructor(private http: HttpClient) { }

  onGetAll() {
    return this.http.get(ApiUrl.GetGroupAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreateGroup(data: any) {
    return this.http
      .post(ApiUrl.CreateGroup, data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onUpdateGroup(data: any) {
    return this.http
      .post(ApiUrl.UpdateGroup, data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetGroupAll() {
    return this.http
      .get(ApiUrl.GetGroupAll)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
  onGetForToxic() {
    return this.http
      .get(ApiUrl.GetForToxic)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
  onGetGroupById(groupId: number) {
    return this.http
      .get(ApiUrl.GetGroupById + `?groupId=${groupId}`)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetTimeBlockByGroupId(groupId: number) {
    return this.http
      .get(ApiUrl.GetTimeBlockByGroupId + `?groupId=${groupId}`)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onRemoveGroupById(groupId: number) {
    return this.http
      .post(ApiUrl.RemoveGroupById + `?groupId=${groupId}`, null)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onSearchGroup(queryParams: any) {
    let queries = '';
    Object.keys(queryParams).map((key) => {
      queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${queryParams[key] &&
          (queryParams[key].toString().toLocaleLowerCase() == '' ||
            queryParams[key] == null)
          ? ''
          : encodeURIComponent(queryParams[key])
        }`;
    });
    return this.http
      .get(ApiUrl.SearchGroup + queries)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onFilter(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (
        (params[key] && params[key].toString().trim() !== '') ||
        (key == 'status' && params[key] != null)
      ) {
        httpParams = httpParams.append(key, params[key]);
      }
    });
    return this.http.get(ApiUrl.FilterGroup, {
      params: httpParams,
    });
  }

  onSearchByDepartment(departmentId: any) {
    return this.http
      .get(ApiUrl.SearchGroupByDepartment + `?departmentId=${departmentId}`)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }
}
