import { BaseInforModel } from './../base-infor-model/base-infor.model';
export class SalaryParttimeModel extends BaseInforModel {

      id?: number;
      salaryMonth: Date;
      salaryAmount:  number;
      salaryType:  number;
      salaryPart1:  number;
      salaryPart2: number;
      description: string;
      dateCreated: Date;
      status: boolean;

  constructor(salaryMonth?: Date, salaryType?: number, dateCreated?: Date, description?: string,  id?: number){
      super();

      this.salaryMonth = salaryMonth;
      this.salaryType = salaryType;
      this.description = description;
      this.dateCreated = dateCreated;
      this.id = id;
  }
}

export class SalaryParttime extends BaseInforModel {
    id?: number;
    salaryPartimeId: number;
    employeeId:  number;
    salaryPerDay:  number;
    quantity:  number;
    quantityT: number;
    salaryAmount: number;
    allowanceAmount: number;
    payFirst: number;
    privateTax: number;
    socialInsurance: number;
    salaryReturn:number;
}

