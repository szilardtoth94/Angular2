
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import "rxjs/add/operator/map";
import {JobModel} from "../../model/jobs.model";

@Injectable()
export class JobsService{

  constructor(private http:Http){}

  public url = 'http://localhost:3000/jobs';
  getJobs(){
    return this.http.get(this.url)
      .map((res:Response) => res.json().map((job) => new JobModel(job)));
  }
}
