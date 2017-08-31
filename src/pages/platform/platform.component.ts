import {Component, OnInit, ViewChild} from "@angular/core";
import {MdDialog, MdSidenav} from "@angular/material";
import {Router} from "@angular/router";
import {ChangePasswordComponent} from "./users/user/change.password/change.password.component";
import {PersInfoModel} from "../../model/pers.info.model";

@Component({
  selector: 'platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.css']
})

export class PlatformComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  public imageUrl;
  public users: PersInfoModel;
  public id;

  constructor(private router: Router,
              public dialog: MdDialog) {
  }

  ngOnInit() {

    this.id = localStorage.getItem("id");
    this.imageUrl = localStorage.getItem("img");
  }

  closeSideNav() {
    this.sidenav.close();
  }

  openMyProfile() {
    this.closeSideNav();
    this.router.navigate(['platform/users/' + this.id]);
  }

  onChangePassword() {
    this.closeSideNav();
    this.dialog.open(ChangePasswordComponent, {
      data: this.id,
      width: '250px',
    });
  }

  signOut() {
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    localStorage.removeItem("img");
  }
}
