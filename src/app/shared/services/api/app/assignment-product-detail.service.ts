import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { PositionModel } from 'src/app/shared/models/position/position.model';

@Injectable({
    providedIn: 'root'
})
export class AssignmentProductDetailService {
    onCreateSuccess = new Subject<any>();
    userInfo = JSON.parse(localStorage.getItem('user'));


    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.GetAssignmentProductDetailAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?AssignmentProductDetailid=${id}`;
        return this._http.post(ApiUrl.RemoveAssignmentProductDetailById + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(assignmentProductDetail): Observable<any> {
        const payLoad: PositionModel = {
            ...assignmentProductDetail,
            //createdDate: new Date(),
            //dateCreated: new Date(),
            //createdBy: this.userInfo.userName,
            //updatedDate: new Date(),
            //updatedBy: this.userInfo.userName
        }
        return this._http.post(ApiUrl.CreateAssignmentProductDetail, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(assignmentProductDetail): Observable<any> {
        const payLoad: PositionModel = {
            ...assignmentProductDetail
        }
        return this._http.post(ApiUrl.UpdateAssignmentProductDetail, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdateMulti(assignmentProductDetail): Observable<any> {
        return this._http.post(ApiUrl.UpdateMultiAssignmentProductDetail, JSON.stringify(assignmentProductDetail)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('AssignmentProductDetailid', id);
        return this._http.get(ApiUrl.GetAssignmentProductDetailById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.SearchAssignmentProductDetail, {
            params: httpParams
        })
    }

    CheckAssignemntProductCodeIsExist(assignmentProductDetail) {
        return this._http.post(ApiUrl.CheckAssignemntProductCodeIsExist, JSON.stringify(assignmentProductDetail)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onExportExcel(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.AssignmentProductDetailExportExcel, {
            params: httpParams
        })
    }

}
