import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../services/service";
import {UserEducationModel} from "../../../../../model/user.education.model";

@Component({
  selector: 'create-education',
  templateUrl: './edit.education.component.html',
})
export class EditEducationComponent implements OnInit {
  public editEducationForm: FormGroup;

  constructor(private  baseService: BaseService,
              public dialogRef: MdDialogRef<EditEducationComponent>,
              @Inject(MD_DIALOG_DATA) public education: UserEducationModel) {
  }

  ngOnInit(): void {
    console.log(this.education);
    this.editEducationForm = new FormGroup({
      'schoolName': new FormControl(
        this.education.schoolName,
        [Validators.minLength(2), Validators.required],
        null),
      'graduatedYear': new FormControl(
        this.education.graduatedYear,
        [
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.required,
          Validators.min(1950),
          Validators.pattern("^(0|[1-9][0-9]*)$")
        ],
        null),
      'description': new FormControl(
        this.education.description,
        null,
        null),
      'personalInfoId': new FormControl(
        this.education.personalInfoId,
        Validators.required,
        null)
    })
  }

  public editEducation() {
    if (this.editEducationForm.valid) {
      this.dialogRef.close(true);
      console.log(this.editEducationForm.value);
      this.baseService
        .updateBase('/api/education/' + this.education.id, this.editEducationForm.value)
        .subscribe(
          response => {
            console.log(response);
          },
          error2 => console.log(error2),);
    }
  }
}
