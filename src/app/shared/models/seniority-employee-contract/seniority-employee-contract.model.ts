import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class SeniorityEmployeeContractModel extends BaseInforModel{
  id?: number;
  seniorityContractId: number;
  employeeId: number;
  seniorityId: number;
  dateAccepted: Date;
  csTn: number;
  timeReview: number;
  delayTime: number;
  dateReAccepted: Date;
  employeeCode: string;
  firstName: string;
  lastName: string;
  department: string;
  workedCountDate: Date;
  salaryRateCode: string;
  rateSalary: number;

}
