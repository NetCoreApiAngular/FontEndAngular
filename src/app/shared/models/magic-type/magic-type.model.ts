export class MagicTypeModel {
    id: number;
    code: string;
    description: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    status: number;
}

export class SearchMagicTypeModel {
    textSearch: string;
    currentPage: number;
    pageSize: number;
    sortColumn: string;
    sortDirection: string;
}