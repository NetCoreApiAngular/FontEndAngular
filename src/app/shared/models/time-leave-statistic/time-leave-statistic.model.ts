import moment, { Moment } from "moment";

export interface TimeLeavestatisticMasterModel {
    id: number;
    month: Moment;
    quarter: number;
    description: string;
}

export interface TimeLeavestatisticDetailModel {
    id: number;
    leaveModeId: number;
    leaveModeName: string;
    type: number;
    stt: number;
    numOfPerson: number;
    numOfLeaveDay: number;
    amountOfLeaveDay: number
}