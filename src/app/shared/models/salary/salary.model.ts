import { Moment } from 'moment';
import { FilterBaseModel } from '../filter/filter.model'

export class Salary {
  id: number;
  monthSalary: Date;
  summary: number;
  salaryPart1: number;
  personalTax: number;
  socialInsurance: number;
  medicalInsurance: number;
  voluntaryInsurance: number;
  salaryPart2: number;
  createdDate: Date;
  createdBy: string;
  modifiedDate: Date;
  modifiedBy: string;
  status: boolean;
  summaryAdvance: number;
}

export class SearchSalaryModel extends FilterBaseModel {
  textSearch: string;
  salaryTime: string;
}

export class SalaryDetailModel {
  id: number;
  salaryId: number;
  salaryRateId: number;
  employeeId: number;
  workingDayNumber: number;
  congTg: number;
  congKhoan: number;
  congE: number;
  congT: number;
  cong7: number;
  salaryTime: number;
  salaryAssign: number;
  riceAllowance: number;
  otherAllowance: number;
  responsibilityAllowance: number;
  seniorityAllowance: number;
  positionAllowance: number;
  onsiteFee: number;
  jobAllowance: number;
  shp: number;
  salaryPerOneHour: number;
  personalTax: number;
  bhxh: number;
  bhyt: number;
  bhtn: number;
  payFirst: number;
  paySecond: number;
  createdDate: Date;
  createdBy: string;
  updatedDate: Date;
  updatedBy: string
}

export class salaryDetailViewTable {
  id: number;
  salaryId: number;
  salaryRuleDetailId: number;
  salaryRateId: number;
  employeeId: number;
  employeeCode: string;
  employeeName: string;
  firstName: string;
  lastName: string;
  groupId: number;
  groupName: string;
  departmentName: string;
  positionName: string;
  salaryRateCode: string;
  salaryPerDay: number;
  workingDayNumber: number;
  congTg: number;
  congKhoan: number;
  congE: number;
  congT: number;
  cong7: number;
  salaryTime: number;
  salaryAssign: number;
  riceAllowance: number;
  otherAllowance: number;
  responsibilityAllowance: number;
  seniorityAllowance: number;
  positionAllowance: number;
  onsiteFee: number;
  jobAllowance: number;
  shp: number;
  salaryPerOneHour: number;
  personalTax: number;
  additionValue: number;
  additionNote: string;
  summary: number;
  bhxh: number;
  bhyt: number;
  bhtn: number;
  payFirst: number;
  paySecond: number;
  createdDate: Date;
  createdBy: string;
  updatedDate: Date;
  updatedBy: string;
  salary: Salary;
}

export class SumSalaryDetail {
  id: number;
  salaryId: number;
  salaryRuleDetailId: number;
  salaryRateId: number;
  employeeId: number;
  employeeCode: number;
  employeeName: number;
  firstName: number;
  lastName: number;
  taxCode: number;
  groupId: number;
  departmentId: number;
  groupName: number;
  departmentCode: number;
  departmentName: number;
  positionName: number;
  salaryRateCode: number;
  salaryPerDay: number;
  workingDayNumber: number;
  congTg: number;
  congKhoan: number;
  congE: number;
  congT: number;
  cong7: number;
  summaryTimeSheet: number;
  summaryAllowance: number;
  salaryTime: number;
  salaryE: number;
  salaryAssign: number;
  riceAllowance: number;
  otherAllowance: number;
  responsibilityAllowance: number;
  seniorityAllowance: number;
  positionAllowance: number;
  onsiteFee: number;
  jobAllowance: number;
  shp: number;
  salaryPerOneHour: number;
  personalTax: number;
  additionValue: number;
  additionNote: number;
  summary: number;
  bhxh: number;
  bhyt: number;
  bhtn: number;
  payFirst: number;
  paySecond: number;
  employee: number;
  salary: number;
  salaryRate: number;
  roundPaySecond: number;
}

export class SearchSalaryDetailModel extends FilterBaseModel {
  textSearch: string;
  groupId: any;
  salaryTime: any;
  salaryId: any;
  departmentId: number;
  departmentCode?: string;
  departmentName?: string;
  groupCode?: string;
  groupName?: string;
}

export class SalaryAnalysisReportsSummary {
  summary: number;
  contract: number;
  outsource: number;
  parttime: number;
  toxic: number;
  bhxH3383: number;
  bhxH3384: number;
  bhxH3389: number;
  bhxH3335: number;
}

export class SalaryAnalysisParams {
  summaryInsuranceCompany: number;
  summaryCompanyMedicalRate: number;
  summaryCompanyVoluntaryRate: number;
  summaryRewardTimeLeave: number;
  summaryRewardMonth13: number;
  salaryOutsource: number;
}

export class SummarySalaryAnalysisReports {
  type: number;
  summary: number;
  payFirst: number;
  paySecond: number;
  payRound: number;
  insuranceCompany: number;
  insurancePerson: number;
}

export interface SalaryRewardPrintLabelModel {
  salaryMonth: Moment,
  groupName: string,
  salary: number,
  employeeFullName: string,
  salaryToxic: number,
  salaryToxicName: string,
  taxSettlement: number,
  taxSettlementName: string,
  rewardSalary1: number,
  rewardSalary2: number,
  cepSalary: number,
  socialInsurance: number,
  personalTax: number,
  sumSalary: number,
  lastSalary: number,
  paymentMethod: string,
  default?: boolean
}