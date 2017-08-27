import {Component, OnInit} from '@angular/core';
import {userPersInfoModel} from "../../model/user.persinfo.model";
import {Router} from "@angular/router";
import {MdDialog} from '@angular/material';
import {DeleteConfirmationDialog} from "../deletedialog/dialog.component";
import {CreateUserComponent} from "./createUser/create.user.component";
import {BaseService} from "../../services/service";

@Component({
  selector: 'users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: userPersInfoModel;

  constructor(private  baseService: BaseService,
              private router: Router,
              public dialog: MdDialog) {
  }

  public ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.baseService
      .getBaseAll('/api/persinfo', userPersInfoModel)
      .subscribe(
        response => {
          this.users = response;
        },
        error2 => console.log(error2),);
  }

  onSelectUser(user: userPersInfoModel) {
    this.router.navigate(['/users', user.id]);
  }

  onCreateDialog() {
    let dialogRef = this.dialog.open(CreateUserComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsers();
      }
    });
  }

  openDeleteDialogConfirmation(user: userPersInfoModel) {
    let dialogRef = this.dialog.open(DeleteConfirmationDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteUser(user);
      }
    });
  }

  onDeleteUser(user: userPersInfoModel) {
    this.baseService
      .deleteBase('/api/persinfo/' + user.userId)
      .subscribe(
        response => {
          console.log(response);
          this.getUsers();
        },
        error2 => console.log(error2)
      );
  }
}


