
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import "rxjs/add/operator/map";
import {JobModel} from "../../model/jobs.model";

@Injectable()
export class Service{

  constructor(private http:Http){}

  public url = 'http://localhost:3000/';
  getAll(endPoint){
    return this.http.get(this.url+endPoint)
      .map((res:Response) => res.json());
  }
}
