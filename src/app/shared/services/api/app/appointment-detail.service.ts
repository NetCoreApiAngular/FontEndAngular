import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiUrl } from '../../api-url/api-url';
import { ApiHelper } from '../../api-helper';
import { catchError, map } from 'rxjs/operators';
import { AppointmentDetailModel } from 'src/app/shared/models/appointment-detail/appointment-detail.model';



@Injectable({
  providedIn: 'root'
})
export class AppointmentDetailService {

  userInfo = JSON.parse(localStorage.getItem('user'));
  onCreateSuccess = new Subject<any>();

  constructor(private _http: HttpClient) { }

  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.appointmentDetailGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(id): Observable<any> {
    const params = `?transferPositionid=${id}`;
    return this._http.post(ApiUrl.appointmentDetailDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(appointmentDetail): Observable<any> {
    return this._http.post(ApiUrl.appointmentDetailCreate, JSON.stringify(appointmentDetail)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(appointmentDetail): Observable<any> {
    return this._http.post(ApiUrl.appointmentDetailUpdate, JSON.stringify(appointmentDetail)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('transferPositionid', id);
    return this._http.get(ApiUrl.appointmentDetailGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetByAppointmentId(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('appointmentId', id);
    return this._http.get(ApiUrl.appointmentDetailGetByAppointmentId, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }


  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    })
    return this._http.get(ApiUrl.appointmentDetailSearch, {
      params: httpParams
    })
  }

  onUpdateProfileEmployee(appointmentId: number): Observable<any> {
    return this._http.post(ApiUrl.appointmentDetailUpdateProfileEmployee + `?appointmentId=${appointmentId}`, {}).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  // onFilter(params: DepartmentFilterModel):Observable<any>{
  //     let httpParams = new HttpParams();
  //     Object.keys(params).forEach(function (key) {
  //         if((params[key]&&params[key].toString().trim() !== '') || (key == 'status' && params[key] != null) ){
  //             httpParams = httpParams.append(key, params[key]);
  //         }
  //     })
  //     return this._http.get(ApiUrl.departmentFilter, {
  //         params: httpParams
  //     })
  // }
}