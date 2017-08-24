import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {UserModel} from "../../model/user.model";
import {BaseService} from "../service"
import {AllUserModel} from "../../model/all.users.model";

@Injectable()
export class UsersService {

  constructor(private baseService: BaseService) {
  }

  public url = 'http://localhost:5000/api';

  getUsers(endpoint) {
    return (this.baseService.getBaseAll(endpoint, AllUserModel));
  }

  getUsersById(endpoint) {
    return (this.baseService.getBase(endpoint, UserModel));
  }

}

