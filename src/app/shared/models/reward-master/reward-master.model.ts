export interface RewardMasterModel {
  id?: number;
  timePaid?: Date;
  code?: string;
  name?: string;
  rewardId?: number;
  datePaid?: Date;
  rank?: number;
  description?: string;
  tltax?: true
  rewardType: number;
}

export interface Reward13Model {
  id: number,
  rewardMasterId: number,
  employeeId: number,
  employeeCode: string,
  firstName: string,
  lastName: string,
  salaryRateCode: string,
  salaryPerMonth: number,
  positionAllowance: number,
  seniorityAllowance: number,
  onsiteFee: number,
  summary: number,
  rewardDate13Id1: number,
  rateFirst: number,
  rewardDate12CodeTypeFirst: string,
  numberOfMonthFirst: number,
  rewardDate13Id2: number,
  rateLast: number,
  rewardDate12CodeTypeLast: string,
  numberOfMonthLast: number,
  amount: number
}

export interface RewardTimeLeaveModel {
  id: number,
  rewardMasterId: number,
  employeeId: number,
  employeeCode: string,
  firstName: string,
  lastName: string,
  salaryRateCode: string,
  salaryPerMonth: number,
  positionAllowance: number,
  seniorityAllowance: number,
  onsiteFee: number,
  salaryPerDay: number,
  numberOfDay: number,
  amount: number,
  summary: number,
  createdDate: any,
  createdBy: string,
  modifiedDate: any,
  modifiedBy: string
}