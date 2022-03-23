import { FilterBaseModel } from './../filter/filter.model';
import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class SeniorityContractModel extends BaseInforModel{
    id? : number;
    contractNumber : string;
    dateCreated : Date;
    description : string;


    constructor(contractNumber : string , dateCreated : Date , description : string , id? : number){
        super();
        this.contractNumber = contractNumber;
        this.dateCreated = dateCreated;
        this.description = description;
        this.id = id;
    }


}

export class SearchSeniorityEmployeeContractModel extends FilterBaseModel {
  textSearch: string;
  seniorityContractId: number;
}
