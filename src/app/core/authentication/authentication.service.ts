import { Injectable } from '@angular/core';
import { StorageKey } from 'src/app/shared/models/storage-key/storage-key';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from 'src/app/shared/services/client/storage.service';
import { JwtTokenHelper } from 'src/app/shared/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _redirectUrl: string;

  constructor(public jwtHelper: JwtHelperService, private storageService: StorageService) {}

  public isAuthenticated = (): boolean => {
    const token = this.storageService.onGetToken(StorageKey.Token);
    return token && token != 'null'? !this.jwtHelper.isTokenExpired(token) : false;
  };

  public isAccessActionModule = (moduleAction: any): boolean => {
    let currUser: any= JSON.parse(localStorage.getItem(StorageKey.User));
    if(currUser.isAdmin) {
      return false;
    }
    const accountAcction = JwtTokenHelper.userInfoAcctionModule;
    return !accountAcction.some(act => act.module == moduleAction.module && act.action == moduleAction.action);
  };

  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }

  public get redirectUrl(): string {
    return this._redirectUrl;
  }
}
