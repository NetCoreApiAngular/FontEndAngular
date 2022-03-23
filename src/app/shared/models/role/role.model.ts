export class RoleModel {
    roleId: number;
    code: string;
    name: string;
    note: string;
    status: boolean;
    createdByUserId: string;
    updatedUserId: string;
    createdDate: any;
    moduleActions: moduleActionsModel[] = []
}

export class RoleModuleModel {
    categoryName: string;
    categoryId: number;
    isChecked: boolean;
    module: Module[] = []
}

export class Module {
    moduleName: string;
    isChecked: boolean;
    action: moduleActionsModel[] = []
}

export class moduleActionsModel {
    moduleActionId: number;
    module: string;
    action: string;
    description: string;
    isChecked: boolean;
    group: number
}

export const CategoryMRole = [
    { value: 1, label: 'Danh mục' },
    { value: 2, label: 'Nhân viên' },
    { value: 3, label: 'Tuyển dụng & Đào tạo' },
    { value: 4, label: 'Trách nhiệm độc hại' },
    { value: 5, label: 'Tính công' },
    { value: 6, label: 'Lương' },
    { value: 7, label: 'Nghỉ phép' },
    { value: 8, label: 'Thuế' },
    { value: 9, label: 'Bảo hiểm xã hội' },
    { value: 10, label: 'Thưởng' },
    { value: 11, label: 'Báo cáo' },
    { value: 12, label: 'Tài khoản' },
    { value: 13, label: 'Thông báo' },
    { value: 14, label: 'Cấp áo bảo hộ lao động' },
    { value: 15, label: 'Danh mục công văn' },
    { value: 16, label: 'Quản lý lao động' },
    { value: 17, label: 'Quản lý Văn phòng phẩm' },
    { value: 18, label: 'Danh mục sữa' },
]

