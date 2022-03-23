import { environment } from "../../../../environments/environment";

export class ApiUrl {
  static BaseUrl = environment.serverUrl;
  // IP APi
  public static UserIPAddress = 'https://ipinfo.io/json';

  // --USER
  public static Login = ApiUrl.BaseUrl + 'users/authenticate';
  public static UserRegister = ApiUrl.BaseUrl + 'users/register';
  public static UserUpdate = ApiUrl.BaseUrl + 'users/update';
  public static UserSearch = ApiUrl.BaseUrl + 'users/search';
  public static UserDelete = ApiUrl.BaseUrl + 'users/delete';
  public static UserGetById = ApiUrl.BaseUrl + 'users/getById';
  public static UserForgotPassword = ApiUrl.BaseUrl + 'users/forgotPassword';

  // --ROLE
  public static roleGetById = ApiUrl.BaseUrl + 'role/getById';
  public static roleSearch = ApiUrl.BaseUrl + 'role/search';
  public static roleGetAll = ApiUrl.BaseUrl + 'role/getAll';
  public static roleCreate = ApiUrl.BaseUrl + 'role/create';
  public static roleUpdate = ApiUrl.BaseUrl + 'role/update';
  public static roleDelete = ApiUrl.BaseUrl + 'role/delete';
  public static getModuleActionByGroup = ApiUrl.BaseUrl + 'role/getModuleActionByGroup';

  // --Warning
  public static warningGetById = ApiUrl.BaseUrl + 'warning/getById';
  public static warningSearch = ApiUrl.BaseUrl + 'warning/search';
  public static warningGetAll = ApiUrl.BaseUrl + 'warning/getAll';
  public static warningCreate = ApiUrl.BaseUrl + 'warning/create';
  public static warningUpdate = ApiUrl.BaseUrl + 'warning/update';
  public static warningDelete = ApiUrl.BaseUrl + 'warning/delete';

  // Department
  public static departmentGetById = ApiUrl.BaseUrl + 'department/getById';
  public static departmentSearch = ApiUrl.BaseUrl + 'department/search';
  public static departmentGetAll = ApiUrl.BaseUrl + 'department/getAll';
  public static departmentCreate = ApiUrl.BaseUrl + 'department/create';
  public static departmentUpdate = ApiUrl.BaseUrl + 'department/update';
  public static departmentDelete = ApiUrl.BaseUrl + 'department/delete';
  public static departmentFilter = ApiUrl.BaseUrl + 'department/filter';

  // Position
  public static positionGetById = ApiUrl.BaseUrl + 'possition/getById';
  public static positionSearch = ApiUrl.BaseUrl + 'possition/search';
  public static positionGetAll = ApiUrl.BaseUrl + 'possition/getAll';
  public static positionCreate = ApiUrl.BaseUrl + 'possition/create';
  public static positionUpdate = ApiUrl.BaseUrl + 'possition/update';
  public static positionDelete = ApiUrl.BaseUrl + 'possition/delete';
  public static positionFilter = ApiUrl.BaseUrl + 'possition/filter';

  // Time Block
  public static timeBlockGetAll = ApiUrl.BaseUrl + 'timeBlock/getAll';
  public static timeBlockGetById = ApiUrl.BaseUrl + 'timeBlock/getById';
  public static timeBlockSearch = ApiUrl.BaseUrl + 'timeBlock/search';
  public static timeBlockCreate = ApiUrl.BaseUrl + 'timeBlock/create';
  public static timeBlockUpdate = ApiUrl.BaseUrl + 'timeBlock/update';
  public static timeBlockDelete = ApiUrl.BaseUrl + 'timeBlock/delete';

  // -- Group
  public static CreateGroup = ApiUrl.BaseUrl + 'group/create';
  public static UpdateGroup = ApiUrl.BaseUrl + 'group/update';
  public static GetGroupAll = ApiUrl.BaseUrl + 'group/getAll';
  public static GetGroupById = ApiUrl.BaseUrl + 'group/getById';
  public static SearchGroup = ApiUrl.BaseUrl + 'group/search';
  public static SearchGroupByDepartment = ApiUrl.BaseUrl + 'group/searchByDepartment';
  public static RemoveGroupById = ApiUrl.BaseUrl + 'group/delete';
  public static FilterGroup = ApiUrl.BaseUrl + 'group/filter';
  public static GetForToxic = ApiUrl.BaseUrl + 'group/getForToxic';
  public static GetTimeBlockByGroupId = ApiUrl.BaseUrl + 'group/getTimeBlockByGroupId';

  // -- IssuerPlace
  public static CreateIssuerPlace = ApiUrl.BaseUrl + 'issuerPlace/create';
  public static UpdateIssuerPlace = ApiUrl.BaseUrl + 'issuerPlace/update';
  public static GetIssuerPlaceAll = ApiUrl.BaseUrl + 'issuerPlace/getAll';
  public static GetIssuerPlaceById = ApiUrl.BaseUrl + 'issuerPlace/getById';
  public static SearchIssuerPlace = ApiUrl.BaseUrl + 'issuerPlace/search';
  public static RemoveIssuerPlace = ApiUrl.BaseUrl + 'issuerPlace/delete';
  public static GetIssuerDistricts = ApiUrl.BaseUrl + 'issuerPlace/GetIssueDistricts';
  public static GetIssueWards = ApiUrl.BaseUrl + 'issuerPlace/GetIssueWards';

  // -- Academy
  public static academyGetById = ApiUrl.BaseUrl + 'academy/getById';
  public static academySearch = ApiUrl.BaseUrl + 'academy/search';
  public static academyGetAll = ApiUrl.BaseUrl + 'academy/getAll';
  public static academyCreate = ApiUrl.BaseUrl + 'academy/create';
  public static academyUpdate = ApiUrl.BaseUrl + 'academy/update';
  public static academyDelete = ApiUrl.BaseUrl + 'academy/delete';

  // -- SalaryRate
  public static CreateSalaryRate = ApiUrl.BaseUrl + 'salaryRate/create';
  public static UpdateSalaryRate = ApiUrl.BaseUrl + 'salaryRate/update';
  public static GetSalaryRateAll = ApiUrl.BaseUrl + 'salaryRate/getAll';
  public static GetSalaryRateById = ApiUrl.BaseUrl + 'salaryRate/getById';
  public static SearchSalaryRate = ApiUrl.BaseUrl + 'salaryRate/search';
  public static RemoveSalaryRate = ApiUrl.BaseUrl + 'salaryRate/delete';

  // -- SalaryRateGroup
  public static SalaryRateGroupGetById = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/getById';
  public static SalaryRateGroupSearch = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/search';
  public static SalaryRateGroupGetAll = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/getAll';
  public static SalaryRateGroupCreate = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/create';
  public static SalaryRateGroupUpdate = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/update';
  public static SalaryRateGroupDelete = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/delete';

  // -- Responsibility
  public static responsibilityGetById = ApiUrl.BaseUrl + 'responsibility/getById';
  public static responsibilitySearch = ApiUrl.BaseUrl + 'responsibility/search';
  public static responsibilityGetAll = ApiUrl.BaseUrl + 'responsibility/getAll';
  public static responsibilityCreate = ApiUrl.BaseUrl + 'responsibility/create';
  public static responsibilityUpdate = ApiUrl.BaseUrl + 'responsibility/update';
  public static responsibilityDelete = ApiUrl.BaseUrl + 'responsibility/delete';
  public static responsibilitySubSearch = ApiUrl.BaseUrl + 'responsibility/GetForResponsibility';
  public static responsibilitySubToxicSearch = ApiUrl.BaseUrl + 'responsibility/GetForToxic';

  // -- Responsibility Group
  public static responsibilityGroupGetById = ApiUrl.BaseUrl + 'ResponsibilityGroup/getById';
  public static responsibilityGroupGetByGroupId = ApiUrl.BaseUrl + 'responsibility/getByGroupId';
  public static responsibilityGroupSearch = ApiUrl.BaseUrl + 'ResponsibilityGroup/search';
  //public static responsibilityGroupGetAll = ApiUrl.BaseUrl + 'ResponsibilityGroup/getAll';
  public static responsibilityGroupCreate = ApiUrl.BaseUrl + 'ResponsibilityGroup/create';
  public static responsibilityGroupUpdate = ApiUrl.BaseUrl + 'ResponsibilityGroup/update';
  public static responsibilityGroupDelete = ApiUrl.BaseUrl + 'ResponsibilityGroup/delete';

  // -- Employee
  public static employeeGetById = ApiUrl.BaseUrl + 'employee/getById';
  public static employeeGetByCode = ApiUrl.BaseUrl + 'employee/getByCode';
  public static employeeGetByEmployeeCode = ApiUrl.BaseUrl + 'employee/GetByEmployeeCode';
  public static employeeSearch = ApiUrl.BaseUrl + 'employee/search';
  public static employeeSearchNoPaging = ApiUrl.BaseUrl + 'employee/searchNoPaging';
  public static employeeGetAll = ApiUrl.BaseUrl + 'employee/getAll';
  public static employeeCreate = ApiUrl.BaseUrl + 'employee/create';
  public static employeeUpdate = ApiUrl.BaseUrl + 'employee/update';
  public static employeeDelete = ApiUrl.BaseUrl + 'employee/delete';
  public static getEmployeeCodeDynamic = ApiUrl.BaseUrl + 'employee/GetEmployeeCodeDynamic';
  public static employeeCalculateEndDate = ApiUrl.BaseUrl + 'employee/calculateEndDate';
  public static CalculateWorkedYearDateNext = ApiUrl.BaseUrl + 'employee/CalculateWorkedYearDateNext';
  public static TransferTemporaryToOffical = ApiUrl.BaseUrl + 'employee/TransferParttimeToOffical';
  public static GetEmployeeCodeDynamic = ApiUrl.BaseUrl + 'employee/GetEmployeeCodeDynamic';
  public static GetContractCodeDynamic = ApiUrl.BaseUrl + 'employee/GetContractCodeDynamic';
  public static employeeSearchDaily = ApiUrl.BaseUrl + 'employee/SearchForDaily';
  public static employeeLabormanagementbook = ApiUrl.BaseUrl + 'employee/labormanagementbook';
  public static employeeCalculateTimeUpSalary = ApiUrl.BaseUrl + 'employee/CalculateTimeUpSalary';
  public static employeeSearchReport = ApiUrl.BaseUrl + 'employee/SearchForReport';

  // -- Contract
  public static GetByCode = ApiUrl.BaseUrl + 'contract/GetByCode';

  // -- Time Off Master
  public static timeOffMasterGetById = ApiUrl.BaseUrl + 'TimeOffMaster/getById';
  public static timeOffMasterSearch = ApiUrl.BaseUrl + 'TimeOffMaster/search';
  public static timeOffMasterCreate = ApiUrl.BaseUrl + 'TimeOffMaster/create';
  public static timeOffMasterUpdate = ApiUrl.BaseUrl + 'TimeOffMaster/update';
  public static timeOffMasterDelete = ApiUrl.BaseUrl + 'TimeOffMaster/delete';

  // -- Time Off Detail
  public static timeOffDetailGetById = ApiUrl.BaseUrl + 'TimeOffDetail/getById';
  public static timeOffDetailSearch = ApiUrl.BaseUrl + 'TimeOffDetail/search';
  public static timeOffDetailCreate = ApiUrl.BaseUrl + 'TimeOffDetail/create';
  public static timeOffDetailUpdate = ApiUrl.BaseUrl + 'TimeOffDetail/update';
  public static timeOffDetailDelete = ApiUrl.BaseUrl + 'TimeOffDetail/delete';

  // -- Time Off Reason
  public static timeOffReasonGetById = ApiUrl.BaseUrl + 'TimeOffReason/getById';
  public static timeOffReasonGetAll = ApiUrl.BaseUrl + 'TimeOffReason/getAll';
  public static timeOffReasonSearch = ApiUrl.BaseUrl + 'TimeOffReason/search';
  public static timeOffReasonCreate = ApiUrl.BaseUrl + 'TimeOffReason/create';
  public static timeOffReasonUpdate = ApiUrl.BaseUrl + 'TimeOffReason/update';
  public static timeOffReasonDelete = ApiUrl.BaseUrl + 'TimeOffReason/delete';

  // -- Employee Parttime
  public static EmployeePartTimeGetById = ApiUrl.BaseUrl + 'EmployeePartTime/getById';
  public static EmployeePartTimeSearch = ApiUrl.BaseUrl + 'EmployeePartTime/search';
  public static EmployeePartTimeSearchNoPaging = ApiUrl.BaseUrl + 'EmployeePartTime/searchNoPaging';
  public static EmployeePartTimeGetAll = ApiUrl.BaseUrl + 'EmployeePartTime/getAll';
  public static EmployeePartTimeCreate = ApiUrl.BaseUrl + 'EmployeePartTime/create';
  public static EmployeePartTimeUpdate = ApiUrl.BaseUrl + 'EmployeePartTime/update';
  public static EmployeePartTimeDelete = ApiUrl.BaseUrl + 'EmployeePartTime/delete';
  public static TransferParttimeToOffical = ApiUrl.BaseUrl + 'EmployeePartTime/TransferParttimeToOffical';
  public static EmployeePartTimeCodeDynamic = ApiUrl.BaseUrl + 'EmployeePartTime/GetEmployeeCodeDynamic';
  public static EmployeePartTimeCalculateEndDate = ApiUrl.BaseUrl + 'EmployeePartTime/calculateEndDate';
  public static ParttimeCalculateWorkedYearDateNext = ApiUrl.BaseUrl + 'EmployeePartTime/CalculateWorkedYearDateNext';
  public static ParttimeGetContractCodeDynamic = ApiUrl.BaseUrl + 'EmployeePartTime/GetContractCodeDynamic';
  public static ReCreateEmployee = ApiUrl.BaseUrl + 'EmployeePartTime/ReCreate';
  public static ParttimeGetByEnDate = ApiUrl.BaseUrl + 'EmployeePartTime/GetByEndDate';
  public static ParttimeGetSummary = ApiUrl.BaseUrl + 'EmployeeParttime/SummaryEmployeeReports';
  public static GetBySignedByDate = ApiUrl.BaseUrl + 'EmployeeParttime/GetBySignedDate';
  public static GetBySignedById = ApiUrl.BaseUrl + 'EmployeeParttime/getById';

  // -- Assignment
  public static SearchAssignment = ApiUrl.BaseUrl + 'Assignment/search'
  public static GetAssignmentById = ApiUrl.BaseUrl + 'Assignment/getById'
  public static CreateAssignment = ApiUrl.BaseUrl + 'Assignment/create'
  public static CopyAssignment = ApiUrl.BaseUrl + 'Assignment/CopyAssignment'
  public static UpdateAssignment = ApiUrl.BaseUrl + 'Assignment/update'
  public static deleteAssignment = ApiUrl.BaseUrl + 'Assignment/delete'
  public static getAssignmentNewest = ApiUrl.BaseUrl + 'Assignment/GetAssignmentNewest'

