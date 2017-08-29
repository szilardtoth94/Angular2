import {Component, OnInit} from '@angular/core';
import {Md5} from "ts-md5/dist/md5";
import {BaseService} from "../../services/service";
import {Router} from "@angular/router";
import {UserModel} from "../../model/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public user: UserModel;
  public errorMessage: string;

  constructor(private  baseService: BaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.errorMessage = "UserName"
    if (localStorage.getItem('id')) {
      this.router.navigate(['platform/users']);
    }

    this.loginForm = new FormGroup({
      'userName': new FormControl(
        null,
        [Validators.minLength(2), Validators.required],
        null),
      'password': new FormControl(null,
        [Validators.minLength(2), Validators.required],
        null),
    });
  }

  logIn() {
    this.baseService
      .login('/api/users', UserModel, {
        "userName": this.loginForm.value.userName,
        "password": Md5.hashStr(this.loginForm.value.password)
      })
      .subscribe(
        response => {
          if (response) {
            this.user = response;
            if (this.user.id) {
              localStorage.setItem("id", this.user.id.toString());
              localStorage.setItem("role", this.user.userRoleId.toString())
              this.router.navigate(['platform/about']);
            }
          }
          else {
            this.loginForm.controls['userName'].setErrors({'incorrect': true});
            this.loginForm.controls['password'].setErrors({'incorrect': true});
            this.errorMessage = 'Wrong username or password ' ;
          }
        },
        error2 => console.log(error2),);
  }

}
