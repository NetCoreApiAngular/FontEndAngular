import { FilterBaseModel } from '../filter/filter.model';
import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class ProductModel extends BaseInforModel {

    id: number;
    code: string;
    name: string;
    dateCreated: Date;
    description: string;

}
export class ProductFilterModel extends FilterBaseModel {
    textSearch?: string;
}