  public static SearchAssignmentProduct = ApiUrl.BaseUrl + 'assigmentproduct/search';
  public static GetAllAssignmentProduct = ApiUrl.BaseUrl + 'assigmentproduct/getAll';
  public static RemoveAssignmentProductById = ApiUrl.BaseUrl + "assigmentproduct/delete";
  public static GetAssignmentProductById = ApiUrl.BaseUrl + 'assigmentproduct/getById';
  public static GetAssignmentProductAll = ApiUrl.BaseUrl + 'assigmentproduct/getAll';
  public static UpdateAssignmentProduct = ApiUrl.BaseUrl + 'assigmentproduct/update';
  public static CreateAssignmentProduct = ApiUrl.BaseUrl + 'assigmentproduct/create';

  // Assignment product detail
  public static SearchAssignmentProductDetail = ApiUrl.BaseUrl + 'AssignmentProductDetail/search';
  public static RemoveAssignmentProductDetailById = ApiUrl.BaseUrl + "AssignmentProductDetail/delete";
  public static GetAssignmentProductDetailById = ApiUrl.BaseUrl + 'AssignmentProductDetail/getById';
  public static GetAssignmentProductDetailAll = ApiUrl.BaseUrl + 'AssignmentProductDetail/getAll';
  public static UpdateAssignmentProductDetail = ApiUrl.BaseUrl + 'AssignmentProductDetail/update';
  public static CreateAssignmentProductDetail = ApiUrl.BaseUrl + 'AssignmentProductDetail/create';
  public static UpdateMultiAssignmentProductDetail = ApiUrl.BaseUrl + 'AssignmentProductDetail/UpdateMultiple';
  public static CheckAssignemntProductCodeIsExist = ApiUrl.BaseUrl + 'AssignmentProductDetail/CheckAssignemntProductCodeIsExist';
  public static AssignmentProductDetailExportExcel = ApiUrl.BaseUrl + 'AssignmentProductDetail/ExportExcel';

  // Product
  public static SearchProduct = ApiUrl.BaseUrl + 'Product/search'
  public static GetProductById = ApiUrl.BaseUrl + 'Product/getById'
  public static CreateProduct = ApiUrl.BaseUrl + 'Product/create'
  public static UpdateProduct = ApiUrl.BaseUrl + 'Product/update'
  public static deleteProduct = ApiUrl.BaseUrl + 'Product/delete'

  // -- Allowancetype
  public static allowancetypeGetById = ApiUrl.BaseUrl + 'allowancetype/getById';
  public static allowancetypeSearch = ApiUrl.BaseUrl + 'allowancetype/search';
  public static allowancetypeCreate = ApiUrl.BaseUrl + 'allowancetype/create';
  public static allowancetypeUpdate = ApiUrl.BaseUrl + 'allowancetype/update';
  public static allowancetypeDelete = ApiUrl.BaseUrl + 'allowancetype/delete';
  public static CopyAllowanceType = ApiUrl.BaseUrl + 'allowancetype/CopyAllowanceType';

  // -- Personal Income Tax
  public static personalIncomeTaxGetById = ApiUrl.BaseUrl + 'personalincometax/getById';
  public static personalIncomeTaxSearch = ApiUrl.BaseUrl + 'personalincometax/search';
  public static personalIncomeTaxGetAll = ApiUrl.BaseUrl + 'personalincometax/getAll';
  public static personalIncomeTaxCreate = ApiUrl.BaseUrl + 'personalincometax/create';
  public static personalIncomeTaxUpdate = ApiUrl.BaseUrl + 'personalincometax/update';
  public static personalIncomeTaxDelete = ApiUrl.BaseUrl + 'personalincometax/delete';

  public static personalIncomeTaxMasterGetById = ApiUrl.BaseUrl + 'personalincometaxmaster/getById';
  public static personalIncomeTaxMasterSearch = ApiUrl.BaseUrl + 'personalincometaxmaster/search';
  public static personalIncomeTaxMasterGetAll = ApiUrl.BaseUrl + 'personalincometaxmaster/getAll';
  public static personalIncomeTaxMasterCreate = ApiUrl.BaseUrl + 'personalincometaxmaster/create';
  public static personalIncomeTaxMasterUpdate = ApiUrl.BaseUrl + 'personalincometaxmaster/update';
  public static personalIncomeTaxMasterDelete = ApiUrl.BaseUrl + 'personalincometaxmaster/delete';

  // -- Personal Tax
  public static personalTaxGetById = ApiUrl.BaseUrl + 'personalTax/getById';
  public static personalTaxSearch = ApiUrl.BaseUrl + 'personalTax/search';
  public static personalTaxGetAll = ApiUrl.BaseUrl + 'personalTax/getAll';
  public static personalTaxCreate = ApiUrl.BaseUrl + 'personalTax/create';
  public static personalTaxUpdate = ApiUrl.BaseUrl + 'personalTax/update';
  public static personalTaxDelete = ApiUrl.BaseUrl + 'personalTax/delete';
  public static AverageTaxCalculation = ApiUrl.BaseUrl + 'personalTax/AverageTaxCalculation';
  public static TaxCalculation = ApiUrl.BaseUrl + 'personalTax/TaxCalculation';
  public static personalTaxGetNewYear = ApiUrl.BaseUrl + 'personalTax/GetNewYear';

  // --Income Tax
  public static incomeTaxGetById = ApiUrl.BaseUrl + 'EmployeePersonTax/getById';
  public static incomeTaxSearch =
    ApiUrl.BaseUrl + 'EmployeePersonTax/searchMaster';
  public static incomeTaxGetAll =
    ApiUrl.BaseUrl + 'EmployeePersonTax/searchMaster';
  public static incomeTaxCreate =
    ApiUrl.BaseUrl + 'EmployeePersonTax/createMaster';
  public static incomeTaxUpdate =
    ApiUrl.BaseUrl + 'EmployeePersonTax/updateMaster';
  public static incomeTaxDelete =
    ApiUrl.BaseUrl + 'EmployeePersonTax/deleteMaster';
  public static incomeTaxCopy =
    ApiUrl.BaseUrl + 'EmployeePersonTax/createMaster';
  public static updateQuitJob =
    ApiUrl.BaseUrl + 'EmployeePersonTax/UpdateQuitJob';
  public static GetDetailMoreListModel =
    ApiUrl.BaseUrl + 'EmployeePersonTax/GetDetailMoreListModel';
  public static GetEmployeePersonalTaxDetailByAuthor =
    ApiUrl.BaseUrl + 'EmployeePersonTax/GetEmployeePersonalTaxDetailByAuthor';
  public static ExportThePromptExcelFile =
    ApiUrl.BaseUrl + 'EmployeePersonTax/ExportThePromptExcelFile';

  // --Income Tax infos
  public static incomeTaxInfoByMasterId =
    ApiUrl.BaseUrl + 'EmployeePersonTax/searchDetailByMasterId';
  public static incomeTaxInfoCreate =
    ApiUrl.BaseUrl + 'EmployeePersonTax/createDetail';
  public static incomeTaxInfoUpdate =
    ApiUrl.BaseUrl + 'EmployeePersonTax/updateDetail';
  public static incomeTaxInfoMultiUpdate =
    ApiUrl.BaseUrl + 'EmployeePersonTax/updateEmployeePersonalTaxDetailMultiple';
  public static incomeTaxInfoDelete =
    ApiUrl.BaseUrl + 'EmployeePersonTax/deleteDetail';
  public static autoCalcAmountSubtraction =
    ApiUrl.BaseUrl + 'EmployeePersonTax/CalculateAmountSubtraction';
  public static incomeTaxInfoGetAllDetailMore =
    ApiUrl.BaseUrl + 'EmployeePersonTax/searchDetailMoreByDetailId';
  public static incomeTaxInfoCreateDetailMore =
    ApiUrl.BaseUrl + 'EmployeePersonTax/createDetailMore';
  public static incomeTaxInfoDeleteDetailMore =
    ApiUrl.BaseUrl + 'EmployeePersonTax/deleteDetailMore';
  public static incomeTaxInfoUpdateDetailMore =
    ApiUrl.BaseUrl + 'EmployeePersonTax/updateDetailMore';
  public static incomeTaxInfoGetDetailIntimate =
    ApiUrl.BaseUrl + 'EmployeePersonTax/EmployeePersonalTaxDetailMoreById';
  public static incomeTaxGetAllByMasterId =
    ApiUrl.BaseUrl + 'EmployeePersonTax/GetAllEmployeePersonalTaxDetails';

  // -- Salary Rate Group
  public static salaryRateGroupGetById = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/getById';
  public static salaryRateGroupSearch = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/search';
  public static salaryRateGroupGetAll = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/getAll';
  public static salaryRateGroupCreate = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/create';
  public static salaryRateGroupUpdate = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/update';
  public static salaryRateGroupDelete = ApiUrl.BaseUrl + 'SalaryRateGroupGroup/delete';

  //Salary Assignment Master
  public static getSalaryAssignmentMaster = ApiUrl.BaseUrl + 'SalaryAssignmentMaster/getById';
  public static searchSalaryAssignmentMaster = ApiUrl.BaseUrl + 'SalaryAssignmentMaster/search';
  public static createSalaryAssignmentMaster = ApiUrl.BaseUrl + 'SalaryAssignmentMaster/create';
  public static updateSalaryAssignmentMaster = ApiUrl.BaseUrl + 'SalaryAssignmentMaster/update';
  public static updateSalaryAssignmentMasterAmount = ApiUrl.BaseUrl + 'SalaryAssignmentMaster/UpdateSalaryAssignAmount';
  public static copySalaryAssignmentMasterMiltiple = ApiUrl.BaseUrl + 'SalaryAssignmentMaster/copy';
  public static deleteSalaryAssignmentMaster = ApiUrl.BaseUrl + 'SalaryAssignmentMaster/delete';

  //Salary Assignment
  public static getSalaryAssignment = ApiUrl.BaseUrl + 'SalaryAssignment/getById';
  public static searchSalaryAssignment = ApiUrl.BaseUrl + 'SalaryAssignment/search';
  public static salaryAssignmentGetAll = ApiUrl.BaseUrl + 'SalaryAssignment/getAll';
  public static createSalaryAssignment = ApiUrl.BaseUrl + 'SalaryAssignment/create';
  public static updateSalaryAssignment = ApiUrl.BaseUrl + 'SalaryAssignment/update';
  public static updateSalaryAssignmentAmount = ApiUrl.BaseUrl + 'SalaryAssignment/UpdateSalaryAssignAmount';
  public static createSalaryAssignmentMiltiple = ApiUrl.BaseUrl + 'SalaryAssignment/createMultipleEmployee';
  public static copySalaryAssignmentMiltiple = ApiUrl.BaseUrl + 'SalaryAssignment/copy';
  public static deleteSalaryAssignment = ApiUrl.BaseUrl + 'SalaryAssignment/delete';
  public static getIdForSalaryAssignments = ApiUrl.BaseUrl + 'department/GetDepartmentIdForSalaryAssignments';
  public static deleteSalaryAssignmentByMonth = ApiUrl.BaseUrl + 'SalaryAssignment/deletebymonth';


  //Salary Parttime
  public static getSalaryParttimeById = ApiUrl.BaseUrl + 'SalaryPartime/getById';
  public static searchSalaryParttime = ApiUrl.BaseUrl + 'SalaryPartime/search';
  public static getAllsalarySalaryParttime = ApiUrl.BaseUrl + 'SalaryPartime/getAll';
  public static createSalaryParttime = ApiUrl.BaseUrl + 'SalaryPartime/create';
  public static updateSalaryParttime = ApiUrl.BaseUrl + 'SalaryPartime/update';
  public static deleteSalaryParttime = ApiUrl.BaseUrl + 'SalaryPartime/delete';
  public static GetByMonthSalaryPartime = ApiUrl.BaseUrl + 'SalaryPartime/GetByMonthSalaryPartime';
  public static getSalaryParttimeByType = ApiUrl.BaseUrl + 'SalaryPartime/getByType';

  //SalaryOutSource Detail
  public static getSalaryOutSourceDetailById = ApiUrl.BaseUrl + 'SalaryOutsourceDetail/getById';
  public static searchSalaryOutSourceDetail = ApiUrl.BaseUrl + 'SalaryOutsourceDetail/search';
  public static getAllSalaryOutSourceDetail = ApiUrl.BaseUrl + 'SalaryOutsourceDetail/getAll';
  public static createSalaryOutSourceDetail = ApiUrl.BaseUrl + 'SalaryOutsourceDetail/create';
  public static updateSalaryOutSourceDetail = ApiUrl.BaseUrl + 'SalaryOutsourceDetail/update';
  public static deleteSalaryOutSourceDetail = ApiUrl.BaseUrl + 'SalaryOutsourceDetail/delete';
  public static calculateSalaryOutSourceDetail = ApiUrl.BaseUrl + 'SalaryOutsourceDetail/calculatesalaryoursource';
  public static getSalaryOutSourceDetailByGroup = ApiUrl.BaseUrl + 'SalaryOutsourceDetail/getbygroup';
  public static getSalaryOutSourceDetailByDepartment = ApiUrl.BaseUrl + 'SalaryOutsourceDetail/getbydepartment';
  public static updateMultipleSalaryOutSourceDetail = ApiUrl.BaseUrl + 'SalaryOutsourceDetail/updateMultiple';
  public static getBySalaryPartimeIdSalaryOutSourceDetail = ApiUrl.BaseUrl + 'salaryOutsourceDetail/getBySalaryPartimeId';
  public static getDepartmentBySalaryOutsourceDetail = ApiUrl.BaseUrl + 'salaryOutsourceDetail/GetDepartmentBySalaryOutsourceDetail';

  //Salary Advance
  public static getSalaryAdvanceById = ApiUrl.BaseUrl + 'SalaryAdvance/getById';
  public static searchSalaryAdvance = ApiUrl.BaseUrl + 'SalaryAdvance/search';
  public static getAllSalaryAdvance = ApiUrl.BaseUrl + 'SalaryAdvance/getAll';
  public static createSalaryAdvance = ApiUrl.BaseUrl + 'SalaryAdvance/create';
  public static updateSalaryAdvance = ApiUrl.BaseUrl + 'SalaryAdvance/update';
  public static updateMultiSalaryAdvance = ApiUrl.BaseUrl + 'SalaryAdvance/updatemultiple';
  public static deleteSalaryAdvance = ApiUrl.BaseUrl + 'SalaryAdvance/delete';
  public static GetByDepartmentId = ApiUrl.BaseUrl + 'SalaryAdvance/GetByDepartmentId';
  public static GetByGroupId = ApiUrl.BaseUrl + 'SalaryAdvance/GetByGroupId';
  public static GetMonthNewest = ApiUrl.BaseUrl + 'salary/GetMonthNewest';
  public static ConvertMoneyToAlpha = ApiUrl.BaseUrl + 'salary/ConvertMoneyToAlpha';

