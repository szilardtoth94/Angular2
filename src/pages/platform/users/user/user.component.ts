import {ActivatedRoute} from '@angular/router';
import {OnInit, Component} from '@angular/core';
import {PersInfoModel} from "../../../../model/pers.info.model";
import {EditUserComponent} from "./edit.user/edit.user.component";
import {MdDialog} from "@angular/material";
import {CreateEducationComponent} from "./education/create.education/create.education.component";
import {BaseService} from "../../../../services/service";
import {EditEducationComponent} from "./education/edit.education/edit.education.component";
import {UserEducationModel} from "../../../../model/user.education.model";
import {DeleteConfirmationDialog} from "../../deletedialog/dialog.component";
import {CreateWorkExperienceComponent} from "./work.experience/create.work.experience/create.work.experience.component";
import {UserWorkExperienceModel} from "../../../../model/user.work.experience";
import {EditWorkExperienceComponent} from "./work.experience/edit.work.experience/edit.work.experience.component";
import {UserSkillsComponent} from "./skills/user.skills.component";
import {SkillsModel} from "../../../../model/skills.model";
import {SkillsOfUser} from "../../../../model/skills.of.user";

@Component({
  selector: "user-component",
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  public id2: number;
  public users: PersInfoModel;
  public skills: SkillsModel[];
  public skillsOfUSer: SkillsOfUser[];
  public acces = false;

  constructor(private route: ActivatedRoute,
              private baseService: BaseService,
              public dialog: MdDialog) {
  }

  ngOnInit(): void {
    if (parseInt(localStorage.getItem('role')) > 1) {
      this.acces = true;
    }
    this.route.params.subscribe(
      params => {
        this.id2 = +params['id'];
      });
    this.getUserInformation();
  }

  getUserInformation() {
    this.baseService
      .getBase('/api/persinfo/all/' + this.id2, PersInfoModel)
      .subscribe(
        response => {
          this.users = response;
          if (parseInt(localStorage.getItem('id')) == this.users.user.id) {
            this.acces = true;
          }
          console.log(this.acces)
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

  onEditUser() {
    let dialogRef = this.dialog.open(EditUserComponent, {
      data: this.users,
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserInformation();
      }
    });
  }

  onCreateEducation() {
    let dialogRef = this.dialog.open(CreateEducationComponent, {
      data: this.users.id,
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserInformation();
      }
    });
  }

  onEditEducation(education: UserEducationModel) {
    let dialogRef = this.dialog.open(EditEducationComponent, {
      data: education,
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserInformation();
      }
    });
  }

  openDeleteEducationConfirmation(education: UserEducationModel) {
    console.log(education.id);
    let dialogRef = this.dialog.open(DeleteConfirmationDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.onDeleteEducation(education);
      }
    });
  }

  onDeleteEducation(education: UserEducationModel) {
    this.baseService
      .deleteBase('/api/education/' + education.id)
      .subscribe(
        response => {
          console.log(response);
          this.getUserInformation();
        },
        error2 => console.log(error2)
      );
  }

  onCreateWorkExperience() {
    let dialogRef = this.dialog.open(CreateWorkExperienceComponent, {
      data: this.users.id,
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserInformation();
      }
    });
  }

  onEditWorkExperience(experience: UserWorkExperienceModel) {
    let dialogRef = this.dialog.open(EditWorkExperienceComponent, {
      data: experience,
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserInformation();
      }
    });
  }

  openDeleteWorkConfirmation(experience: UserWorkExperienceModel) {
    console.log(experience.id);
    let dialogRef = this.dialog.open(DeleteConfirmationDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.onDeleteWorkExperience(experience);
      }
    });
  }

  onDeleteWorkExperience(experience: UserWorkExperienceModel) {
    this.baseService
      .deleteBase('/api/work/' + experience.id)
      .subscribe(
        response => {
          console.log(response);
          this.getUserInformation();
        },
        error2 => console.log(error2)
      );
  }

  onAddSkill() {
    this.deleteUserSkillsFromList();
    let dialogRef = this.dialog.open(UserSkillsComponent, {
      data: [this.skills, this.users.id],
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserInformation();
      }
    });
  }

  deleteUserSkillsFromList() {
    for (let i = 0; i < this.users.skills.length; i++) {
      for (let j = 0; j < this.skills.length; j++) {
        if (this.users.skills[i].id == this.skills[j].id) {
          this.skills.splice(j, 1);
        }
      }
    }
  }

  openDeleteUserSkillConfirmation(skillId) {
    let dialogRef = this.dialog.open(DeleteConfirmationDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserSkillId(skillId);
      }
    });
  }

  getUserSkillId(skillId) {
    this.baseService
      .getBaseAll('/api/userskills/' + this.users.id, SkillsOfUser)
      .subscribe(
        response => {
          this.skillsOfUSer = response;
          for (let i = 0; i < this.skillsOfUSer.length; i++) {
            if (this.skillsOfUSer[i].skillsId == skillId) {
              this.onDeleteUserSkill(this.skillsOfUSer[i].id);
            }
          }

        },
        error2 => console.log(error2)
      );
  }

  onDeleteUserSkill(userSkillId: number) {
    this.baseService
      .deleteBase('/api/userskills/' + userSkillId)
      .subscribe(
        response => {
          console.log(response);
          this.getUserInformation();
        },
        error2 => console.log(error2)
      );
  }

}
