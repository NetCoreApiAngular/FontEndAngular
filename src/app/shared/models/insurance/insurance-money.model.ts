import { FilterBaseModel } from '../filter/filter.model'

export class InsuranceMoneyModel {
    id: number
    month: Date
    socialRate: number
    medicalRate: number
    voluntaryRate: number
    socialRateForeigner: number
    medicalRateForeigner: number
    // createdBy: string
    // createdDate: Date

    vn: {
        id: number
        monthlyInsuranceMoneyId: number
        socialInsuranceType: number
        jan: number
        feb: number
        mar: number
        apr: number
        may: number
        jun: number
        jul: number
        aug: number
        sep: number
        oct: number
        nov: number
        dec: number
        nation: number
        createdBy: string
        createdDate: Date
    }

    nn: {
        id: number
        monthlyInsuranceMoneyId: number
        socialInsuranceType: number
        jan: number
        feb: number
        mar: number
        apr: number
        may: number
        jun: number
        jul: number
        aug: number
        sep: number
        oct: number
        nov: number
        dec: number
        nation: number
        createdBy: string
        createdDate: Date
    }
}

export class SearchYear extends FilterBaseModel {
    year?: number;
}