  // -- Allowance Toxic
  public static allowanceToxicGetById = ApiUrl.BaseUrl + 'allowance/getById';
  public static allowanceToxicSearch = ApiUrl.BaseUrl + 'allowance/search';
  public static allowanceToxicGetAll = ApiUrl.BaseUrl + 'allowance/getAll';
  public static allowanceToxicCreate = ApiUrl.BaseUrl + 'allowance/create';
  public static allowanceToxicUpdate = ApiUrl.BaseUrl + 'allowance/update';
  public static allowanceToxicDelete = ApiUrl.BaseUrl + 'allowance/delete';

  // -- Foster Toxic
  public static fosterToxicGetAll = ApiUrl.BaseUrl + 'ToxicMaster/getAll';
  public static fosterToxicSearch = ApiUrl.BaseUrl + 'ToxicMaster/search';
  public static fosterToxicGetById = ApiUrl.BaseUrl + 'ToxicMaster/getById';
  public static fosterToxicDelete = ApiUrl.BaseUrl + 'ToxicMaster/delete';
  public static fosterToxicCreate = ApiUrl.BaseUrl + 'ToxicMaster/create';
  public static fosterToxicUpdate = ApiUrl.BaseUrl + 'ToxicMaster/update';

  // -- Toxic Detail
  public static detailToxicGetByMaster = ApiUrl.BaseUrl + 'ToxicDetail/GetToxicDetailByMasterId';
  public static detailToxicSearch = ApiUrl.BaseUrl + 'ToxicDetail/getByGroupId';
  public static detailToxicUpdateSingle = ApiUrl.BaseUrl + 'ToxicDetail/update';
  public static detailToxicUpdateMultiple = ApiUrl.BaseUrl + 'ToxicDetail/updatemultiple';
  public static detailToxicCreate = ApiUrl.BaseUrl + 'ToxicDetail/create';
  public static detailToxicDelete = ApiUrl.BaseUrl + 'ToxicDetail/delete';

  // -- Salary
  public static salaryGetById = ApiUrl.BaseUrl + 'salary/getById';
  public static salarySearch = ApiUrl.BaseUrl + 'salary/search';
  public static salaryGetAll = ApiUrl.BaseUrl + 'salary/getAll';
  public static salaryCreate = ApiUrl.BaseUrl + 'salary/create';
  public static salaryUpdate = ApiUrl.BaseUrl + 'salary/update';
  public static salaryDelete = ApiUrl.BaseUrl + 'salary/delete';

  public static salaryDetailGetById = ApiUrl.BaseUrl + 'salarydetail/getById';
  public static salaryDetailSearch = ApiUrl.BaseUrl + 'salarydetail/search';
  public static salaryDetailGetAll = ApiUrl.BaseUrl + 'salarydetail/getAll';
  public static salaryDetailCreate = ApiUrl.BaseUrl + 'salarydetail/create';
  public static salaryDetailGetBySummaryGroup = ApiUrl.BaseUrl + 'salarydetail/GetBySummaryGroup';
  public static salaryDetailRe_Create = ApiUrl.BaseUrl + 'salarydetail/Re_Create';
  public static salaryDetailCreateByDepartment = ApiUrl.BaseUrl + 'salarydetail/createsalarybydeparment';
  public static salaryDetailGetByDepartment = ApiUrl.BaseUrl + 'salarydetail/GetSalaryDetailByDepartment';
  public static salaryDetailCreateByGroup = ApiUrl.BaseUrl + 'salarydetail/createsalarybygroup';
  public static salaryDetailGetByGroup = ApiUrl.BaseUrl + 'salarydetail/GetSalaryDetailByGroup';
  public static salaryDetailByDepartmentOrGroup = ApiUrl.BaseUrl + 'salarydetail/GetSalaryDetailByDepartmentOrGroup';
  public static salaryDetailCreateSalaryChange = ApiUrl.BaseUrl + 'salarydetail/createSalaryChange';
  public static salaryDetailUpdate = ApiUrl.BaseUrl + 'salarydetail/update';
  public static salaryDetailUpdateMulti = ApiUrl.BaseUrl + 'salarydetail/updateMultipleSalaryDetail';
  public static salaryDetailDelete = ApiUrl.BaseUrl + 'salarydetail/delete';
  public static salaryPaymentReport = ApiUrl.BaseUrl + 'reports/SalaryPaymentReports';
  public static salaryDetailStatistic = ApiUrl.BaseUrl + 'reports/GetSalaryDetailStatistic';
  public static roundSalaryRaySecond = ApiUrl.BaseUrl + 'salarydetail/roundSalaryRaySecond';
  public static salaryOTReport = ApiUrl.BaseUrl + 'salarydetail/OvertimeSalaryReports';
  public static salaryRiceReport = ApiUrl.BaseUrl + 'salarydetail/GetSalaryDetailRice';
  public static SalaryAnalysisReports = ApiUrl.BaseUrl + 'reports/SalaryAnalysisReports';
  public static salaryDetailCalculateSubtractionPersonalTax = ApiUrl.BaseUrl + 'salarydetail/CalculateSubtractionPersonalTax';
  public static salaryDetailSalaryLabelPrinting = ApiUrl.BaseUrl + 'salarydetail/SalaryLabelPrinting';
  public static salaryDetailSalaryLabelPrintingForReward = ApiUrl.BaseUrl + 'salarydetail/SalaryLabelPrintingForReward';
  public static salaryDetailExcelSalaryLabelPrinting = ApiUrl.BaseUrl + 'salarydetail/ExcelSalaryLabelPrinting';
  public static salaryDetailSumSalaryDetailModelExcel = ApiUrl.BaseUrl + 'salarydetail/SumSalaryDetailModelExcel';

  public static SummarySalaryAnalysisReports = ApiUrl.BaseUrl + 'reports/SummarySalaryAnalysisReports';
  public static RewardSalaryAnalysisReports = ApiUrl.BaseUrl + 'reports/RewardSalaryAnalysisReports';
  public static ExcelSalaryAnalysisReports = ApiUrl.BaseUrl + 'reports/ExcelSalaryAnalysisReports';

  // -- Salary Rule
  public static salaryRuleGetById = ApiUrl.BaseUrl + 'salaryRule/getById';
  public static salaryRuleSearch = ApiUrl.BaseUrl + 'salaryRule/search';
  public static salaryRuleGetAll = ApiUrl.BaseUrl + 'salaryRule/getAll';
  public static salaryRuleCreate = ApiUrl.BaseUrl + 'salaryRule/create';
  public static salaryRuleUpdate = ApiUrl.BaseUrl + 'salaryRule/update';
  public static salaryRuleCopy = ApiUrl.BaseUrl + 'salaryRule/CopySalaryRule';
  public static salaryRuleDelete = ApiUrl.BaseUrl + 'salaryRule/delete';

  public static salaryRuleDetailGetById = ApiUrl.BaseUrl + 'SalaryRuleDetail/getById';
  public static salaryRuleDetailSearch = ApiUrl.BaseUrl + 'SalaryRuleDetail/search';
  public static salaryRuleDetailGetAll = ApiUrl.BaseUrl + 'SalaryRuleDetail/getAll';
  public static salaryRuleDetailCreate = ApiUrl.BaseUrl + 'SalaryRuleDetail/create';
  public static salaryRuleDetailUpdate = ApiUrl.BaseUrl + 'SalaryRuleDetail/update';
  public static salaryRuleDetailUpdateMulti = ApiUrl.BaseUrl + 'SalaryRuleDetail/updatemultiple';
  public static salaryRuleDetailDelete = ApiUrl.BaseUrl + 'SalaryRuleDetail/delete';

  // -- Salary Partime
  public static salaryPartimeGetById = ApiUrl.BaseUrl + 'SalaryPartime/getById';
  public static salaryPartimeSearch = ApiUrl.BaseUrl + 'SalaryPartime/search';
  public static salaryPartimeGetAll = ApiUrl.BaseUrl + 'SalaryPartime/getAll';
  public static salaryPartimeCreate = ApiUrl.BaseUrl + 'SalaryPartime/create';
  public static salaryPartimeUpdate = ApiUrl.BaseUrl + 'SalaryPartime/update';
  public static salaryPartimeDelete = ApiUrl.BaseUrl + 'SalaryPartime/delete';
  public static salaryPartimeGetByType = ApiUrl.BaseUrl + 'SalaryPartime/getByType';

  public static salaryPartimeDetailGetById = ApiUrl.BaseUrl + 'SalaryPartimeDetail/getById';
  public static salaryPartimeDetailSearch = ApiUrl.BaseUrl + 'SalaryPartimeDetail/search';
  public static salaryPartimeDetailGetAll = ApiUrl.BaseUrl + 'SalaryPartimeDetail/getAll';
  public static salaryPartimeDetailCreate = ApiUrl.BaseUrl + 'SalaryPartimeDetail/create';
  public static salaryPartimeDetailUpdate = ApiUrl.BaseUrl + 'SalaryPartimeDetail/update';
  public static salaryPartimeDetailDelete = ApiUrl.BaseUrl + 'SalaryPartimeDetail/delete';
  public static salaryPartimeDetailMultiUpdate = ApiUrl.BaseUrl + 'SalaryPartimeDetail/updateMultiple';
  public static salaryPartimeGetByDepartment = ApiUrl.BaseUrl + 'SalaryPartimeDetail/getByDepartmentId';
  public static salaryPartimeGetSalaryPartimeDetailByMonth = ApiUrl.BaseUrl + 'SalaryPartimeDetail/GetSalaryPartimeDetailByMonth';
  public static getBySalaryPartimeSalaryCreate = ApiUrl.BaseUrl + 'SalaryPartimeDetail/SalaryCreate';
  public static getBySalaryPartimeSalaryPrintLabel = ApiUrl.BaseUrl + 'SalaryPartimeDetail/GetSalaryParttimePrints';
  public static getDepartmentBySalaryParttimeDetail = ApiUrl.BaseUrl + 'SalaryPartimeDetail/GetDepartmentBySalaryParttimeDetail';

  // -- Living Fee Group
  public static livingFeeGetById = ApiUrl.BaseUrl + 'livingFee/getById';
  public static livingFeeSearch = ApiUrl.BaseUrl + 'livingFee/search';
  public static livingFeeGetAll = ApiUrl.BaseUrl + 'livingFee/getAll';
  public static livingFeeCreate = ApiUrl.BaseUrl + 'livingFee/create';
  public static livingFeeUpdate = ApiUrl.BaseUrl + 'livingFee/update';
  public static livingFeeDelete = ApiUrl.BaseUrl + 'livingFee/delete';

  // -- dailyPayment
  public static dailyPaymentGetById = ApiUrl.BaseUrl + 'dailypayment/getById';
  public static dailyPaymentSearch = ApiUrl.BaseUrl + 'dailypayment/search';
  public static dailyPaymentGetAll = ApiUrl.BaseUrl + 'dailypayment/getAll';
  public static dailyPaymentCreate = ApiUrl.BaseUrl + 'dailypayment/create';
  public static dailyPaymentUpdate = ApiUrl.BaseUrl + 'dailypayment/update';
  public static dailyPaymentDelete = ApiUrl.BaseUrl + 'dailypayment/delete';

  // -- timeLeave Group
  public static timeLeaveGetById = ApiUrl.BaseUrl + 'timeLeave/getById';
  public static timeLeaveSearch = ApiUrl.BaseUrl + 'timeLeave/search';
  public static timeLeaveGetAll = ApiUrl.BaseUrl + 'timeLeave/getAll';
  public static timeLeaveCreate = ApiUrl.BaseUrl + 'timeLeave/create';
  public static timeLeaveUpdate = ApiUrl.BaseUrl + 'timeLeave/update';
  public static timeLeaveDelete = ApiUrl.BaseUrl + 'timeLeave/delete';


  // -- Time Leave Management
  public static timeLeaveManagementGetById = ApiUrl.BaseUrl + 'timeLeaveManagement/getById';
  public static timeLeaveManagementSearch = ApiUrl.BaseUrl + 'timeLeaveManagement/search';
  public static timeLeaveManagementGetAll = ApiUrl.BaseUrl + 'timeLeaveManagement/getAll';
  public static timeLeaveManagementCreate = ApiUrl.BaseUrl + 'timeLeaveManagement/create';
  public static timeLeaveManagementUpdate = ApiUrl.BaseUrl + 'timeLeaveManagement/update';
  public static timeLeaveManagementDelete = ApiUrl.BaseUrl + 'timeLeaveManagement/delete';
  public static timeLeaveManagementMultiUpdate = ApiUrl.BaseUrl + 'timeLeaveManagement/updatemultiple';
  public static timeLeaveManagementDeleteMultiple = ApiUrl.BaseUrl + 'TimeLeaveManagement/deleteMultiple';
  public static timeLeaveManagementGetNewYear = ApiUrl.BaseUrl + 'TimeLeaveManagement/GetNewYear';

  // -- Time Leave Seniority
  public static timeLeaveSeniorityGetById = ApiUrl.BaseUrl + 'timeLeaveSeniority/getById';
  public static timeLeaveSenioritySearch = ApiUrl.BaseUrl + 'timeLeaveSeniority/search';
  public static timeLeaveSeniorityGetAll = ApiUrl.BaseUrl + 'timeLeaveSeniority/getAll';
  public static timeLeaveSeniorityCreate = ApiUrl.BaseUrl + 'timeLeaveSeniority/create';
  public static timeLeaveSeniorityUpdate = ApiUrl.BaseUrl + 'timeLeaveSeniority/update';
  public static timeLeaveSeniorityDelete = ApiUrl.BaseUrl + 'timeLeaveSeniority/delete';

  // -- timeLeave Group
  public static timeLeaveToxicGetById = ApiUrl.BaseUrl + 'timeLeaveToxic/getById';
  public static timeLeaveToxicSearch = ApiUrl.BaseUrl + 'timeLeaveToxic/search';
  public static timeLeaveToxicGetAll = ApiUrl.BaseUrl + 'timeLeaveToxic/getAll';
  public static timeLeaveToxicCreate = ApiUrl.BaseUrl + 'timeLeaveToxic/create';
  public static timeLeaveToxicUpdate = ApiUrl.BaseUrl + 'timeLeaveToxic/update';
  public static timeLeaveToxicDelete = ApiUrl.BaseUrl + 'timeLeaveToxic/delete';

  // -- contractRange
  public static contractRangeGetById = ApiUrl.BaseUrl + 'contractRange/getById';
  public static contractRangeSearch = ApiUrl.BaseUrl + 'contractRange/search';
  public static contractRangeCreate = ApiUrl.BaseUrl + 'contractRange/create';

