import {
  HighlightTextDirective,
  EqualValidator,
  InputFocusDirective,
  NoWhitespaceDirective,
  DateComparison,
  TimeComparison,
  OnlyNumber,
  CalendarFocusDirective,
  DisplayContentDirective,
  TextAreaDirective,
  CurrencyFormatDirective,
  DecimalDirective,
  PercentDirective,
  PerfectScrollbarDirective,
  RangeNumberValidator,
  ImageCache,
  CustomDateFormatMonthDirective, 
  SpecialCharacterValidatorDirective, 
  SpecialSpaceValidatorDirective, 
  SpecialUnicodeValidatorDirective,
  FilterAutoComplete,
  HhmmDirective,
  InputWidthAuto,
  CustomYearFormatDirective,
  DateFormatValidatorDirective,
} from './directives';
import { UpperCaseTextDirective } from './directives/convert-text-uppercase/convert-uppercase.directive';
import { DateMonthFormatValidatorDirective } from './directives/date-format/dateMonthFormatValidator.directive';
import { SpecialCharacterNumberValidatorDirective } from './directives/special-character/special-character-number-validator.directive';
import { SpecialCharacterLetterValidatorDirective } from './directives/special-character/special-character-letter-validator.directive';
import { NumericDirective } from './directives/only-number/numeric.directive';


export const SharedDirectives = [
  HighlightTextDirective,
  EqualValidator,
  InputFocusDirective,
  NoWhitespaceDirective,
  DateComparison,
  TimeComparison,
  OnlyNumber,
  CalendarFocusDirective,
  DisplayContentDirective,
  TextAreaDirective,
  CurrencyFormatDirective,
  DecimalDirective,
  PercentDirective,
  PerfectScrollbarDirective,
  RangeNumberValidator,
  CustomDateFormatMonthDirective,
  SpecialCharacterValidatorDirective,
  SpecialUnicodeValidatorDirective,
  SpecialSpaceValidatorDirective,
  ImageCache,
  FilterAutoComplete,
  UpperCaseTextDirective,
  HhmmDirective,
  InputWidthAuto,
  CustomYearFormatDirective,
  DateFormatValidatorDirective,
  DateMonthFormatValidatorDirective,
  SpecialCharacterNumberValidatorDirective,
  SpecialCharacterLetterValidatorDirective,
  NumericDirective
];
