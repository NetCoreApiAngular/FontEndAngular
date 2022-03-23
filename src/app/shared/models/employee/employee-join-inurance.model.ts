import { BankAccountModel } from './bank-account.model';
import { FilterBaseModel } from '../filter/filter.model';

export class SearchEmployeeJoinInsuranceModel extends FilterBaseModel {
    monthYear: Date;
    dateCreated: Date;
}

export class EmployeeJoinInsurance {
    id: number;
    monthYear: string;
    dateCreated: Date;
    companySocialRate: number;
    personalSocialRate: number;
    companyVoluntaryRate: number;
    personalVoluntaryRate: number;
    discription: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string
}

export class SearchEmployeeJoinInsuranceDetailModel extends FilterBaseModel {
    employeeJoinInsuranceId: any;
    type: number;
}

export class EmployeeJoinInsuranceDetail {
    id: number;
    employeeJoinInsuranceId: number;
    employeeId: number;
    insuranceSalary: number;
    differencetNo: number;
    sumSalary: number;
    createdDate: Date;
    createBy: string;
    modifiedDate: Date;
    modifiedBy: string
}
export class SumEmployeeJoinInsuranceDetail {
    allowanceResponsibilityId: string;
    allowanceResponsibilityOldId: string;
    bankAccount: string;
    createBy: string;
    createdDate: string;
    dateOfBirth: string;
    department_Croup: string;
    differenceNo: number;
    employeeCode: string;
    employeeId: number;
    employeeJoinInsuranceId: number;
    firstName: string;
    gender: number;
    id: number;
    identityCardNo: string;
    issuerDate: string;
    lastName: string;
    medicalBookNo: string;
    modifiedBy: string;
    modifiedDate: string;
    possitionName: string;
    salaryNew: number;
    salaryOld: number;
    salaryRuleDetailId: string;
    salaryRuleDetailOldId: string;
    socialBookNo: string;
    medicalInsurance: number;
    voluntaryInsurance: number;
    socialInsurance: number;
    summaryInsurance: number;
}