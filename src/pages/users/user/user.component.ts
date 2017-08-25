import { ActivatedRoute} from '@angular/router';
import {OnInit, Component} from '@angular/core';
import {UsersService} from "../../../services/user.service/users.service";
import {PersInfoModel} from "../../../model/pers.info.model";

@Component({
  selector: "user-component",
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  public id2: number;
  public users: PersInfoModel;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService) {
  }


  ngOnInit(): void {

    this.route.params.subscribe(
      params => {
        this.id2 = +params['id'];

      });

    this.usersService.getUsersById('/api/persinfo/all/' + this.id2)
      .subscribe(
        response => {
          this.users = response;
          console.log(this.users)
        },
        error2 => console.log(error2)
      );
  }

}
