import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {UserModel} from "../../model/users.model";
import {BaseService} from "../service"

@Injectable()
export class UsersService {

  constructor(private baseService: BaseService) {
  }

  public url = 'http://localhost:5000/api';

  getUsers(endpoint) {
    return (this.baseService.getBaseAll(endpoint, UserModel));
  }

  getUsersById(endpoint) {
    return (this.baseService.getBase(endpoint, UserModel));
  }

}

