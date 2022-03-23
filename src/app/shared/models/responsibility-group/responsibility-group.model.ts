import { BaseInforModel } from '../base-infor-model/base-infor.model';
import { BaseModel } from './../base.model';
export class ResponsibilityGroupModel extends BaseModel {
    id?: number;
    code: string;
    name: string;
}
export class ResponsibilityModel extends BaseInforModel {
    id?: number;
    code: number;
    responsibilityId?: number;
    responsibilityGroupId?: number;
    name: string;
}