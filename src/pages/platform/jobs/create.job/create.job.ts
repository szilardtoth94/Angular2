import {Component, OnInit} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BaseService} from "../../../../services/service";

@Component({
  selector: 'create-job',
  templateUrl: './create.job.html',
})
export class CreateJob implements OnInit {
  public jobCreateForm: FormGroup;

  constructor(private  baseService: BaseService,
              public dialogRef: MdDialogRef<CreateJob>) {
  }

  ngOnInit(): void {
    this.jobCreateForm = new FormGroup({
      'name': new FormControl(
        null,
        [Validators.minLength(2), Validators.required],
        null),
      'description': new FormControl(
        null,
        Validators.required,
        null),
      'benefits': new FormControl(
        null,
        null,
        null),
      'code': new FormControl(
        null,
        Validators.required,
        null),
    })
  }

  public createNewJob() {
    if (this.jobCreateForm.valid) {
      this.dialogRef.close(true);
      this.baseService
        .createBase('/api/jobs', this.jobCreateForm.value)
        .subscribe(
          response => {
            console.log(response);
          },
          error2 => console.log(error2),);
    }
  }
}
