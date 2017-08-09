import {Component,OnInit} from "@angular/core";
import {JobsService} from "../../services/job.service/jobs.service";

@Component({
  selector:'jobs-component',
  templateUrl:'./jobs.component.html',
})

export class JobsComponent{
  public jobList: any[];

  constructor(private jobService:JobsService) {
    console.log('****************');
    console.log('creating users component');
  }

  ngOnInit() {
    setTimeout(() => {
      this.jobList = this.jobService.getAllJobs();
    }, 3000)
  }

}
