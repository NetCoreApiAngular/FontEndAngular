export class EmployeeProtectionUtilityModel{
    id?: number;
    employeeId?: number;
    employeeCode?: string;
    shirtTypeId?: number;
    lastReceivedShirt?: Date;
    nextReceivedShirt?: Date;
    protectionTypeId?: number;
    lastReceivedType?: Date;
    nextReceivedType?: Date;
    protectionSizeId?: number;
    description?: string
}
