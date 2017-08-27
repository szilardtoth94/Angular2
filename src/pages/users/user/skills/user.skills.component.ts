import {Component, Inject, OnInit} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../services/service";

@Component({
  selector: 'edit-user',
  templateUrl: './user.skills.component.html',
})
export class UserSkillsComponent implements OnInit {

  public skills: UserSkillsComponent;
  public userId: number;

  constructor(private  baseService: BaseService, public dialogRef: MdDialogRef<UserSkillsComponent>, @Inject(MD_DIALOG_DATA) public list: any) {
  }

  ngOnInit(): void {
    this.skills = this.list[0];
    this.userId = this.list[1];
  }

  public addSkill(id) {
    console.log(id);
      this.dialogRef.close(true);
      this.baseService
        .createBase('/api/userskills',{"personalInfoId":this.userId ,"skillsId":id})
        .subscribe(
          response => {
            console.log(response);
          },
          error2 => console.log(error2),);
    //
  }
}
