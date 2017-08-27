import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {PersInfoModel} from "../../../../model/pers.info.model";
import {BaseService} from "../../../../services/service";

@Component({
  selector: 'edit-user',
  templateUrl: './edit.component.html',
})
export class EditUserComponent implements OnInit {

  public userEditForm: FormGroup;

  constructor(private  baseService: BaseService, public dialogRef: MdDialogRef<EditUserComponent>, @Inject(MD_DIALOG_DATA) public users: PersInfoModel) {
  }

  ngOnInit(): void {
    this.userEditForm = new FormGroup({
      'firstName': new FormControl(this.users.firstName, [Validators.minLength(2), Validators.required], null),
      'lastName': new FormControl(this.users.lastName, [Validators.minLength(2), Validators.required], null),
      'description': new FormControl(this.users.description, null, null),
      'user': new FormGroup({
        'userName': new FormControl(this.users.user.userName, [Validators.minLength(6), Validators.required], null),
        'password': new FormControl(this.users.user.password, [Validators.minLength(6), Validators.required], null),
        'lastLogin': new FormControl(this.users.user.lastLogin, null, null),
        'userRoleId': new FormControl(this.users.user.userRoleId, null, null),
        'id': new FormControl(this.users.user.id, null, null),
      })
    })

  }

  public editUser() {
    if (this.userEditForm.valid) {
      this.dialogRef.close(true);
      console.log(this.userEditForm.value);
      this.baseService
        .updateBase('/api/persinfo/' + this.users.id, this.userEditForm.value)
        .subscribe(
          response => {
            console.log(response);
          },
          error2 => console.log(error2),);
    }
  }
}
