import { Moment } from "moment";
import { FilterBaseModel } from "../filter/filter.model";

export class MaterialImportBillDetailDataRow {
    id?: number;
    materialImportBillId: number;
    materialId: number;
    amount: number;
    unitPrice: number;
    intoMoney: number;
    materialName?: string;
    materialCode?: string;
}

export class FilterMaterialImportBillDetail extends FilterBaseModel {
    materialImportBillId: number
}

export class MaterialImportBillDetail {
    id: number;
    contractNumber: string;
    dateCreated: Moment;
    wareHouseId: number;
    wareHouseCode: string;
    wareHouseName: string;
    forwardingDirectoryId: number;
    forwardingDirectoryCode: string;
    forwardingDirectoryName: string;
    customerId: number;
    customerCode: string;
    customerName: string;
    intoMoney: number;
}

export interface MaterialImportBillPrintDetailModel {
    companyName: string;
    companyAddress: string;
    taxNo: string;
    number: string;
    numberNo: string;
    directive: string;
    indicator: string;
    contractNumber: string;
    dateCreated: Moment;
    wareHouseCode: string;
    wareHouseName: string;
    customerCode: string;
    customerName: string;
    forwardingDirectoryName: string;
    createdBy: string;
    manager: string;
    billCreatedBy: string;
    billManager: string;
}

export interface MaterialImportBillPrintListModel {
    id: number;
    materialImportBillId: number;
    materialId: number;
    materialCode: string;
    materialName: string;
    amount: number;
    unit: string;
    unitPrice: number;
    intoMoney: number;
    description: string;
}

export interface MaterialImportBillPrintTableDetailModel {
    companyName: string;
    companyAddress: string;
    taxNo: string;
    contractNumber: string;
    dateCreated: Moment;
    createdBy: string;
    manager: string;
}

export interface MaterialImportBillPrintTableModel {
    id: 0;
    materialImportBillId: 0;
    materialId: 0;
    materialCode: string;
    materialName: string;
    wareHouseName: string;
    contractNumber: string;
    dateCreated: Moment;
    amount: 0;
    unit: string;
    description: string;
}