import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { PersonalIncomeTaxModel } from 'src/app/shared/models/personal-tax/personal-tax.model';
import { FilterBaseModel } from 'src/app/shared/models/filter/filter.model';

@Injectable({
    providedIn: 'root'
})
export class PersonalIncomeTaxService {

    userInfo = JSON.parse(localStorage.getItem('user'));


    constructor(private _http: HttpClient) { }

    onGetAll(): Observable<any> {
        return this._http.get(ApiUrl.personalIncomeTaxGetAll).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onDelete(id): Observable<any> {
        const params = `?PersonalIncomeTaxTypeid=${id}`;
        return this._http.post(ApiUrl.personalIncomeTaxDelete + params, null).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onCreate(personalIncomeTax): Observable<any> {
        const payLoad: PersonalIncomeTaxModel = {
            ...personalIncomeTax,
            amount: +personalIncomeTax.amount,
            rate: +personalIncomeTax.rate,
            downValue: +personalIncomeTax.downValue
        }
        return this._http.post(ApiUrl.personalIncomeTaxCreate, payLoad).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdate(personalIncomeTax): Observable<any> {
        const payLoad: PersonalIncomeTaxModel = {
            ...personalIncomeTax,
            amount: +personalIncomeTax.amount,
            rate: +personalIncomeTax.rate,
            downValue: +personalIncomeTax.downValue
        }
        return this._http.post(ApiUrl.personalIncomeTaxUpdate, payLoad).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('PersonalIncomeTaxTypeid', id);
        return this._http.get(ApiUrl.personalIncomeTaxGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onSearch(params: FilterBaseModel): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if (params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.personalIncomeTaxSearch, {
            params: httpParams
        })
    }

    onSearchMaster(params: FilterBaseModel): Observable<any> {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            if (params[key] && params[key].toString().trim() !== '') {
                httpParams = httpParams.append(key, params[key]);
            }
        })
        return this._http.get(ApiUrl.personalIncomeTaxMasterSearch, {
            params: httpParams
        })
    }

    onCreateMaster(personalIncomeTax): Observable<any> {
        return this._http.post(ApiUrl.personalIncomeTaxMasterCreate, personalIncomeTax).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdateMaster(personalIncomeTax): Observable<any> {
        return this._http.post(ApiUrl.personalIncomeTaxMasterUpdate, personalIncomeTax).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetMasterById(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('PersonalIncomeTaxMasterId', id);
        return this._http.get(ApiUrl.personalIncomeTaxMasterGetById, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onUpdateQuitJob(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('PersonalIncomeTaxMasterId', id);
        return this._http.post(ApiUrl.updateQuitJob, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetExcelData(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('masterId', id);
        return this._http.get(ApiUrl.GetDetailMoreListModel, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetExcelDataRemind(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('masterId', id);
        return this._http.get(ApiUrl.ExportThePromptExcelFile, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }

    onGetEmployeePersonalTaxDetailByAuthor(id): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('masterId', id);
        return this._http.get(ApiUrl.GetEmployeePersonalTaxDetailByAuthor, { params: httpParams }).pipe(
            map(ApiHelper.extractData),
            catchError(ApiHelper.onFail)
        )
    }
}