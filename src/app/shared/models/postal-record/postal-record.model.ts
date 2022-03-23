import { FilterBaseModel } from '../filter/filter.model';

export class PostalRecordModel {
    id: number;
    dateCreated: Date;
    recordType: string;
    request: string;
    employeeId: number;
    employeeCode?:string;
    groupName: string;
    dateOfReceivingResults: string;
    description: string;
    fullName: string;
    firstName?: string;
    lastname?: string;
    createdDate?: Date;
    createdBy?: string;
    updatedDate?: Date;
    updatedBy?: string
}


export class SearchPostalRecordModel extends FilterBaseModel {
    textSearch: string;
}