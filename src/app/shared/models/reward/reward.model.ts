export class RewardModel {
    id?: number;
    code?: string;
    name?: string;
    rewardGroup?: string;
    rewardType?: string;
    description?: string;
}

export class rewardTimeLeaveList {
    amount: number;
    createdBy: string;
    createdDate: string;
    employeeCode: string;
    employeeId: number;
    firstName: string;
    id: number;
    lastName: string;
    modifiedBy: string;
    modifiedDate: string;
    numberOfDay: number;
    onsiteFee: number;
    positionAllowance: number;
    rewardMasterId: number
    salaryPerDay: number;
    salaryPerMonth: number;
    salaryRateCode: string;
    seniorityAllowance: number;
    summary: number;
}