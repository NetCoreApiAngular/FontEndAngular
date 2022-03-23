import { EmployeeModel } from '../employee/employee.model';

export class TimeSheetModel {
  id?: number;
  month: Date;
  desciption: string;
  timeSheetDetail?: any;
  status?: boolean;
}

export class TimeLeave {
  id: number;
  code: string;
  description: string
  createdDate: Date
  createdBy: string
  modifiedDate: Date
  modifiedBy: string
}

export class TimeSheetDetail {
  id: number;
  timeSheetId: number;
  employeeId: number;
  employeeCode: string;
  salaryOld: number;
  salaryTime: number;
  salaryE: number;
  stockQuantity: number;
  kht: number;
  ltnt: number;
  sunday: number;
  holiday: number;
  // timeLeaveId1: number;
  // timeLeaveId2: number;
  night: number;
  summary: number;
  pc7: number;
  stockAmount: number;
  createdDate: number;
  createdBy: string;
  modifedDate: Date;
  modifiedBy: string;
  groupName: string;
  departmentName: string;
  employeeName: string;
  employeeFirstName: string;
  employeeLastName: string;
  employee: EmployeeModel;
  timeLeaveModel: TimeLeave;
  // timeSheet: null
}
