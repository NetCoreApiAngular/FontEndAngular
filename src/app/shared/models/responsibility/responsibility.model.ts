export class ResponsibilityModel {
    responsibilityId: number;
    code: string;
    name: string;
    responsibilityGroupId? : number;
    responsibilityGroupCode? : string;
    responsibilityGroupName? : string;
    description: string;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string;
}

export class ResponsibilitySelectDropdown {
    value: number;
    viewValue: string;
    viewCode: string;
}

export class SearchresponsibilityModel {
    textSearch: string;
    currentPage: number;
    pageSize: number;
    sortColumn: string;
    sortDirection: string;
}
