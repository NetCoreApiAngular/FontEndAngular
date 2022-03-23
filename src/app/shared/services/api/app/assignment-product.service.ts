import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient } from '@angular/common/http';
import { AssignmentModel } from 'src/app/shared/models/assignment-product/assignment-product.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentProductService {
  constructor(private http: HttpClient) { }

  onSearchAssignment(queryParams: any) {
    let queries = '';
    Object.keys(queryParams).map(key => {
      queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${queryParams[key] && (queryParams[key].toString().toLocaleLowerCase() == '' || queryParams[key] == null)
          ? ''
          : encodeURIComponent(queryParams[key])
        }`;
    });
    return this.http.get(ApiUrl.SearchAssignment + queries).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onGetAssignmentById(id: any) {
    return this.http.get(ApiUrl.GetAssignmentById + `?Assignmentid=${id}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetNewestAssignmentId() {
    return this.http.get(ApiUrl.getAssignmentNewest).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreateAssignment(data: any) {
    return this.http.post(ApiUrl.CreateAssignment, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCopy(assignmentModel: any, assignmentId: number): Observable<any> {
    const payLoad: AssignmentModel = {
      ...assignmentModel,
    }
    return this.http.post(ApiUrl.CopyAssignment + `?allowanceTypeOldId=${assignmentId}`, JSON.stringify(payLoad)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdateAssignment(data: any) {
    return this.http.post(ApiUrl.UpdateAssignment, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDeleteAssignment(assignmentId: any) {
    return this.http.post(ApiUrl.deleteAssignment + `?assigmentId=${assignmentId}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onCreateAssignmentProduct(data: any) {
    return this.http.post(ApiUrl.CreateAssignmentProduct, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdateAssignmentProduct(data: any) {
    return this.http.post(ApiUrl.UpdateAssignmentProduct, data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetAssignmentProductAll() {
    return this.http.get(ApiUrl.GetAssignmentProductAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onGetAssignmentProductById(AssignmentProductId: number) {
    return this.http.get(ApiUrl.GetAssignmentProductById + `?assigmentProductid=${AssignmentProductId}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onRemoveAssignmentProductById(AssignmentProductId: number) {
    return this.http.post(ApiUrl.RemoveAssignmentProductById + `?assigmentProductid=${AssignmentProductId}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onSearchAssignmentProduct(queryParams: any) {
    let queries = '';
    Object.keys(queryParams).map(key => {
      queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${queryParams[key] && (queryParams[key].toString().toLocaleLowerCase() == '' || queryParams[key] == null)
          ? ''
          : encodeURIComponent(queryParams[key])
        }`;
    });
    return this.http.get(ApiUrl.SearchAssignmentProduct + queries).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onGetAllAssignmentProduct(assigmnentId: number) {
    return this.http.get(ApiUrl.GetAllAssignmentProduct + `?assigmnentId=${assigmnentId}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  // product
  onSearchProduct(queryParams: any) {
    let queries = '';
    Object.keys(queryParams).map(key => {
      queries += `${Object.keys(queryParams)[0] == key ? '?' : '&'}${key}=${queryParams[key] && (queryParams[key].toString().toLocaleLowerCase() == '' || queryParams[key] == null)
          ? ''
          : encodeURIComponent(queryParams[key])
        }`;
    });
    return this.http.get(ApiUrl.SearchProduct + queries).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );;
  }

  onGetProductById(id: any) {
    return this.http.get(ApiUrl.GetProductById + `?Productid=${id}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }
}