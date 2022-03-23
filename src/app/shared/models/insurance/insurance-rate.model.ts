import { Moment } from 'moment'
import { FilterBaseModel } from '../filter/filter.model'

export class InsuranceRateModel {
    id: number;
    dateCreated: Moment;
    dateApproved: Moment;
    salaryMax: number;
    companySocialRate: number;
    companyMedicalRate: number;
    companyVoluntaryRate: number;
    personalSocialRate: number;
    personalMedicalRate: number;
    personalVoluntaryRate: number;
    advanceRate: number;
    createdDate: Moment;
    createdBy: string;
    modifiedDate: Moment;
    modifiedBy: string;
}

export class SearchInsuranceRate extends FilterBaseModel {
    dateCreated?: Moment;
}