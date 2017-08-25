import {Component, OnInit} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../services/user.service/users.service";

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './create.component.html',
})
export class CreateUserComponent implements OnInit {

  public userCreateForm: FormGroup;

  constructor(private  usersService: UsersService, public dialogRef: MdDialogRef<CreateUserComponent>) {
  }

  ngOnInit(): void {
    this.userCreateForm = new FormGroup({
      'firstName': new FormControl('', Validators.required, null),
      'lastName': new FormControl('', Validators.required, null),
      'description': new FormControl('', null, null),
      'user': new FormGroup({
        'userName': new FormControl('', Validators.required, null),
        'password': new FormControl('', Validators.required, null),
        'lastLogin': new FormControl('', null, null),
        'userRoleId': new FormControl(1, null, null),
      })
    })

  }

  public createUser() {
    console.log(this.userCreateForm.value);
    this.usersService
      .createUser('/api/persinfo', this.userCreateForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        error2 => console.log(error2),);
  }
}
