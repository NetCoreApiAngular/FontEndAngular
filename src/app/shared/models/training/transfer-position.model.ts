import { FilterBaseModel } from '../filter/filter.model';

export class TrainingModel {
    trainingId: number;
    trainingCode: string;
    description: string;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string
}

export class SearchTrainingModel extends FilterBaseModel {
    textSearch?: string;
}
