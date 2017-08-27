import {Component, OnInit} from "@angular/core";
import {SkillsModel} from "../../../model/skills.model";
import {ActivatedRoute} from "@angular/router";
import {BaseService} from "../../../services/service";
import {MdDialog} from "@angular/material";
import {JobModel} from "../../../model/jobs.model";
import {JobSkillsComponent} from "./skills/job.skills.component";
import {RequirementsModel} from "../../../model/requirements.model";
import {DeleteConfirmationDialog} from "../../deletedialog/dialog.component";
import {EditJobComponent} from "./edit.job/edit.job.component";

@Component({
  selector: 'job-component',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})

export class JobComponent implements OnInit {
  public job: JobModel;
  public skills: SkillsModel[];
  public requirements: RequirementsModel[];
  public id: number;

  constructor(private route: ActivatedRoute,
              private baseService: BaseService,
              public dialog: MdDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {

        this.id = +params['id'];
      });
    this.getJobInformation();
  }

  getJobInformation() {
    this.baseService
      .getBase('/api/jobs/' + this.id, JobModel)
      .subscribe(
        response => {
          this.job = response;
        },
        error2 => console.log(error2)
      );

    this.baseService
      .getBaseAll('/api/skills', SkillsModel)
      .subscribe(
        response => {
          this.skills = response;
        },
        error2 => console.log(error2)
      );
  }

  onEditJob() {
    let dialogRef = this.dialog.open(EditJobComponent, {
      data: this.job,
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getJobInformation();
      }
    });
  }

  onAddSkill() {
    this.deleteJobSkillsFromList();
    let dialogRef = this.dialog.open(JobSkillsComponent, {
      data: [this.skills, this.job.id],
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getJobInformation();
      }
    });
  }

  deleteJobSkillsFromList() {
    for (let i = 0; i < this.job.skills.length; i++) {
      for (let j = 0; j < this.skills.length; j++) {
        if (this.job.skills[i].id == this.skills[j].id) {
          this.skills.splice(j, 1);
        }
      }
    }
  }

  openDeleteSkillConfirmation(skillId) {
    let dialogRef = this.dialog.open(DeleteConfirmationDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getJobSkillId(skillId);
      }
    });
  }

  getJobSkillId(skillId) {
    this.baseService
      .getBaseAll('/api/requirements/' + this.job.id, RequirementsModel)
      .subscribe(
        response => {
          this.requirements = response;
          for (let i = 0; i < this.requirements.length; i++) {
            if (this.requirements[i].skillsId == skillId) {
              this.onDeleteJobSkill(this.requirements[i].id);
            }
          }
        },
        error2 => console.log(error2)
      );
  }

  onDeleteJobSkill(jobSkillId: number) {
    this.baseService
      .deleteBase('/api/requirements/' + jobSkillId)
      .subscribe(
        response => {
          this.getJobInformation();
        },
        error2 => console.log(error2)
      );
  }
}