export const ModuleRole = {
    // Danh mục
    TimeBlock: 'Thời gian làm việc',
    Department: 'Phòng ban',
    Group: 'Tổ nhóm',
    Academy: 'Trình độ chuyên môn',
    Position: 'Bảng mã nghề',
    IssuerPlace: 'Mã nơi cấp',
    SalaryRate: 'Nhóm bậc lương',
    Product: 'Danh mục sản phẩm khoán',
    AssigmentProduct: 'QĐ đơn giá SP khoán',
    TimeUpSalary: 'Thời gian nâng bậc',
    AdvanceTimeRate: 'Hệ số làm thêm',
    ProtectionUtility: 'Cấp áo bảo hộ lao động',
    ProtectionSize: 'Danh mục cỡ áo',
    ProtectionType: 'Danh mục Loại BHLĐ',
    TimeOffReason: 'Lý do nghỉ',

    // Nhân viên
    Employee: 'Nhân viên chính thức',
    EmployeeOutsource: 'Nhân viên thuê ngoài-thử việc',
    EmployeePartTime: 'Nhân viên tập việc',
    Appointment: 'Quyết định nhân sự',
    SeniorityContract: 'Danh sách CNV đến hạn thâm niên',
    TimeOffMaster: 'Quyết định nhân viên nghỉ',

    // Tuyển dụng & Đào tạo
    Recruitment: 'Tuyển dụng',
    RecruitmentRequirement: 'Yêu cầu tuyển dụng',
    Training: 'Danh mục đào tạo',
    TrainingProcess: 'Quá trình đào tạo',

    // Trách nhiệm & Độc hại
    Responsibility: 'Các loại phụ cấp độc hại',
    ResponsibilityGroup: 'Nhóm trách nhiệm',
    AllowanceTypeResponsibility: 'Danh mục phụ cấp trách nhiệm',
    AllowanceTypeToxic: 'Danh mục phụ cấp độc hại',

    // Chấm công
    TimeSheet: 'Bảng chấm công tổng hợp',
    TimeSheetMonthy: 'Bảng chấm công ngày',
    TimeSheetMonthyDetail: 'Bảng chấm công tháng',
    SalaryRule: 'Quy chế tiền công',

    // lương
    SalaryAdvance: 'Lương chính tạm ứng',
    Salary: 'Lương chính',
    SalaryAssignment: 'Lương khoán',
    SalaryApprentice: 'Lương học việc thuê ngoài',
    SalaryPartTime: 'Lương tập việc',
    ToxicMaster: 'Tiền phụ cấp độc hại',
    InactivityAllowance: 'Trợ cấp thôi việc',
    SubtractionCEP: 'Khấu trừ CEP',

    // Nghỉ phép
    TimeLeaveToxic: 'Bảng phép độc hại theo tổ',
    TimeLeaveToxicEmployeeAdd: 'Bảng phép độc hại bổ sung',
    TimeLeaveSeniority: 'Bảng phép thâm niên',
    TimeLeaveManagement: 'Quản lý nghỉ phép',
    Holiday: 'Thiết lập ngày nghỉ lễ',
    TimeLeaveYear: 'Bảng phép năm',
    TimeLeave: 'Thiết lập Loại phép',

    // Thuế
    EmployeePersonalTax: 'Thuế công nhân viên',
    PersonalTax: 'Thuế thu nhập 1 tháng',
    PersonalIncomeTax: 'Các mức đóng thuế thu nhập',
    SubtractionPersonalTax: 'Khấu trừ quyết toán thuế',

    // Thưởng
    Reward: 'Danh sách các loại thưởng',
    RewardMaster: 'Bảng tiền thưởng tổng hợp',
    RewardRate13: 'Tỉ lệ thưởng tháng 13',
    RewardByDatesigned: 'Bảng kê mức thưởng theo ngày',
    RewardAbc: 'Bảng kê mức thưởng ABC',

    // Bảo hiểm
    MonthlyInsuranceMoney: 'Chi phí BHXH tháng',
    EmployeeJoinInsurance: 'Nhân viên tham gia bảo hiểm',
    ProvideSocialInsurance: 'Danh sách đề nghị cấp sổ BHXH',
    PostalRecord: 'Hồ sơ bưu điện',

    // Báo cáo
    ExpiredSalaryIncreaseReport: 'Báo cáo đáo hạn nâng bậc',
    ExpiredContractReport: 'Báo cáo đáo hạn hợp đồng',
    TrainingProcessReport: 'Báo cáo quá trình đào tạo',
    EmployeeSignedContractReport: 'Báo cáo nhân viên ký HĐLĐ',
    EmployeeAcademyReport: 'Danh sách nhân viên theo trình độ',
    InformationEmployee: 'Lý lịch CNV',
    InformationEmployeeOff: 'Lý lịch CNV đã nghỉ',
    InformationEmployeeParttime: 'Lý lịch tập việc',
    InCityReport: 'Hộ khẩu thành phố-Tỉnh',
    EmployeeContractReport: 'In hợp đồng lao động',
    HumanResourceUsedReport: 'Báo cáo sử dụng lao động',
    HumanResourceReport: 'Báo cáo lao động',
    ExpiredHumanReport: 'Báo cáo lao động đến tuổi hưu',
    TimeSheetReport: 'In DS bảng chấm công',
    HumanOffReport: 'DS lao động nghỉ việc',
    Team: 'DS ban đội',
    BaseDecisionToQuit: 'Căn cứ quyết định thôi việc',
    Sign: 'Danh mục ký tên',
    PersonalTaxReport: 'Báo cáo thuế thu nhập',

    // Công văn
    Documentary: 'Văn thư nhóm chính',
    ContentDocumentaryIsReceived: 'Công văn đến',
    ContentDocumentaryIsSent: 'Công văn đi',
    ContentDocumentaryOfCompany: 'Công văn nội bộ',

    // Quản lý lao động
    FollowDailyLaborSituation: 'Theo dõi tình hình lao động',

    // Quản lý văn phòng phẩm
    WareHouseOfMaterial: 'Kho văn phòng phẩm',
    ImportBillOfMaterial: 'Nhập hàng văn phòng phẩm',
    ExportBillOfMaterial: 'Xuất hàng văn phòng phẩm',
    InventoryReportOfMaterial: 'Báo cáo tồn kho',
    FirstInventoryOfMaterial: 'Số dư đầu kỳ',
    MaterialDetailBookOfStationery: 'Sổ chi tiết vật tư',
    ForwardingDirectoryOfMaterial: 'Danh mục giao nhận văn phòng phẩm',
    Customer: 'Danh sách khách hàng',
    Material: 'Danh sách vật tư',
    MaterialExportReport: 'Bảng kê xuất vpp',
    
    // Danh mục sữa
    Milk: 'Danh mục sữa',
    WareHouseOfMilk: 'Danh mục kho sữa',
    ForwardingDirectoryOfMilk: 'Danh mục giao nhận sữa',
    MaterialDetailBook: 'Sổ chi tiết vật tư',
    FirstInventory: 'Số dư đầu kỳ',
    ImportBillOfMilk: 'Theo dõi nhập sữa',
    ExportBillOfMilk: 'Theo dõi xuất sữa',

    // layout
    Table: 'Table',
    Form: 'Form',
    Card: 'Card',
    Color: 'Color',
    Font: 'Font',

    // Tài khoản
    User: 'Tài khoản',
    Role: 'Phân quyền',

    // Thông báo
    Warning: 'Thông báo',

    TransferPosition: 'Quyết định điều chuyển',
    EmployeeProtectionUtility: 'Nhân viên được cấp BHLĐ',
    CompanyInfor: 'Thông tin công ty',
    // Seniority: 'Danh sách tiền thâm niên',
    DailyPayment: 'Lương ngày', // ko sử dụng nữa
    InsuranceRate: 'Tỉ lệ bảo hiểm', // ko sửa dụng nữa
    InsuranceEmployee: 'Bảo hiểm nhân viên' , // ko sử dụng nữa
    // LivingFee: 'Sinh hoạt phí',
}

export const AcctionModule = {
    Create: 'Thêm mới',
    Edit: 'Cập nhật',
    Listing: 'Xem danh sách',
    Delete: 'Xóa',
    TransferParttimeToOffical: 'Chuyển nhân viên chính thức',
    CreateAccordingToDepartment: 'CreateAccordingToDepartment',
    UpdateProfileEmplopyee: 'Cập nhật thông tin nhân viên',
    WriteSalaryTime: 'Ghi công',
    WriteSalaryE: 'Ghi công E'
}
