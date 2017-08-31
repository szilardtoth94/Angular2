import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../../services/service";
import {Router} from "@angular/router";

@Component({
  selector: 'create-education',
  templateUrl: './create-education.component.html',
})
export class CreateEducationComponent implements OnInit {
  public educationForm: FormGroup;

  constructor(private  baseService: BaseService,
              private router: Router,
              public dialogRef: MdDialogRef<CreateEducationComponent>,
              @Inject(MD_DIALOG_DATA) public userId: number) {
  }

  ngOnInit(): void {
    this.educationForm = new FormGroup({
      'schoolName': new FormControl(
        null,
        [Validators.minLength(2), Validators.required],
        null),
      'graduatedYear': new FormControl(
        null,
        [
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.required,
          Validators.min(1950),
          Validators.pattern("^(0|[1-9][0-9]*)$")
        ],
        null),
      'description': new FormControl(
        null,
        null,
        null),
      'personalInfoId': new FormControl(
        this.userId,
        Validators.required,
        null)
    })
  }

  public createEducation() {
    if (this.educationForm.valid) {
      this.dialogRef.close(true);
      this.baseService
        .createBase('/api/education', this.educationForm.value)
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
