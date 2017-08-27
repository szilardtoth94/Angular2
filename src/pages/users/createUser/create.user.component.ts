import {Component, OnInit} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BaseService} from "../../../services/service";
import {Md5} from "ts-md5/dist/md5";

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './create.component.html',
})
export class CreateUserComponent implements OnInit {
  public userCreateForm: FormGroup;

  constructor(private  baseService: BaseService,
              public dialogRef: MdDialogRef<CreateUserComponent>) {
  }

  ngOnInit(): void {
    this.userCreateForm = new FormGroup({
      'firstName': new FormControl(
        null,
        [Validators.minLength(2), Validators.required],
        null),
      'lastName': new FormControl(null,
        [Validators.minLength(2),
          Validators.required],
        null),
      'description': new FormControl(
        null,
        null,
        null),
      'user': new FormGroup({
        'userName': new FormControl(
          null,
          [Validators.minLength(6), Validators.required],
          null),
        'password': new FormControl(
          null,
          [Validators.minLength(6), Validators.required],
          null),
        'lastLogin': new FormControl(
          null,
          null,
          null),
        'userRoleId': new FormControl(
          1,
          null,
          null),
      })
    })
  }

  public createNewUser() {
    if (this.userCreateForm.valid) {
      this.dialogRef.close(true);
      this.userCreateForm.value.user.password = Md5.hashStr(this.userCreateForm.value.user.password);
      this.baseService
        .createBase('/api/persinfo', this.userCreateForm.value)
        .subscribe(
          response => {
            console.log(response);
          },
          error2 => console.log(error2),);
    }
  }
}
