export class IssuerPlace {
    issuerPlaceId: number;
    name: string;
    description: string;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string;
}

export class SearchIssuerPlaceModel {
    textSearch: string;
    currentPage: number;
    pageSize: number;
    sortColumn: string;
    sortDirection: string;
}