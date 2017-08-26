import {Component,OnInit} from "@angular/core";
import {JobModel} from "../../model/jobs.model";
import {BaseService} from "../../services/service";


@Component({
  selector:'jobs-component',
  templateUrl:'./jobs.component.html',
  styleUrls:['./jobs.component.css']
})


export class  JobsComponent  implements OnInit {
  public jobs: JobModel[];

  constructor(private  baseService: BaseService) {
  }

  public ngOnInit() {
    this.baseService
      .getBaseAll('/api/jobs', JobModel)
      .subscribe(
        response => {
          this.jobs = response
        },
        error2 => console.log(error2),);
  }

}

