import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../services/service";

@Component({
  selector: 'create-education',
  templateUrl: './create.work.experience.component.html',
})
export class CreateWorkExperienceComponent implements OnInit {

  public createWorkExperienceForm: FormGroup;

  constructor(private  baseService: BaseService, public dialogRef: MdDialogRef<CreateWorkExperienceComponent>,@Inject(MD_DIALOG_DATA) public userId:number) {
  }

  ngOnInit(): void {
    this.createWorkExperienceForm = new FormGroup({
      'companyName': new FormControl(null, [Validators.required,Validators.minLength(2)], null),
      'position': new FormControl(null, [Validators.required,Validators.minLength(2)], null),
      'startDate': new FormControl(null, null, null),
      'endDate': new FormControl(null, null, null),
      'personInfoId': new FormControl(this.userId, Validators.required)
    })


  }

  public createWorkExperience() {
    if (this.createWorkExperienceForm.valid) {
      this.dialogRef.close(true);
      this.baseService
        .createBase('/api/work', this.createWorkExperienceForm.value)
        .subscribe(
          response => {
            console.log(response);
          },
          error2 => console.log(error2),);
    }
  }
}
