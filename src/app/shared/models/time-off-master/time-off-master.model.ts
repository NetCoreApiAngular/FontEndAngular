export class TimeOffMasterModel {
    id: number;
    code: string;
    dateApproved: any;
    description: string;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string;
}

export class TimeOffDetailModel {
    id: number;
    timeOffMasterId: number;
    employeeId?: number;
    employeeCode?: string;
    timeOffReasonCode: string;
    timeOffDate: Date;
    description: string;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string
}

export class TimeOffReasonModel {
    code:string;
    description:string;
}
