import { Moment } from 'moment';

export class TimeSheetDailyModel {
    id: number;
    dayNo: Moment;
    employeeId: number;
    employeeCode: string;
    firstName: string;
    lastName: string;
    checkIn: string;
    checkOut: string;
    lateMinute: number
    ealyMinute: number
    additionTime: number;
    reasonForLeave: string;
    selectedReason?: Array<string>;
    createdDate: Moment;
    createdBy: string;
    modifiedDate: Moment
    modifiedBy: string;
    dishId?: number;
    dishName?: string;
    lastDayOff: Moment
}