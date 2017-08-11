
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class JobsService{
  constructor(private http:Http){}

  getJobs(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map((res:Response) => res.json());
  }
}
