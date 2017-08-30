import {Component, Inject, OnInit} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BaseService} from "../../../../../services/service";
import {JobModel} from "../../../../../model/jobs.model";
import {Router} from "@angular/router";

@Component({
  selector: 'edit-job',
  templateUrl: './edit.job.component.html',
})

export class EditJobComponent implements OnInit {
  public jobEditForm: FormGroup;

  constructor(private  baseService: BaseService,
              private router:Router,
              public dialogRef: MdDialogRef<EditJobComponent>,
              @Inject(MD_DIALOG_DATA) public job: JobModel) {
  }

  ngOnInit(): void {
    this.jobEditForm = new FormGroup({
      'name': new FormControl(
        this.job.name,
        [Validators.minLength(2), Validators.required],
        null),
      'description': new FormControl(
        this.job.description,
        Validators.required,
        null),
      'benefits': new FormControl(
        this.job.benefits,
        null,
        null),
      'code': new FormControl(
        this.job.code,
        Validators.required,
        null),
    })
  }

  public editJob() {
    if (this.jobEditForm.valid) {
      this.dialogRef.close(true);
      this.baseService
        .updateBase('/api/jobs/' + this.job.id, this.jobEditForm.value)
        .subscribe(
          response => {
          },
          error2 => {
            if (error2.status == 403) {
              this.router.navigate(['forbidden']);
            }
            console.log(error2)
          });
    }
  }
}
