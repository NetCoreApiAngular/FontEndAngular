export class QualificationModel {
    academyId: number;
    code: string;
    createdBy: string;
    createdDate: Date;
    description: string;
    name: string;
    status: number;
    updatedBy: string;
    updatedDate: Date;
}

export class QualificationSearchModel {
    textSearch: string;
    currentPage: number;
    pageSize: number;
    sortColumn: string;
    sortDirection: string;
}