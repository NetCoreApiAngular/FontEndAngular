import { BaseInforModel } from '../base-infor-model/base-infor.model';
export class ProtectionTypeModel extends BaseInforModel {
    id?: number;
    type: string;
    name: string;
    quantity: number;
    cycle: number;
    constructor(type: string, name: string, quantity: number, cycle: number, id?: number) {
        super();
        this.type = type;
        this.name = name;
        this.quantity = quantity;
        this.cycle = cycle;
        this.id = id;
    }
}