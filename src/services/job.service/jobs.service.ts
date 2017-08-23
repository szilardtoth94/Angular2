import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {JobModel} from "../../model/jobs.model";
import {BaseService} from "../service"

@Injectable()
export class JobsService {

  constructor(private baseService: BaseService) {
  }

  public url = 'http://localhost:5000/api';

  getJobs(endpoint) {
    return (this.baseService.getBase(endpoint, JobModel));
  }

}

