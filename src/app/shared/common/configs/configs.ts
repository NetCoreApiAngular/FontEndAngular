import { MatSnackBarConfig } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { AbstractControl } from '@angular/forms';
import { OwlDateTimeIntl } from 'ng-pick-datetime';
import { moduleActionsModel } from '../../models/role/role.model';

export module Configs {
  const SUFFIX: string = ''; //' $'
  const PADDING = '000000';
  const PREFIX: string = '';

  export const createSuccess = 'Thêm mới thành công';
  export const copySuccess = 'Thêm mới thành công';
  export const updateSuccess = 'Cập nhật thành công';
  export const deleteItem = 'Bạn có thực sự muốn Xóa không?';
  export const deleteSuccess = 'Xóa thành công';
  export const notHavePermission = 'Không có quyền thực hiện chức năng này';
  export const selectValidDateRange = 'Hãy chọn khoảng thời gian thực hiện chức năng';
  export const specialCharacters = '~`@!#$%^&*+=[]\\\';,.{}|":<>?';
  export const notNumber = '1234567890';
  export const ErrorWorkingDays = 'Số ngày làm việc phải lớn hơn 0'
  export const specialCharacter = '^[a-zA-Z0-9_.\\-s]*$';
  export const specialLetter = '^[a-zA-Z_.\\-s]*$';
  export const specialCharactersNotSpace =
    '!`@#$ %^&*()+=-[]\\\';,./{}|":<>? ~_';
  export const specialCharacterUnicodeLow =
    'àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ';
  export const specialCharacterUnicodeUp =
    'ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ';
  export const Regex = {
    Identity: '^[\\d]{9,15}$',
    PersonNaming:
      '^[a-zA-ZsÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀẾỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựýỳỵỷỹ\\s]+$',
    PhoneNumber: '^[^-]*((0[1|2|3|4|5|6|7|8|9])+([0-9]{8,12}))\\b$',
    NotAllowSpecialCharacter: /^(?!.*[`!@#$%^&*~,.<>;':"\/\[\]\|{}()=_+-]).*$/,
    Email: '^\\w+([\\.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$',
    AlphabetAndNumber: '^[a-zA-Z_.0-9\\-s]*$'
  };
  export const languageCodeKey = 'languageCode';
  export const StartYear = 2015;
  export const PageIndex = 1;
  export const DefaultPageSize = 10;
  export const PageSizeList = [5, 10, 20, 50];
  export const Month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  export const VAT = 10;
  export const FileMaximumSize = 5; // MB
  export const DivideItemNumber = 6;
  export const TokenPrefix = 'supplychain';
  export const FileExtensions = ['docx', 'doc', 'pdf'];
  export const FileExtensionsContainer = [/*'xls',*/ 'xlsx'];
  export const ImageExtensions = ['png', 'jpg', 'gif', 'bmp', 'jpeg'];
  export const AllImageExtensions = 'image/*';
  export const FileMaximunSize = 1; // MB
  export const DECIMAL_SEPARATOR: string = '.';
  export const THOUSANDS_SEPARATOR: string = ',';
  export const BLANK: string = '';
  export const COLON: string = ':';

  export const MY_FORMAT_YEAR = {
    parse: {
      dateInput: 'YYYY',
    },
    display: {
      dateInput: 'YYYY',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY',
    },
  };

  export const MONTH_FORMAT = {
    parse: {
      dateInput: 'MM/YYYY',
    },
    display: {
      dateInput: 'MM/YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };

  export const DATE_FORMATS = {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MM YYYY',
      dateA11yLabel: 'DD/MM/YYYY',
      monthYearA11yLabel: 'MM YYYY',
    },
  };

  export const TIME_FORMAT = {
    // for owl date time picker
    fullPickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' },
    datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
    timePickerInput: { hour: 'numeric', minute: 'numeric', hourCycle: 'h23' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  };

  export const YEAR_ONLY = {
    parse: {
      dateInput: 'YYYY',
    },
    display: {
      dateInput: 'YYYY',
      monthYearLabel: 'DD MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'DD MMM YYYY',
    },
  };

  export const FULL_FORMAT = {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'DD MMM YYYY',
      dateA11yLabel: 'dd',
      monthYearA11yLabel: 'DD MMMM YYYY',
    },
  };

  export const fullMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  export const shortMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  export const Stype = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'K',
    'M',
    'N',
    'Z',
  ];
  export const CheckingLabel = {
    checkIn: 'CheckIn',
    checkOut: 'CheckOut'
  }

  export const nationality = [
    {
      value: 1,
      viewValue: 'Việt Nam',
    },
    {
      value: 2,
      viewValue: 'Nước ngoài',
    },
  ]

  export const DocumentaryType = [
    {
      value: 1,
      viewValue: 'Công văn đến',
    },
    {
      value: 2,
      viewValue: 'Công văn đi',
    },
    {
      value: 3,
      viewValue: 'Công văn nội bộ',
    },
  ]

  export const employeeProtectionUtilityStatus = [
    {
      value: 1,
      viewValue: 'Tất cả',
    },
    {
      value: 2,
      viewValue: 'Hiện diện',
    },
    {
      value: 3,
      viewValue: 'Nghỉ việc',
    },
  ]

  export const timeLeaveStatus = [
    {
      value: 1,
      viewValue: 'Hưởng lương',
    },
    {
      value: 2,
      viewValue: 'Không hưởng lương',
    },
    {
      value: 3,
      viewValue: 'Hưởng BHXH',
    },
    {
      value: 4,
      viewValue: 'Đi làm',
    },
    {
      value: 5,
      viewValue: 'Nghỉ phép',
    },
  ]

  export const statusList = [
    {
      value: 1,
      viewValue: 'Không hoạt động',
    },
    {
      value: 2,
      viewValue: 'Hoạt động',
    },
    {
      value: 0,
      viewValue: 'Nghỉ',
    },
  ];

  export const EmployeeType = [
    {
      value: 1,
      viewValue: 'Nhân viên chính thức',
    },
    {
      value: 2,
      viewValue: 'Nhân viên tập việc',
    },
    {
      value: 3,
      viewValue: 'Nhân viên thuê ngoài',
    },
  ];

  export const EmployeeTypeReport = [
    {
      value: 1,
      viewValue: 'Nhân viên chính thức',
    },
    {
      value: 2,
      viewValue: 'Nhân viên tập việc',
    },
    {
      value: 3,
      viewValue: 'Nhân viên thuê ngoài',
    },
    {
      value: 4,
      viewValue: 'Nhân viên thử việc',
    },
  ];

  export const listInactiveReason = [
    {
      value: 1,
      viewValue: 'Đi nghĩa vụ quân sự',
    },
    {
      value: 2,
      viewValue: 'Hết tuổi lao động',
    },
    {
      value: 3,
      viewValue: 'Hết hạn hợp đồng',
    },
    {
      value: 4,
      viewValue: 'Theo đơn xin',
    },
    {
      value: 5,
      viewValue: 'Tự ý bỏ việc',
    },
    {
      value: 6,
      viewValue: 'Bận việc gia đình',
    },
    {
      value: 7,
      viewValue: 'Công việc không phù hợp',
    },
    {
      value: 8,
      viewValue: 'Đi học',
    },
    {
      value: 9,
      viewValue: 'Hoàn cảnh gia đình',
    },
    {
      value: 10,
      viewValue: 'Bệnh chết',
    },
    {
      value: 11,
      viewValue: 'Làm việc khác',
    },
    {
      value: 12,
      viewValue: 'Phụ việc gia đình',
    },
    {
      value: 13,
      viewValue: 'Giải quyết việc gia đình',
    },
    {
      value: 14,
      viewValue: 'Về quê',
    },
    {
      value: 15,
      viewValue: 'Tạm hoãn đi NVQS',
    },
    {
      value: 16,
      viewValue: 'Hết thời gian tạm hoãn HĐLĐ, nay NLĐ xin nghỉ việc',
    },
    {
      value: 17,
      viewValue: 'Lý do khác',
    },
  ];

  export const EmployeeContract = [
    {
      value: '',
      viewValue: 'Tất cả',
    },
    // {
    //   value: 1,
    //   viewValue: 'Chính thức'
    // },
    {
      value: 2,
      viewValue: 'Thuê ngoài',
    },
  ];

  export const EmployeeTemporaryContract = [
    {
      value: 2,
      viewValue: 'Thuê ngoài',
    },
    {
      value: 4,
      viewValue: 'Thử việc',
    },
  ];

  export const EmployeeParttimeContract = [
    {
      value: 3,
      viewValue: 'Tập việc',
    },
    {
      value: 1,
      viewValue: 'Chính thức',
    },
  ];

  export const Marries = [
    {
      value: 1,
      viewValue: 'Độc thân',
    },
    {
      value: 2,
      viewValue: 'Đã kết hôn',
    },
  ];

  export const typePrints = [
    {
      value: 1,
      viewValue: 'In tất cả',
    },
    {
      value: 2,
      viewValue: 'In theo trình độ',
    },
  ];

  export const RewardTypeId = [
    { value: 1, label: 'Quỹ lương' },
    { value: 2, label: 'Khen thưởng' },
    { value: 3, label: 'Phúc lợi' },
  ];

  export const NotificationTypeId = [
    { value: 1, label: 'Quyết định nhân sự' },
    { value: 2, label: 'Công nhân viên đến hạn thâm niên' },
    { value: 3, label: 'Quyết định nhân viên nghỉ' },
    { value: 4, label: 'Đáo hạn hợp đồng' },
    { value: 5, label: 'Đáo hạn nâng lương' },
  ];

  export enum RewardType {
    ABCuoiNam = '1',
    QuaTet = '2',
    Le30Thang4 = '4',
    NghiMat = '5',
    ABGiuaNam = '6',
    Le2Thang9 = '7',
    TienPhep = '8',
    SinhNhatCongTy = 'A',
    TienQuaTet = 'B',
    QuaTetBia = 'C',
    LuongThang13 = 'D',
    ThuongKyNiem35Nam = 'E',
    DCuoiNam = 'M',
    TongHopThuNhap = 'Z'
  }

  export const Genders = [
    { value: 0, label: 'Không rõ' },
    { value: 1, label: 'Nam' },
    { value: 2, label: 'Nữ' },
  ];

  export const PaymentSchedules = [
    { value: 0, label: 'Chưa xác định' },
    { value: 1, label: 'Các ngày trong tuần' },
    { value: 2, label: 'Ngày 15, 30 hàng tháng' },
    { value: 3, label: 'Ngày 10, 20, 30 hàng tháng' },
  ];

  export const ContentType = [
    { value: 1, label: 'Trách nhiệm' },
    { value: 2, label: 'Độc hại' },
  ];

  export const ContractType = [
    { value: 1, label: 'Nhân viên chính thức' },
    { value: 2, label: 'NV Thuê ngoài' },
    { value: 3, label: 'Lao động tập việc' },
    { value: 4, label: 'NV Thử việc' },
    { value: 5, label: 'Nghỉ việc' },
  ];

  export class DefaultIntl extends OwlDateTimeIntl {
    cancelBtnLabel = "Hủy";
    setBtnLabel = "Chọn"
  }

  export const MatSnackBarDefaultConfig: MatSnackBarConfig = {
    duration: 15 * 1000,
    verticalPosition: 'bottom',
    panelClass: 'snack-bar-container',
    horizontalPosition: 'right',
  };

  export function NewGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  export function onGetEmptyObjectValues(
    inputObject: Object,
    isKeepObj: boolean = false
  ): Object {
    var obj = {};
    if (inputObject != null) {
      Object.keys(inputObject).map((key) => {
        obj[key] = isKeepObj ? obj[key] : '';
      });
    }
    return obj;
  }

  export function isValidDate(
    input: any,
    format: string = 'DD/MM/YYYY'
  ): boolean {
    return input instanceof Date || moment(input, format).isValid();
  }
  export function GetDateFormattedEN(
    dateInput: Date | string,
    format: string = 'YYYY-MM-DD'
  ) {
    return dateInput ? moment(dateInput).format(format) : '';
  }
  export function GetDateFormatted(
    dateInput: Date | string,
    format: string = 'DD/MM/YYYY'
  ) {
    return dateInput ? moment(dateInput).format(format) : '';
  }

  export function ParseToDate(
    dateInput: Date | string,
    format: string = 'DD/MM/YYYY'
  ) {
    return dateInput ? moment(dateInput, format).format() : '';
  }

  export function cloneArrayOrObject(
    arrOrObj: Array<any> | Object
  ): Array<any> | Object {
    return JSON.parse(JSON.stringify(arrOrObj));
  }

  export function TransformCurrency(
    value: string | number,
    fractionSize: number = 0
  ): string {
    let [integer, fraction = ''] = (value || '').toString().split('.');

    fraction =
      fractionSize > 0
        ? DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
        : '';

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR);

    if (value == 0 || value == +(0)) {
      let number = 0;
      return number.toString();
    } else {
      return PREFIX + integer + fraction + SUFFIX;
    }
  }

  export function ParseCurrency(
    value: string,
    fractionSize: number = 2
  ): string {
    let [integer, fraction = ''] = (value || '')
      .replace(this.PREFIX, '')
      .replace(this.SUFFIX, '')
      .split(this.DECIMAL_SEPARATOR);

    integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, 'g'), '');

    fraction =
      parseInt(fraction, 10) > 0 && fractionSize > 0
        ? this.DECIMAL_SEPARATOR +
        (fraction + PADDING).substring(0, fractionSize)
        : '';

    return integer + fraction;
  }

  export function validateFile(
    file: File,
    acceptFileExtensions: string[],
    maximumSize: number
  ): string {
    if (!file) {
      return 'File không được để trống.';
    }

    if (file.size > maximumSize * 1024 * 1024) {
      return `Kích thước file không được vượt quá ${maximumSize} MB.`;
    }

    if (file.name !== null && file.name !== '' && file.name !== undefined) {
      let fileExt = file.name.replace(/^.*\./, '');
      if (
        acceptFileExtensions &&
        acceptFileExtensions.length == 1 &&
        acceptFileExtensions[0] == AllImageExtensions
      ) {
        var pattern = /image-*/;
        if (!file.type.match(pattern)) {
          return `File cho phép tải lên: ${acceptFileExtensions.toString()}`;
        }
      } else if (
        acceptFileExtensions &&
        acceptFileExtensions.length > 0 &&
        !acceptFileExtensions.some(
          (x) => x.toUpperCase() == fileExt.toUpperCase()
        )
      ) {
        return `File cho phép tải lên: ${acceptFileExtensions.toString()}`;
      }
    }

    return '';
  }

  export function BytesToSize(bytes: number): string {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(
      Math.floor(Math.log(bytes) / Math.log(1024)).toString(),
      10
    );
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  }


  export function selectFromList(control: AbstractControl) {
    const selection: any = control.value;
    if (typeof selection === 'string' && selection) {
      return { selectFromList: true };
    }
    return null;
  }

  export function GetDateFormattedMonthYear(dateInput: Date | string, format: string = 'MM/YYYY') {
    return dateInput ? moment(dateInput).format(format) : '';
  }

  export const RESPONSIBILITY_TYPE = [
    { type: 1, name: 'Trách nhiêm' },
    { type: 2, name: 'Độc hại' },
  ];

  export enum SalaryTypeEnum {
    // SalaryPartime = "Lương tập việc",
    // SalaryOutsource = "Lương học việc thuê ngoài"
    SalaryPartime = '1',
    SalaryOutsource = '2',
  }

  export enum ContractTypeEnum {
    Office = '1',
    Outsource = '2',
    Partime = '3',
  }

  export function preventNumber(e: KeyboardEvent, allowNegative?: boolean) {
    if (
      [46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }

    // if (allowNegative) {
    //   if (e.keyCode == 189) {
    //     return;
    //   }
    // }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }

  export function deepClone(array: any[]) {
    let result: any[] = [];
    if (array && array.length > 0) {
      result = array.map(item => {
        let data = JSON.stringify(item);
        return JSON.parse(data);
      })
    }
    return result;
  }

  export function compareData(sourceData: any[], targetData: any[]) {
    let source = sourceData.map(item => {
      return JSON.stringify(item)
    })
    let target = targetData.map(item => {
      return JSON.stringify(item)
    })
    let result = []
    if (target && target.length > 0) {
      target.forEach(item => {
        if (!source.some(data => data === item)) {
          result.push(JSON.parse(item))
        }
      })

    }
    return result;
  }

  export function RoleActionFormation(array: any[]) {
    let data = deepClone(array);
    let result: moduleActionsModel[] = [];
    if (array && array.length > 0) {
      let create = data.filter(item => item.action == 'Create');
      let edit = data.filter(item => item.action == 'Edit');
      let listing = data.filter(item => item.action == 'Listing');
      let del = data.filter(item => item.action == 'Delete');
      let other = data.filter(item => item.action != 'Create' && item.action != 'Edit' && item.action != 'Listing' && item.action != 'Delete')
      result = result.concat(create, edit, listing, del, other);
    }
    return result;
  }

  export function sortChange(event: any, searchFilter: any) {
    searchFilter.sortColumn = event.active;
    switch (event.direction) {
      case 'asc':
        searchFilter.sortDirection = '0';
        break;
      case 'desc':
        searchFilter.sortDirection = '1';
        break;
      default:
        searchFilter.sortColumn = null;
        searchFilter.sortDirection = null;
        break;
    }
  }

  export function omit_special_char(event) {
    let checkCharater;
    checkCharater = String.fromCharCode(event.charCode)
    return !/[~`!@#$%\^&*()+=\-\[\]\\';,/{}|\\":<>1234567890\?]/g.test(checkCharater);
  }

  export function nameTransformUppercase(name: string) {
    if (name) {
      name = name.toUpperCase();
      name = name.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      name = name.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      name = name.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      name = name.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      name = name.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      name = name.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      name = name.replace(/Đ/g, "D");
      return name;
    }
    return ''
  }

  export function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
  }

  export function groupByKey(list, key) {
    return list.reduce((hash, obj) => ({ ...hash, [obj[key]] : (hash[obj[key]] || []).concat(obj) }), {})
  }
}
