import { FilterBaseModel } from '../filter/filter.model';
import { BaseInforModel } from '../base-infor-model/base-infor.model';


export class SalaryAdvanceModel extends BaseInforModel {
    id?: number;
    salaryId: number;
    employeeId: number;
    employeeCode: string;
    firstName: string;
    lastName: string;
    salaryRateCode: string;
    groupName: string;
    possitionName: string;
    responsibilityAmount: number;
    payFirst: number;
    createdBy: string;
    departmentName: string;
    groupId: number;
    modifiedBy: any;
    modifiedDate: any;
}
export class SearchSalaryAdvance extends FilterBaseModel {
    month: any;
    textSearch: string;
    departmentId?: any;
    groupId?: any;
}