export class TimeBlock {
    timeBlockId: number;
    timeBlockCode: string;
    morningFromHour: Date;
    morningToHour: Date;
    middleFromHour: Date;
    middlerToHour: Date;
    afternoonFromHour: Date;
    afternoonToHour: Date
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string;
}

export class SearchTimeBlockModel {
    textSearch: string;
    currentPage: number;
    pageSize: number;
    sortColumn: string;
    sortDirection: string;
}