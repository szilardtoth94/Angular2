import { ActivatedRoute} from '@angular/router';
import {OnInit, OnChanges,Component} from '@angular/core';
import {UsersService} from "../../../services/user.service/users.service";
import {UserModel} from "../../../model/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "user-update-component",
  templateUrl: './user.update.component.html',
  styleUrls: ['./user.update.component.css']
})

export class UserUpdateComponent implements OnInit {
  public id2: number;
  public users: UserModel;
  public updateUserForm:FormGroup;
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
          console.log(this.users);

        },
        error2 => console.log(error2)
      );
    this.updateUserForm = new FormGroup({
      'firstName': new FormControl(null,Validators.required,null),
      'lastName': new FormControl(null,Validators.required,null),
      'description': new FormControl(null,Validators.required,null),
    });

  }

}
