import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class SubtractionPersonalTaxModel extends BaseInforModel {

    id? : number;
    employeeId : number;
    amount : number;
    employeeCode? : string;
    fullName? : string;
    department? : string;

    constructor(empployeeId : number , amount : number , id? : number){
        super();
        this.employeeId = empployeeId;
        this.amount = amount;
        
        if(id){
            this.id = id ;
        }
    }


}