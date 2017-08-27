import {BrowserModule} from '@angular/platform-browser';
import {
  MdButtonModule,
  MdCardModule,
  MdDatepickerModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdSelectModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from '@angular/router';
import {HttpModule} from "@angular/http";

import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';

import '../styles/styles.scss';
import '../styles/headings.css';

import {NavigationComponent} from "navigation"
import {AboutComponent, UsersComponent} from 'pages';
import {JobsComponent} from "../pages/jobs/jobs.component";
import {UserComponent} from "../pages/users/user/user.component";
import {UsersService} from "../services/user.service/users.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PersonalInformationComponent} from "../desktop-sidenav/personal.information/personal-information.component";
import {SidenavComponent} from "../desktop-sidenav/sidenav.component";
import {MenuBarComponent} from "../desktop-sidenav/menu.bar/menu-bar.component";
import {BaseService} from "../services/service";
import {DeleteConfirmationDialog} from "../pages/deletedialog/dialog.component";
import {CreateUserComponent} from "../pages/users/createUser/create.user.component";
import {EditUserComponent} from "../pages/users/user/edit.user/edit.user.component";
import {CreateEducationComponent} from "../pages/users/user/education/create.education/create.education.component";
import {EditEducationComponent} from "../pages/users/user/education/edit.education/edit.education.component";
import {CreateWorkExperienceComponent} from "../pages/users/user/work.experience/create.work.experience/create.work.experience.component";
import {EditWorkExperienceComponent} from "../pages/users/user/work.experience/edit.work.experience/edit.work.experience.component";
import {UserSkillsComponent} from "../pages/users/user/skills/user.skills.component";
import {JobComponent} from "../pages/jobs/job/job.component";
import {CreateJob} from "../pages/jobs/create.job/create.job";
import {JobSkillsComponent} from "../pages/jobs/job/skills/job.skills.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AboutComponent,
    CreateEducationComponent,
    CreateJob,
    CreateUserComponent,
    CreateWorkExperienceComponent,
    DeleteConfirmationDialog,
    EditEducationComponent,
    EditUserComponent,
    EditWorkExperienceComponent,
    JobComponent,
    JobsComponent,
    JobSkillsComponent,
    MenuBarComponent,
    PersonalInformationComponent,
    SidenavComponent,
    UserComponent,
    UsersComponent,
    UserSkillsComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdDatepickerModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdDialogModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdSelectModule,
    MdSidenavModule,
    MdToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    BaseService
  ],
  entryComponents: [
    CreateEducationComponent,
    CreateUserComponent,
    CreateWorkExperienceComponent,
    DeleteConfirmationDialog,
    EditEducationComponent,
    EditUserComponent,
    EditWorkExperienceComponent,
    CreateJob,
    JobSkillsComponent,
    UserSkillsComponent,
  ]
})
export class AppModule {
}
