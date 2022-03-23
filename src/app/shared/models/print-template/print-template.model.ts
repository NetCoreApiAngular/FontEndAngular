import { Moment } from "moment";
import { FilterBaseModel } from "../filter/filter.model";

export interface PrintTemplateDetailFilter extends FilterBaseModel {
    PrintTemplateId?: string;
}

export interface PrintDataDetailModel {
    id: number,
    printDataId: number,
    printTableName: string;
    code: string,
    name: string,
    createdDate: Moment,
    createdBy: string,
    updatedDate: Moment,
    updatedBy: string,
    fileName_Docx: string;
}