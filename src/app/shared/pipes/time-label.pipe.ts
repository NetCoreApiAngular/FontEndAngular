import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dayOfWeekVN' })
export class DayOfWeekVN implements PipeTransform {
  transform(dayOfWeek: any) {
    switch (dayOfWeek) {
      case 'Monday':
        return 'Thứ hai';

      case 'Tuesday':
        return 'Thứ ba';

      case 'Wednesday':
        return 'Thứ tư';

      case 'Thursday':
        return 'Thứ năm';

      case 'Friday':
        return 'Thứ sáu';

      case 'Saturday':
        return 'Thứ bảy';

      case 'Sunday':
        return 'Chủ nhật';

      default:
        return null;
    }
  }
}

@Pipe({ name: 'monthNameVN' })
export class MonthNameVN implements PipeTransform {
  transform(month: any) {
    return 'Tháng ' + month;
  }
}

@Pipe({ name: 'dayOfWeekNumberVN' })
export class DayOfWeekNumberVN implements PipeTransform {
  transform(dayOfWeek: any) {
    switch (dayOfWeek) {
      case 1:
        return 'Thứ hai';

      case 2:
        return 'Thứ ba';

      case 3:
        return 'Thứ tư';

      case 4:
        return 'Thứ năm';

      case 5:
        return 'Thứ sáu';

      case 6:
        return 'Thứ bảy';

      case 7:
        return 'Chủ nhật';

      default:
        return null;
    }
  }
}