  // -- TimeSheet Group
  public static timeSheetGetById = ApiUrl.BaseUrl + 'TimeSheet/getById';
  public static timeSheetSearch = ApiUrl.BaseUrl + 'TimeSheet/search';
  public static timeSheetGetAll = ApiUrl.BaseUrl + 'TimeSheet/getAll';
  public static timeSheetCreate = ApiUrl.BaseUrl + 'TimeSheet/create';
  public static timeSheetUpdate = ApiUrl.BaseUrl + 'TimeSheet/update';
  public static timeSheetDelete = ApiUrl.BaseUrl + 'TimeSheet/delete';
  public static getTimeSheetDetailByDepartment = ApiUrl.BaseUrl + 'timeSheetDetail/GetDepartment';
  public static getTimeSheetDetailByGroup = ApiUrl.BaseUrl + 'timeSheetDetail/GetTimeSheetDetailByGroup';
  public static createTimeSheetDetailGetById = ApiUrl.BaseUrl + 'timeSheetDetail/getById';
  public static updateTimeSheetDetail = ApiUrl.BaseUrl + 'timeSheetDetail/update';
  public static createTimeSheetDetail = ApiUrl.BaseUrl + 'timeSheetDetail/createmultiple';
  public static updateMultiTimeSheetDetail = ApiUrl.BaseUrl + 'timeSheetDetail/updatemultiple';
  public static deleteTimeSheetDetail = ApiUrl.BaseUrl + 'timeSheetDetail/delete';
  public static searchTimeSheetDetail = ApiUrl.BaseUrl + 'timeSheetDetail/search';
  public static updateTimeMain = ApiUrl.BaseUrl + 'timeSheetDetail/updateTimeMain';
  public static updateTimeE = ApiUrl.BaseUrl + 'timeSheetDetail/updateTimeE';

  // -- TimeSheet Group
  public static timeSheetDailyGetById = ApiUrl.BaseUrl + 'TimeSheetDaily/getById';
  public static timeSheetDailySearch = ApiUrl.BaseUrl + 'TimeSheetDaily/search';
  public static timeSheetDailyGetAll = ApiUrl.BaseUrl + 'TimeSheetDaily/getAll';
  public static timeSheetDailyCreate = ApiUrl.BaseUrl + 'TimeSheetDaily/insert';
  public static timeSheetDailyUpdate = ApiUrl.BaseUrl + 'TimeSheetDaily/update';
  public static timeSheetDailyUpdateAll = ApiUrl.BaseUrl + 'TimeSheetDaily/updatemultiple';
  public static timeSheetDailyDelete = ApiUrl.BaseUrl + 'TimeSheetDaily/delete';
  public static timeSheetDailyGetNumberOfOnline = ApiUrl.BaseUrl + 'TimeSheetDaily/getNumberOfOnline';
  public static timeSheetDailyGetNumberOfOffline = ApiUrl.BaseUrl + 'TimeSheetDaily/getNumberOfOffline';
  public static timeSheetDailyGetNumberOfLate = ApiUrl.BaseUrl + 'TimeSheetDaily/getNumberOfLate';
  public static timeSheetDailyGetNumberOfEaly = ApiUrl.BaseUrl + 'TimeSheetDaily/getNumberOfEaly';
  public static GetEmployeeIdAndDayNo = ApiUrl.BaseUrl + 'TimeSheetDaily/GetEmployeeIdAndDayNo';
  public static CheckOutCode = ApiUrl.BaseUrl + 'TimeSheetDaily/checkOutCode';
  public static CheckInCode = ApiUrl.BaseUrl + 'TimeSheetDaily/checkInCode';
  //Reward
  public static getAllReward = ApiUrl.BaseUrl + 'reward/getAll';
  public static searchReward = ApiUrl.BaseUrl + 'reward/search';
  public static deleteReward = ApiUrl.BaseUrl + "reward/delete";
  public static getRewardDetail = ApiUrl.BaseUrl + "reward/getById";
  public static createReward = ApiUrl.BaseUrl + "reward/create";
  public static updateReward = ApiUrl.BaseUrl + "reward/update";

  //Reward13
  public static searchReward13 = ApiUrl.BaseUrl + 'rewardRate13/search';
  public static deleteReward13 = ApiUrl.BaseUrl + "rewardRate13/delete";
  public static getRewardDetail13 = ApiUrl.BaseUrl + "rewardRate13/getById";
  public static getRewardAll13 = ApiUrl.BaseUrl + "rewardRate13/getAll";
  public static createReward13 = ApiUrl.BaseUrl + "rewardRate13/create";
  public static updateReward13 = ApiUrl.BaseUrl + "rewardRate13/update";

  //SubtractionPersonTax
  public static searchSubtractionPersonalTax = ApiUrl.BaseUrl + 'subtractionPersonalTax/search';
  public static deleteSubtractionPersonalTax = ApiUrl.BaseUrl + "subtractionPersonalTax/delete";
  public static getSubtractionPersonalTax = ApiUrl.BaseUrl + "subtractionPersonalTax/getById";
  public static createSubtractionPersonalTax = ApiUrl.BaseUrl + "subtractionPersonalTax/create";
  public static updateSubtractionPersonalTax = ApiUrl.BaseUrl + "subtractionPersonalTax/update";

  //Seniority
  public static searchSeniority = ApiUrl.BaseUrl + 'seniority/search';
  public static deleteSeniority = ApiUrl.BaseUrl + "seniority/delete";
  public static getSeniorityDetail = ApiUrl.BaseUrl + "seniority/getById";
  public static createSeniority = ApiUrl.BaseUrl + "seniority/create";
  public static updateSeniority = ApiUrl.BaseUrl + "seniority/update";
  public static calculateSeniority = ApiUrl.BaseUrl + 'seniority/calculateAmountSeniority';
  public static calculateTimeReView = ApiUrl.BaseUrl + 'seniority/CalculateSeniorityTimeReview';

  //Seniority Contract
  public static searchSeniorityContract = ApiUrl.BaseUrl + 'seniorityContract/search';
  public static deleteSeniorityContract = ApiUrl.BaseUrl + "seniorityContract/delete";
  public static getSeniorityDetailContract = ApiUrl.BaseUrl + "seniorityContract/getById";
  public static getAllSeniorityContract = ApiUrl.BaseUrl + "seniorityContract/getAll";
  public static createSeniorityContract = ApiUrl.BaseUrl + "seniorityContract/create";
  public static updateSeniorityContract = ApiUrl.BaseUrl + "seniorityContract/update";
  public static ContracNumberDynamic = ApiUrl.BaseUrl + "seniorityContract/ContracNumberDynamic";

  //Seniority Employee Contract
  public static searchSeniorityEmployeeContract = ApiUrl.BaseUrl + 'seniorityEmployeeContract/search';
  public static deleteSeniorityEmployeeContract = ApiUrl.BaseUrl + "seniorityEmployeeContract/delete";
  public static getSeniorityEmployeeDetailContract = ApiUrl.BaseUrl + "seniorityEmployeeContract/getAll";
  public static createSeniorityEmployeeContract = ApiUrl.BaseUrl + "seniorityEmployeeContract/create";
  public static updateSeniorityEmployeeContract = ApiUrl.BaseUrl + "seniorityEmployeeContract/update";
  public static getAllSeniorityEmployeeContract = ApiUrl.BaseUrl + "seniorityEmployeeContract/getAll";
  public static updateProfileEmployee = ApiUrl.BaseUrl + "seniorityEmployeeContract/updateProfileEmplopyee";
  public static getSeniorityEmployeeContract = ApiUrl.BaseUrl + "seniorityEmployeeContract/SeniorityEmployeeContractByDepartment_Reports";
  public static getSeniorityEmployeeContractReport = ApiUrl.BaseUrl + "reports/Excel_SeniorityEmployeeContract";

  //TransferPosition
  public static searchTransferPosition = ApiUrl.BaseUrl + 'TransferPosition/search';
  public static getTransferPositionById = ApiUrl.BaseUrl + 'TransferPosition/getById';
  public static postTransferPosition = ApiUrl.BaseUrl + 'TransferPosition/create';
  public static putTransferPositionById = ApiUrl.BaseUrl + 'TransferPosition/update';
  public static deleteTransferPosition = ApiUrl.BaseUrl + 'TransferPosition/delete';

  //TransferPositionDetail
  public static getTransferPositionDetailById = ApiUrl.BaseUrl + 'TransferPositionDetail/getById';
  public static searchTransferPositionDetail = ApiUrl.BaseUrl + 'TransferPositionDetail/search';
  public static postTransferPositionDetail = ApiUrl.BaseUrl + 'TransferPositionDetail/create';
  public static putTransferPositionDetailById = ApiUrl.BaseUrl + 'TransferPositionDetail/update';
  public static deleteTransferPositionDetailById = ApiUrl.BaseUrl + 'TransferPositionDetail/delete';

  // -- Appointment
  public static appointmentGetById = ApiUrl.BaseUrl + 'Appointment/getById';
  public static appointmentSearch = ApiUrl.BaseUrl + 'Appointment/search';
  public static appointmentGetAll = ApiUrl.BaseUrl + 'Appointment/getAll';
  public static appointmentCreate = ApiUrl.BaseUrl + 'Appointment/create';
  public static appointmentUpdate = ApiUrl.BaseUrl + 'Appointment/update';
  public static appointmentDelete = ApiUrl.BaseUrl + 'Appointment/delete';

  // -- Appointment Detail
  public static appointmentDetailGetById = ApiUrl.BaseUrl + 'AppointmentDetail/getById';
  public static appointmentDetailSearch = ApiUrl.BaseUrl + 'AppointmentDetail/search';
  public static appointmentDetailGetAll = ApiUrl.BaseUrl + 'AppointmentDetail/getAll';
  public static appointmentDetailCreate = ApiUrl.BaseUrl + 'AppointmentDetail/create';
  public static appointmentDetailUpdate = ApiUrl.BaseUrl + 'AppointmentDetail/update';
  public static appointmentDetailDelete = ApiUrl.BaseUrl + 'AppointmentDetail/delete';
  public static appointmentDetailGetByAppointmentId = ApiUrl.BaseUrl + 'AppointmentDetail/getByAppointmentId';
  public static appointmentDetailUpdateProfileEmployee = ApiUrl.BaseUrl + 'AppointmentDetail/updateProfileEmployee';
  public static appointmentDetailReport = ApiUrl.BaseUrl + 'AppointmentDetail/appoinmentDetailReports';
  //Advance-Time-Rate
  public static advanceTimeRateGetById = ApiUrl.BaseUrl + 'advancetimerate/getById';
  public static advanceTimeRateSearch = ApiUrl.BaseUrl + 'advancetimerate/search';
  public static advanceTimeRateGetAll = ApiUrl.BaseUrl + 'advancetimerate/getAll';
  public static advanceTimeRateCreate = ApiUrl.BaseUrl + 'advancetimerate/create';
  public static advanceTimeRateUpdate = ApiUrl.BaseUrl + 'advancetimerate/update';
  public static advanceTimeRateDelete = ApiUrl.BaseUrl + 'advancetimerate/delete';

  //Protection-Size
  public static protectionSizeGetById = ApiUrl.BaseUrl + 'ProtectionSize/getById';
  public static protectionSizeSearch = ApiUrl.BaseUrl + 'ProtectionSize/search';
  public static protectionSizeGetAll = ApiUrl.BaseUrl + 'ProtectionSize/getAll';
  public static protectionSizeCreate = ApiUrl.BaseUrl + 'ProtectionSize/create';
  public static protectionSizeUpdate = ApiUrl.BaseUrl + 'ProtectionSize/update';
  public static protectionSizeDelete = ApiUrl.BaseUrl + 'ProtectionSize/delete';

  //Protection-Type
  public static protectionTypeGetById = ApiUrl.BaseUrl + 'protectionType/getById';
  public static protectionTypeSearch = ApiUrl.BaseUrl + 'protectionType/search';
  public static protectionTypeGetAll = ApiUrl.BaseUrl + 'protectionType/getAll';
  public static protectionTypeCreate = ApiUrl.BaseUrl + 'protectionType/create';
  public static protectionTypeUpdate = ApiUrl.BaseUrl + 'protectionType/update';
  public static protectionTypeDelete = ApiUrl.BaseUrl + 'protectionType/delete';

  //ProtectionUtility
  public static protectionUtilityGetById = ApiUrl.BaseUrl + 'protectionUtility/getById';
  public static protectionUtilityGetByGroupId = ApiUrl.BaseUrl + 'protectionUtility/getByGroupId';
  public static protectionUtilitySearch = ApiUrl.BaseUrl + 'protectionUtility/search';
  public static protectionUtilityGetAll = ApiUrl.BaseUrl + 'protectionUtility/getAll';
  public static protectionUtilityCreate = ApiUrl.BaseUrl + 'protectionUtility/create';
  public static protectionUtilityUpdate = ApiUrl.BaseUrl + 'protectionUtility/update';
  public static protectionUtilityDelete = ApiUrl.BaseUrl + 'protectionUtility/delete';
  public static protectionUtilityDetailGetById = ApiUrl.BaseUrl + 'protectionUtilityDetail/getById';
  public static protectionUtilityDetailSearch = ApiUrl.BaseUrl + 'protectionUtilityDetail/search';
  public static protectionUtilityDetailGetAll = ApiUrl.BaseUrl + 'protectionUtilityDetail/getAll';
  public static protectionUtilityDetailCreate = ApiUrl.BaseUrl + 'protectionUtilityDetail/create';
  public static protectionUtilityDetailUpdate = ApiUrl.BaseUrl + 'protectionUtilityDetail/update';
  public static protectionUtilityDetailCreateMultipleProtectionUtility = ApiUrl.BaseUrl + 'protectionUtilityDetail/CreateMultipleProtectionUtility';
  public static protectionUtilityDetailUpdateEmployeeProtectionUtility = ApiUrl.BaseUrl + 'protectionUtilityDetail/UpdateEmployeeProtectionUtility';
  public static protectionUtilityDetailDelete = ApiUrl.BaseUrl + 'protectionUtilityDetail/delete';

  // subtractionCep
  public static subtractionCepGetById = ApiUrl.BaseUrl + 'subtractionCep/getById';
  public static subtractionCepSearch = ApiUrl.BaseUrl + 'subtractionCep/search';
  public static subtractionCepGetAll = ApiUrl.BaseUrl + 'subtractionCep/getAll';
  public static subtractionCepCreate = ApiUrl.BaseUrl + 'subtractionCep/create';
  public static subtractionCepUpdate = ApiUrl.BaseUrl + 'subtractionCep/update';
  public static subtractionCepDelete = ApiUrl.BaseUrl + 'subtractionCep/delete';

  // allowanceResponsibility
  public static allowanceResponsibilityGetById = ApiUrl.BaseUrl + 'AllowanceResponsibility/getById';
  public static allowanceResponsibilitySearch = ApiUrl.BaseUrl + 'AllowanceResponsibility/search';
  public static allowanceResponsibilityGetAll = ApiUrl.BaseUrl + 'AllowanceResponsibility/getAll';
  public static allowanceResponsibilityCreate = ApiUrl.BaseUrl + 'AllowanceResponsibility/create';
  public static allowanceResponsibilityUpdate = ApiUrl.BaseUrl + 'AllowanceResponsibility/update';
  public static allowanceResponsibilityDelete = ApiUrl.BaseUrl + 'AllowanceResponsibility/delete';
  // -- Reward By Date Signed
  public static rewardByDateSignedGetById = ApiUrl.BaseUrl + 'rewardByDatesigned/getById';
  public static rewardByDateSignedSearch = ApiUrl.BaseUrl + 'rewardByDatesigned/search';
  public static rewardByDateSignedGetAll = ApiUrl.BaseUrl + 'rewardByDatesigned/getAll';
  public static rewardByDateSignedCreate = ApiUrl.BaseUrl + 'rewardByDatesigned/create';
  public static rewardByDateSignedUpdate = ApiUrl.BaseUrl + 'rewardByDatesigned/update';
  public static rewardByDateSignedDelete = ApiUrl.BaseUrl + 'rewardByDatesigned/delete';

