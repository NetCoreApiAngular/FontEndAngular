import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class TimeLeaveSeniority extends BaseInforModel {
    id: number;
    employeeId: number;
    tlYear: any;
    groupName: string;
    employeeCode: string;
    firstName: string;
    lastName: string;
    responsibilityName: string;
    seniorityNumberDay: number;
    // createdDate: Date;
    // createdBy: string;
    // modifiedDate: Date;
    // modififedBy: string
}