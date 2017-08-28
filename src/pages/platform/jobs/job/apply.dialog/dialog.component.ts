import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'apply-dialog',
  templateUrl: './dialog.component.html',
})

export class ApplyDialog {
  constructor(public dialogRef: MdDialogRef<ApplyDialog>) {
  }
}
