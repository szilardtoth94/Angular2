import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../../services/service";
import {UserWorkExperienceModel} from "../../../../../../model/work-experience";
import {Router} from "@angular/router";

@Component({
  selector: 'create-education',
  templateUrl: './edit-work-experience.component.html',
})

export class EditWorkExperienceComponent implements OnInit {
  public editWorkExperienceForm: FormGroup;

  constructor(private  baseService: BaseService,
              private router: Router,
              public dialogRef: MdDialogRef<EditWorkExperienceComponent>,
              @Inject(MD_DIALOG_DATA) public experience: UserWorkExperienceModel) {
  }

  ngOnInit(): void {
    this.editWorkExperienceForm = new FormGroup({
      'companyName': new FormControl(
        this.experience.companyName,
        [Validators.required, Validators.minLength(2)],
        null),
      'position': new FormControl(
        this.experience.position,
        [Validators.required, Validators.minLength(2)],
        null),
      'startDate': new FormControl(
        this.experience.startDate,
        null,
        null),
      'endDate': new FormControl(
        this.experience.endDate,
        null,
        null),
      'personInfoId': new FormControl(
        this.experience.personInfoId,
        Validators.required,
        null)
    })
  }

  public editWorkExperience() {
    if (this.editWorkExperienceForm.valid) {
      this.dialogRef.close(true);
      this.baseService
        .updateBase('/api/work/' + this.experience.id, this.editWorkExperienceForm.value)
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
    }
  }
}
