import { BaseInforModel } from '../base-infor-model/base-infor.model';
export class AdvanceTimeRateModel extends BaseInforModel {
    id?: number;
    code: string;
    rate: number;
    description: string;
    constructor(code: string, rate: number, description: string, id?: number) {
        super();
        this.code = code;
        this.rate = rate;
        this.description = description;
        this.id = id;
    }
}