import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {BaseService} from "../../../../../../services/service";
import {Router} from "@angular/router";

@Component({
  selector: 'create-education',
  templateUrl: './create-work-experience.component.html',
})
export class CreateWorkExperienceComponent implements OnInit {
  public createWorkExperienceForm: FormGroup;

  constructor(private  baseService: BaseService,
              private router: Router,
              public dialogRef: MdDialogRef<CreateWorkExperienceComponent>,
              @Inject(MD_DIALOG_DATA) public userId: number) {
  }

  ngOnInit(): void {
    this.createWorkExperienceForm = new FormGroup({
      'companyName': new FormControl(
        null,
        [Validators.required, Validators.minLength(2)],
        null),
      'position': new FormControl(
        null,
        [Validators.required, Validators.minLength(2)],
        null),
      'startDate': new FormControl(),
      'endDate': new FormControl(),
      'personInfoId': new FormControl(
        this.userId,
        Validators.required,
        null)
    })
  }

  public createWorkExperience() {
    if (this.createWorkExperienceForm.valid) {
      this.dialogRef.close(true);
      this.baseService
        .createBase('/api/work', this.createWorkExperienceForm.value)
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
