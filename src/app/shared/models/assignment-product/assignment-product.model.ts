import { BaseDropDownList } from '../base.model';
import { FilterBaseModel } from '../filter/filter.model';

export class AssignmentProductModel {
    id: number;
    assignmentId: number;
    code: string;
    name: string;
    unitPrice: number;
    description: string;
    createdDate: Date;
    createBy: string;
    modifiedDate: Date;
    modifiedBy: string
}

export class SearchAssignmentProductModel extends FilterBaseModel {
    textSearch: string;
    assignmentId?: any;
}

export class AssignmentModel {
    id: number;
    contractNumber: string;
    dateCreated: Date;
    description: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
}

export class SearchAssignmentModel extends FilterBaseModel {
    textSearch: string;
    ngayLap: Date;
}

export class SearchAssignmentDetailModel extends FilterBaseModel {
  textSearch?: string;
  employeeId?: number;
  salaryAssignmentId? : number;
}

export class AssignmentProductDropdown extends BaseDropDownList {
    id: number;
    assignmentId: number;
    code: string;
    name: string;
    unitPrice: number;
    description: string;
}