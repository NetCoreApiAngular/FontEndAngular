import { Moment } from "moment";
import { FilterBaseModel } from "../filter/filter.model";

export class MaterialIExportBillDetailDataRow {
    id?: number;
    materialExportBillId?: number;
    materialId?: number;
    materialName?: string;
    materialCode?: string;
    quantity?: number;
    remainingQuantity?: number;
    unit?: string;
    description?: string;
}

export class FilterMaterialIExportBillDetail extends FilterBaseModel {
    materialIExportBillId: number
}


export interface MaterialIExportBillPrintDetailModel {
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

export interface MaterialIExportBillPrintListModel {
    id: number;
    materialIExportBillId: number;
    materialId: number;
    materialCode: string;
    materialName: string;
    amount: number;
    unit: string;
    unitPrice: number;
    intoMoney: number;
    description: string;
}

export interface MaterialIExportBillPrintTableDetailModel {
    companyName: string;
    companyAddress: string;
    taxNo: string;
    contractNumber: string;
    dateCreated: Moment;
    createdBy: string;
    manager: string;
}

export interface MaterialIExportBillPrintTableModel {
    id: 0;
    materialIExportBillId: 0;
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
