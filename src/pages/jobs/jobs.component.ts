import {Component,OnInit} from "@angular/core";
import {JobsService} from "../../services/job.service/jobs.service";
import {JobModel} from "../../model/jobs.model";

@Component({
  selector:'jobs-component',
  templateUrl:'./jobs.component.html',
})


export class  JobsComponent  implements OnInit{
  public jobs: JobModel[];
  constructor(private  jobsService:JobsService){}

  public ngOnInit(){
    this.jobsService.getJobs()
      .subscribe(
      (response)=>{this.jobs = response;},
      (error)=>{console.log(error)},
    ()=>{console.log('finally');}
    );
  }
}

