import {Component, Inject, OnInit} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../services/service";
import {SkillsModel} from "../../../../../model/skills.model";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'edit-user',
  templateUrl: './user-skills.component.html'
})
export class UserSkillsComponent implements OnInit {
  public skills: SkillsModel[];
  public userId: number;
  public skillForm;

  constructor(private  baseService: BaseService,
              private router: Router,
              public dialogRef: MdDialogRef<UserSkillsComponent>,
              @Inject(MD_DIALOG_DATA) public list: any) {
  }

  ngOnInit(): void {
    this.skills = this.list[0];
    this.userId = this.list[1];
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
          console.log(error2);
        }
      );
  }


  public addSkill(id) {
    this.dialogRef.close(true);
    this.baseService
      .createBase('/api/userskills', {"personalInfoId": this.userId, "skillsId": id})
      .subscribe(
        response => {
          // console.log(response);
        },
        error2 => {
          if (error2.status == 403) {
            this.router.navigate(['forbidden']);
          }
          console.log(error2);
        });
    //
  }
}
