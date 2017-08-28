import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ChangePasswordComponent} from "../../platform/users/user/change.password/change.password.component";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
})
export class PersonalInformationComponent implements OnInit {
  public imageUrl;
  public myId;

  constructor( private router: Router,
               public dialog: MdDialog) {
  }

  ngOnInit() {
    this.myId = localStorage.getItem('id');
    this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1hJzWM3QVJlDyR2Ef0JsahD1me4vt7OhhY8YILIlGETf5vWt";
  }

  openMyProfile(){
    this.router.navigate(['platform/users/'+this.myId]);
  }

  onChangePassword() {
    let dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: this.myId,
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
