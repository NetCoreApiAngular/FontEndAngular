import { FilterBaseModel } from '../filter/filter.model';

export class PositionModel {
    possitionId?: number;
    jobCode: string;
    possitionName: string;
    possitionShortName: string;
    createdDate?: Date;
    createdBy?: string;
    updatedDate?: Date;
    updatedBy?: string
}

export class PossitionSelectDropdown {
    value: number;
    viewValue: string;
    viewName: string;
}

export class PositionFilterModel extends FilterBaseModel {
    textSearch?: string;
}