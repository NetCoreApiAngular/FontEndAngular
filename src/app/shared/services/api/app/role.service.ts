
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiUrl } from '../../api-url/api-url';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from '../../api-helper';
import { moduleActionsModel } from 'src/app/shared/models/role/role.model';
import { StorageKey } from 'src/app/shared/models/storage-key/storage-key';
import { DialogService } from '../../client/dialog.service';
import { Configs } from 'src/app/shared/common/configs/configs';
import { SnackbarData, MessageType } from 'src/app/shared/models/material/material.model';

@Injectable({
  providedIn: 'root'
})

export class RoleService {
  currUserRole: BehaviorSubject<moduleActionsModel[]> = new BehaviorSubject(undefined);
  prevPageUrl: BehaviorSubject<string> = new BehaviorSubject(undefined);
  constructor(
    private _http: HttpClient,
    private dialogService: DialogService
  ) { }

  onGetAll(): Observable<any> {
    return this._http.get(ApiUrl.roleGetAll).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onDelete(id): Observable<any> {
    const params = `?roleId=${id}`;
    return this._http.post(ApiUrl.roleDelete + params, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onCreate(data): Observable<any> {
    return this._http.post(ApiUrl.roleCreate, JSON.stringify(data)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onUpdate(data): Observable<any> {
    return this._http.post(ApiUrl.roleUpdate, JSON.stringify(data)).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onGetById(id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('roleId', id);
    return this._http.get(ApiUrl.roleGetById, { params: httpParams }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  onSearch(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      if (params[key]) {
        httpParams = httpParams.append(key, params[key]);
      }
    })
    return this._http.get(ApiUrl.roleSearch, {
      params: httpParams
    })
  }

  onGetModuleAcctionByGroup(group: number) {
    return this._http.get(ApiUrl.getModuleActionByGroup, { params: { group: group.toString() } }).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    )
  }

  get userRole() {
    if(this.currUserRole.value) {
      let user = JSON.parse(localStorage.getItem(StorageKey.User))
      this.onGetById(user.roleModels[0].roleId)
    }
    return this.currUserRole
  }

  actionIsAllow(module: string, action: string, showNoti?: boolean): boolean {
    let currUser: any= JSON.parse(localStorage.getItem(StorageKey.User));
    if(currUser.isAdmin) {
      return true
    }
    if (currUser.moduleActions && currUser.moduleActions.length > 0 && currUser.moduleActions.some(act => act.module == module && act.action == action)) {
      return true;
    } else {
      if(showNoti) {
        this.dialogService.onOpenInformMessageSnackBar(<SnackbarData>{
          content: Configs.notHavePermission,
          type: MessageType.Error
        })
      }
      return false;
    }
  }
}
