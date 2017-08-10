import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User, UsersService} from "../../services/user.service/users.service";
@Component({
  selector: 'users-component',
  templateUrl: './users.component.html',
  styleUrls:['./users.component.css'],
})
export class UsersComponent implements OnInit{

  public usersList: any[];
  constructor(private userService: UsersService, private router:Router){

  }

  ngOnInit() {
      this.usersList = this.userService.getAll();
  }

  onSelect(user:User){
    this.router.navigate(['/users',user.id]);
  }

}
