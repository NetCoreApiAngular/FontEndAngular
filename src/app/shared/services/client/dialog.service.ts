import { Injectable } from '@angular/core';
import { SnackBarComponent, MaterialConfirmDialogComponent } from 'src/app/shared/controls';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Configs } from 'src/app/shared/common/configs/configs';
import { SnackbarData, DialogData, MessageType } from 'src/app/shared/models/material/material.model';
import { Router, NavigationStart } from '@angular/router';

export interface IDialogInterface {
  onOpenInformMessageSnackBar(data: SnackbarData, callBack?: Function): void;
  onOpenConfirmDialog(data: DialogData, callBack?: Function): void;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService implements IDialogInterface {
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        snackBar.dismiss();
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  onOpenInformMessageSnackBar = (data: SnackbarData, callBack?: Function) => {
    let duration = data.type == MessageType.Success ? 3000 : Configs.MatSnackBarDefaultConfig.duration;
    let config = { ...Configs.MatSnackBarDefaultConfig, duration };
    const snackBarRef = this.snackBar.openFromComponent(SnackBarComponent, {
      ...config,
      data: data
    });
    if (callBack) {
      snackBarRef.afterDismissed().subscribe(res => {
        callBack(res.dismissedByAction);
      });
    }
  };

  onOpenConfirmDialog = (data: DialogData, callBack?: Function) => {
    const dialogRef = this.dialog.open(MaterialConfirmDialogComponent, {
      data: data
    });
    if (callBack) {
      dialogRef.afterClosed().subscribe(confirm => {
        callBack(confirm);
      });
    }
  };
}
