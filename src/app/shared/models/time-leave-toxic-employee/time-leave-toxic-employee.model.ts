import { BaseInforModel } from '../base-infor-model/base-infor.model';

export class TimeLeaveToxicEmployee extends BaseInforModel {
    id: number;
    employeeId: number;
    leaveToxic: number;
    employeeCode: string;
    firstName: string;
    lastName: string;
    groupCode: string;
    positionName: string;

    // constructor(employeeId: number, leaveToxic: number, id?: number) {
    //     super();
    //     this.employeeId = employeeId;
    //     this.leaveToxic = leaveToxic;
    //     if (id) {
    //         this.id = id;
    //     }
    // }
}