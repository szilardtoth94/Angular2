import {Component, OnInit, ViewChild} from "@angular/core";
import {MdDialog, MdSidenav} from "@angular/material";
import {Router} from "@angular/router";
import {ChangePasswordComponent} from "./users/user/change.password/change.password.component";
import {BaseService} from "../../services/service";
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

  constructor(private baseService: BaseService,
              private router: Router,
              public dialog: MdDialog) {
  }

  ngOnInit() {
    this.baseService
      .getBase('/api/persinfo/all/' + localStorage.getItem("id"), PersInfoModel)
      .subscribe(
        response => {
          this.users = response;
          console.log(this.users.img);
          if (this.users.img!==null)
            this.imageUrl = this.users.img;
          else this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1hJzWM3QVJlDyR2Ef0JsahD1me4vt7OhhY8YILIlGETf5vWt";
          localStorage.setItem("img", this.imageUrl)
        },
        error2 => console.log(error2)
      );


  }

  closeSideNav() {
    this.sidenav.close();
  }

  openMyProfile() {
    this.closeSideNav();
    this.router.navigate(['platform/users/' + localStorage.getItem('id')]);
  }

  onChangePassword() {
    this.closeSideNav();
    let dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: localStorage.getItem('id'),
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  signOut() {
    localStorage.clear();
  }
}
