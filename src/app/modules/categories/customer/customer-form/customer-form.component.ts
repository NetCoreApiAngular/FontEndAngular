import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Configs } from 'src/app/shared/common/configs/configs';
import { MessageType, SnackbarData } from 'src/app/shared/models/material/material.model';
import { ApiUrl } from 'src/app/shared/services/api-url/api-url';
import { ReusableService } from 'src/app/shared/services/api/app/reusable.service';
import { RoleService } from 'src/app/shared/services/api/app/role.service';
import { ClientState } from 'src/app/shared/services/client/client-state';
import { DialogService } from 'src/app/shared/services/client/dialog.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  isUpdateMode: boolean = false;
  formData: FormGroup = this.fb.group({
    id: 0,
    name: ['', Validators.required],
    code: ['', Validators.required],
    taxCode: [''],
    description: '',
  })
  constructor(
    public clientState: ClientState,
    public roleService: RoleService,
    private reusableService: ReusableService,
    private dialogService: DialogService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    ) { 
      this.route.params.subscribe(
        params => {
          if(params['id']) {
            this.id.setValue(params['id']);
            this.isUpdateMode = true;
            this.onGetDetail();
          }
        }
      )
  }

  ngOnInit(): void {
  }

  onGetDetail() {
    this.clientState.isBusy = true;
    this.reusableService.onGetById(ApiUrl.getCustomerDetail, 'CustomerId', this.id.value).subscribe(
      res => {
        this.clientState.isBusy = false;
        this.formData.patchValue(res.content);
      }, error => {
        this.clientState.isBusy = false;
      }
    )
  }

  onSubmit() {
    let data = {
      id: +this.id.value,
      code: this.code.value,
      taxCode: this.taxCode.value,
      name: this.name.value,
      description: this.description.value,
    }
    this.clientState.isBusy = true;
    if (this.isUpdateMode) {
      this.reusableService.onUpdate(ApiUrl.updateCustomer, data).subscribe(
        res => {
          this.onHandleSuccess();
        }, error => {
          this.clientState.isBusy = true;
        }
      )
    } else {
      this.reusableService.onCreate(ApiUrl.createCustomer, data).subscribe(
        res => {
          this.onHandleSuccess();
        }, error => {
          this.clientState.isBusy = true;
        }
      )
    }
  }

  onHandleSuccess() {
    this.clientState.isBusy = false;
    this.onBack();
    this.dialogService.onOpenInformMessageSnackBar(<SnackbarData>{
      content: this.isUpdateMode? Configs.updateSuccess : Configs.createSuccess,
      type: MessageType.Success
    })
  }

  onBack() {
    if (!this.roleService.actionIsAllow('Customer', 'Listing', true)) {
      return;
    }
    this.router.navigate(['Nhon-hoa/Danh-sach-khach-hang/Danh-sach']);
  }

  get id() {
    return this.formData.controls.id
  }

  get name() {
    return this.formData.controls.name
  }

  get code() {
    return this.formData.controls.code
  }

  get taxCode() {
    return this.formData.controls.taxCode
  }

  get description() {
    return this.formData.controls.description
  }

}
