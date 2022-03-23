import { FilterBaseModel } from '../filter/filter.model';

export class DepartmentModel {
    departmentId: number;
    code: string;
    name: string;
    description: string;
    status: number;
    timeBlockId: number;
    timeBlockCode: string;
    createdDate: Date
    createdBy: string;
    updatedDate: Date
    updatedBy: string;
    isCalculateSalaryAssignment?: boolean;
}

export class DepartmentFilterModel extends FilterBaseModel {

    code?: string;
    name?: string;
    status?: number;
}