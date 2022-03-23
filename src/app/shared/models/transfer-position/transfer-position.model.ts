import { FilterBaseModel } from '../filter/filter.model';

export class TransferPositionModel {
    id: number;
    contractNumber: string;
    dateCreated: Date;
    description: string;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    transferPositionDetail: TransferPositionDetailModel[]
}

export class TransferPositionDetailModel {
    id: number;
    transferPositionId: number;
    employeeId: number;
    groupId: number;
    possitionId: number;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    employeeName: string;
}

export class SearchTransferPositionModel extends FilterBaseModel {
    textSearch?: string;
    transferPositionid?: number;
}
