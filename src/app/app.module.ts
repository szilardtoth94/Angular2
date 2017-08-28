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
  MdNativeDateModule, MdProgressBarModule,
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
import {JobsComponent} from "../pages/platform/jobs/jobs.component";
import {UserComponent} from "../pages/platform/users/user/user.component";
import {UsersService} from "../services/user.service/users.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PersonalInformationComponent} from "../pages/desktop-sidenav/personal.information/personal-information.component";
import {SidenavComponent} from "../pages/desktop-sidenav/sidenav.component";
import {MenuBarComponent} from "../pages/desktop-sidenav/menu.bar/menu-bar.component";
import {BaseService} from "../services/service";
import {DeleteConfirmationDialog} from "../pages/platform/deletedialog/dialog.component";
import {CreateUserComponent} from "../pages/platform/users/createUser/create.user.component";
import {EditUserComponent} from "../pages/platform/users/user/edit.user/edit.user.component";
import {CreateEducationComponent} from "../pages/platform/users/user/education/create.education/create.education.component";
import {EditEducationComponent} from "../pages/platform/users/user/education/edit.education/edit.education.component";
import {CreateWorkExperienceComponent} from "../pages/platform/users/user/work.experience/create.work.experience/create.work.experience.component";
import {EditWorkExperienceComponent} from "../pages/platform/users/user/work.experience/edit.work.experience/edit.work.experience.component";
import {UserSkillsComponent} from "../pages/platform/users/user/skills/user.skills.component";
import {JobComponent} from "../pages/platform/jobs/job/job.component";
import {CreateJob} from "../pages/platform/jobs/create.job/create.job";
import {JobSkillsComponent} from "../pages/platform/jobs/job/skills/job.skills.component";
import {EditJobComponent} from "../pages/platform/jobs/job/edit.job/edit.job.component";
import {NotFoundComponent} from "../pages/platform/not.found/not.found.component";
import {PlatformComponent} from "../pages/platform/platform.component";
import {LoginComponent} from "../pages/login/login.component";
import {AuthGuard} from "../services/authguard";
import {ChangePasswordComponent} from "../pages/platform/users/user/change.password/change.password.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AboutComponent,
    ChangePasswordComponent,
    CreateEducationComponent,
    CreateJob,
    CreateUserComponent,
    CreateWorkExperienceComponent,
    DeleteConfirmationDialog,
    EditEducationComponent,
    EditJobComponent,
    EditUserComponent,
    EditWorkExperienceComponent,
    JobComponent,
    JobsComponent,
    JobSkillsComponent,
    LoginComponent,
    MenuBarComponent,
    NotFoundComponent,
    PersonalInformationComponent,
    PlatformComponent,
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
    MdProgressBarModule,
    MdSelectModule,
    MdSidenavModule,
    MdToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    BaseService,
    AuthGuard
  ],
  entryComponents: [
    ChangePasswordComponent,
    CreateEducationComponent,
    CreateUserComponent,
    CreateWorkExperienceComponent,
    DeleteConfirmationDialog,
    EditEducationComponent,
    EditJobComponent,
    EditUserComponent,
    EditWorkExperienceComponent,
    CreateJob,
    JobSkillsComponent,
    UserSkillsComponent,
  ]
})
export class AppModule {
}

