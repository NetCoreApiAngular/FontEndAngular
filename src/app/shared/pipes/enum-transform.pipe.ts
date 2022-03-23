import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'paymentStatus' })
export class PaymentStatusPipe implements PipeTransform {
  transform(status: number) {
    switch (status) {
      case 1:
        return 'Chưa thanh toán';
      case 2:
        return 'Thanh toán một phần';

      case 3:
        return 'Thanh toán đầy đủ';

      case 4:
        return 'Thanh toán thừa';

      default:
        return null;
    }
  }
}
