import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class RewardRate13Model extends BaseInforModel{
    id? : number;
    type : string;
    rate : number

    constructor(type : string , rate : number , id? : number){
        super();
        this.type = type;
        this.rate = rate;
        this.id = id;
    }
}