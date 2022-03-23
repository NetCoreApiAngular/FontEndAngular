import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { Configs } from 'src/app/shared/common/configs/configs';
import { ClientState } from 'src/app/shared/services/client/client-state';
import { DialogService } from 'src/app/shared/services/client/dialog.service';
import { DepartmentService } from 'src/app/shared/services/api/app/department.service';
import { DepartmentModel } from 'src/app/shared/models/department/department.model';
import { MessageType, SnackbarData } from 'src/app/shared/models/material/material.model';
import { RoleService } from 'src/app/shared/services/api/app/role.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-department-add',
    templateUrl: './department-add.component.html',
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: Configs.DATE_FORMATS },
    ],
})
export class DepartmentAddComponent implements OnInit {

    departmentModel: DepartmentModel;
    departmentId: number;
    isUpdateMode: boolean;
    loading: boolean;
    createForm: any;
    timeBlockList: any;
    trainingList: any;
    statusList = Configs.statusList;
    constructor(private _fb: FormBuilder,
        private _departmentService: DepartmentService,
        private _dialogService: DialogService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _clientState: ClientState,
        private roleService: RoleService,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        this.createAddForm();
        this._route.params.subscribe(params => {
            this.departmentId = params['id'];
            if (this.departmentId) {
                this._clientState.isBusy = true;
                this.isUpdateMode = true;
                this._departmentService.onGetById(this.departmentId).subscribe(res => {
                    this._clientState.isBusy = false;
                    this.departmentModel = res.content;
                    this.createForm.patchValue(this.departmentModel);
                }, err => {
                    this._clientState.isBusy = false;
                    this._router.navigate(['/Nhon-hoa/Phong-ban/Danh-sach']);
                })
            }
        })
    }

    createAddForm() {
        this.createForm = this._fb.group({
            code: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.\\-\s]*$")]],
            name: ['', Validators.required],
            description: [''],
            status: [false],
            num: '',
            isCalculateSalaryAssignment: [false]
        })
    }

    get name() {
        return this.createForm.get('name');
    }

    get code() {
        return this.createForm.get('code');
    }

    get status() {
        return this.createForm.get('status');
    }

    get isCalculateSalaryAssignment() {
        return this.createForm.get('isCalculateSalaryAssignment')
    }

    onSubmit(f) {
        if (this.isUpdateMode) {
            this._clientState.isBusy = true;
            const updatedDepartment = {
                ...this.createForm.value,
                departmentId: +this.departmentId
            };
            this._departmentService.onUpdate(updatedDepartment).subscribe(res => {
                this._clientState.isBusy = false;
                this.handleSuccess();
            }, error => {
                this._clientState.isBusy = false;
            })
        } else {
            this._clientState.isBusy = true;
            this._departmentService.onCreate(this.createForm.value).subscribe(res => {
                this._clientState.isBusy = false;
                this.handleSuccess();
            }, error => {
                this._clientState.isBusy = false;
            })
        }

    }

    handleSuccess() {
        this.goBack()
        let data = <SnackbarData>{
            content: this.isUpdateMode ? Configs.updateSuccess : Configs.createSuccess,
            type: MessageType.Success
        };
        this._dialogService.onOpenInformMessageSnackBar(data);
    }

    goBack() {
        let prevUrl = this.roleService.prevPageUrl.value
        if (prevUrl && prevUrl.includes('Phong-ban/Danh-sach')) {
            this.location.back();
        } else {
            this._router.navigate(['/Nhon-hoa/Phong-ban/Danh-sach']);
        }
    }
}
