import { FilterBaseModel } from '../filter/filter.model';

export class SearchContractInfoReport extends FilterBaseModel {
    fromCode?: string;
    toCode?: string;
    contractNumber?:string;
    expiredContractId?:number;
    outSource:Boolean;
    type:Boolean;
}
