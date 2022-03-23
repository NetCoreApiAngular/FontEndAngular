import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificationType } from 'src/app/shared/models/notification/notification.model';

@Component({
  selector: 'notification-message',
  template: ''
})
export class NotificationMessageComponent {
  @Input() visible: boolean = false;
  @Input() notificationType: NotificationType;
  @Input() personRecipientIds: Array<string>;
  @Output() onSuccess: EventEmitter<boolean> = new EventEmitter();
  message: string;

  constructor() {}

  onCancel = (isSuccess: boolean) => {
    this.onSuccess.emit(isSuccess);
  };
}
