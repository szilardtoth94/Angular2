import {Component, OnInit} from "@angular/core";
import {SkillsModel} from "../../../../model/skills.model";
import {ActivatedRoute} from "@angular/router";
import {BaseService} from "../../../../services/service";
import {MdDialog} from "@angular/material";
import {JobModel} from "../../../../model/jobs.model";
import {JobSkillsComponent} from "./skills/job.skills.component";
import {RequirementsModel} from "../../../../model/requirements.model";
import {DeleteConfirmationDialog} from "../../deletedialog/dialog.component";
import {EditJobComponent} from "./edit.job/edit.job.component";
import {SkillsOfUser} from "../../../../model/skills.of.user";
import {JobApplyModel} from "../../../../model/jobApplyModel";
import {ApplyDialog} from "./apply.dialog/dialog.component";
import {AppliedList} from "./applied.users.list/applied.users.component.list";

@Component({
  selector: 'job-component',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})

export class JobComponent implements OnInit {
  public job: JobModel;
  public skills: SkillsModel[];
  public requirements: RequirementsModel[];
  public userSkills: SkillsOfUser[];
  public jobApply: JobApplyModel[];
  public id: number;
  public access = false;
  public apply = "Apply";
  public jobApplyId: number;
  public userId = parseInt(localStorage.getItem('id'));

  constructor(private route: ActivatedRoute,
              private baseService: BaseService,
              public dialog: MdDialog) {
  }

  ngOnInit(): void {
    if (parseInt(localStorage.getItem('role')) > 1) {
      this.access = true;
    }
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

    this.baseService
      .getBaseAll('/api/userskills/' + this.userId, SkillsOfUser)
      .subscribe(
        response => {
          this.userSkills = response;
          console.log(this.userSkills);

        },
        error2 => console.log(error2)
      );

    this.baseService
      .getBaseAll('/api/requirements/' + this.id, RequirementsModel)
      .subscribe(
        response => {
          this.requirements = response;
          console.log(this.requirements);
        },
        error2 => console.log(error2)
      );

    this.getJobApplys();
  }

  getJobApplys() {
    this.baseService
      .getBaseAll('/api/apply/' + this.id, JobApplyModel)
      .subscribe(
        response => {
          this.jobApply = response;
          for (let i = 0; i < this.jobApply.length; i++) {
            if (this.jobApply[i].userId == this.userId) {
              this.jobApplyId = this.jobApply[i].id;
              this.apply = "UnApply";
            }
          }
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
      width: '350px',
      height: '80%'
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
    for (let i = 0; i < this.requirements.length; i++) {
      if (this.requirements[i].skillsId == skillId) {
        this.onDeleteJobSkill(this.requirements[i].id);
      }
    }
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

  onApplyJob() {
    if (this.apply == "Apply") {
      let apply = false;
      for (let i = 0; i < this.requirements.length; i++) {
        for (let j = 0; j < this.userSkills.length; j++) {
          if (this.requirements[i].skillsId == this.userSkills[j].skillsId) {
            apply = true;
          }
        }
      }
      if (apply) {
        this.createJobApply();
      }
      else {
        this.onNotEnoughSkill();
      }
    }
    else {
      this.deleteJobApply();
    }

  }

  deleteJobApply() {
    this.baseService
      .deleteBase('/api/apply/' + this.jobApplyId)
      .subscribe(response => {
          console.log(response);
          this.apply = "Apply";
          this.getJobApplys();
        },
        error2 => console.log(error2)
      );
  }

  createJobApply() {
    this.baseService
      .createBase('/api/apply', {"jobId": this.job.id, "userId": this.userId})
      .subscribe(response => {
          console.log(response);
          this.getJobApplys();
        },
        error2 => console.log(error2)
      );
  }

  getAppliedUsers() {
    this.dialog.open(AppliedList, {
      width: '250px',
      data: this.jobApply,
    })
  }

  onNotEnoughSkill() {
    this.dialog.open(ApplyDialog, {
      width: '250px',
    });
  }
}
