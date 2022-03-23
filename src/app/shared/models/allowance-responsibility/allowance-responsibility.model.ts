import { FilterBaseModel } from '../filter/filter.model';
import { AllowancetypeModel } from '../toxic-liability/toxic-liability.model';
import { ResponsibilityModel } from '../responsibility/responsibility.model';

export class AllowanceResponsibilityModel {
    id: number;
    allowanceTypeId: number;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    responsibilityId: number;
    responsibilityGroupCode: string;
    responsibilityGroupName: string;
    responsibilityCode: string;
    responsibilityName: string;
    positionAllowance: number;
    onsiteFee: number;
    forMonth: boolean;
    allowanceType: AllowancetypeModel;
    responsibility: ResponsibilityModel;
}

export class AllowanceResponsibilityFilterModel extends FilterBaseModel {
    allowanceTypeId: number;
    responsibilityId: number;
}