  // Bank Account
  public static bankAccountGetById = ApiUrl.BaseUrl + 'bankAccount/getById';
  public static bankAccountSearch = ApiUrl.BaseUrl + 'bankAccount/search';
  public static bankAccountGetAll = ApiUrl.BaseUrl + 'bankAccount/getAll';
  public static bankAccountCreate = ApiUrl.BaseUrl + 'bankAccount/create';
  public static bankAccountUpdate = ApiUrl.BaseUrl + 'bankAccount/update';
  public static bankAccountDelete = ApiUrl.BaseUrl + 'bankAccount/delete';

  // EmployeeJoinInsurance
  public static EmployeeJoinInsuranceGetById = ApiUrl.BaseUrl + 'EmployeeJoinInsurance/getById';
  public static EmployeeJoinInsuranceSearch = ApiUrl.BaseUrl + 'EmployeeJoinInsurance/search';
  public static EmployeeJoinInsuranceGetAll = ApiUrl.BaseUrl + 'EmployeeJoinInsurance/getAll';
  public static EmployeeJoinInsuranceCreate = ApiUrl.BaseUrl + 'EmployeeJoinInsurance/create';
  public static EmployeeJoinInsuranceUpdate = ApiUrl.BaseUrl + 'EmployeeJoinInsurance/update';
  public static EmployeeJoinInsuranceDelete = ApiUrl.BaseUrl + 'EmployeeJoinInsurance/delete';

  // EmployeeJoinInsurance
  public static EmployeeJoinInsuranceDetailGetById = ApiUrl.BaseUrl + 'EmployeeJoinInsuranceDetail/getById';
  public static EmployeeJoinInsuranceDetailSearch = ApiUrl.BaseUrl + 'EmployeeJoinInsuranceDetail/search';
  public static EmployeeJoinInsuranceDetailGetAll = ApiUrl.BaseUrl + 'EmployeeJoinInsuranceDetail/getAll';
  public static EmployeeJoinInsuranceDetailCreate = ApiUrl.BaseUrl + 'EmployeeJoinInsuranceDetail/create';
  public static EmployeeJoinInsuranceDetailUpdate = ApiUrl.BaseUrl + 'EmployeeJoinInsuranceDetail/update';
  public static EmployeeJoinInsuranceDetailDelete = ApiUrl.BaseUrl + 'EmployeeJoinInsuranceDetail/delete';
  public static EmployeeJoinInsuranceDetailUpdateMultiple = ApiUrl.BaseUrl + 'EmployeeJoinInsuranceDetail/updateMultiple';
  public static EmployeeJoinInsuranceDetailDownloadExcel = ApiUrl.BaseUrl + 'EmployeeJoinInsuranceDetail/DownloadExcel';

  // MaternitySickEmployee
  public static MaternitySickEmployeeGetById = ApiUrl.BaseUrl + 'MaternitySickEmployee/getById';
  public static MaternitySickEmployeeSearch = ApiUrl.BaseUrl + 'MaternitySickEmployee/search';
  public static MaternitySickEmployeeGetAll = ApiUrl.BaseUrl + 'MaternitySickEmployee/getAll';
  public static MaternitySickEmployeeCreate = ApiUrl.BaseUrl + 'MaternitySickEmployee/create';
  public static MaternitySickEmployeeUpdate = ApiUrl.BaseUrl + 'MaternitySickEmployee/update';
  public static MaternitySickEmployeeDelete = ApiUrl.BaseUrl + 'MaternitySickEmployee/delete';

  // -- ProvideSocialInsurance
  public static ProvideSocialInsuranceGetById = ApiUrl.BaseUrl + 'ProvideSocialInsurance/getById';
  public static ProvideSocialInsuranceSearch = ApiUrl.BaseUrl + 'ProvideSocialInsurance/search';
  public static ProvideSocialInsuranceCreate = ApiUrl.BaseUrl + 'ProvideSocialInsurance/create';
  public static ProvideSocialInsuranceUpdate = ApiUrl.BaseUrl + 'ProvideSocialInsurance/update';
  public static ProvideSocialInsuranceDelete = ApiUrl.BaseUrl + 'ProvideSocialInsurance/delete';

  // -- Product
  public static ProductGetById = ApiUrl.BaseUrl + 'Product/getById';
  public static ProductSearch = ApiUrl.BaseUrl + 'Product/search';
  public static ProductCreate = ApiUrl.BaseUrl + 'Product/create';
  public static ProductUpdate = ApiUrl.BaseUrl + 'Product/update';
  public static ProductDelete = ApiUrl.BaseUrl + 'Product/delete';
  public static ProductGetAll = ApiUrl.BaseUrl + 'Product/getAll';

  // -- ProvideSocialInsuranceDetail
  public static ProvideSocialInsuranceDetailGetById = ApiUrl.BaseUrl + 'ProvideSocialInsuranceDetail/getById';
  public static ProvideSocialInsuranceDetailSearch = ApiUrl.BaseUrl + 'ProvideSocialInsuranceDetail/search';
  public static ProvideSocialInsuranceDetailCreate = ApiUrl.BaseUrl + 'ProvideSocialInsuranceDetail/create';
  public static ProvideSocialInsuranceDetailUpdate = ApiUrl.BaseUrl + 'ProvideSocialInsuranceDetail/update';
  public static ProvideSocialInsuranceDetailDelete = ApiUrl.BaseUrl + 'ProvideSocialInsuranceDetail/delete';

  // --SalaryTimeUp
  public static getAllTimeUpMaster = ApiUrl.BaseUrl + "TimeUpMaster/getAll";
  public static searchTimeUpMaster = ApiUrl.BaseUrl + 'TimeUpMaster/search';
  public static deleteTimeUpMaster = ApiUrl.BaseUrl + "TimeUpMaster/delete";
  public static getTimeUpMaster = ApiUrl.BaseUrl + "TimeUpMaster/getById";
  public static createTimeUpMaster = ApiUrl.BaseUrl + "TimeUpMaster/create";
  public static updateTimeUpMaster = ApiUrl.BaseUrl + "TimeUpMaster/update";
  public static copyTimeUpMaster = ApiUrl.BaseUrl + "TimeUpMaster/CopyTimeUpMaster";

  // --SalaryTimeUp
  public static getAllSalaryTimeUp = ApiUrl.BaseUrl + "TimeUpSalary/getAll";
  public static searchSalaryTimeUp = ApiUrl.BaseUrl + 'TimeUpSalary/search';
  public static deleteSalaryTimeUp = ApiUrl.BaseUrl + "TimeUpSalary/delete";
  public static getSalaryTimeUp = ApiUrl.BaseUrl + "TimeUpSalary/getById";
  public static createSalaryTimeUp = ApiUrl.BaseUrl + "TimeUpSalary/create";
  public static updateSalaryTimeUp = ApiUrl.BaseUrl + "TimeUpSalary/update";
  public static getSalaryTimeUpBySalaryRateId = ApiUrl.BaseUrl + "TimeUpSalary/getBySalaryrateId";
  public static calculateAmountSeniority = ApiUrl.BaseUrl + "TimeUpSalary/CalculateAmountSeniority";
  public static getSalaryTimeUpByStypes = ApiUrl.BaseUrl + "TimeUpsalary/getByStypes";
  
  // --RewardAbc
  public static searchRewardAbc = ApiUrl.BaseUrl + 'RewardAbc/search';
  public static deleteRewardAbc = ApiUrl.BaseUrl + "RewardAbc/delete";
  public static getRewardAbc = ApiUrl.BaseUrl + "RewardAbc/getById";
  public static createRewardAbc = ApiUrl.BaseUrl + "RewardAbc/create";
  public static updateRewardAbc = ApiUrl.BaseUrl + "RewardAbc/update";

  // --RewardAlone
  public static RewardAloneGetById = ApiUrl.BaseUrl + 'RewardAlone/getById';
  public static RewardAloneSearch = ApiUrl.BaseUrl + 'RewardAlone/search';
  public static RewardAloneGetAll = ApiUrl.BaseUrl + 'RewardAlone/getAll';
  public static RewardAloneCreate = ApiUrl.BaseUrl + 'RewardAlone/create';
  public static RewardAloneUpdate = ApiUrl.BaseUrl + 'RewardAlone/update';
  public static RewardAloneDelete = ApiUrl.BaseUrl + 'RewardAlone/delete';
  public static RewardAloneWriteA = ApiUrl.BaseUrl + 'RewardAlone/WriteA';

  // --RewardMaster
  public static RewardMasterGetById = ApiUrl.BaseUrl + 'RewardMaster/getById';
  public static RewardMasterSearch = ApiUrl.BaseUrl + 'RewardMaster/search';
  public static RewardMasterGetAll = ApiUrl.BaseUrl + 'RewardMaster/getAll';
  public static RewardMasterCreate = ApiUrl.BaseUrl + 'RewardMaster/create';
  public static RewardMasterUpdate = ApiUrl.BaseUrl + 'RewardMaster/update';
  public static RewardMasterDelete = ApiUrl.BaseUrl + 'RewardMaster/delete';

  // --RewardTimeLeave
  public static RewardTimeLeaveGetById = ApiUrl.BaseUrl + 'RewardTimeLeave/getById';
  public static RewardTimeLeaveSearch = ApiUrl.BaseUrl + 'RewardTimeLeave/search';
  public static RewardTimeLeaveGetAll = ApiUrl.BaseUrl + 'RewardTimeLeave/getAll';
  public static RewardTimeLeaveCreate = ApiUrl.BaseUrl + 'RewardTimeLeave/create';
  public static RewardTimeLeaveUpdate = ApiUrl.BaseUrl + 'RewardTimeLeave/update';
  public static RewardTimeLeaveDelete = ApiUrl.BaseUrl + 'RewardTimeLeave/delete';
  public static UpdateNumberRTL = ApiUrl.BaseUrl + 'RewardTimeLeave/UpdateNumberOfTimeLeave';

  // --TimeLeaveToxicEmployee
  public static TimeLeaveToxicEmployeeAddId = ApiUrl.BaseUrl + 'TimeLeaveToxicEmployeeAdd/getById';
  public static TimeLeaveToxicEmployeeAddSearch = ApiUrl.BaseUrl + 'TimeLeaveToxicEmployeeAdd/search';
  public static TimeLeaveToxicEmployeeAddGetAll = ApiUrl.BaseUrl + 'TimeLeaveToxicEmployeeAdd/getAll';
  public static TimeLeaveToxicEmployeeAddCreate = ApiUrl.BaseUrl + 'TimeLeaveToxicEmployeeAdd/create';
  public static TimeLeaveToxicEmployeeAddUpdate = ApiUrl.BaseUrl + 'TimeLeaveToxicEmployeeAdd/update';
  public static TimeLeaveToxicEmployeeAddDelete = ApiUrl.BaseUrl + 'TimeLeaveToxicEmployeeAdd/delete';

  // --Report listEmployee contract
  public static searchEmployeeReportContract = ApiUrl.BaseUrl + 'reports/Employee_GetByDateSigned';
  public static searchSalaryOutSourceReportContract = ApiUrl.BaseUrl + 'reports/GetSalaryOutSourceReport';
  public static searchTimeLeaveSummaryReport = ApiUrl.BaseUrl + 'reports/TimeLeaveSummaryReport';
  public static searchTimeLeaveOf11MonthReport = ApiUrl.BaseUrl + 'reports/TimeLeaveOf11MonthReport';
  public static reportPersonalIncomeTaxDetail05A = ApiUrl.BaseUrl + 'reports/Report_PersonalIncomeTaxDetail05A';
  public static reportPersonalIncomeTaxDetail05KK = ApiUrl.BaseUrl + 'reports/SettlementPersonalTax_05KKReportModel';
  public static reportReportPersonalTaxs = ApiUrl.BaseUrl + 'reports/Report_PersonalTaxs';
  public static reportPersonalIncomeTaxMonthDetail = ApiUrl.BaseUrl + 'reports/Report_PersonalIncomeTaxMonthDetail';
  public static reportPersonalTaxDetailForMonths = ApiUrl.BaseUrl + 'reports/Report_PersonalTaxDetailForMonths';

  // Report Academy
  public static getEmployeeAcademyReport = ApiUrl.BaseUrl + 'reports/Academy_GetList';
  public static getReport_TeamOfEmployee = ApiUrl.BaseUrl + 'reports/Report_TeamOfEmployee';

  //RewardMonth13
  public static searchRewardMonth13 = ApiUrl.BaseUrl + 'RewardMonth13/search';
  public static createRewardMonth13 = ApiUrl.BaseUrl + 'RewardMonth13/create';
  public static updateRewardMonth13 = ApiUrl.BaseUrl + 'RewardMonth13/update';
  public static deleteRewardMonth13 = ApiUrl.BaseUrl + 'RewardMonth13/delete';
  public static getByIdRewardMonth13 = ApiUrl.BaseUrl + 'RewardMonth13/getById';
  public static reCalculateRewardMonth13 = ApiUrl.BaseUrl + 'RewardMonth13/reCalculateReward';
  public static WriteABC = ApiUrl.BaseUrl + 'RewardMonth13/WriteABC';
  public static rewardMonth13DownloadExcel = ApiUrl.BaseUrl + 'RewardMonth13/DownloadExcelReward';
  public static rewardMonth13GetRewardPrints = ApiUrl.BaseUrl + 'RewardMonth13/GetRewardPrints';

  // Training
  public static TrainingGetById = ApiUrl.BaseUrl + 'Training/getById';
  public static TrainingSearch = ApiUrl.BaseUrl + 'Training/search';
  public static TrainingGetAll = ApiUrl.BaseUrl + 'Training/getAll';
  public static TrainingCreate = ApiUrl.BaseUrl + 'Training/create';
  public static TrainingUpdate = ApiUrl.BaseUrl + 'Training/update';
  public static TrainingDelete = ApiUrl.BaseUrl + 'Training/delete';

  // TrainingProcess
  public static TrainingProcessGetById = ApiUrl.BaseUrl + 'TrainingProcess/getById';
  public static TrainingProcessSearch = ApiUrl.BaseUrl + 'TrainingProcess/search';
  public static TrainingProcessGetAll = ApiUrl.BaseUrl + 'TrainingProcess/getAll';
  public static TrainingProcessCreate = ApiUrl.BaseUrl + 'TrainingProcess/create';
  public static TrainingProcessUpdate = ApiUrl.BaseUrl + 'TrainingProcess/update';
  public static TrainingProcessDelete = ApiUrl.BaseUrl + 'TrainingProcess/delete';
  public static TrainingProcessUpdateProfile = ApiUrl.BaseUrl + 'TrainingProcess/UpdateProfileEmployee';
  public static TrainingClasses = ApiUrl.BaseUrl + 'TrainingProcess/GetTrainingClasses'
  public static TrainingProcessReport = ApiUrl.BaseUrl + 'TrainingProcess/GetTrainingProcesssReports'



