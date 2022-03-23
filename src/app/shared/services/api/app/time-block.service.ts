import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DepartmentModel } from 'src/app/shared/models/department/department.model';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';

@Injectable({
    providedIn: 'root'
})
export class TimeBlockService {

    userInfo = JSON.parse(localStorage.getItem('user'));


    constructor(private http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this.http.get(ApiUrl.timeBlockGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreateTimeBlock(data: any) {
        return this.http.post(ApiUrl.timeBlockCreate, data).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdateTimeBlock(data: any) {
        return this.http.post(ApiUrl.timeBlockUpdate, data).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetTimeBlockById(TimeBlockId: number) {
        return this.http.get(ApiUrl.timeBlockGetById + `?timeBlockId=${TimeBlockId}`).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        );;
    }

    onRemoveTimeBlockById(TimeBlockId: number) {
        return this.http.post(ApiUrl.timeBlockDelete + `?timeBlockId=${TimeBlockId}`, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        );;
    }

    onSearchTimeBlock(queryParams: any) {
        let queries = '';
        Object.keys(queryParams).map(key => {
            queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${
                queryParams[key] && (queryParams[key].toString().toLocaleLowerCase() == '' || queryParams[key] == null)
                    ? ''
                    : encodeURIComponent(queryParams[key])
                }`;
        });
        return this.http.get(ApiUrl.timeBlockSearch + queries).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        );;
    }
}