import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiError, ApiResponse, ApiListPagingResponse } from '../models/api-response/api-response';

export module ApiHelper {
  export function extractData(res: any | any): any {
    let body = res;
    return body;
  }

  export function onFail(err: HttpErrorResponse | any) {
    return throwError(<ApiError>err.error);
  }

  export function extractJsonData(res: ApiResponse): any {
    let body = res;
    return body;
  }

  export function extractJsonListData(res: ApiListPagingResponse): any {
    let body = res;
    return body;
  }

  export function extractParamObject(body: any): any {
    let res: any = {};
    Object.keys(body).map(key => {
      if (key && body[key] && body[key].toString().trim() !== '') {
        res[key] = body[key];
      }
    });
    return res;
  }

  export function extractParamWithPage(body: any, pageNumber: number = 1): any {
    let res: any = {};
    Object.keys(body).map(key => {
      if (key && body[key] && body[key].toString().trim() !== '') {
        res[key] = body[key];
      }
    });
    if (pageNumber !== 1) res.pageNumber = pageNumber;
    return res;
  }
}
