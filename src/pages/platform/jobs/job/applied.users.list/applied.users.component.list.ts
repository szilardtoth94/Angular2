import {Component, Inject, OnInit} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {JobApplyModel} from "../../../../../model/jobApplyModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'apply-list',
  templateUrl: './applied.users.list.html',
  styleUrls:['./applied.users.list.css']
})

export class AppliedList implements OnInit {

  constructor(public dialogRef: MdDialogRef<AppliedList>,
              private router: Router,
              @Inject(MD_DIALOG_DATA) public applied: JobApplyModel) {
  }

  ngOnInit(): void {
    console.log(this.applied);
  }

  openMyProfile(id) {
    this.dialogRef.close(true);
    this.router.navigate(['platform/users/'+id]);
  }
}

