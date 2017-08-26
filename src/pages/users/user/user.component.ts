import {ActivatedRoute} from '@angular/router';
import {OnInit, Component} from '@angular/core';
import {PersInfoModel} from "../../../model/pers.info.model";
import {EditUserComponent} from "./edit.user/edit.user.component";
import {MdDialog} from "@angular/material";
import {CreateEducationComponent} from "./education/create.education/create.education.component";
import {BaseService} from "../../../services/service";
import {EditEducationComponent} from "./education/edit.education/edit.education.component";
import {UserEducationModel} from "../../../model/user.education.model";
import {DeleteConfirmationDialog} from "../deletedialog/dialog.component";
import {CreateWorkExperienceComponent} from "./work.experience/create.work.experience/create.work.experience.component";
import {UserWorkExperienceModel} from "../../../model/user.work.experience";
import {EditWorkExperienceComponent} from "./work.experience/edit.work.experience/edit.work.experience.component";

@Component({
  selector: "user-component",
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  public id2: number;
  public users: PersInfoModel;

  constructor(private route: ActivatedRoute,
              private baseService: BaseService,
              public dialog: MdDialog) {
  }


  ngOnInit(): void {

    this.route.params.subscribe(
      params => {
        this.id2 = +params['id'];

      });
    this.getUserInformation();

  }

  getUserInformation() {
    this.baseService
      .getBase('/api/persinfo/all/' + this.id2,PersInfoModel)
      .subscribe(
        response => {
          this.users = response;
          console.log(this.users)
        },
        error2 => console.log(error2)
      );
  }

  onEditUser() {
    let dialogRef = this.dialog.open(EditUserComponent, {
      data: this.users,
      width: '50%',
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
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserInformation();
      }
    });
  }

  onEditEducation(education:UserEducationModel) {

    let dialogRef = this.dialog.open(EditEducationComponent, {
      data: education,
      width: '50%',

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserInformation();
      }
    });
  }

  openDeleteEducationConfirmation(education:UserEducationModel) {
    console.log(education.id);
    let dialogRef = this.dialog.open(DeleteConfirmationDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
         this.onDeleteEducation(education);
      }
    });
  }
  onDeleteEducation(education:UserEducationModel) {
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
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserInformation();
      }
    });
  }

  onEditWorkExperience(experience:UserWorkExperienceModel) {

    let dialogRef = this.dialog.open(EditWorkExperienceComponent, {
      data: experience,
      width: '50%',

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserInformation();
      }
    });
  }
  openDeleteWorkConfirmation(experience:UserWorkExperienceModel) {
    console.log(experience.id);
    let dialogRef = this.dialog.open(DeleteConfirmationDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.onDeleteWorkExperience(experience);
      }
    });
  }
  onDeleteWorkExperience(experience:UserWorkExperienceModel) {
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

}
