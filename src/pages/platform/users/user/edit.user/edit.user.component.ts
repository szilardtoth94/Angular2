import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {PersInfoModel} from "../../../../../model/pers.info.model";
import {BaseService} from "../../../../../services/service";
import {Router} from "@angular/router";

@Component({
  selector: 'edit-user',
  templateUrl: './edit.user.component.html',
})

export class EditUserComponent implements OnInit {
  public userEditForm: FormGroup;

  constructor(private  baseService: BaseService,
              private router:Router,
              public dialogRef: MdDialogRef<EditUserComponent>,
              @Inject(MD_DIALOG_DATA) public users: PersInfoModel) {
  }

  ngOnInit(): void {
    this.userEditForm = new FormGroup({
      'firstName': new FormControl(
        this.users.firstName,
        [Validators.minLength(2), Validators.required],
        null),
      'lastName': new FormControl(
        this.users.lastName,
        [Validators.minLength(2), Validators.required],
        null),
      'description': new FormControl(
        this.users.description,
        null,
        null),
    })
  }

  public editUser() {
    if (this.userEditForm.valid) {
      this.dialogRef.close(true);
      this.baseService
        .updateBase('/api/persinfo/' + this.users.id, this.userEditForm.value)
        .subscribe(
          response => {
          },
          error2 => {
            if (error2.status == 403) {
              this.router.navigate(['forbidden']);
            }
            console.log(error2);
          });
    }
  }
}
