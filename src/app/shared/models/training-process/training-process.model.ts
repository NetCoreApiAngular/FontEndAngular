import { FilterBaseModel } from '../filter/filter.model';

export class TrainingProcessModel {
    id: number;
    trainingId: number;
    trainingCode: string;
    contractNumber: string;
    dateCreated: Date;
    openAcademy: string;
    trainingTime: string;
    trainingClass: string;
    trainingContent: string;
    academyCost: number;
    academyFinishDate: Date;
    description: string;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string;
}

export const TypeTrainingList = [
    { name: 'Theo công việc', type: 1 },
    { name: 'Nâng cao', type: 2 },
    { name: 'Lao động mới', type: 3 },
]

export class SearchTrainingProcess extends FilterBaseModel {
    textSearch?: string;
    type?: number;
}
export class SearchTrainingProcessReport extends FilterBaseModel {
    fromDate?: any;
    toDate?: any;
    trainingId?: any;
    trainingClass?: any;
}
