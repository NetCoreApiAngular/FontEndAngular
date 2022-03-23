import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Configs } from 'src/app/shared/common/configs/configs';
import { ClientState } from 'src/app/shared/services/client/client-state';

import { RoleService } from 'src/app/shared/services/api/app/role.service';
import { DialogService } from 'src/app/shared/services/client/dialog.service';
import { DepartmentService } from 'src/app/shared/services/api/app/department.service';

import { DepartmentModel } from 'src/app/shared/models/department/department.model';
import { DialogData, MessageType, SnackbarData } from 'src/app/shared/models/material/material.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-department-view',
    templateUrl: './department-view.component.html',
})
export class DepartmentViewComponent implements OnInit {
    department: DepartmentModel = new DepartmentModel();
    departmentId: number;
    loading: boolean;
    constructor(private _route: ActivatedRoute,
        private _departmentService: DepartmentService,
        private _router: Router,
        private _clientState: ClientState,
        private dialogService: DialogService,
        public roleService: RoleService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            this.departmentId = params['id'];
            if (this.departmentId) {
                this._clientState.isBusy = true;
                this._departmentService.onGetById(this.departmentId).subscribe(res => {
                    this._clientState.isBusy = false;
                    this.department = res.content;
                }, err => {
                    this._clientState.isBusy = false;
                    this._router.navigate(['/Nhon-hoa/Phong-ban/Danh-sach']);
                })
            }
        })
    }

    onUpdateDepartment() {
        if (!this.roleService.actionIsAllow('Department', 'Edit', true)) {
            return;
        }
        this._router.navigate(['/Nhon-hoa/Phong-ban/Cap-nhat/' + this.department.departmentId])
    }

    removeDepartment() {
        if (!this.roleService.actionIsAllow('Department', 'Delete', true)) {
            return;
        }
        let data = <DialogData>{
            content: Configs.deleteItem
        };
        this.dialogService.onOpenConfirmDialog(data, (isConfirm: boolean) => {
            if (isConfirm) {
                this._clientState.isBusy = true;
                this._departmentService.onDelete(this.departmentId).subscribe(
                    res => {
                        this._clientState.isBusy = false;
                        let data = <SnackbarData>{
                            content: Configs.deleteSuccess,
                            type: MessageType.Success
                        };
                        this._router.navigate(['/Nhon-hoa/Phong-ban/Danh-sach'])
                        this.dialogService.onOpenInformMessageSnackBar(data);
                    }, error => {
                        this._clientState.isBusy = false;
                    })
            }
        })
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
