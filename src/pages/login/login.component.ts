import {Component, OnInit} from '@angular/core';
import {Md5} from "ts-md5/dist/md5";
import {BaseService} from "../../services/service";
import {Router} from "@angular/router";
import {UserModel} from "../../model/user.model";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public username;
  public password;
  public incorrect =false;
  public user: UserModel;

  constructor(private  baseService: BaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('id')) {
      this.router.navigate(['platform/users']);
    }
  }

  logIn() {
    this.baseService
      .login('/api/users', UserModel, {"userName": this.username, "password": Md5.hashStr(this.password)})
      .subscribe(
        response => {
          if (response) {
            this.user = response;
            if (this.user.id) {
              localStorage.setItem("id", this.user.id.toString());
              localStorage.setItem("role", this.user.userRoleId.toString())
              this.router.navigate(['platform/users']);
            }
          }
          else{
            this.incorrect=true;
            this.password=null;
          }
        },
        error2 => console.log(error2),);
  }

}
