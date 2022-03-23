import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { ApiHelper } from '../../api-helper';
import { map, catchError } from 'rxjs/operators';
import { TimeSheetModel } from 'src/app/shared/models/time-sheet/time-sheet.model';
import moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class TimeSheetService {
    userInfo = JSON.parse(localStorage.getItem('user'));
    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.timeSheetGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?TimeSheetid=${id}`;
        return this._http.post(ApiUrl.timeSheetDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(timeSheet): Observable<any> {
        const payLoad: TimeSheetModel = {
            ...timeSheet
        }
        return this._http.post(ApiUrl.timeSheetCreate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(timeSheet): Observable<any> {
        const payLoad: TimeSheetModel = {
            ...timeSheet
        }
        return this._http.post(ApiUrl.timeSheetUpdate, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('TimeSheetid', id);
        return this._http.get(ApiUrl.timeSheetGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.timeSheetSearch, {
            params: httpParams
        })
    }

    onSearchTimeSheetDetail(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key] && params[key] != null)
                httpParams = httpParams.append(key, params[key]);
        })
        return this._http.get(ApiUrl.searchTimeSheetDetail, {
            params: httpParams
        })
    }

    onGetTimeSheetDetailById(timeSheetDetailId: any): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('TimeSheetid', timeSheetDetailId);
        return this._http.get(ApiUrl.createTimeSheetDetailGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetTimeSheetDetailByDepartment(departmentId: any, currentDate: any): Observable<any> {
        let date = currentDate.format('YYYY-MM-DD');
        let queries = `?departmentId=${departmentId}&currentDate=${encodeURIComponent(date)}`;
        return this._http.get(ApiUrl.getTimeSheetDetailByDepartment + queries).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetTimeSheetDetailByGroup(groupId: any, currentDate: any): Observable<any> {
        let date = currentDate.format('MM/DD/YYYY');
        let queries = `?groupId=${groupId}&currentDate=${encodeURIComponent(date)}`;
        return this._http.get(ApiUrl.getTimeSheetDetailByGroup + queries).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        );
    }

    onCreateTimeSheetDetail(data: any) {
        return this._http.post(ApiUrl.createTimeSheetDetail, data);
    }

    onUpdateTimeSheetDetail(data: any) {
        return this._http.post(ApiUrl.updateTimeSheetDetail, data);
    }

    onUpdateMultiTimeSheetDetail(data: any) {
        return this._http.post(ApiUrl.updateMultiTimeSheetDetail, data);
    }

    onDeleteTimeSheetDetail(data: any) {
        return this._http.post(ApiUrl.deleteTimeSheetDetail, {},{
            params: new HttpParams().set('TimeSheetid', data.toString())
          });
    }

    onUpdateTimeMain(timeSheetId: number, groupId: number, timeSalary: number) {
        return this._http.post(ApiUrl.updateTimeMain, {}, {
            params: new HttpParams()
                .set('timeSheetId', timeSheetId.toString())
                .set('groupId', groupId.toString())
                .set('timeSalary', (+timeSalary).toString())
        });
    }

    onUpdateTimeE(timeSheetId: number, groupId: number, timeSalary: number) {
        return this._http.post(ApiUrl.updateTimeE, {}, {
            params: new HttpParams()
                .set('timeSheetId', timeSheetId.toString())
                .set('groupId', groupId.toString())
                .set('timeSalary', (+timeSalary).toString())
        });
    }

    // onFilter(params: timeSheetFilterModel):Observable<any>{
    //     let httpParams = new HttpParams();
    //     Object.keys(params).forEach(function (key) {
    //         if((params[key]&&params[key].toString().trim() !== '') || (key == 'status' && params[key] != null) ){
    //             httpParams = httpParams.append(key, params[key]);
    //         }
    //     })
    //     return this._http.get(ApiUrl.timeSheetFilter, {
    //         params: httpParams
    //     })
    // }
}
