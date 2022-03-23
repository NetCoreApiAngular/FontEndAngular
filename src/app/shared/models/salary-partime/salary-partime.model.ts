import { FilterBaseModel } from '../filter/filter.model';

export enum SalaryTypeEnum {
  PartTime = 1,
  Apprentice = 2
}

export interface SalaryPartimeModel {
  id?: number;
  salaryMonth?: string;
  salaryAmount?: number;
  salaryType?: SalaryTypeEnum;
  salaryPart1?: number;
  salaryPart2?: number;
  description?: string;
  dateCreated?: string;
  createdDate?: string;
  createdBy?: string;
  status?: Boolean;
  modifiedDate?: string;
  modifiedBy?: string;
  salaryCode: string;
}

export class SearchSalaryPartime extends FilterBaseModel {
  month: string;
  salaryType: number;
  type: number;
}

