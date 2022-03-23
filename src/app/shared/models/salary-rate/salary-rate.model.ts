export class SalaryRate {
    salaryRateId: number;
    code: string;
    rate: number;
    description: string;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string;
}

export class SalaryRateSelectDropdown {
    value: number;
    viewValue: string;
}

export class SearchSalaryRateModel {
    textSearch: string;
    currentPage: number;
    pageSize: number;
    sortColumn: string;
    sortDirection: string;
}