  // TrainingProcessDetail
  public static TrainingProcessDetailGetById = ApiUrl.BaseUrl + 'TrainingProcessDetail/getById';
  public static TrainingProcessDetailSearch = ApiUrl.BaseUrl + 'TrainingProcessDetail/search';
  // public static TrainingProcessDetailGetAll = ApiUrl.BaseUrl + 'TrainingProcess/getAll';
  public static TrainingProcessDetailCreate = ApiUrl.BaseUrl + 'TrainingProcessDetail/create';
  public static TrainingProcessDetailUpdate = ApiUrl.BaseUrl + 'TrainingProcessDetail/update';
  public static TrainingProcessDetailDelete = ApiUrl.BaseUrl + 'TrainingProcessDetail/delete';

  // Inactivity Allowance
  public static inactivityAllowanceGetAllData = ApiUrl.BaseUrl + 'InactivityAllowance/getAll'
  public static inactivityAllowanceSearch = ApiUrl.BaseUrl + 'InactivityAllowance/search'
  public static inactivityAllowanceGetNewYear = ApiUrl.BaseUrl + 'InactivityAllowance/GetNewYear'
  public static inactivityAllowanceCreate = ApiUrl.BaseUrl + 'InactivityAllowance/create'
  public static inactivityAllowanceGetById = ApiUrl.BaseUrl + 'InactivityAllowance/getById'
  public static inactivityAllowanceUpdate = ApiUrl.BaseUrl + 'InactivityAllowance/update'
  public static inactivityAllowanceDelete = ApiUrl.BaseUrl + 'InactivityAllowance/delete'
  public static inactivityAllowanceGetSalaryByEmployeeId = ApiUrl.BaseUrl + 'InactivityAllowance/GetSalaryByEmployeeId'
  public static inactivityAllowanceUpdateDateOffForEmployee = ApiUrl.BaseUrl + 'InactivityAllowance/UpdateDateOffForEmployee'
  public static onGetReportInactivityAllowances = ApiUrl.BaseUrl + 'InactivityAllowance/reportInactivityAllowances'
  public static onGetReportInactivitySixMonthSalary = ApiUrl.BaseUrl + 'InactivityAllowance/Report_SixMonthSalary'

  // --TimeLeaveYear
  public static TimeLeaveYearGetById = ApiUrl.BaseUrl + 'TimeLeaveYear/getById';
  public static TimeLeaveYearSearch = ApiUrl.BaseUrl + 'TimeLeaveYear/search';
  public static TimeLeaveYearGetByYear = ApiUrl.BaseUrl + 'TimeLeaveYear/getByYear';
  public static TimeLeaveYearGetAll = ApiUrl.BaseUrl + 'TimeLeaveYear/getAll';
  public static TimeLeaveYearCreate = ApiUrl.BaseUrl + 'TimeLeaveYear/create';
  public static TimeLeaveYearUpdate = ApiUrl.BaseUrl + 'TimeLeaveYear/update';
  public static TimeLeaveYearDelete = ApiUrl.BaseUrl + 'TimeLeaveYear/delete';
  public static TimeLeaveAddition = ApiUrl.BaseUrl + 'TimeLeaveYear/timeleaveaddition';
  public static TimeLeaveYearDeleteMultiple = ApiUrl.BaseUrl + 'TimeLeaveYear/deleteMultiple';
  public static TimeLeaveYearGetNewYear = ApiUrl.BaseUrl + 'TimeLeaveYear/getNewYear';

  // Holiday
  public static HolidayDetail = ApiUrl.BaseUrl + 'Holiday/getById';
  public static HolidaySearch = ApiUrl.BaseUrl + 'Holiday/search';
  public static HolidayGetAll = ApiUrl.BaseUrl + 'Holiday/getAll';
  public static HolidayCreate = ApiUrl.BaseUrl + 'Holiday/create';
  public static HolidayUpdate = ApiUrl.BaseUrl + 'Holiday/update';
  public static HolidayDelete = ApiUrl.BaseUrl + 'Holiday/delete';

  // Employee SubtractionCep
  public static EmployeeSubtractionCepDetail = ApiUrl.BaseUrl + 'subtractionCep/getById';
  public static EmployeeSubtractionCepSearch = ApiUrl.BaseUrl + 'subtractionCep/search';
  public static EmployeeSubtractionCepGetAll = ApiUrl.BaseUrl + 'subtractionCep/getAll';
  public static EmployeeSubtractionCepCreate = ApiUrl.BaseUrl + 'subtractionCep/create';
  public static EmployeeSubtractionCepUpdate = ApiUrl.BaseUrl + 'subtractionCep/update';
  public static EmployeeSubtractionCepDelete = ApiUrl.BaseUrl + 'subtractionCep/delete';

  // TimeSheetMonthly
  // public static TimeLeaveYearGetById = ApiUrl.BaseUrl + 'getById';
  public static TimeSheetMonthyDetailSearch = ApiUrl.BaseUrl + 'TimeSheetMonthyDetail/search';
  public static TimeSheetMonthyDetailGetAll = ApiUrl.BaseUrl + 'TimeSheetMonthyDetail/getAll';
  public static TimeSheetMonthyDetailCreate = ApiUrl.BaseUrl + 'TimeSheetMonthyDetail/create';
  public static TimeSheetMonthyDetailUpdateMulti = ApiUrl.BaseUrl + 'TimeSheetMonthyDetail/updateMultiple';
  public static TimeSheetMonthyDetailCheckIsOldMonth = ApiUrl.BaseUrl + 'TimeSheetMonthyDetail/CheckIsOldMonth';
  // public static TimeLeaveYearUpdate = ApiUrl.BaseUrl + 'update';
  // public static TimeLeaveYearDelete = ApiUrl.BaseUrl + 'delete';
  // public static TimeLeaveAddition = ApiUrl.BaseUrl + 'timeleaveaddition';

  // --Postal Record
  public static PostalRecordGetById = ApiUrl.BaseUrl + 'Postalrecord/getById';
  public static PostalRecordSearch = ApiUrl.BaseUrl + 'Postalrecord/search';
  public static PostalRecordGetAll = ApiUrl.BaseUrl + 'Postalrecord/getAll';
  public static PostalRecordGetDate = ApiUrl.BaseUrl + 'Postalrecord/getDate';
  public static PostalRecordCreate = ApiUrl.BaseUrl + 'Postalrecord/create';
  public static PostalRecordUpdate = ApiUrl.BaseUrl + 'Postalrecord/update';
  public static PostalRecordDelete = ApiUrl.BaseUrl + 'Postalrecord/delete';

  // Month Insurance Money
  public static InsuranceMoneyGetAll = ApiUrl.BaseUrl + 'MonthlyInsuranceMoney/getAll'
  public static CalculateValueByMoney = ApiUrl.BaseUrl + 'MonthlyInsuranceMoneyDetail/CalculateValueByMoney'
  public static InsuranceMoneyCreate = ApiUrl.BaseUrl + 'MonthlyInsuranceMoney/create'
  public static InsuranceMoneySearch = ApiUrl.BaseUrl + 'MonthlyInsuranceMoney/search'
  public static InsuranceMoneyUpdate = ApiUrl.BaseUrl + 'MonthlyInsuranceMoney/update'
  public static InsuranceMoneyDelete = ApiUrl.BaseUrl + 'MonthlyInsuranceMoney/delete'
  
  // Money
  public static MoneyGetById = ApiUrl.BaseUrl + '​Money​/getById'
  public static MoneySearch = ApiUrl.BaseUrl + 'Money/search'
  public static MoneyGetAll = ApiUrl.BaseUrl + 'Money/getAll'
  public static MoneyGetMoney = ApiUrl.BaseUrl + 'Money/GetMoney'
  public static MoneyCreate = ApiUrl.BaseUrl + 'Money/create'
  public static MoneyUpdate = ApiUrl.BaseUrl + 'Money/update'
  public static MoneyDelete = ApiUrl.BaseUrl + 'Money/delete'

  // Insurance Rate
  public static InsuranceRateGetAll = ApiUrl.BaseUrl + 'InsuranceRate/getAll'
  public static InsuranceRateGetById = ApiUrl.BaseUrl + 'InsuranceRate/getById'
  public static InsuranceRateCreate = ApiUrl.BaseUrl + 'InsuranceRate/create'
  public static InsuranceRateSearch = ApiUrl.BaseUrl + 'InsuranceRate/search'
  public static InsuranceRateUpdate = ApiUrl.BaseUrl + 'InsuranceRate/update'
  public static InsuranceRateDelete = ApiUrl.BaseUrl + 'InsuranceRate/delete'
  public static InsuranceRateGetNewestRecords = ApiUrl.BaseUrl + 'InsuranceRate/GetNewestRecords'

  // Expired Contract Report
  public static ExpiredContractReportCreate = ApiUrl.BaseUrl + 'ExpiredContractReport/create'
  public static ExpiredContractReportUpdate = ApiUrl.BaseUrl + 'ExpiredContractReport/update'
  public static ExpiredContractReportSearch = ApiUrl.BaseUrl + 'ExpiredContractReport/search'
  public static ExpiredContractReportDelete = ApiUrl.BaseUrl + 'ExpiredContractReport/delete'
  public static ExpiredContractReportGetByID = ApiUrl.BaseUrl + 'ExpiredContractReport/getById'
  public static getContractNumberDynamic = ApiUrl.BaseUrl + 'ExpiredContractReport/getContractNumberDynamic'

  // Expired Contract Report Details
  public static ExpiredContractReportDetailGetAll = ApiUrl.BaseUrl + 'ExpiredContractReportDetail/getAll'
  public static ExpiredContractReportDetailSearch = ApiUrl.BaseUrl + 'ExpiredContractReportDetail/search'
  public static ExpiredContractReportDetailCreate = ApiUrl.BaseUrl + 'ExpiredContractReportDetail/create'
  public static ExpiredContractReportDetailUpdate = ApiUrl.BaseUrl + 'ExpiredContractReportDetail/update'
  public static ExpiredContractReportDetailUpdateProfileEmp = ApiUrl.BaseUrl + 'ExpiredContractReportDetail/updateProfileEmployee'
  public static ExpiredContractReportDetailDelete = ApiUrl.BaseUrl + 'ExpiredContractReportDetail/delete'
  public static ExpiredContractReportDetailGetById = ApiUrl.BaseUrl + 'ExpiredContractReportDetail/getById'
  public static ExpiredContractReportDetailGetEmployeeId = ApiUrl.BaseUrl + 'ExpiredContractReportDetail/GetEmployeeId'

  // Expired Contract Report
  public static ExpiredSalaryIncreaseReportCreate = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReport/create'
  public static ExpiredSalaryIncreaseReportUpdate = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReport/update'
  public static ExpiredSalaryIncreaseReportSearch = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReport/search'
  public static ExpiredSalaryIncreaseReportDelete = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReport/delete'
  public static ExpiredSalaryIncreaseReportGetByID = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReport/getById'
  public static AutoContractNumber = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReport/getContractNumberDynamic'

  public static ExpiredSalaryIncreaseReportDetailSearch = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReportDetail/search'
  public static ExpiredSalaryIncreaseReportDetailDelete = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReportDetail/delete'
  public static ExpiredSalaryIncreaseReportDetailGetByID = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReportDetail/getById'
  public static ExpiredSalaryIncreaseReportDetailGetAll = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReportDetail/GetAll'
  public static ExpiredSalaryIncreaseReportDetailMakeADecision = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReportDetail/MakeADecision'
  public static ExpiredSalaryIncreaseReportDetailUpdate = ApiUrl.BaseUrl + 'ExpiredSalaryIncreaseReportDetail/Update'

  // Recruitment
  public static RecruitmentSearch = ApiUrl.BaseUrl + 'Recruitment/search'
  public static RecruitmentCreate = ApiUrl.BaseUrl + 'Recruitment/create'
  public static RecruitmentUpdate = ApiUrl.BaseUrl + 'Recruitment/update'
  public static RecruitmentDelete = ApiUrl.BaseUrl + 'Recruitment/delete'
  public static RecruitmentGetByID = ApiUrl.BaseUrl + 'Recruitment/getById'
  public static RecruitmentCreateNewRecruitment = ApiUrl.BaseUrl + 'Recruitment/CreateNewRecruitments'

  public static RecruitmentDetailGetAll = ApiUrl.BaseUrl + 'RecruitmentDetail/getAll'
  public static RecruitmentDetailCreate = ApiUrl.BaseUrl + 'RecruitmentDetail/create'
  public static RecruitmentDetailUpdate = ApiUrl.BaseUrl + 'RecruitmentDetail/update'
  public static RecruitmentDetailSearch = ApiUrl.BaseUrl + 'RecruitmentDetail/search'
  public static RecruitmentDetailDelete = ApiUrl.BaseUrl + 'RecruitmentDetail/delete'
  public static RecruitmentDetailGetById = ApiUrl.BaseUrl + 'RecruitmentDetail/getById'
  public static RecruitmentDetailReport_GetRecruitmentDetails = ApiUrl.BaseUrl + 'RecruitmentDetail/Report_GetRecruitmentDetails'
  public static RecruitmentDetailReport_GetRecruitmentDetailByGroupIds  = ApiUrl.BaseUrl + 'RecruitmentDetail/Report_GetRecruitmentDetailByGroupIds'

  // Recruitment Requirement
  public static RecruitmentRequirementSearch = ApiUrl.BaseUrl + 'RecruitmentRequirement/search'
  public static RecruitmentRequirementCreate = ApiUrl.BaseUrl + 'RecruitmentRequirement/create'
  public static RecruitmentRequirementCreateMultiple = ApiUrl.BaseUrl + 'RecruitmentRequirement/CreateMultiple'
  public static RecruitmentRequirementUpdate = ApiUrl.BaseUrl + 'RecruitmentRequirement/update'
  public static RecruitmentRequirementDelete = ApiUrl.BaseUrl + 'RecruitmentRequirement/delete'
  public static RecruitmentRequirementGetByID = ApiUrl.BaseUrl + 'RecruitmentRequirement/getById'
  public static RecruitmentRequirementGetAll = ApiUrl.BaseUrl + 'RecruitmentRequirement/getAll'

  // GetTrainingProcessReport
  public static GetTrainingProcessReportAll = ApiUrl.BaseUrl + 'reports/GetTrainingProcessReport'

  //Get HouseHoldListReport
  public static GetHouseHoldListReport = ApiUrl.BaseUrl + 'reports/Report_InCity';

