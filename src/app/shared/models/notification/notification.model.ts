export enum NotificationType {
  System = 1, //System
  Wishes = 2, //Wishes
  Order = 3, //Order
  Liabilities = 4, //Liabilities
  RelocateVariant = 5, //RelocateVariant
  ReleaseInventory = 6 //ReleaseInventory
}

export class NotificationModel {
  notificationTypeId: NotificationType;
  messageBody: string;
}

export class NotificationMessageModel {
  notificationId: number;
  personRecipientId: string;
  personRecipientName: string;
  notificationTypeId: number;
  notificationTypeName: string;
  notificationMethodId: number;
  notificationMethodName: string;
  messageSubject: string;
  messageBody: string;
  createdDate: Date;
  isRead: boolean;
  isDeleted: boolean;
}

export class NotificationTypeModel {
  notificationTypeId: number;
  notificationTypeCode: string;
  notificationTypeName: string;
}
