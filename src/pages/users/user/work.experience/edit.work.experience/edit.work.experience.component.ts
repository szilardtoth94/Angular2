import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../services/service";
import {UserEducationModel} from "../../../../../model/user.education.model";

@Component({
  selector: 'create-education',
  templateUrl: './edit.work.experience.component.html',
})
export class EditWorkExperienceComponent implements OnInit {

  public editWorkExperienceForm: FormGroup;

  constructor(private  baseService: BaseService, public dialogRef: MdDialogRef<EditWorkExperienceComponent>, @Inject(MD_DIALOG_DATA) public education:UserEducationModel) {
  }

  ngOnInit(): void {
    console.log(this.education);
    this.editWorkExperienceForm = new FormGroup({
      'schoolName': new FormControl(this.education.schoolName, Validators.minLength(2), null),
      'graduatedYear': new FormControl(this.education.graduatedYear, Validators.minLength(2), null),
      'description': new FormControl(this.education.description, null, null),
      'personalInfoId': new FormControl(this.education.personalInfoId, Validators.required)
    })
  }

  public editEducation() {
    console.log(this.editWorkExperienceForm.value);
    this.baseService
      .updateBase('/api/education/'+this.education.id, this.editWorkExperienceForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        error2 => console.log(error2),);
  }
}
