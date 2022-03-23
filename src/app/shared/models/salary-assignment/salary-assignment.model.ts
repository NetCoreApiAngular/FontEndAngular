import { FilterBaseModel } from './../filter/filter.model';
import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class SalaryAssignmentModel extends BaseInforModel {
    id? : number;
    salaryMonth?: Date;
    employeeId: number;
    description: string;
    firstName? : string;
    lastName? : string;
    departmentId?: number;
    groupName?: string;
    salaryAssignAmount?: number;
    salaryAssignmentMasterId: number;

    constructor(salaryAssignmentMasterId: number, employeeId : number , description? : string , id? : number, departmentId?: number, salaryMonth?: Date ){
        super();
        this.salaryMonth = salaryMonth;
        this.employeeId = employeeId;
        this.description = description;
        this.id = id;
        this.departmentId = departmentId;
        this.salaryAssignmentMasterId = salaryAssignmentMasterId
    }
}

export class SearchSalaryAssignmentProductModel extends FilterBaseModel {
  textSearch: string;
  assignmentProductId: number;
}

export class SalaryAssignmentDetailModel extends BaseInforModel {
  id: number;
  amount: number;
  assignmentProductCode?: string;
  assignmentProductId: number;
  assignmentProductModel?: any;
  createdBy?: string;
  createdDate?: any;
  modifiedBy?: string;
  modifiedDate?: any;
  quantity: number;
  quantityMore: number;
  salaryAssignmentId: number
  salaryAssignmentModel?: any
  unitPrice: number;
}

export class SalaryAssignmentMasterFilter extends FilterBaseModel {
  textSearch: string;
  departmentId: number;
  month: any;
}

export class SalaryAssignmentMasterModel {
  id: number;
  salaryMonth: any;
  description: string;
  createdDate?: any;
  createdBy?: string;
  modifiedDate?: any;
  modifiedBy?: string;

}