  // Company Info
  public static getCompanyInfo = ApiUrl.BaseUrl + 'companyInfor/GetCompanyInfor'
  public static UpdateCompanyInfo = ApiUrl.BaseUrl + 'companyInfor/Update'
  public static CreateCompanyInfo = ApiUrl.BaseUrl + 'companyInfor/create'
  public static DeleteCompanyInfo = ApiUrl.BaseUrl + 'companyInfor/delete'

  //Expired Humans Report
  public static GetExpiredHumansReport = ApiUrl.BaseUrl + 'reports/Report_ExpiredHumans'
  public static ReportHumanResourceReport = ApiUrl.BaseUrl + 'reports/Report_HumanResourceReportModel'
  public static ReportHumanOvertimeReport = ApiUrl.BaseUrl + 'reports/HumanOvertime_Report'
  public static ReportHumanOffs = ApiUrl.BaseUrl + 'reports/Report_HumanOffs'
  public static DownloadExcel_HumanResourceReportModelReport = ApiUrl.BaseUrl + 'reports/DownloadExcel_HumanResourceReportModelReport'


  //Human Resource Used Reports
  public static ReportHumanResourceUsedReport = ApiUrl.BaseUrl + 'reports/Report_HumanResourceUsedReports'
  public static DownloadExcelEmployeeReport = ApiUrl.BaseUrl + 'reports/DownloadExcelEmployeeReport'
  public static EmployeeReport = ApiUrl.BaseUrl + 'reports/EmployeeReport'

  // Contract Info Report
  public static GetExpiredContractReportAll = ApiUrl.BaseUrl + 'expiredContractReport/getAll'
  public static GetExpiredContractReportSearch = ApiUrl.BaseUrl + 'expiredContractReport/search'

  public static GetContractInfoReport = ApiUrl.BaseUrl + 'reports/Report_EmployeeContracts'
  public static Report_WorkingInOuts = ApiUrl.BaseUrl + 'reports/Report_WorkingInOuts'
  public static Report_WorkingInOutDetail = ApiUrl.BaseUrl + 'reports/Report_WorkingInOutDetail'
  public static Report_WorkingInOutBySalaryRate = ApiUrl.BaseUrl + 'reports/Report_WorkingInOutBySalaryRate'
  public static Report_WorkingInOutBySeniority = ApiUrl.BaseUrl + 'reports/Report_WorkingInOutBySeniority'
  public static Report_WorkingInOutByDepartment = ApiUrl.BaseUrl + 'reports/Report_WorkingInOutByDepartment'

  //BaseDecisionToQuit
  public static getAllBaseDecisionToQuit = ApiUrl.BaseUrl + 'BaseDecisionToQuit/getAll';
  public static searchBaseDecisionToQuit = ApiUrl.BaseUrl + 'BaseDecisionToQuit/search';
  public static deleteBaseDecisionToQuit = ApiUrl.BaseUrl + 'BaseDecisionToQuit/delete';
  public static getBaseDecisionToQuitDetail = ApiUrl.BaseUrl + 'BaseDecisionToQuit/getById';
  public static createBaseDecisionToQuit = ApiUrl.BaseUrl + 'BaseDecisionToQuit/create';
  public static updateBaseDecisionToQuit = ApiUrl.BaseUrl + 'BaseDecisionToQuit/update';

  //Team
  public static getAllTeam = ApiUrl.BaseUrl + 'Team/getAll';
  public static searchTeam = ApiUrl.BaseUrl + 'Team/search';
  public static deleteTeam = ApiUrl.BaseUrl + 'Team/delete';
  public static getTeamDetail = ApiUrl.BaseUrl + 'Team/getById';
  public static createTeam = ApiUrl.BaseUrl + 'Team/create';
  public static updateTeam = ApiUrl.BaseUrl + 'Team/update';

  //EmployeeProtectionUtility
  public static getAllEmployeeProtectionUtility = ApiUrl.BaseUrl + 'EmployeeProtectionUtility/getAll';
  public static searchEmployeeProtectionUtility = ApiUrl.BaseUrl + 'EmployeeProtectionUtility/search';
  public static deleteEmployeeProtectionUtility = ApiUrl.BaseUrl + 'EmployeeProtectionUtility/delete';
  public static getEmployeeProtectionUtilityDetail = ApiUrl.BaseUrl + 'EmployeeProtectionUtility/getById';
  public static createEmployeeProtectionUtility = ApiUrl.BaseUrl + 'EmployeeProtectionUtility/create';
  public static updateEmployeeProtectionUtility = ApiUrl.BaseUrl + 'EmployeeProtectionUtility/update';
  public static addEmployeeNewProtectionUtility = ApiUrl.BaseUrl + 'EmployeeProtectionUtility/AddEmployeeNew';

  //EmployeeProtectionUtility
  public static getAllSign = ApiUrl.BaseUrl + 'Sign/getAll';
  public static searchSign = ApiUrl.BaseUrl + 'Sign/search';
  public static deleteSign = ApiUrl.BaseUrl + 'Sign/delete';
  public static getSignDetail = ApiUrl.BaseUrl + 'Sign/getById';
  public static createSign = ApiUrl.BaseUrl + 'Sign/create';
  public static updateSign = ApiUrl.BaseUrl + 'Sign/update';

  //Dish
  public static getAllDish = ApiUrl.BaseUrl + 'Dish/getAll';
  public static searchDish = ApiUrl.BaseUrl + 'Dish/search';
  public static deleteDish = ApiUrl.BaseUrl + 'Dish/delete';
  public static getDishDetail = ApiUrl.BaseUrl + 'Dish/getById';
  public static createDish = ApiUrl.BaseUrl + 'Dish/create';
  public static updateDish = ApiUrl.BaseUrl + 'Dish/update';

  public static getAllFollowDailyLaborSituationMaster = ApiUrl.BaseUrl + 'FollowDailyLaborSituationMaster/getAll';
  public static searchFollowDailyLaborSituationMaster = ApiUrl.BaseUrl + 'FollowDailyLaborSituationMaster/search';
  public static deleteFollowDailyLaborSituationMaster = ApiUrl.BaseUrl + 'FollowDailyLaborSituationMaster/delete';
  public static getFollowDailyLaborSituationMasterDetail = ApiUrl.BaseUrl + 'FollowDailyLaborSituationMaster/getById';
  public static createFollowDailyLaborSituationMaster = ApiUrl.BaseUrl + 'FollowDailyLaborSituationMaster/create';
  public static updateFollowDailyLaborSituationMaster = ApiUrl.BaseUrl + 'FollowDailyLaborSituationMaster/update';

  public static getAllFollowDailyLaborSituation = ApiUrl.BaseUrl + 'FollowDailyLaborSituation/getAll';
  public static searchFollowDailyLaborSituation = ApiUrl.BaseUrl + 'FollowDailyLaborSituation/search';
  public static deleteFollowDailyLaborSituation = ApiUrl.BaseUrl + 'FollowDailyLaborSituation/delete';
  public static getFollowDailyLaborSituationDetail = ApiUrl.BaseUrl + 'FollowDailyLaborSituation/getById';
  public static createFollowDailyLaborSituation = ApiUrl.BaseUrl + 'FollowDailyLaborSituation/create';
  public static updateFollowDailyLaborSituation = ApiUrl.BaseUrl + 'FollowDailyLaborSituation/update';
  public static weeklyUpdateFollowDailyLaborSituation = ApiUrl.BaseUrl + 'FollowDailyLaborSituation/WeeklyUpdate';

  public static getAllMilk = ApiUrl.BaseUrl + 'Milk/getAll';
  public static searchMilk = ApiUrl.BaseUrl + 'Milk/search';
  public static deleteMilk = ApiUrl.BaseUrl + 'Milk/delete';
  public static getMilkDetail = ApiUrl.BaseUrl + 'Milk/getById';
  public static createMilk = ApiUrl.BaseUrl + 'Milk/create';
  public static updateMilk = ApiUrl.BaseUrl + 'Milk/update';

  public static getAllCustomer = ApiUrl.BaseUrl + 'Customer/getAll';
  public static searchCustomer = ApiUrl.BaseUrl + 'Customer/search';
  public static deleteCustomer = ApiUrl.BaseUrl + 'Customer/delete';
  public static getCustomerDetail = ApiUrl.BaseUrl + 'Customer/getById';
  public static createCustomer = ApiUrl.BaseUrl + 'Customer/create';
  public static updateCustomer = ApiUrl.BaseUrl + 'Customer/update';

  public static getAllForwardingDirectory = ApiUrl.BaseUrl + 'ForwardingDirectory/getAll';
  public static searchForwardingDirectory = ApiUrl.BaseUrl + 'ForwardingDirectory/search';
  public static deleteForwardingDirectory = ApiUrl.BaseUrl + 'ForwardingDirectory/delete';
  public static getForwardingDirectoryDetail = ApiUrl.BaseUrl + 'ForwardingDirectory/getById';
  public static createForwardingDirectory = ApiUrl.BaseUrl + 'ForwardingDirectory/create';
  public static updateForwardingDirectory = ApiUrl.BaseUrl + 'ForwardingDirectory/update';
  public static getMilkForwardingDirectory = ApiUrl.BaseUrl + 'ForwardingDirectory/GetMilkForwardingDirectory';
  public static getMaterialForwardingDirectory = ApiUrl.BaseUrl + 'ForwardingDirectory/GetMaterialForwardingDirectory';

  public static getAllDocumentary = ApiUrl.BaseUrl + 'Documentary/getAll';
  public static searchDocumentary = ApiUrl.BaseUrl + 'Documentary/search';
  public static deleteDocumentary = ApiUrl.BaseUrl + 'Documentary/delete';
  public static getDocumentaryDetailById = ApiUrl.BaseUrl + 'Documentary/getById';
  public static createDocumentary = ApiUrl.BaseUrl + 'Documentary/create';
  public static updateDocumentary = ApiUrl.BaseUrl + 'Documentary/update';
  public static getDocumentaryDetail = ApiUrl.BaseUrl + 'Documentary/GetDocumentaryDetails';

  public static getAllImportBill = ApiUrl.BaseUrl + 'ImportBill/getAll';
  public static searchImportBill = ApiUrl.BaseUrl + 'ImportBill/search';
  public static deleteImportBill = ApiUrl.BaseUrl + 'ImportBill/delete';
  public static getImportBillDetail = ApiUrl.BaseUrl + 'ImportBill/getById';
  public static createImportBill = ApiUrl.BaseUrl + 'ImportBill/create';
  public static updateImportBill = ApiUrl.BaseUrl + 'ImportBill/update';
  public static getBillNoDynamicImportBill = ApiUrl.BaseUrl + 'ImportBill/GetBillNoDynamic';
  public static getContractNumDynamic = ApiUrl.BaseUrl + 'ImportBill/getContractNumberDynamic';


  public static getAllImportBillDetail = ApiUrl.BaseUrl + 'ImportBillDetail/getAll';
  public static searchImportBillDetail = ApiUrl.BaseUrl + 'ImportBillDetail/search';
  public static deleteImportBillDetail = ApiUrl.BaseUrl + 'ImportBillDetail/delete';
  public static getImportBillDetailGetById = ApiUrl.BaseUrl + 'ImportBillDetail/getById';
  public static createImportBillDetail = ApiUrl.BaseUrl + 'ImportBillDetail/create';
  public static updateImportBillDetail = ApiUrl.BaseUrl + 'ImportBillDetail/update';
  public static getByImportBillDetailPrint = ApiUrl.BaseUrl + 'ImportBillDetail/GetByImportBillDetailPrint';
  public static ImportBillUpdateMultiple = ApiUrl.BaseUrl + 'ImportBillDetail/UpdateMultiple';

  public static getAllWareHouse = ApiUrl.BaseUrl + 'WareHouse/getAll';
  public static searchWareHouse = ApiUrl.BaseUrl + 'WareHouse/search';
  public static deleteWareHouse = ApiUrl.BaseUrl + 'WareHouse/delete';
  public static getWareHouseDetail = ApiUrl.BaseUrl + 'WareHouse/getById';
  public static createWareHouse = ApiUrl.BaseUrl + 'WareHouse/create';
  public static updateWareHouse = ApiUrl.BaseUrl + 'WareHouse/update';
  public static getMilkWareHouse = ApiUrl.BaseUrl + 'WareHouse/GetMilkWareHouse';
  public static getMaterialWareHouse = ApiUrl.BaseUrl + 'WareHouse/GetMaterialWareHouse';

  public static getAllExportBill = ApiUrl.BaseUrl + 'ExportBill/getAll';
  public static searchExportBill = ApiUrl.BaseUrl + 'ExportBill/search';
  public static deleteExportBill = ApiUrl.BaseUrl + 'ExportBill/delete';
  public static getExportBillDetail = ApiUrl.BaseUrl + 'ExportBill/getById';
  public static createExportBill = ApiUrl.BaseUrl + 'ExportBill/create';
  public static updateExportBill = ApiUrl.BaseUrl + 'ExportBill/update';
  public static getBillNoDynamicExportBill = ApiUrl.BaseUrl + 'ExportBill/getContractNumberDynamic';

  public static getAllMaterialDetailBook = ApiUrl.BaseUrl + 'MaterialDetailBook/getAll';
  public static searchMaterialDetailBook = ApiUrl.BaseUrl + 'MaterialDetailBook/search';
  public static deleteMaterialDetailBook = ApiUrl.BaseUrl + 'MaterialDetailBook/delete';
  public static getMaterialDetailBookDetail = ApiUrl.BaseUrl + 'MaterialDetailBook/getById';
  public static createMaterialDetailBook = ApiUrl.BaseUrl + 'MaterialDetailBook/create';
  public static updateMaterialDetailBook = ApiUrl.BaseUrl + 'MaterialDetailBook/update';
  public static getNegativeInventionReports = ApiUrl.BaseUrl + 'MaterialDetailBook/GetNegativeInventionReports';
  public static milkInventoryReportsMaterialDetailBook = ApiUrl.BaseUrl + 'MaterialDetailBook/MilkInventoryReports';

  public static getAllExportBillDetail = ApiUrl.BaseUrl + 'ExportBillDetail/getAll';
  public static searchExportBillDetail = ApiUrl.BaseUrl + 'ExportBillDetail/search';
  public static deleteExportBillDetail = ApiUrl.BaseUrl + 'ExportBillDetail/delete';
  public static getExportBillDetailGetById = ApiUrl.BaseUrl + 'ExportBillDetail/getById';
  public static createExportBillDetail = ApiUrl.BaseUrl + 'ExportBillDetail/create';
  public static updateExportBillDetail = ApiUrl.BaseUrl + 'ExportBillDetail/update';
  public static ExportDetailUpdateMultiple = ApiUrl.BaseUrl + 'ExportBillDetail/UpdateMultiple';
  public static getExportBillDetailDetail = ApiUrl.BaseUrl + 'ExportBillDetail/getById';
  public static GetByExportBillDetailPrintExportBillDetail = ApiUrl.BaseUrl + 'ExportBillDetail/GetByExportBillDetailPrint';
  public static updateInventoryExportBillDetail = ApiUrl.BaseUrl + 'ExportBillDetail/updateInventory';

