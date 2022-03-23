import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DialogService } from 'src/app/shared/services/client/dialog.service';
import { SnackbarData, MessageType } from 'src/app/shared/models/material/material.model';
import { ApiError } from 'src/app/shared/models/api-response/api-response';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private dialogService: DialogService, private authenticationService: AuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    if (this.authenticationService.isAuthenticated()) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type') && !(request.body instanceof FormData)) {

      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    } else {
      // console.log(request.body )
      // request = request.clone({ headers: request.headers.set('Content-Type', 'multipart/form-data') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    return next.handle(request)
      .pipe(
        // map((event: HttpEvent<any>) => {
        //   if (event instanceof HttpResponse) {
        //   }
        //   return event;
        // }),
        catchError((error: HttpErrorResponse) => {
          if(error.status == 401) {
            const data = <SnackbarData>{
              content: 'Bạn không được phép sử dụng website',
              type: MessageType.Error
            };
            this.dialogService.onOpenInformMessageSnackBar(data);
          }
          if(error.status == 403) {
            const data = <SnackbarData>{
              content: 'Bạn không có quyền thực hiện chức năng này',
              type: MessageType.Error
            };
            this.dialogService.onOpenInformMessageSnackBar(data);
          }
          if(error.status == 500) {
            const data = <SnackbarData>{
              content: 'Lỗi máy chủ không hoạt động vui lòng thử lại sau',
              type: MessageType.Error
            };
            this.dialogService.onOpenInformMessageSnackBar(data);
          }
          const apiError = <ApiError>error.error;
          if (apiError && (!!apiError.errorMessage || !!apiError.message)) {
            const data = <SnackbarData>{
              content: apiError.errorMessage || apiError.message,
              type: MessageType.Error
            };
            this.dialogService.onOpenInformMessageSnackBar(data);
          }

          return throwError(error);
        })
      );
  }
}
