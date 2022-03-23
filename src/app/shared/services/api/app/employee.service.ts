import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ApiHelper } from 'src/app/shared/services/api-helper';
import { ApiUrl } from '../../api-url/api-url';
import { HttpClient, HttpParams } from '@angular/common/http';
import moment, { Moment } from 'moment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  onCreate(data: any) {
    var form_data = new FormData();
    Object.keys(data).map((key) => {
      if ((data[key] || data[key] == false) && data[key] != null) {
        if (moment.isMoment(data[key])) {
          form_data.append(key, data[key].format('YYYY-MM-DD'));
        } else {
          if (typeof data[key] == 'object') {
            if (key == 'FileImage') {
              form_data.append(key, data[key]);
            } else {
              if (Array.isArray(data[key])) {
                data[key].forEach((element, index) => {
                  Object.keys(element).map((elementKey) => {
                    if (element[elementKey] || element[elementKey] == false) {
                      if (typeof element[elementKey] == 'object') {
                        if (moment.isMoment(element[elementKey])) {
                          form_data.append(
                            `${key}[${index}].${elementKey}`,
                            element[elementKey].format('YYYY-MM-DD')
                          );
                        } else {
                          form_data.append(
                            `${key}[${index}].${elementKey}`,
                            JSON.stringify(element[elementKey])
                          );
                        }
                      } else {
                        form_data.append(
                          `${key}[${index}].${elementKey}`,
                          element[elementKey]
                        );
                      }
                    }
                  });
                });
              } else {
                form_data.append(key, JSON.stringify(data[key]));
              }
            }
          } else {
            form_data.append(key, data[key]);
          }
        }
      }
    });
    form_data.append('employeeId', '0');
    return this.http
      .post(ApiUrl.employeeCreate, form_data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onUpdate(data: any) {
    var form_data = new FormData();
    Object.keys(data).map((key) => {
      if ((data[key] || data[key] == false) && data[key] != null) {
        if (moment.isMoment(data[key])) {
          form_data.append(key, data[key].format('YYYY-MM-DD'));
        } else {
          if (typeof data[key] == 'object') {
            if (key == 'FileImage') {
              form_data.append(key, data[key]);
            } else {
              if (Array.isArray(data[key])) {
                data[key].forEach((element, index) => {
                  Object.keys(element).map((elementKey) => {
                    if (element[elementKey] || element[elementKey] == false) {
                      if (typeof element[elementKey] == 'object') {
                        if (moment.isMoment(element[elementKey])) {
                          form_data.append(
                            `${key}[${index}].${elementKey}`,
                            element[elementKey].format('YYYY-MM-DD')
                          );
                        } else {
                          form_data.append(
                            `${key}[${index}].${elementKey}`,
                            JSON.stringify(element[elementKey])
                          );
                        }
                      } else {
                        form_data.append(
                          `${key}[${index}].${elementKey}`,
                          element[elementKey]
                        );
                      }
                    }
                  });
                });
              } else {
                form_data.append(key, JSON.stringify(data[key]));
              }
            }
          } else {
            form_data.append(key, data[key]);
          }
        }
      }
    });
    return this.http
      .post(ApiUrl.employeeUpdate, form_data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetAll() {
    return this.http
      .get(ApiUrl.employeeGetAll)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetById(employeeId: number) {
    return this.http
      .get(ApiUrl.employeeGetById + `?employeeId=${employeeId}`)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetByCode(employeeCode: any) {
    return this.http
      .get(ApiUrl.employeeGetByCode + `?code=${employeeCode}`)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetByEmployeeCode(employeeCode: any, employeeType: number = 1) {
    return this.http
      .get(ApiUrl.employeeGetByEmployeeCode + `?code=${employeeCode}&employeeType=${employeeType}`)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onRemove(employeeId: number) {
    return this.http
      .post(ApiUrl.employeeDelete + `?employeeId=${employeeId}`, null)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onSearch(queryParams?: any) {
    let httpParams = new HttpParams();
    if (queryParams) {
      Object.keys(queryParams).forEach(key => {
        if ((queryParams[key] && queryParams[key].toString().trim() !== '') || queryParams[key] === 0 || (key == 'status' && queryParams[key] != null)) {
          httpParams = httpParams.append(key, queryParams[key]);
        }
      })
    }
    return this.http
      .get(ApiUrl.employeeSearch, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onSearchType(queryParams?: any) {
    let httpParams = new HttpParams();
    if (queryParams) {
      Object.keys(queryParams).forEach(key => {
        if ((queryParams[key] && queryParams[key].toString().trim() !== '') || queryParams[key] === 0 || (key == 'status' && queryParams[key] != null)) {
          if (Array.isArray(queryParams[key])) {
            for (let i = 0; i < queryParams[key].length; i++) {
              httpParams = httpParams.append(key, queryParams[key][i])
            }
          } else {
            httpParams = httpParams.append(key, queryParams[key]);
          };
          console.log(httpParams);
        }
      })
    }
    return this.http
      .get(ApiUrl.employeeSearch, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onSearchDaily(queryParams?: any) {
    let httpParams = new HttpParams();
    if (queryParams) {
      Object.keys(queryParams).forEach(function (key) {
        if ((queryParams[key] && queryParams[key].toString().trim() !== '') || (key == 'status' && queryParams[key] != null)) {
          httpParams = httpParams.append(key, queryParams[key]);
        }
      })
    }
    return this.http
      .get(ApiUrl.employeeSearchDaily, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onSearchNoPaging(queryParams?: any) {
    let queries = '';
    Object.keys(queryParams).map((key) => {
      if (
        key &&
        queryParams[key] &&
        queryParams[key].toString().trim() !== ''
      ) {
        if (Array.isArray(queryParams[key])) {
          queryParams[key].forEach((element, index) => {
            queries += `${queries == '' ? '?' : '&'
              }${key}[${index}]=${encodeURIComponent(element)}`;
          });
        } else {
          queries += `${queries == '' ? '?' : '&'}${key}=${encodeURIComponent(
            queryParams[key]
          )}`;
        }
      }
    });
    return this.http
      .get(ApiUrl.employeeSearchNoPaging + queries)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onSearchReport(queryParams?: any) {
    let httpParams = new HttpParams();
    if (queryParams) {
      Object.keys(queryParams).forEach(function (key) {
        if ((queryParams[key] && queryParams[key].toString().trim() !== '') || (key == 'status' && queryParams[key] != null)) {
          httpParams = httpParams.append(key, queryParams[key]);
        }
      })
    }
    return this.http
      .get(ApiUrl.employeeSearchReport, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetemployeeCodeDynamic() {
    return this.http
      .post(ApiUrl.getEmployeeCodeDynamic, {})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onCalculateEndDate(dateTime: string, month: number, partTime: boolean = false) {
    // return this.http.post(ApiUrl.employeeCalculateEndDate + `?dateTime=${dateTime}&month=${month}`, {}).pipe(
    return this.http
      .post(
        ApiUrl.employeeCalculateEndDate +
        `?dateTime=${dateTime}&month=${month}&partTime=${partTime}`,
        {}
      )
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onCalculateWorkedYearDateNext(
    salaryRateId?: number,
    stype?: string,
    workCountDate?: any,
    signedNo?: number
  ) {
    let _workCountDate = moment(workCountDate).format('YYYY-MM-DD');
    let httpParams = new HttpParams();
    if (salaryRateId) {
      httpParams = httpParams.append('salaryRateId', salaryRateId.toString());
    }
    if (stype) {
      httpParams = httpParams.append('stype', stype);
    }
    if (workCountDate) {
      httpParams = httpParams.append('workCountDate', _workCountDate);
    }
    if (signedNo) {
      httpParams = httpParams.append('signedNo', signedNo.toString());
    }
    // let dataSubmit = {
    //   salaryRateId: salaryRateId,
    //   stype: stype,
    //   workCountDate: workCountDate,
    // };
    return this.http
      .post(ApiUrl.CalculateWorkedYearDateNext, {}, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onTransferTemporaryToOffical(employeeId: number) {
    return this.http
      .post(ApiUrl.TransferTemporaryToOffical + `?employeeId=${employeeId}`, {})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetEmployeeCodeDynamic() {
    return this.http
      .post(ApiUrl.GetEmployeeCodeDynamic, {})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetContractCodeDynamic() {
    return this.http
      .post(ApiUrl.GetContractCodeDynamic, {})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  // parttime employee

  onSearchParttime(queryParams?: any) {
    let httpParams = new HttpParams();
    if (queryParams) {
      Object.keys(queryParams).forEach(function (key) {
        if ((queryParams[key] && queryParams[key].toString().trim() !== '') || queryParams[key] === 0 || (key == 'status' && queryParams[key] != null)) {
          httpParams = httpParams.append(key, queryParams[key]);
        }
      })
    }
    return this.http
      .get(ApiUrl.EmployeePartTimeSearch, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onSearchPartTimeNoPaging(queryParams?: any) {
    let queries = '';
    Object.keys(queryParams).map((key) => {
      if (
        key &&
        queryParams[key] &&
        queryParams[key].toString().trim() !== ''
      ) {
        if (Array.isArray(queryParams[key])) {
          queryParams[key].forEach((element, index) => {
            queries += `${queries == '' ? '?' : '&'
              }${key}[${index}]=${encodeURIComponent(element)}`;
          });
        } else {
          queries += `${queries == '' ? '?' : '&'}${key}=${encodeURIComponent(
            queryParams[key]
          )}`;
        }
      }
    });
    return this.http
      .get(ApiUrl.EmployeePartTimeSearchNoPaging + queries)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onTransferParttimeToOffical(employeeId: number) {
    return this.http.post(ApiUrl.TransferParttimeToOffical + `?employeeParttimeId=${employeeId}`, {}).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onReCreateEmployee(employeeId: number) {
    return this.http.post(ApiUrl.ReCreateEmployee + `?employeeId=${employeeId}`, {}).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onGetByIdParttime(employeeId: number) {
    return this.http.get(ApiUrl.EmployeePartTimeGetById + `?employeeParttimeId=${employeeId}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onCreateParttime(data: any) {
    var form_data = new FormData();
    Object.keys(data).map((key) => {
      if ((data[key] || data[key] == false) && data[key] != null) {
        if (moment.isMoment(data[key])) {
          form_data.append(key, data[key].format('YYYY-MM-DD'));
        } else {
          if (typeof data[key] == 'object') {
            if (key == 'FileImage') {
              form_data.append(key, data[key]);
            } else {
              if (Array.isArray(data[key])) {
                data[key].forEach((element, index) => {
                  Object.keys(element).map((elementKey) => {
                    if (element[elementKey] || element[elementKey] == false) {
                      if (typeof element[elementKey] == 'object') {
                        if (moment.isMoment(element[elementKey])) {
                          form_data.append(
                            `${key}[${index}].${elementKey}`,
                            element[elementKey].format('YYYY-MM-DD')
                          );
                        } else {
                          form_data.append(
                            `${key}[${index}].${elementKey}`,
                            JSON.stringify(element[elementKey])
                          );
                        }
                      } else {
                        form_data.append(
                          `${key}[${index}].${elementKey}`,
                          element[elementKey]
                        );
                      }
                    }
                  });
                });
              } else {
                form_data.append(key, JSON.stringify(data[key]));
              }
            }
          } else {
            form_data.append(key, data[key]);
          }
        }
      }
    })
    // form_data.append('employeeId', '0');
    return this.http.post(ApiUrl.EmployeePartTimeCreate, form_data).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onUpdateParttime(data: any) {
    var form_data = new FormData();
    Object.keys(data).map((key) => {
      if ((data[key] || data[key] == false) && data[key] != null) {
        if (moment.isMoment(data[key])) {
          form_data.append(key, data[key].format('YYYY-MM-DD'));
        } else {
          if (typeof data[key] == 'object') {
            if (key == 'FileImage') {
              form_data.append(key, data[key]);
            } else {
              if (Array.isArray(data[key])) {
                data[key].forEach((element, index) => {
                  Object.keys(element).map((elementKey) => {
                    if (element[elementKey] || element[elementKey] == false) {
                      if (typeof element[elementKey] == 'object') {
                        if (moment.isMoment(element[elementKey])) {
                          form_data.append(
                            `${key}[${index}].${elementKey}`,
                            element[elementKey].format('YYYY-MM-DD')
                          );
                        } else {
                          form_data.append(
                            `${key}[${index}].${elementKey}`,
                            JSON.stringify(element[elementKey])
                          );
                        }
                      } else {
                        form_data.append(
                          `${key}[${index}].${elementKey}`,
                          element[elementKey]
                        );
                      }
                    }
                  });
                });
              } else {
                form_data.append(key, JSON.stringify(data[key]));
              }
            }
          } else {
            form_data.append(key, data[key]);
          }
        }
      }
    });
    return this.http
      .post(ApiUrl.EmployeePartTimeUpdate, form_data)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onRemoveParttime(employeeId: number) {
    return this.http.post(ApiUrl.EmployeePartTimeDelete + `?employeeParttimeId=${employeeId}`, null).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  onGetEmployeeCodeDynamicParttime() {
    return this.http
      .post(ApiUrl.EmployeePartTimeCodeDynamic, {})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onCalculateEndDateParttime(dateTime: string, month: number) {
    // return this.http.post(ApiUrl.employeeCalculateEndDate + `?dateTime=${dateTime}&month=${month}`, {}).pipe(
    return this.http
      .post(
        ApiUrl.EmployeePartTimeCalculateEndDate +
        `?dateTime=${dateTime}&month=${month}`,
        {}
      )
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onCalculateWorkedYearDateNextParttime(
    salaryRateId?: number,
    stype?: string,
    workCountDate?: any
  ) {
    let httpParams = new HttpParams();
    if (salaryRateId) {
      httpParams = httpParams.append('salaryRateId', salaryRateId.toString());
    }
    if (stype) {
      httpParams = httpParams.append('stype', stype);
    }
    if (workCountDate) {
      httpParams = httpParams.append(
        'workCountDate',
        workCountDate.format('YYYY-MM-DD')
      );
    }
    return this.http
      .post(
        ApiUrl.ParttimeCalculateWorkedYearDateNext,
        {},
        {
          params: httpParams,
        }
      )
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onGetContractCodeDynamicParttime() {
    return this.http
      .post(ApiUrl.ParttimeGetContractCodeDynamic, {})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  onCheckContractCode(contractCode: any, employeeType: number = 1) {
    return this.http
      .post(ApiUrl.GetByCode + `?code=${contractCode}&employeeType=${employeeType}`, {})
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  employeeLabormanagementbook() {
    return this.http
      .get(ApiUrl.employeeLabormanagementbook)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  employeeCalculateTimeUpSalary(
    upSalaryDate?: any,
    nvqsdate?: any,
    returnWorkingDate?: any,
    salaryRateId?: any,
    stype?: any,
    workCountDate?: any
  ) {
    let httpParams = new HttpParams();
    if (upSalaryDate) {
      httpParams = httpParams.append('timeUpSalary', moment(upSalaryDate).format('YYYY-MM-DD'));
    }
    if (nvqsdate) {
      httpParams = httpParams.append('nvqsdate', moment(nvqsdate).format('YYYY-MM-DD'));
    }
    if (returnWorkingDate) {
      httpParams = httpParams.append('returnWorkingDate', moment(returnWorkingDate).format('YYYY-MM-DD'));
    }
    if (salaryRateId) {
      httpParams = httpParams.append('salaryRateId', salaryRateId.toString());
    }
    if (stype) {
      httpParams = httpParams.append('stype', stype);
    }
    if (workCountDate) {
      httpParams = httpParams.append(
        'workCountDate',
        moment(workCountDate).format('YYYY-MM-DD')
      );
    }
    return this.http
      .post(ApiUrl.employeeCalculateTimeUpSalary, {}, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  employeeParttimeGetByEnDate(
    fromDate?: any,
    toDate?: any
  ) {
    let httpParams = new HttpParams();

    if (fromDate) {
      httpParams = httpParams.append('fromDate', moment(fromDate).format('YYYY-MM-DD'));
    }
    if (toDate) {
      httpParams = httpParams.append('toDate', moment(toDate).format('YYYY-MM-DD'));
    }
    return this.http
      .get(ApiUrl.ParttimeGetByEnDate, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  getBySignedByDate(
    fromDate?: any,
    toDate?: any
  ) {
    let httpParams = new HttpParams();

    if (fromDate) {
      httpParams = httpParams.append('fromDate', moment(fromDate).format('YYYY-MM-DD'));
    }
    if (toDate) {
      httpParams = httpParams.append('toDate', moment(toDate).format('YYYY-MM-DD'));
    }
    return this.http
      .get(ApiUrl.GetBySignedByDate, { params: httpParams })
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  getSignedById(employeeId: number) {
    return this.http.get(ApiUrl.GetBySignedById + `?EmployeeParttimeId=${employeeId}`).pipe(
      map(ApiHelper.extractData),
      catchError(ApiHelper.onFail)
    );
  }

  employeeParttimeGetSummary() {
    return this.http
      .get(ApiUrl.ParttimeGetSummary)
      .pipe(map(ApiHelper.extractData), catchError(ApiHelper.onFail));
  }

  createPrintCommitment(id) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('employeeParttimeId', id);

    return this.http.get(ApiUrl.reportsCreatePrintCommitment, {
      params: httpParams,
      responseType: 'blob'
    })
  }
}
