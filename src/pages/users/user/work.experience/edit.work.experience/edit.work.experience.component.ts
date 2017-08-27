import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../services/service";
import {UserEducationModel} from "../../../../../model/user.education.model";
import {UserWorkExperienceModel} from "../../../../../model/user.work.experience";

@Component({
  selector: 'create-education',
  templateUrl: './edit.work.experience.component.html',
})
export class EditWorkExperienceComponent implements OnInit {

  public editWorkExperienceForm: FormGroup;

  constructor(private  baseService: BaseService, public dialogRef: MdDialogRef<EditWorkExperienceComponent>, @Inject(MD_DIALOG_DATA) public experience: UserWorkExperienceModel) {
  }

  ngOnInit(): void {
    console.log(this.experience);
    this.editWorkExperienceForm = new FormGroup({
      'companyName': new FormControl(this.experience.companyName, [Validators.required, Validators.minLength(2)], null),
      'position': new FormControl(this.experience.position, [Validators.required, Validators.minLength(2)], null),
      'startDate': new FormControl(this.experience.startDate, null, null),
      'endDate': new FormControl(this.experience.endDate, null, null),
      'personInfoId': new FormControl(this.experience.personInfoId, Validators.required)
    })
  }

  public editWorkExperience() {
    if (this.editWorkExperienceForm.valid) {
      this.dialogRef.close(true);
      this.baseService
        .updateBase('/api/work/' + this.experience.id, this.editWorkExperienceForm.value)
        .subscribe(
          response => {
            console.log(response);
          },
          error2 => console.log(error2),);
    }
  }
}
