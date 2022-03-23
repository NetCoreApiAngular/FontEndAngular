import { FilterBaseModel } from '../filter/filter.model';

// export class CuriculumVitaeReportModel {
//     id: number;
//     contractNumber: string;
//     dateCreated: Date;
//     description: string;
//     status: boolean;
//     createdDate: Date;
//     createdBy: string;
//     updatedDate: Date;
//     updatedBy: string
// }

export interface SearchCuriculumVitaeReport extends FilterBaseModel {
    employeeType?: number;
    groupId?: number;
    departmentId?: number;
    salaryRateId?: number;
    responsibilityId?: number;
    status?: boolean
}
export class SearchCuriculumVitaeOffReport extends FilterBaseModel {
    textSearch?: string;
    typeOff: Boolean;
}
export class SearchCuriculumVitaePartimeReport extends FilterBaseModel {
    textSearch?: string;
    all:Boolean;
}