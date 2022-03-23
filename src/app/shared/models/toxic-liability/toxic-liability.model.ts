export class AllowancetypeModel {
    id: number;
    contractNumber: string;
    dateCreated: Date;
    contentType: number;
    description: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
}

export class SearchAllowanceTypeModel {
    textSearch: string;
    contentType: number;
    currentPage: number;
    pageSize: number;
    sortColumn: string;
    sortDirection: string;
}