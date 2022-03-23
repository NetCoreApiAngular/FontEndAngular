import { FilterBaseModel } from '../filter/filter.model';

export class RecruitmentModel {
    id: number;
    recruitmentDate: Date;
    recruitmentType: string;
    approved: boolean;
    recruitmentPlace: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    status?: boolean
}

export class SearchRecruitment extends FilterBaseModel {
    textSearch?: string;
    fromDate?: string;
    toDate?: string;
    pageSize = 10;
}

export class RecruitmentDetailModel {
    id: number;
    recruitmentId: number;
    employeeId: number;
    employeeCode: string;
    groupId: number;
    departmentId: number;
    presenterGroupId: number;
    presenterDepartmentId: number;
    requirementAcademy: string;
    invitatorUser: string;
    invitatorDepartment: string;
    contractDate: Date;
    invitationDate: Date;
    approvedDate: Date;
    academyDate: Date;
    firstName: string;
    lastName: string;
    academy: string;
    description: string;
    dateOfBirth: string;
    depatmentCode: string;
    recruitmentDate: any;
}