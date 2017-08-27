import {Component, Inject, OnInit} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../services/service";
import {SkillsModel} from "../../../../model/skills.model";

@Component({
  selector: 'edit-user',
  templateUrl: './job.skills.component.html',
})
export class JobSkillsComponent implements OnInit {
  public skills: SkillsModel;
  public jobId: number;

  constructor(private  baseService: BaseService,
              public dialogRef: MdDialogRef<JobSkillsComponent>,
              @Inject(MD_DIALOG_DATA) public list: any) {
  }

  ngOnInit(): void {
    this.skills = this.list[0];
    this.jobId = this.list[1];
  }

  public addSkill(id) {
    this.dialogRef.close(true);
    this.baseService
      .createBase('/api/requirements', {"jobId": this.jobId, "skillsId": id})
      .subscribe(
        response => {
          // console.log(response);
        },
        error2 => console.log(error2));
  }
}
