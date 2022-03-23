import { Moment } from "moment";
import { FilterBaseModel } from "../filter/filter.model";

export class FilterImportBillDetail extends FilterBaseModel {
    importBillId: number;
}

export class ImportBillDetail {
    id: number;
    billNo: string;
    contractNumber: string;
    dateCreated: Moment;
    wareHouseId: number;
    wareHouseCode: string;
    wareHouseName: string;
    forwardingDirectoryId: number;
    forwardingDirectoryCode: string;
    forwardingDirectoryName: string;
    uncno: string;
    uncdate: Moment;
    intoMoney: number
}

export class ImportBillDetailDataRow {
    id: number;
    importBillId: number;
    milkId: number;
    milkCode: string;
    milkName: string;
    unit: string;
    amount: number;
    contractNumberAmount: number;
    unitPrice: number;
    intoMoney: number;
    vat: number;
    intoMoneyVat: number;
    description: string;
}

export class MilkForwardingDirectory {
    id: number;
    code: string;
    name: string;
    positionName: string;
    type: number;
    dateCreated: Moment;
    status: true;
    description: string;
}

export class WareHouseDetailModel {
    id: number;
    code: string;
    name: string;
    type: number;
}

export class ExportBillDetail {
  id: number;
  departmentId?: number;
  departmentCode?: string;
  amount?: number;
  returnAmount?: number;
  milkCode?: string;
}
export class ExportDetail {
  contractNumber?: string;
  dateCreated?: Moment;
  exportQuantity?: number;
  id: number;
  milkCode?: string;
  milkId?: number;
  milkName?: string;
  wareHouseCode?: string;
  wareHouseId?: number;
  wareHouseName?: string;
}
export class ExportListBillDetail {
  id: number;
  exportBillId: number;
  departmentId: number;
  departmentCode: string;
  milkCode?: string;
  milkName?: string;
  unit?: string;
  amount: number;
  returnAmount: number;
  contractNumber?: string;
  dateCreated?: string
}
export class ImportBillDetailPrint {
    companyName: string;
    companyAddress: string;
    taxNo: string;
    numberNo1: string;
    numberNo2: string;
    number: string;
    billNo: string;
    contractNumber: string;
    dateCreated: Moment;
    wareHouseName: string;
    forwardingDirectoryName: string;
    directive: string;
    indicator: string;
    createdBy: string;
    manager: string;
}

export class ImportBillDetailPrintModel {
    id: number;
    importBillId: number;
    milkId: number;
    milkCode: string;
    milkName: string;
    unit: string;
    amount: number;
    contractNumberAmount: number;
    unitPrice: number;
    intoMoney: number;
    vat: number;
    intoMoneyVat: number;
    description: string
}
