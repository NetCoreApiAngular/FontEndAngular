export class LivingFeeModel {
    id: number;
    unitCode: string;
    unitName: string;
    fee: number;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
}

export class SearchLivingFeeModel {
    textSearch: string;
    currentPage: number;
    pageSize: number;
    sortColumn: string;
    sortDirection: string;
}