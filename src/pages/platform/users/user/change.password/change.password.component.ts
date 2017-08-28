import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../services/service";
import {Md5} from "ts-md5/dist/md5";

@Component({
  selector: 'change-password',
  templateUrl: './change.password.component.html',
})

export class ChangePasswordComponent implements OnInit {
  public validateForm: FormGroup;
  public oldPassword = 'Old Password';
  public newPassword = 'New Password';
  public newPassword2 = 'Retype New Password';


  constructor(private  baseService: BaseService,
              public dialogRef: MdDialogRef<ChangePasswordComponent>,
              @Inject(MD_DIALOG_DATA) public id: number) {
  }

  ngOnInit(): void {
    this.validateForm = new FormGroup({
      'oldPassword': new FormControl(
        null,
        [Validators.minLength(6), Validators.required],
        null),
      'newPassword': new FormControl(
        null,
        [Validators.minLength(6), Validators.required],
        null),
      'newPassword2': new FormControl(
        null,
        [Validators.minLength(6), Validators.required],
        null),
    })
  }

  public checkPasword(){
    return ( this.validateForm.controls['oldPassword'].setErrors({'incorrect': true}))
  }

  public changePassword() {
    if(this.validateForm.value.newPassword!=this.validateForm.value.newPassword2){
      this.validateForm.controls['newPassword'].setErrors({'incorrect': true});
      this.newPassword = "Password does not match";
      this.validateForm.controls['newPassword2'].setErrors({'incorrect': true});
      this.newPassword2 = "Password does not match";
    }
    else if (this.validateForm.valid) {
      this.baseService
        .updateBase('/api/users/' + this.id, {
          "oldPassword": Md5.hashStr(this.validateForm.value.oldPassword),
          "newPassword": Md5.hashStr(this.validateForm.value.newPassword)
        })
        .subscribe(
          response => {
            this.dialogRef.close(true);

          },
          error2 => {
            console.log(error2);
            this.validateForm.controls['oldPassword'].setErrors({'incorrect': true});
            this.oldPassword = "Bad old password";
          });
    }
  }
}
