import {Component,OnInit} from "@angular/core";
import {JobsService} from "../../services/job.service/jobs.service";
import {JobModel} from "../../model/jobs.model";


@Component({
  selector:'jobs-component',
  templateUrl:'./jobs.component.html',
  styleUrls:['./jobs.component.css']
})


export class  JobsComponent  implements OnInit {
  public jobs: JobModel[];

  constructor(private  jobsService: JobsService) {
  }

  public ngOnInit() {
    this.jobsService
      .getJobs('/api/jobs')
      .subscribe(
        response => {
          this.jobs = response
        },
        error2 => console.log(error2),);
  }

}

