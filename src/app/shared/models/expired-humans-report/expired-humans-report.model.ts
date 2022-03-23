import { FilterBaseModel } from '../filter/filter.model';

export class SearchExpiredHumansReport extends FilterBaseModel {
    textSearch?: string;
    year?:number;
}
export class SearchExpiredHumansReportModel {
    year:number;
}