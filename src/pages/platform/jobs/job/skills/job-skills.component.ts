import {Component, Inject, OnInit} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../services/service";
import {SkillsModel} from "../../../../../model/skills.model";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'edit-user',
  templateUrl: './job-skills.component.html',
})
export class JobSkillsComponent implements OnInit {
  public skills: SkillsModel[];
  public jobId: number;
  public skillForm;

  constructor(private  baseService: BaseService,
              private router: Router,
              public dialogRef: MdDialogRef<JobSkillsComponent>,
              @Inject(MD_DIALOG_DATA) public list: any) {
  }

  ngOnInit(): void {
    this.skills = this.list[0];
    this.jobId = this.list[1];

    this.skillForm = new FormGroup({
      "name": new FormControl(),
      "description": new FormControl()
    });
  }

  public addElemToList() {
    console.log(this.skillForm.value);
    this.baseService
      .createBase('/api/skills', this.skillForm.value)
      .subscribe(
        response => {
          this.skills.push(response.data);
          this.skillForm.reset();
        },
        error2 => {
          if (error2.status == 403) {
            this.router.navigate(['forbidden']);
          }
          console.log(error2)
        }
      );
  }

  public deleteSkill(id) {
    this.baseService
      .deleteBase('/api/skills/' + id)
      .subscribe(
        response => {
          this.baseService
            .getBaseAll('/api/skills', SkillsModel)
            .subscribe(
              response => {
                this.skills = response;
              },
              error2 => console.log(error2)
            )
          ;
        },
        error2 => {
          if (error2.status == 403) {
            this.router.navigate(['forbidden']);
          }
          console.log(error2)
        }
      );
  }

  public addSkill(id) {
    this.dialogRef.close(true);
    this.baseService
      .createBase('/api/requirements', {"jobId": this.jobId, "skillsId": id})
      .subscribe(
        response => {
          // console.log(response);
        },
        error2 => {
          if (error2.status == 403) {
            this.router.navigate(['forbidden']);
          }
          console.log(error2)
        });
  }
}
