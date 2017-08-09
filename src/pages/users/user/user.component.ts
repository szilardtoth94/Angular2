import {Router ,ActivatedRoute} from '@angular/router';
import {OnInit, Component} from '@angular/core';
import {User, UsersService} from "../../../services/user.service/users.service";

@Component({
    selector:"user-component",
    templateUrl:'./user.component.html'
})

export class UserComponent implements OnInit{

  id: number;
  private sub: any;
  public user :User;
  constructor(private route: ActivatedRoute,private router:Router,private userService: UsersService ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.user = this.userService.getUser(this.id);
    });
  }

  goToUsers(){
    this.router.navigate(['/users']);
  }

}
