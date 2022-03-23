import { FilterBaseModel } from '../filter/filter.model';

export class EmployeeSubtractionCepModel {
    id: number;
    employeeId: number;
    amount: number;
    employeeCode: string;
    firstName: string;
    lastName: string;
    department: string
}


export class SearchEmployeeSubtractionCepModel extends FilterBaseModel {
    textSearch: string;
}