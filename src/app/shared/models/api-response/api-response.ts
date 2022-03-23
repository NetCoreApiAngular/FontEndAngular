export class ApiResponse {
  status: number;
  content: any;
  errorMessage: string;
}

export class ApiListPagingResponse {
  status: number;
  content: ApiListingModel;
  errorMessage: string;
}

export class ApiListResponse {
  status: number;
  content: Array<any>;
  errorMessage: string;
}

export class PagingModel {

  textSearch : string;
  sortColumn : string;
  sortDirection : string;
  pageIndex : number;
  pageSize : number;
  totalRecords : number;

}

export class ApiListingModel extends PagingModel {
  constructor() {
    super();
  }
  items: Array<any>;
}

export interface ApiError {
  status: number;
  errorMessage: string;
  message: string;
  error: string;
}

export interface ApiDescriptionError {
  status: number;
  error_description: string;
  error: string;
}
