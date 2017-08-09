
import {Injectable} from "@angular/core";
export class User {
  constructor(public id:number, public name:string){}
}

const usersList =[
  new User(1,'Szilard'),
  new User(2,'Szilard'),
  new User(3,'Szilard'),
  new User(4,'Szilard'),
  new User(5,'Szilard'),
  new User(6,'Szilard'),
  new User(7,'Szilard'),
];

@Injectable()
export class  UsersService {

    public getAll(){
      return usersList;
    }

    public getUser(id:number){
      const user = usersList.find((userInfo) => userInfo.id === id);

      return user ;
    }

}
