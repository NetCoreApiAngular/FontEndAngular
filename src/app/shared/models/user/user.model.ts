import { FileModel } from '../file/file.model';
import { BaseModel } from '../base.model';

export enum UserRole {
  Offline = 1, //Offline
  Admin = 2, //Admin
  WarehouseAdmin = 3, //Warehouse Admin - Nhân viên quản lý kho
  Warehouser = 4, //Warehouser - Nhân viên quản lý kho
  SaleAdmin = 5, //SaleAdmin - Nhân viên bán hàng
  Sale = 6, //Sale - Nhân viên bán hàng
  Deliver = 7, //Deliver - Nhân viên giao hàng
  TankHealthCheck = 8, //TankHealthCheck - Vệ sinh hồ
  Customer = 64, //Customer - Khách hàng,
  Accounting = 10, // Accounting - Kế toán
  DeliverAdmin = 9, // DeliverAdmin - Nhân viên quản lý giao hàng,
  CustomerCare = 11 // CustomerCare - Chăm sóc khách hàng
}

export class TokenModel {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export class TokenDetailModel {
  nameid: string;
  unique_name: string;
  fullName: string;
  sub: string;
  role: UserRole;
  roleName: string;
  avatar: FileModel;
  photoUrl: string;
  iss: string;
  aud: string;
  exp: number;
  nbf: number;
}

export class UserChangePasswordModel extends BaseModel {
  constructor() {
    super();
  }
  newPassword: string;
  password: string;
  userName: string;
}

export class UserProfileModel extends BaseModel {
  constructor() {
    super();
  }
  userId: string;
  email: string;
  title: string;
  phoneNumber: string;
  surname: string;
  firstName: string;
  address: string;
  userTypeid: number;
  gender: number;
  userType: string;
  genderDisplay: string;
  position: string;
  identityNumber: string;
  dateOfBirthFormatted: Date;
  personCode: string;
  isOfflineUser: boolean;
  canResetPassword: boolean;
  dob: Date;
  password: string;
  personId: string;
  taxNumber: string;
  billingAddress: string;
  accountNumber: string;
  managedByEmployeeId: string;
  managedByEmployeeName: string;
  photoUrl: string;
  debtPriceLimitation: number;
  debtTermInDay: number;
  paymentScheduleStatusId: number;
  paymentScheduleStatusDisplay: string;
  debtOverDueDate?: number;
  remainDebtLimitation?: number;
  debtOrderTotal?: number;
  debtRoot?: number;
  bankAccount?: string;
  bankName?: string;
}

export class UserModel extends UserProfileModel {
  constructor() {
    super();
  }
  name: string;
  email: string;
  password: string;
  roles: UserRole[];
}

export class UserResetPasswordModel {
  constructor() {}
  userId: number;
  keyCode?: string;
  password: string;
  rePassword: string;
}

export class UserContextModel {
  username: string;
  password: string;
  email?: string;
  remember?: boolean;
  grant_type?: string;
  constructor() {
    this.grant_type = 'password';
  }
}

export class UserInfoModel {
  avatar: FileModel;
  email: string;
  fullName: string;
  userId: string;
  userName: string;
  roleName: string;
  roles: UserRole[];
  role: UserRole;
  photoUrl: string;
}

export class UserImageProfileModel {
  id: number; // userId
  userProfile: File;
}

export class UserDropdownModel {
  personId: string;
  fullName: string;
  email: string;
  localizedUserType: string;
}

export class UserRoleGroup {
  groupId: number;
  groupName: number;
}

export enum UserType {
  Online = 1,
  Offline = 2
}

export enum UserStatus {
  InActive = 0,
  Active = 1
}

export class UserTypeModel {
  userTypeid: number;
  userTypeName: string;
  localizedUserType: string;
}

export class UpdateUserAccountInfoModel {
  userid: string;
  newEmail: string;
  newUserTypeid: string;
}

export class ResetPasswordUserModel {
  userid: string;
  newPassword: string;
}

export class UpdateReleaseInvoiceModel {
  customerId: string;
  taxNumber: string;
  billingAddress: string;
  accountNumber: string;
}

export class UserDetailModel extends BaseModel {
  constructor() {
    super();
  }
  name: string;
  primaryEmail: string;
  phone: string;
  position: string;
  address: string;
  userTypeid: number;
  userType: string;
  personCode: string;
  photoUrl: string;
  avatar: FileModel;
}

export class ChangePasswordModel {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
  changePasswordError: string;
  changePasswordSuccess: string;
}
