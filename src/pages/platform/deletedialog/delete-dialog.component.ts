import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './delete-dialog.component.html',
})

export class DeleteConfirmationDialog {
  constructor(public dialogRef: MdDialogRef<DeleteConfirmationDialog>) {
  }
}
