import { FilterBaseModel } from '../filter/filter.model';

export class ExpiredContractReportModel {
    id: number;
    contractNumber: string;
    dateCreated: Date;
    description: string;
    status: boolean;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string
}

export class ExpiredSalaryIncreaseReportModel {
    id: number;
    fromDate: Date;
    toDate: Date;
    contractNumber: string;
    decisionNumber: string;
    dateCreated: Date;
    description: string;
    status: boolean;
}

export class ExpiredSalaryIncreaseReportDetailModel {
    id: number;
    expiredSalaryIncreaseReportId: number;
    employeeId: number;
    employeeCode: string;
    firstName: string;
    lastName: string;
    possitionName: string;
    departmentId: number;
    departmentName: string;
    groupId: number;
    department_GroupCode: string;
    groupName: string;
    workedCountDate: Date;
    salaryRuleDetailOldId: number;
    salaryRateOldCode: string;
    stypeOld: string;
    workedCountNoOld: number;
    timeOld: number;
    reviewDate: Date;
    salaryRuleDetailId: number;
    salaryRateCode: string;
    salaryAmountOld: number;
    salaryAmountNew: number;
    stype: string;
    workedCountNo: number;
    time: number;
    timeUpSalary: Date;
    workedYearDateNext: Date;
}

export class ExpiredContractReportDetailModel {
    id: number
    expiredContracReportId: number
    employeeId: number
    employeeCode: string
    firstName: string
    lastName: string
    contractId: number
    contractNumber: string
    groupId: number
    groupCode: string
    salaryRateId: number
    contractType: number
    salaryCode: string
    dateJoined: string
    signedDate: string
    groupName: string
    endDate: Date
    contractTypeNext: number
    signedNo: number
    createdDate: Date
    createdBy: string
    updatedDate: Date
    updatedBy: string
}

export class SearchExpiredContractReport extends FilterBaseModel {
    textSearch?: string;
    pageSize = 10;
}

export class SearchExpiredReport extends FilterBaseModel {
    textSearch?: string;
    pageSize = 10;
    ExpiredSalaryIncreaseReportId: number;
}