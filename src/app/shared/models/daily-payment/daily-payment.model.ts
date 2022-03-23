import { SalaryRuleModel } from '../salary-rule/salary-rule.model';

export class DailyPaymentModel {
    id?: number;
    contractNumber: string;
    dateCreate: Date;
    monthProcess: Date;
    workingNumber: number;
    shp: number;
    bhxh: number;
    bhyt: number;
    bhtn: number;
    description: string;
    createdDate?: Date;
    createdBy?: string;
    modifiedDate?: Date;
    modifiedBy?: string;
    salaryRule: SalaryRuleModel[];
  }