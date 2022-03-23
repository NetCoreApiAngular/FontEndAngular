import { FilterBaseModel } from '../filter/filter.model';

export class SubtractionCepModel {
    id: number;
    employeeId: number;
    amount: number;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    employeeCode: string;
    firstName: string;
    lastName: string;
    department: string;
}


export class SearchSubtractionCepModel extends FilterBaseModel {
    textSearch: string;
}