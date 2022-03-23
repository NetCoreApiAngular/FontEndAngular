import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { PositionModel } from 'src/app/shared/models/position/position.model';
import { SalaryAssignmentMasterModel } from 'src/app/shared/models/salary-assignment/salary-assignment.model';

@Injectable({
    providedIn: 'root'
})
export class SalaryAssignmentService {
    onCreateSuccess = new Subject<any>();
    userInfo = JSON.parse(localStorage.getItem('user'));
    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.GetAssignmentProductDetailAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(salaryAssignment): Observable<any> {
        const payLoad: PositionModel = {
            ...salaryAssignment,
            createdDate: new Date(),
            dateCreated: new Date(),
            createdBy: this.userInfo.userName,
            updatedDate: new Date(),
            updatedBy: this.userInfo.userName
        }
        return this._http.post(ApiUrl.createSalaryAssignment, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(salaryAssignment): Observable<any> {
        const payLoad: PositionModel = {
            ...salaryAssignment,
            dateCreated: new Date(),
            updatedBy: this.userInfo.userName,
            updatedDate: new Date()
        }
        return this._http.post(ApiUrl.updateSalaryAssignment, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?SalaryAssignmentid=${id}`;
        return this._http.post(ApiUrl.deleteSalaryAssignment + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdateSalaryAssignmentAmount(id): Observable<any> {
        return this._http.post(`${ApiUrl.updateSalaryAssignmentAmount}?salaryAssignmentId=${id}`, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('SalaryAssignmentid', id);
        return this._http.get(ApiUrl.getSalaryAssignment, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if (params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.searchSalaryAssignment, {
            params: httpParams
        })
    }

    onCreateToDepartment(url: string, month: any, departmentId: any, salaryAssignmentMasterId: number): Observable<any> {
        return this._http.post(url + `?salaryMonth=${month}&departmentId=${departmentId}&salaryMasterId=${salaryAssignmentMasterId}`, {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCopy(url: string, month: any): Observable<any> {
        return this._http.post(url + `?salaryMonth=${month}`, {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDeleteByMonth(url: string, month: string, departmentId: any): Observable<any> {
        return this._http.post(url + `?month=${month}&departmentId=${departmentId}`, {}).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreateMaster(payLoad: SalaryAssignmentMasterModel) {
        return this._http.post(ApiUrl.createSalaryAssignmentMaster, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdateMaster(payLoad: SalaryAssignmentMasterModel): Observable<any> {
        return this._http.post(ApiUrl.updateSalaryAssignmentMaster, JSON.stringify(payLoad)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onMasterGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('SalaryAssignmentMasterid', id);
        return this._http.get(ApiUrl.getSalaryAssignmentMaster, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearchMaster(params: any): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if (params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.searchSalaryAssignmentMaster, {
            params: httpParams
        })
    }

    onDeleteMaster(id): Observable<any> {
        const params = `?SalaryAssignmentMasterid=${id}`;
        return this._http.post(ApiUrl.deleteSalaryAssignmentMaster + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCopyMaster(id: any, month: any): Observable<any> {
        const params = `?masterId=${id}&month=${month}`;
        return this._http.post(ApiUrl.copySalaryAssignmentMasterMiltiple + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

}
