import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/user.service/users.service";
import {userPersInfoModel} from "../../model/user.persinfo.model";
import {Router} from "@angular/router";
import {MdDialog} from '@angular/material';
import {DialogResultExampleDialog} from "./deletedialog/dialog.component";
import {CreateUserComponent} from "./createUser/create.user.component";


@Component({
  selector: 'users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  public users: userPersInfoModel;
  selectedOption: string;
  private createUser: boolean = false;

  constructor(private  usersService: UsersService, private router: Router,public dialog: MdDialog) {
  }

  public getUsers() {
    this.usersService
      .getUsers('/api/persinfo')
      .subscribe(
        response => {
          //console.log(response);
          this.users = response;
        },
        error2 => console.log(error2),);
  }

  public ngOnInit() {
    this.getUsers();
  }


  onSelectUser(user: userPersInfoModel) {
    this.router.navigate(['/users', user.id]);
  }


  openDialog(user: userPersInfoModel) {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      if(result){
        this.onDeleteUser(user);
      }
    });
  }

  onDeleteUser(user: userPersInfoModel) {;
    this.usersService.deleteUser('/api/persinfo/' +user.userId )
      .subscribe(
        response => {
          console.log(response);
          this.getUsers();
        },
        error2 => console.log(error2)
      );
  }

  open() {
    let dialogRef = this.dialog.open(CreateUserComponent,{
      width:'40%',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      if(result){
        this.getUsers();
      }
    });
  }

}


