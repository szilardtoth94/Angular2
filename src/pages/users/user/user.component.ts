import {Router, ActivatedRoute} from '@angular/router';
import {OnInit, Component} from '@angular/core';
import {UsersService} from "../../../services/user.service/users.service";
import {UserModel} from "../../../model/users.model";

@Component({
  selector: "user-component",
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  id: number;
  private sub: {};
  public users: UserModel;

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) {
  }

  ngOnInit() {
    console.log(this.id);
    this.sub = this.route.params.subscribe(
      params => {
        this.id = +params['id'];

      });
    this.usersService.getUsersById('/api/persinfo/all/' + this.id)
      .subscribe(
        response => {
          console.log(response);
          this.users = response;
        },
        error2 => console.log(error2),);
    ;
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

}
