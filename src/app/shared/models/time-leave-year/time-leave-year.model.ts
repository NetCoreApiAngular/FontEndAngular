import { BaseInforModel } from '../base-infor-model/base-infor.model';
import { FilterBaseModel } from '../filter/filter.model';

export class TimeLeaveYear extends BaseInforModel {
    id: number;
    tyear: number;
    groupName: string;
    employeeId: number;
    employeeCode: string;
    firstName: string;
    lastName: string;
    positionName: string;
    leaveNo: number;
    leaveToxixNo: number;
    leaveResponsibilityNo: number;
    leaveSum: number;
    contractDateSigned: Date;
    contractDateReturned: Date;
    responsibilityName: string;
    salaryRateCode: string;
}

export class TimeLeaveManagement extends BaseInforModel {
    id: number;
    tlyear: number;
    employeeId: number;
    tlsummary: number;
    jan: number;
    feb: number;
    mar: number;
    apr: number;
    may: number;
    jun: number;
    jul: number;
    aug: number;
    sep: number;
    oct: number;
    nov: number;
    dec: number;
    tlend: number;
}

export class SearchTimeLeaveYear extends FilterBaseModel {
    textSearch?: string;
    year?: number;
    departmentId?: number;
    groupId?: number;
    pageSize: number = 10;
}