import { FilterBaseModel } from '../filter/filter.model';

export class RecruitmentRequirementModel {
    id: number;
    recruitmentDate: Date;
    recruitmentNo: string;
    recruitmentGroupId: number;
    recruitmentGroupCode: string;
    recruitmentDepartmentId: number;
    recruitmentNumber: number;
    recruitmentAcademy: string;
    recruitmentRequirementDate: Date;
    description: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string
}

export class SearchRecruitmentRequirement extends FilterBaseModel {
    textSearch?: string;
    pageSize = 10;
    fromDate: string;
    toDate: string;
}