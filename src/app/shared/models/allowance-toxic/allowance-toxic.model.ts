import { AllowanceToxicType } from './allowance-toxic-type.model';
import { FilterBaseModel } from '../filter/filter.model';

export class AllowanceToxicModel {
    id: number;
    responsibilityId : number;
    responsibilityCode? : string;
    responsibilityName? : string;
    amount: number;
    allowanceTypeId: number;
    description: string;
    dateCreated: Date;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    allowanceType : AllowanceToxicType;

}

export class AllowanceToxicFilterModel extends FilterBaseModel {
  textSearch?: string;
  allowanceTypeId: number;
}
