import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { ProductModel, ProductFilterModel } from 'src/app/shared/models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  userInfo = JSON.parse(localStorage.getItem('user'));


  constructor(private _http: HttpClient) { }

  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.ProductGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(id): Observable<any> {
    const params = `?ProductId=${id}`;
    return this._http.post(ApiUrl.ProductDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(product): Observable<any> {
    const payLoad: ProductModel = {
      ...product
    }
    return this._http.post(ApiUrl.ProductCreate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(product): Observable<any> {
    const payLoad: ProductModel = {
      ...product
    }
    return this._http.post(ApiUrl.ProductUpdate, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('ProductId', id);
    return this._http.get(ApiUrl.ProductGetById, { params: httpParams }).pipe(
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
    return this._http.get(ApiUrl.ProductSearch, {
      params: httpParams
    })
  }

  // onFilter(params):Observable<any>{
  //     let httpParams = new HttpParams();
  //     Object.keys(params).forEach(function (key) {
  //         if(params[key]){
  //             httpParams = httpParams.append(key, params[key]);
  //         }
  //     })
  //     return this._http.get(ApiUrl.positionFilter, {
  //         params: httpParams
  //     })
  // }
}
