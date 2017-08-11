import {Component,OnInit} from "@angular/core";
import {JobsService} from "../../services/job.service/jobs.service";

@Component({
  selector:'jobs-component',
  templateUrl:'./jobs.component.html',
})

export class  JobsComponent {
  constructor(private  jobsService:JobsService){}
  profile={};
  loadJobs(){
    this.jobsService.getJobs().subscribe(data=>this.profile = data);
  }
}

