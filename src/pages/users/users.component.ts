import {Component, OnInit} from '@angular/core';
import { UsersService} from "../../services/user.service/users.service";
import {UserModel} from "../../model/users.model";
import {Router} from "@angular/router";
@Component({
  selector: 'users-component',
  templateUrl: './users.component.html',
  styleUrls:['./users.component.css'],
})
export class UsersComponent implements OnInit{

  public users: UserModel[];
  constructor(private  usersService:UsersService,private router:Router){}

  public ngOnInit() {
    this.usersService
      .getUsers('/api/persinfo')
      .subscribe(
        response=>{this.users=response},
        error2 => console.log(error2),);
  }


  onSelect(user:UserModel){
    this.router.navigate(['/users',user.getId()]);
  }
}
