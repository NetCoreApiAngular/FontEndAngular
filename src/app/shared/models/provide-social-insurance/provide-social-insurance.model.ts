import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class ProvideSocialInsuranceDetailModel extends BaseInforModel {
    id?: number;
    employeeId: number;
    provideSocialInsuranceId: number;
    description: string;
    fullName?: string;
}
export class ProvideSocialInsuranceModel extends BaseInforModel {
    id: number;
    monthYear: string;
    dateCreated: Date;
    description: string;
    employeeNumber: number;
}

