import { FilterBaseModel } from './../filter/filter.model';
import { BaseModel } from '../base.model';
export class ProtectionUtilityModel extends BaseModel {
    id?: number;
    dateCreated: Date;
    departmentId: number;
    description: string;
    fromDate: Date;
    toDate: Date;
    departmentName: string;
    departmentCode: string;
    constructor(dateCreated: Date, description: string, fromDate: Date, toDate: Date, departmentId: number, id?: number) {
        super();
        this.dateCreated = dateCreated;
        this.description = description;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.departmentId = departmentId;
        this.id = id;
    }
}
export class ProtectionUtilityDetailModel extends BaseModel {
    id: number;
    protectionUtilityId: number;
    description: string;
    employeeCode: string;
    firstName: string;
    lastName: string;
    department: string
    protectionType: string;
    shirtType: string;
    size: string;
    positionName: string
    fromDate: Date;
    toDate: Date;
    employeeId: number;
    shirtTypeId: number;
    quantityShirt: number;
    protectionTypeId: number;
    quantityProtectionType: number;
    protectionSizeId: number;
    employeeName: string;
}

export class SearchProtectionUtilityDetailModel extends FilterBaseModel {
  textSearch?: string;
  protectionUtilityId?: number;
}

