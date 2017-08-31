import {Component, OnInit} from '@angular/core';
import {Md5} from "ts-md5/dist/md5";
import {BaseService} from "../../services/service";
import {Router} from "@angular/router";
import {UserModel} from "../../model/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersInfoModel} from "../../model/pers.info.model";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public user: UserModel;
  public userInfo: PersInfoModel;
  public errorMessage: string;

  constructor(private  baseService: BaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.errorMessage = "UserName"
    if (localStorage.getItem('id')) {
      this.router.navigate(['platform/about']);
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
      .login('/login', UserModel, {
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
              localStorage.setItem("name", this.user.userName);
              localStorage.setItem("password", this.user.password);
              this.baseService
                .getBase('/api/persinfo/all/' + this.user.id, PersInfoModel)
                .subscribe(
                  response => {
                    this.userInfo = response;
                    if (this.userInfo.img !== null)
                      localStorage.setItem("img", this.userInfo.img)
                    else localStorage.setItem("img", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1hJzWM3QVJlDyR2Ef0JsahD1me4vt7OhhY8YILIlGETf5vWt");
                    this.router.navigate(['platform/about']);
                  },
                  error2 => {
                    if (error2.status == 403) {
                      this.router.navigate(['forbidden']);
                    }
                    console.log(error2)
                  }
                );

            }
          }
          else {
            this.loginForm.controls['userName'].setErrors({'incorrect': true});
            this.loginForm.controls['password'].setErrors({'incorrect': true});
            this.errorMessage = 'Wrong username or password ';
          }
        },
        error2 => console.log(error2),);
  }

}
