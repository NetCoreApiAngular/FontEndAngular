import { BaseInforModel } from '../base-infor-model/base-infor.model';
export class ProtectionSizeModel extends BaseInforModel {
    id?: number;
    size: string
    constructor(size: string, id?: number) {
        super();
        this.size = size;
        this.id = id;
    }
}