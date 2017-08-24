import {Component, OnInit} from '@angular/core';
import { UsersService} from "../../services/user.service/users.service";
import {AllUserModel} from "../../model/all.users.model";
import {Router} from "@angular/router";
@Component({
  selector: 'users-component',
  templateUrl: './users.component.html',
  styleUrls:['./users.component.css'],
})
export class UsersComponent implements OnInit{

  public users: AllUserModel;
  constructor(private  usersService:UsersService,private router:Router){}

  public ngOnInit() {
    this.usersService
      .getUsers('/api/persinfo')
      .subscribe(
        response=>{this.users=response},
        error2 => console.log(error2),);
  }


  onSelect(user: AllUserModel){
    this.router.navigate(['/users',user.getId()]);
  }
}
