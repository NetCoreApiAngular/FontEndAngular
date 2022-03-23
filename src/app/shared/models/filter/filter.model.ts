export class FilterBaseModel {
  textSearch?: string;
  currentPage?: number;
  pageSize?: number;
  sortColumn?: string;
  sortDirection?: SortDirectionEnum;
}

export enum SortDirectionEnum {
  Ascending = 0,
  Descending = 1,
}

export class FilterBranchModel extends FilterBaseModel {
  departmentId?: any;
  groupId?: any;
}

export class FilterDateRangeModel extends FilterBaseModel {
  fromdate?: any;
  todate?: any;
}

export class FilterMasterId extends FilterBaseModel {
  masterId: number;
}

export class FilterYearModel extends FilterBaseModel {
  year: any;
}

export class FilterRewardByDateModel extends FilterBaseModel {
  dateSigned: string;
}

export class FilterPositionModel extends FilterBaseModel {
  positionCode: string;
  positionName: string;
}

export class FilterProvideSocialInsuranceModel extends FilterBaseModel {
  provideSocialInsuranceId: number;
}

export class FilterResponsibilityModel extends FilterBaseModel {
  responsibilityId?: number;
  responsibilityGroupId?:number
}
export class FilterTimeOffMasterModel extends FilterBaseModel {
  departmentId?: number;
  groupId?:number
}
export class FilterAllowanceModel extends FilterBaseModel {
  allowanceTypeId: number;
}

export class FilterSalaryAssignmentModel extends FilterBranchModel {
  month?: any;
}

export class FilterSalaryParttimelModel extends FilterBaseModel {
  month?: any;
  salaryType: number;
  type: number;
}

export class FilterSalaryOutSourceDetailModel extends FilterBranchModel {
  employeeId?: any;
  salaryPartimeId?: any;
  month?: any;
}

export class FilterTimeSheetModel extends FilterBaseModel {
  textSearch: string;
  employeeCode: string;
  departmentId: string;
  departmentCode?:string;
  departmentName?:string;
  groupCode?:string;
  groupName?:string;
  timesheetid: string;
  groupId: string;
}

export class FilterTimeSheetMonthModel extends FilterBranchModel {
  monthSearch:string
}

export class FilterTimeSheetDayModel extends FilterBranchModel {
  textSearch: string;
  employeeCode?: string;
  employeeId?: number;
  timesheetid?: number;
  dayNo?: any;
  monthSearch?: any;
  employeeType: number;
  dishId: any;
  gender: any;
}
export class FilterRewardTimeLeave extends FilterBranchModel {
  groupCode?: any;
  groupName?: any;
  rewardMasterId?: number;
  employeeCode?:any;
}

export class FilterRewardDetail extends FilterBranchModel {
  rewardMasterId?: number;
}

export class FilterRewardMaster extends FilterBaseModel {
  rewardType: string;
  rewardDifference?: boolean;
}

export class FilterToxicDetailModel extends FilterBranchModel {
  masterid: string;
}

export class FilterTypeModel extends FilterBaseModel {
  type : Number
}

export class TrainingDetailModel extends FilterBaseModel {
  trainingProcessId : Number
}

export class FilterPostalRecordModel extends FilterBaseModel {
  year?: any;
  recordType?: any;
  request?:string;
  fullName?:string;
  groupName?: string;
}

export class FilterPersonalTaxlModel extends FilterBaseModel {
  month?: any;
  employeeCode: any;
  departmentId: number;
  groupId: number;
}

export class FilterTimeUpSalaryModel extends FilterBaseModel {
  timeUpMasterId: number;
}

export class FilterTimeLeaveManagementModel extends FilterBaseModel {
  tYear: number;
  departmentId: any;
  groupId: any;
}

export class PrintTimeLeaveManagementModel extends FilterBaseModel {
  toDate?: any;
  fromDate?:any;
  date?: any;
  departmentId: any;
  groupId?:any;
  reportPrintTypeEnum: number;
  employeeId: number;
  employeeCode: any;
}

export class FilterRewardMasterModel extends FilterBaseModel {
  rewardType: string;
}

export class FilterSalaryRuleModel extends FilterBaseModel {
  salaryRateId: number;
  salaryRateCode?: string;
}

export class FilterReward extends FilterBaseModel {
  salaryRateId: number;
  salaryRateCode?: string;
}

export class FilterBaseDecision extends FilterBaseModel {
  textSearch?:string;
}

export class FilterEmployeeProtectionUtility extends FilterBaseModel {
  textSearch?:string;
  departmentId?: number;
  status:Boolean;
  departmentName?:string;
  departmentCode?:string;
}

export class FilterNotification extends FilterBaseModel {
  show: boolean;
  process: boolean;
  decisionType: number;
}

export class FilterFollowDailyLaborSituation extends FilterDateRangeModel {
  trainingProcessId: number;
}


export class FilterMaterialDetailBook extends FilterBaseModel {
  wareHouseId: number;
  milkId: number;
}

export class FilterContentDocumentary extends FilterBaseModel {
  documentaryId: number;
  documentaryDetailId: number;
  fromDate: any;
  toDate: any;
  documentaryFromDate: any;
  documentaryToDate: any;
}
