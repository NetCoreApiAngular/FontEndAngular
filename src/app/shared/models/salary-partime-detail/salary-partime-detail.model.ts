import { FilterBaseModel } from '../filter/filter.model';

export interface SalaryPartimeDetailModel {
  id?: number;
  salaryPartimeId?: number;
  salaryCode?: string;
  employeeId?: number;
  employeeCode?: string;
  groupName?: string;
  firstName?: string;
  lastName?: string;
  possitionName?:string;
  dateCreated?: string;
  dayNumber?: number;
  salaryPerDay?: number;
  timeNumber?: number;
  salaryPerTime?: number;
  sundayNumber?: number;
  salaryPerSunday?: number;
  salaryAmount?: number;
  salary?: number;
  rounding?: number;
  odd?: number;
  createdDate?: string;
  createdBy?: string;
  modifiedDate?: string;
  modifiedBy?: string;
}

export class FilterSalaryPartimeDetailModel extends FilterBaseModel {
  month?: string;
  salaryPartimeId?: number;
  employeeId?: number;
  groupId?: string;
  departmentId?: number;
}

export interface salaryParttimePrintLabelList {
  departmentCode: string,
  employeeName: string,
  salary: number,
  salaryAfterDeduction: number,
  oldDebt: number,
  newDebt: number,
}
