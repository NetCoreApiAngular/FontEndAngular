import { Moment } from 'moment';
import { FilterBaseModel } from '../filter/filter.model';

export class ContentDocumentarysPrintModel {
    id: number;
    documentaryDetailId: number;
    receivedDate: Moment;
    documentaryDate: Moment;
    contractNumber: string;
    placeOfDelivery: string;
    placeOfReceipt: string;
    content: string;
    description: string;
    documentaryName: string;
    documentaryDetailName: string;
    createdDate: Moment;
    createdBy: string;
    updatedDate: Moment;
    updatedBy: string
}
