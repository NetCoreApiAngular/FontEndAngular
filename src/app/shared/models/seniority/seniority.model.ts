import { FilterBaseModel } from './../filter/filter.model';
import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class SeniorityModel extends BaseInforModel{
    id? : number;
    salaryRateId : number;
    type : string;
    seniorityMoneyPerMonth : number;
    seniorityTimeReview : number;
    description : string;
    salaryRateCode? : string;

    constructor(salaryRateId : number , type : string , seniorityMoneyPerMonth : number
        , seniorityTimeReview : number , description : string , id? : number){
        super();

        this.salaryRateId = salaryRateId ;
        this.type = type;
        this.seniorityMoneyPerMonth = seniorityMoneyPerMonth ;
        this.seniorityTimeReview = seniorityTimeReview;
        this.description = description;
        this.id = id;
    }
}

