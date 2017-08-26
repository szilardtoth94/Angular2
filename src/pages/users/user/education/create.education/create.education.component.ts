import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../services/service";

@Component({
  selector: 'create-education',
  templateUrl: './create.education.component.html',
})
export class CreateEducationComponent implements OnInit {

  public educationForm: FormGroup;

  constructor(private  baseService: BaseService, public dialogRef: MdDialogRef<CreateEducationComponent>,@Inject(MD_DIALOG_DATA) public userId:number) {
  }

  ngOnInit(): void {
    this.educationForm = new FormGroup({
      'schoolName': new FormControl(null, Validators.minLength(2), null),
      'graduatedYear': new FormControl(null, Validators.minLength(2), null),
      'description': new FormControl(null, null, null),
      'personalInfoId': new FormControl(this.userId, Validators.required)
    })

  }

  public createEducation() {
    console.log(this.educationForm.value);
    this.baseService
      .createBase('/api/education', this.educationForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        error2 => console.log(error2),);
  }
}
