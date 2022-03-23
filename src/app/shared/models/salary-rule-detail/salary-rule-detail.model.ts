import { DailyPaymentModel } from '../daily-payment/daily-payment.model';

export interface SalaryRuleDetailModel {
  id?: number;
  dailyPaymentId?: number;
  salaryRateId: number;
  salaryRateCode?: string;
  basicSalaryPerDay: number;
  basicSalaryPerMonth: number;
  shpperDay: number;
  allowance?: number;
  salaryPerDay?: number;
  salaryPerMonth: number;
  advances?: number;
  rank?: number;
  createdDate?: string;
  createdBy?: string;
  modifiedDate?: string;
  modifiedBy?: string;
  dailyPayment?: DailyPaymentModel;
}
