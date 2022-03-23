import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { ApiResponse, ApiListPagingResponse, ApiListResponse } from 'src/app/shared/models/api-response/api-response';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  onLogin(loginModel: any): Observable<ApiResponse> {
    let body = JSON.stringify(loginModel);
    return this.http.post(ApiUrl.Login, body).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

}
