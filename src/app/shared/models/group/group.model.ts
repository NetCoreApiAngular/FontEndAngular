import { FilterBaseModel } from '../filter/filter.model';

export class GroupModel {
  groupId: number;
  departmentId: number;
  departmentName: string;
  departmentCode: string;
  name: string;
  code: string;
  description: string;
  status: number;
  createdDate: Date;
  createdBy: string;
  updatedDate: Date;
  updatedBy: string;
  timeBlockId: number;
  timeBlockCode: string;
  department_Group?: string;
  num: boolean;
  isCalculateSalaryAssignment: boolean;
}

export class GroupSelectDropdown {
  groupId: number;
  viewValue: string;
  viewName: string;
  value: string;
}

export class GroupToDrop {
  groupId: number;
  name: string;
}

export class SearchGroupModel extends FilterBaseModel {
    code?: string;
    name?: string;
    status?: number;
    departmentId?: number;
}
// export class SearchGroupModel {
//     textSearch: string;
//     currentPage: number;
//     pageSize: number;
//     sortColumn: string;
//     sortDirection: string;
// }
