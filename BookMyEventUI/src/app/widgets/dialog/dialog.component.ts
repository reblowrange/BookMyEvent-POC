import { Component, HostBinding, OnInit } from '@angular/core';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [`
  ::ng-deep nb-layout-column {
    height: 80vw;
  }
`]
})
export class DialogComponent {


  constructor(private toastrService: NbToastrService, private dialogService: DialogService) {
    this.dialogService.info.subscribe(res => {
      this.showToast(res, 'info');
    });
    this.dialogService.success.subscribe(res => {
      this.showToast(res, 'success');
    });
    this.dialogService.warning.subscribe(res => {
      this.showToast(res, 'warning');
    });
    this.dialogService.error.subscribe(res => {
      this.showToast(res, 'danger');
    });
  }

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';


  showToast(msg: string, status: NbComponentStatus) {
    // this.toastrService.show(status, msg, { position: NbGlobalPhysicalPosition.TOP_RIGHT, duration: 0 });
  }
}
