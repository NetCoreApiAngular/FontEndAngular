export class BaseModel {
  deleteFlag?: boolean;
  createdBy?: string;
  createdDate?: Date;
  updatedBy?: string;
  updatedDate?: Date;
  isDeleted?: boolean;
  isEditMode?: boolean;
  isSubmitEdit?: boolean;
}

export class BaseDropDownList {
  value: any;
  viewValue: string;
  subContent?: any;
}
