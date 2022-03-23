import moment, { Moment } from 'moment';
import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class PersonalTaxModel {
  id: number;
  month: any;
  employeeId: number;
  taxTb: number;
  taxIn: number;
  billNo: number;
  billNoOld: number;
  createdDate: any;
  createdBy: string;
  modifiedDate: any;
  modifiedBy: string;
  employeeCode: string;
  firstName: string;
  lastName: string;
  department: string
}

export class PersonalIncomeTaxModel {
  id?: number;
  code: string;
  amount: number;
  rate: number;
  downValue: number;
  personalIncomeTaxMasterId: number;
}

export class EmployeePersonalIncomeTax extends BaseInforModel {
  id?: number;
  dependentSubtraction: number;
  numOfMonth: number;
  numOfMonthFree: number;
  personalSubtraction: number;
  subtractionMore: number;
  taxYear: number;
}

export class ReportPersonalIncomeTax {
  fullName: string;
  taxCode: string;
  identityCard: number;
  salaryAmout: number;
  numberOfDependents: number;
  deductionMonths: number;
  charity: number;
  socialInsurance: number;
  taxReductionBases: number;
  taxDeducted: number;
  moneyToPay: number;
  overPaidTax: number;
  underPaidTax: number
}

export class ReportPersonalIncomeTaxnumber5KK {
  type: number;
  month: Moment;
  companyName: string;
  taxNo: string;
  address: string;
  mobile: string;
  fax: string;
  email: string;
  totalPersonalTax1: number;
  totalPersonalTaxSubtraction1: number;
  totalTaxWasSubtraction1: number;
  totalPersonalTax2: number;
  totalPersonalTaxSubtraction2: number;
  totalTaxWasSubtraction2: number;
  totalPersonalTax3: number;
  totalPersonalTaxSubtraction3: number;
  totalTaxWasSubtraction3: number
}

export class ReportPersonalIncomeTaxDetail {
  employeeId: number;
  employeeCode: string;
  fullName: string;
  groupCode: string;
  numberOfDependents: number;
  deductionMonths: number;
  salaryTaxModels: salaryTaxModels[];
  dependentModels: any[];
  thuNhapChiuThue: number;
  trungBinh1Thang: number;
  tongThuePhaiDong: number;
  tienPhaiDong1Thang: number;
  tongThueDaDong: number;
  tongThuNhapChiuThue: number;
  tienDuocGiamTru: number;
  thuaThieu: number
}

export class salaryTaxModels {
  name: string;
  amount: number;
  tax: number
}

export class MonthReportPersonalTaxDetail {
  fullName: string;
  taxCode: number;
  identityCard: number;
  salaryAmout: number;
  numberOfDependents: number;
  deductionMonths: number;
  charity: number;
  socialInsurance: number;
  taxReductionBases: number;
  taxDeducted: number;
  moneyToPay: number;
  overPaidTax: number;
  underPaidTax: number;
  amountSubtraction: number;
}

export class TaxInfoDetail {
  amountSubtraction: number;
  author: boolean;
  employeeCode: string;
  employeeId: number;
  employeePersonalTaxDetailMoreModels: any
  employeePersonalTaxMasterEditModel: any
  employeePersonalTaxMasterId: number;
  firstName: string;
  groupName: string;
  id: number;
  lastName: string;
  numberOfMonth: number;
  numberOfPerson: number;
  numberOfTax: number;
  personalIncomeTaxNo: number
}

export class printAuthorModel {
  id: number;
  year: number;
  employeePersonalTaxMasterId: number;
  employeeId: number;
  employeeCode: string;
  firstName: string;
  lastName: string;
  nationality: string;
  departmentCode: string;
  taxCode: number;
  personalIncomeTaxNo: number;
  groupName: string;
  numberOfPerson: number;
  numberOfMonth: number;
  numberOfTax: number;
  amountSubtraction: number;
  author: boolean;
  employeePersonalTaxMasterEditModel: any;
  employeePersonalTaxDetailMoreModels: any;
}

export interface ReportPersonalTaxDetailForMonths {
  month: Moment;
  companyName: string;
  taxNo: string;
  address: string;
  mobile: string;
  fax: string;
  email: string;
  summaryEmployee: number;
  summarySalary: number;
  totalTaxableEmployees: number;
  summarySalaryOfTaxableEmployees: number;
  totalNumberOfDependents: number;
  summaryPersonalTax: number;
  summaryEmployeeHasNotContract: number;
  summaryEmployee10Percent: number;
  summaryEmployee20Percent: number;
  summarySalaryHasNotContract: number;
  summarySalary10Percent: number;
  summarySalary20Percent: number;
  summarySalaryOfTaxableEmployeeHasNotContract: number;
  summarySalaryOfTaxableEmployee10Percent: number;
  summarySalaryOfTaxableEmployee20Percent: number;
}