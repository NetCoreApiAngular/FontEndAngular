export interface MaterialInventoryBookOfStationeryReports {
    fromDate: string;
    toDate: string;
    wateHouseId: number;
}

export interface MaterialInventoryBookOfStationeryReportsListData {
    materialCode: string;
    materialName: string;
    wareHouseId: number;
    wareHouseCode: string;
    wareHouseName: string;
    unit: string;
    first_Inventory: number;
    importNumber: number;
    exportNumber: number;
    last_Inventory: number;
    description: string;
}

export interface MaterialInventoryBookOfStationeryReportsModel {
    createdBy: string;
    manager: string;
}
