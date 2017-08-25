import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {PersInfoModel} from "../../model/pers.info.model";
import {BaseService} from "../service"
import {userPersInfoModel} from "../../model/user.persinfo.model";

@Injectable()
export class UsersService {

  constructor(private baseService: BaseService) {
  }

  getUsers(endpoint) {
    return (this.baseService.getBaseAll(endpoint, userPersInfoModel));
  }

  getUsersById(endpoint) {
    return (this.baseService.getBase(endpoint, PersInfoModel));
  }

  deleteUser(endpoint){
    return (this.baseService.deleteBase(endpoint));
  }

  createUser(endpoint,body){
    return (this.baseService.createBase(endpoint,body));
  }

}

