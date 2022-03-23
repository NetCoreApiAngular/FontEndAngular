import * as CryptoJS from 'crypto-js';
import * as decode from 'jwt-decode';
import { StorageKey } from '../../models/storage-key/storage-key';
import { UserRole, UserProfileModel, UserInfoModel } from 'src/app/shared/models/user/user.model';
import { moduleActionsModel } from '../../models/role/role.model';

export class JwtTokenHelper {
  static base64url = (source: any): any => {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source);

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
  };

  public static CreateUnsignedToken = (data: any, expiredTime?: number): string => {
    let header = {
      alg: 'HS256',
      typ: 'JWT'
    };
    let exp = expiredTime ? expiredTime : Math.floor(Date.now() / 1000) + 60 * 60;
    let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    let encodedHeader = JwtTokenHelper.base64url(stringifiedHeader);
    let jwtData = { ...data, exp: exp };
    let stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(jwtData));
    let encodedData = JwtTokenHelper.base64url(stringifiedData);

    let token = encodedHeader + '.' + encodedData;

    return token;
  };

  public static CreateSigningToken = (data: any, expiredTime?: number): string => {
    let token = JwtTokenHelper.CreateUnsignedToken(data, expiredTime);
    let secret = 'My very confidential secret!';

    let signature = CryptoJS.HmacSHA256(token, secret);
    signature = JwtTokenHelper.base64url(signature);

    let signedToken = token + '.' + signature;
    return signedToken;
  };

  public static DecodeToken = (token: string): any => {
    if (token == null) {
      return null;
    }
    try {
      let tokenPayload = decode(token);
      if (tokenPayload) {
        return tokenPayload;
      }
    } catch (error) {
      return null;
    }
  };

  public static GetUserLoggedTokenInfo = (): UserInfoModel => {
    let userLoggedInInfoToken = localStorage.getItem(StorageKey.Token);    
    let userLoggedInInfo = JwtTokenHelper.DecodeToken(userLoggedInInfoToken);    
    if (userLoggedInInfo) {
      return <UserInfoModel>{ ...userLoggedInInfo };
    }
    return null;
  };

  public static GetUserDetails = (): UserProfileModel => {
    let userInfo = JSON.parse(localStorage.getItem(StorageKey.User));
    if (userInfo) {
      return <UserProfileModel>{ ...userInfo };
    }
    return null;
  };

  public static isRole(userRole: UserRole): boolean {
    let userInfo = JwtTokenHelper.GetUserLoggedTokenInfo();
    if (!userInfo) {
      return false;
    }
    return userInfo.roles.some(role => role == userRole);
  }

  public static get userName(): string | null {
    let userInfo = JwtTokenHelper.GetUserLoggedTokenInfo();
    return (userInfo && userInfo.userName) || null;
  }

  public static get userInfoAcctionModule(): moduleActionsModel[] | null {
    let userInfo = JSON.parse(localStorage.getItem(StorageKey.User));
    return (userInfo && userInfo.moduleActions) || [];
  }

  public static get countryCode(): string | null {
    return 'NI';
    //   let ipInfoToken = localStorage.getItem(StorageKey.IPInfo);
    //   let ipDecode = JwtTokenHelper.DecodeToken(ipInfoToken);
    //  let ipInfo = ipDecode && <IpInfo>{ ...ipDecode } || null;
    //return ipInfo && ipInfo.country || 'ES';
  }


}
