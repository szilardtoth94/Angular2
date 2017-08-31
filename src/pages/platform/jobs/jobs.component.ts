import {Component, OnInit} from "@angular/core";
import {JobModel} from "../../../model/jobs.model";
import {BaseService} from "../../../services/service";
import {Router} from "@angular/router";
import {DeleteConfirmationDialog} from "../deletedialog/delete-dialog.component";
import {MdDialog} from "@angular/material";
import {CreateJob} from "./create.job/create-job.component";

@Component({
  selector: 'jobs-component',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {
  public jobs: JobModel[];
  public access = false;

  constructor(private  baseService: BaseService,
              private router: Router,
              public dialog: MdDialog) {
  }

  public ngOnInit() {
    if (parseInt(localStorage.getItem('role')) > 1)
      this.access = true;
    this.getJobs();
  }

  getJobs() {
    this.baseService
      .getBaseAll('/api/jobs', JobModel)
      .subscribe(
        response => {
          this.jobs = response
        },
        error2 => {
          if (error2.status == 403) {
            this.router.navigate(['forbidden']);
          }
          console.log(error2)
        });
  }

  onSelectJob(job: JobModel) {
    this.router.navigate(['platform/jobs', job.id]);
  }

  onCreateJobDialog() {
    let dialogRef = this.dialog.open(CreateJob, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getJobs();
      }
    });
  }

  openDeleteJobConfirmation(job: JobModel) {
    let dialogRef = this.dialog.open(DeleteConfirmationDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteJob(job);
      }
    });
  }

  onDeleteJob(job: JobModel) {
    this.baseService
      .deleteBase('/api/jobs/' + job.id)
      .subscribe(
        response => {
          this.getJobs();
        },
        error2 => {
          if (error2.status == 403) {
            this.router.navigate(['forbidden']);
          }
          console.log(error2)
        }
      );
  }
}

