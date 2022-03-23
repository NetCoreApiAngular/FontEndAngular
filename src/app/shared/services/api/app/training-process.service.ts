import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingProcessService {

  userInfo = JSON.parse(localStorage.getItem('user'));

  constructor(private http: HttpClient) { }

  onCreate(data): Observable<any> {
    return this.http.post(ApiUrl.TrainingProcessCreate, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(data) {
    return this.http.post(ApiUrl.TrainingProcessUpdate, JSON.stringify(data)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id: number) {
    return this.http.get(ApiUrl.TrainingProcessGetById + `?TrainingProcessId=${id}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onDelete(id: number) {
    return this.http.post(ApiUrl.TrainingProcessDelete + `?TrainingProcessId=${id}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }
  onGetTrainingClasses(): Observable<any> {
    return this.http.get(ApiUrl.TrainingClasses).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail))
  }

  onGetTrainingProcessReport(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
        if(params[key] && params[key].toString().trim() !== '') {
            httpParams = httpParams.append(key, params[key]);
        }
    })
    return this.http.get(ApiUrl.TrainingProcessReport, {
        params: httpParams
    })
  }

  onUpdateProfile(TrainingProcessId: number) {
    return this.http.post(ApiUrl.TrainingProcessUpdateProfile + `?TrainingProcessId=${TrainingProcessId}`, null).pipe(
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
    return this.http.get(ApiUrl.TrainingProcessSearch, {
      params: httpParams
    })
  }

  onGetTrainingProcessReportAll(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
        if(params[key] && params[key].toString().trim() !== '') {
            httpParams = httpParams.append(key, params[key]);
        }
    })
    return this.http.get(ApiUrl.GetTrainingProcessReportAll, {
        params: httpParams
    })
  }
}
