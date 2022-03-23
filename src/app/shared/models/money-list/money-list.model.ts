import { BaseInforModel } from './../base-infor-model/base-infor.model';

export class MoneyListModel extends BaseInforModel{
    id: number;
    moneyDollar: number;
    moneyVietNamese: number;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string;
}