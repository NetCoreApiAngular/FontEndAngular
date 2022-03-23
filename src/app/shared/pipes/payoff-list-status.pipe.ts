import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'payoffListStatus' })
export class PayoffListStatusPipe implements PipeTransform {
  transform(status: boolean) {
    return status ? 'Đang áp dụng' : 'Không áp dụng';
  }
}