  public static getAllFirstInventory = ApiUrl.BaseUrl + 'FirstInventory/getAll';
  public static searchFirstInventory = ApiUrl.BaseUrl + 'FirstInventory/search';
  public static deleteFirstInventory = ApiUrl.BaseUrl + 'FirstInventory/delete';
  public static getFirstInventoryDetail = ApiUrl.BaseUrl + 'FirstInventory/getById';
  public static createFirstInventory = ApiUrl.BaseUrl + 'FirstInventory/create';
  public static updateFirstInventory = ApiUrl.BaseUrl + 'FirstInventory/update';
  public static updateInventoriesFirstInventory = ApiUrl.BaseUrl + 'FirstInventory/updateInventories';
  public static createCalculateInventories = ApiUrl.BaseUrl + 'FirstInventory/CalculateInventories'

  public static getAllMaterial = ApiUrl.BaseUrl + 'Material/getAll';
  public static searchMaterial = ApiUrl.BaseUrl + 'Material/search';
  public static deleteMaterial = ApiUrl.BaseUrl + 'Material/delete';
  public static getMaterialDetail = ApiUrl.BaseUrl + 'Material/getById';
  public static createMaterial = ApiUrl.BaseUrl + 'Material/create';
  public static updateMaterial = ApiUrl.BaseUrl + 'Material/update';

  public static getAllContentDocumentary = ApiUrl.BaseUrl + 'ContentDocumentary/getAll';
  public static searchContentDocumentary = ApiUrl.BaseUrl + 'ContentDocumentary/search';
  public static deleteContentDocumentary = ApiUrl.BaseUrl + 'ContentDocumentary/delete';
  public static getContentDocumentaryDetail = ApiUrl.BaseUrl + 'ContentDocumentary/getById';
  public static createContentDocumentary = ApiUrl.BaseUrl + 'ContentDocumentary/create';
  public static updateContentDocumentary = ApiUrl.BaseUrl + 'ContentDocumentary/update';
  public static getContentDocumentaryPrint = ApiUrl.BaseUrl + 'ContentDocumentary/GetContentDocumentarys';

  public static getAllMaterialImportBill = ApiUrl.BaseUrl + 'MaterialImportBill/getAll';
  public static searchMaterialImportBill = ApiUrl.BaseUrl + 'MaterialImportBill/search';
  public static deleteMaterialImportBill = ApiUrl.BaseUrl + 'MaterialImportBill/delete';
  public static getMaterialImportBillDetail = ApiUrl.BaseUrl + 'MaterialImportBill/getById';
  public static createMaterialImportBill = ApiUrl.BaseUrl + 'MaterialImportBill/create';
  public static updateMaterialImportBill = ApiUrl.BaseUrl + 'MaterialImportBill/update';
  public static getMaterialContractNumberDynamic = ApiUrl.BaseUrl + 'MaterialImportBill/getContractNumberDynamic';

  public static getAllMaterialImportBillDetail = ApiUrl.BaseUrl + 'MaterialImportBillDetail/getAll';
  public static searchMaterialImportBillDetail = ApiUrl.BaseUrl + 'MaterialImportBillDetail/search';
  public static deleteMaterialImportBillDetail = ApiUrl.BaseUrl + 'MaterialImportBillDetail/delete';
  public static getMaterialImportBillDetailDetail = ApiUrl.BaseUrl + 'MaterialImportBillDetail/getById';
  public static createMaterialImportBillDetail = ApiUrl.BaseUrl + 'MaterialImportBillDetail/create';
  public static updateMaterialImportBillDetail = ApiUrl.BaseUrl + 'MaterialImportBillDetail/update';
  public static getByMaterialImportBillDetailPrint = ApiUrl.BaseUrl + 'MaterialImportBillDetail/GetByMaterialImportBillDetailPrint';
  public static getByPrintDetail = ApiUrl.BaseUrl + 'MaterialImportBillDetail/GetByPrintDetail';
  public static materialImportBillDetailUpdateMultiple = ApiUrl.BaseUrl + 'MaterialImportBillDetail/UpdateMultiple';

  public static getAllMaterialExportBill = ApiUrl.BaseUrl + 'MaterialExportBill/getAll';
  public static searchMaterialExportBill = ApiUrl.BaseUrl + 'MaterialExportBill/search';
  public static deleteMaterialExportBill = ApiUrl.BaseUrl + 'MaterialExportBill/delete';
  public static getMaterialExportBillById = ApiUrl.BaseUrl + 'MaterialExportBill/getById';
  public static createMaterialExportBill = ApiUrl.BaseUrl + 'MaterialExportBill/create';
  public static updateMaterialExportBill = ApiUrl.BaseUrl + 'MaterialExportBill/update';
  public static getMaterialExportContractNumberDynamic = ApiUrl.BaseUrl + 'MaterialExportBill/getContractNumberDynamic';

  public static getAllMaterialExportBillDetail = ApiUrl.BaseUrl + 'MaterialExportBillDetail/getAll';
  public static searchMaterialExportBillDetail = ApiUrl.BaseUrl + 'MaterialExportBillDetail/search';
  public static deleteMaterialExportBillDetail = ApiUrl.BaseUrl + 'MaterialExportBillDetail/delete';
  public static getMaterialExportBillDetailById = ApiUrl.BaseUrl + 'MaterialExportBillDetail/getById';
  public static createMaterialExportBillDetail = ApiUrl.BaseUrl + 'MaterialExportBillDetail/create';
  public static materialExportUpdateInventory = ApiUrl.BaseUrl + 'MaterialExportBillDetail/updateInventory'
  public static updateMaterialExportBillDetail = ApiUrl.BaseUrl + 'MaterialExportBillDetail/update';
  public static updateMultiMaterialExportBillDetail = ApiUrl.BaseUrl + 'MaterialExportBillDetail/UpdateMultiple';
  public static MaterialExportCheckMaterialExist = ApiUrl.BaseUrl + 'MaterialExportBillDetail/CheckMaterialExist'
  public static getByMaterialExportBillDetailPrint = ApiUrl.BaseUrl + 'MaterialExportBillDetail/MaterialExportBillDetailModelPrint';
  public static getByPrintExprotDetail = ApiUrl.BaseUrl + 'MaterialExportBillDetail/GetByPrintDetail';
  public static calculateInventoryMaterialDetail = ApiUrl.BaseUrl + 'MaterialDetailBookOfStationery/CalculateInventory';
  public static materialExportReport = ApiUrl.BaseUrl + 'MaterialExportBillDetail/MaterialExportReport';
  public static exportBillByForwardingDirectory = ApiUrl.BaseUrl + 'MaterialExportBillDetail/ExportBillByForwardingDirectory';

  public static getAllFirstInventoryOfMaterial = ApiUrl.BaseUrl + 'FirstInventoryOfMaterial/getAll';
  public static getByIdFirstInventoryOfMaterial = ApiUrl.BaseUrl + 'FirstInventoryOfMaterial/getById';
  public static createFirstInventoryOfMaterial = ApiUrl.BaseUrl + 'FirstInventoryOfMaterial/create';
  public static updateFirstInventoryOfMaterial = ApiUrl.BaseUrl + 'FirstInventoryOfMaterial/update';
  public static searchFirstInventoryOfMaterial = ApiUrl.BaseUrl + 'FirstInventoryOfMaterial/search';
  public static deleteFirstInventoryOfMaterial = ApiUrl.BaseUrl + 'FirstInventoryOfMaterial/delete';
  public static calculateInventoryOfMaterial = ApiUrl.BaseUrl + 'FirstInventoryOfMaterial/CalculateInventories';
  public static updateInventoriesOfMaterial = ApiUrl.BaseUrl + 'FirstInventoryOfMaterial/updateInventories';

  public static getAllMaterialDetailBookOfStationery = ApiUrl.BaseUrl + 'MaterialDetailBookOfStationery/getAll';
  public static searchMaterialDetailBookOfStationery = ApiUrl.BaseUrl + 'MaterialDetailBookOfStationery/search';
  public static deleteMaterialDetailBookOfStationery = ApiUrl.BaseUrl + 'MaterialDetailBookOfStationery/delete';
  public static getMaterialDetailBookOfStationeryDetail = ApiUrl.BaseUrl + 'MaterialDetailBookOfStationery/getById';
  public static onGetMaterialInventoryReports = ApiUrl.BaseUrl + 'MaterialDetailBookOfStationery/MaterialInventoryReports';

  public static getAllMoney = ApiUrl.BaseUrl + 'Money/getAll';
  public static getByIdMoney = ApiUrl.BaseUrl + 'Money/getById';
  public static createMoney = ApiUrl.BaseUrl + 'Money/create';
  public static updateMoney = ApiUrl.BaseUrl + 'Money/update';
  public static searchMoney = ApiUrl.BaseUrl + 'Money/search';
  public static deleteMoney = ApiUrl.BaseUrl + 'Money/delete';
  public static getMoneyExchange = ApiUrl.BaseUrl + 'Money/GetMoney';

  public static TimeLeaveStatisticMasterGetById = ApiUrl.BaseUrl + 'TimeLeaveStatisticMaster/getById';
  public static TimeLeaveStatisticMasterSearch = ApiUrl.BaseUrl + 'TimeLeaveStatisticMaster/search';
  public static TimeLeaveStatisticMasterCreate = ApiUrl.BaseUrl + 'TimeLeaveStatisticMaster/create';
  public static TimeLeaveStatisticMasterUpdate = ApiUrl.BaseUrl + 'TimeLeaveStatisticMaster/update';
  public static TimeLeaveStatisticMasterDelete = ApiUrl.BaseUrl + 'TimeLeaveStatisticMaster/delete';


  public static TimeLeaveStatisticGetById = ApiUrl.BaseUrl + 'TimeLeaveStatistic/getById';
  public static TimeLeaveStatisticSearch = ApiUrl.BaseUrl + 'TimeLeaveStatistic/search';
  public static TimeLeaveStatisticGetAll = ApiUrl.BaseUrl + 'TimeLeaveStatistic/getAll';
  public static TimeLeaveStatisticCreate = ApiUrl.BaseUrl + 'TimeLeaveStatistic/create';
  public static TimeLeaveStatisticUpdate = ApiUrl.BaseUrl + 'TimeLeaveStatistic/update';
  public static timeLeaveUpdateMultiple = ApiUrl.BaseUrl + 'TimeLeaveStatistic/updateMultiple';
  public static TimeLeaveStatisticDelete = ApiUrl.BaseUrl + 'TimeLeaveStatistic/delete';
  public static TimeLeaveStatisticDownloadExcelReport = ApiUrl.BaseUrl + 'TimeLeaveStatistic/DownloadExcelReport';

  public static LeaveModeGetById = ApiUrl.BaseUrl + 'LeaveMode/getById';
  public static LeaveModeSearch = ApiUrl.BaseUrl + 'LeaveMode/search';
  public static LeaveModeGetAll = ApiUrl.BaseUrl + 'LeaveMode/getAll';
  public static LeaveModeCreate = ApiUrl.BaseUrl + 'LeaveMode/create';
  public static LeaveModeUpdate = ApiUrl.BaseUrl + 'LeaveMode/update';
  public static LeaveModeDelete = ApiUrl.BaseUrl + 'LeaveMode/delete';

  public static getDescription = ApiUrl.BaseUrl + "Description/GetDescription";
  public static onCreateDescription = ApiUrl.BaseUrl + "Description/Create";
  public static onUpdateDescription = ApiUrl.BaseUrl + "Description/Update";

  public static PrintTemplateGetById = ApiUrl.BaseUrl + 'PrintTemplate/getById';
  public static PrintTemplateSearch = ApiUrl.BaseUrl + 'PrintTemplate/search';
  public static PrintTemplateGetAll = ApiUrl.BaseUrl + 'PrintTemplate/getAll';
  public static PrintTemplateCreate = ApiUrl.BaseUrl + 'PrintTemplate/create';
  public static PrintTemplateUpdate = ApiUrl.BaseUrl + 'PrintTemplate/update';
  public static PrintTemplateDelete = ApiUrl.BaseUrl + 'PrintTemplate/delete';
  public static PrintTemplatePrintSample = ApiUrl.BaseUrl + 'PrintTemplate/PrintSample';

  public static PrintDataGetById = ApiUrl.BaseUrl + 'PrintData/getById';
  public static PrintDataSearch = ApiUrl.BaseUrl + 'PrintData/search';
  public static PrintDataGetAll = ApiUrl.BaseUrl + 'PrintData/getAll';
  public static PrintDataCreate = ApiUrl.BaseUrl + 'PrintData/create';
  public static PrintDataUpdate = ApiUrl.BaseUrl + 'PrintData/update';
  public static PrintDataDelete = ApiUrl.BaseUrl + 'PrintData/delete';

  public static PrintTemplateDetailGetById = ApiUrl.BaseUrl + 'PrintTemplateDetail/getById';
  public static PrintTemplateDetailSearch = ApiUrl.BaseUrl + 'PrintTemplateDetail/search';
  public static PrintTemplateDetailGetAll = ApiUrl.BaseUrl + 'PrintTemplateDetail/getAll';
  public static PrintTemplateDetailCreate = ApiUrl.BaseUrl + 'PrintTemplateDetail/create';
  public static PrintTemplateDetailUpdate = ApiUrl.BaseUrl + 'PrintTemplateDetail/update';
  public static PrintTemplateDetailDelete = ApiUrl.BaseUrl + 'PrintTemplateDetail/delete';

  public static PrintDataDetailGetById = ApiUrl.BaseUrl + 'PrintDataDetail/getById';
  public static PrintDataDetailSearch = ApiUrl.BaseUrl + 'PrintDataDetail/search';
  public static PrintDataDetailGetAll = ApiUrl.BaseUrl + 'PrintDataDetail/getAll';
  public static PrintDataDetailCreate = ApiUrl.BaseUrl + 'PrintDataDetail/create';
  public static PrintDataDetailUpdate = ApiUrl.BaseUrl + 'PrintDataDetail/update';
  public static PrintDataDetailDelete = ApiUrl.BaseUrl + 'PrintDataDetail/delete';

  public static ISOAppendixGetById = ApiUrl.BaseUrl + 'ISOAppendix/getById';
  public static ISOAppendixSearch = ApiUrl.BaseUrl + 'ISOAppendix/search';
  public static ISOAppendixGetAll = ApiUrl.BaseUrl + 'ISOAppendix/getAll';
  public static ISOAppendixCreate = ApiUrl.BaseUrl + 'ISOAppendix/create';
  public static ISOAppendixUpdate = ApiUrl.BaseUrl + 'ISOAppendix/update';
  public static ISOAppendixDelete = ApiUrl.BaseUrl + 'ISOAppendix/delete';

  public static reportsCreatePrint = ApiUrl.BaseUrl + 'reports/CreatePrint';
  public static reportsCreatePrintCommitment = ApiUrl.BaseUrl + 'reports/CreatePrintCommitment';
  public static reportsKeyEmployeeQuits = ApiUrl.BaseUrl + 'reports/KeyEmployeeQuits';
  

}
