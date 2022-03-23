import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReusableService } from '../../services/api/app/reusable.service';
import { ClientState } from '../../services/client/client-state';
import { DialogData, SnackbarData, MessageType } from '../../models/material/material.model';
import { DialogService } from '../../services/client/dialog.service';

@Component({
    selector: 'reusable-detail-icon',
    templateUrl: './detail-icon.component.html',
})
export class ReusableDetailIconComponent implements OnInit{

    @Input() goBackUrl : string;
    @Input() updateUrl : string;
    @Input() deleteUrl : string;
    @Input() deleteParam : string;
    @Input() id : number;
    @Input() deleteMessage : string;
    @Input() deleteSuccess : string;
    @Input() isShowUpdate : boolean = true;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _reusableService : ReusableService,
        private _clientState : ClientState,
        private dialogService : DialogService
    ) { }
    

    ngOnInit(): void {

    }

    onGoBack(){
        this._router.navigate([this.goBackUrl])
    }

    onUpdate(){
        this._router.navigate([this.updateUrl])
    }

    onRemove(){
        let data = <DialogData>{
            content: this.deleteMessage
        };

        this.dialogService.onOpenConfirmDialog(data, (isConfirm: boolean) => {
            if (isConfirm) {
                this._clientState.isBusy = true;
                this._reusableService.onDelete(this.deleteUrl , this.deleteParam , this.id).subscribe(
                    res => {
                        this._clientState.isBusy = false;
                        let data = <SnackbarData>{
                            content: this.deleteSuccess,
                            type: MessageType.Success
                        };
                        this._router.navigate([this.goBackUrl])
                        this.dialogService.onOpenInformMessageSnackBar(data);
                        }, error => {
                            this._clientState.isBusy = false;
                })
            }
        })
    }
}