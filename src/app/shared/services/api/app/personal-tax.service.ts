import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { FilterBaseModel, FilterPersonalTaxlModel } from 'src/app/shared/models/filter/filter.model';

@Injectable({
    providedIn: 'root'
})
export class PersonalTaxService {
    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.personalTaxGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(model: any): Observable<any> {
        return this._http.post(ApiUrl.personalTaxUpdate , JSON.stringify(model)).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?personalTaxId=${id}`;
        return this._http.post(ApiUrl.personalTaxDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('personalTaxId', id);
        return this._http.get(ApiUrl.personalTaxGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: FilterPersonalTaxlModel): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if(params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.personalTaxSearch, {
            params: httpParams
        })
    }

    onAverageTaxCalculation(month: any) {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('month', month);
        return this._http.post(ApiUrl.AverageTaxCalculation, {}, {
            params: httpParams
        })
    }

    onTaxCalculation(month: any) {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('month', month);
        return this._http.post(ApiUrl.TaxCalculation, {}, {
            params: httpParams
        })
    }

    onGetLastestYear(): Observable<any> {
        return this._http.get(ApiUrl.personalTaxGetNewYear).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
}