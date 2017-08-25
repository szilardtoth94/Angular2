import {BrowserModule} from '@angular/platform-browser';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
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
import {JobsService} from "../services/job.service/jobs.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PersonalInformationComponent} from "../desktop-sidenav/personal-information/personal-information.component";
import {SidenavComponent} from "../desktop-sidenav/sidenav.component";
import {MenuBarComponent} from "../desktop-sidenav/menu-bar/menu-bar.component";
import {BaseService} from "../services/service";
import {DialogResultExampleDialog} from "../pages/users/deletedialog/dialog.component";
import {CreateUserComponent} from "../pages/users/createUser/create.user.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AboutComponent,
    CreateUserComponent,
    DialogResultExampleDialog,
    JobsComponent,
    MenuBarComponent,
    PersonalInformationComponent,
    UserComponent,
    UsersComponent,
    SidenavComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdDialogModule,
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    UsersService,
    JobsService,
    BaseService,
  ],
  entryComponents: [
    DialogResultExampleDialog,
    CreateUserComponent
  ]
})
export class AppModule {
}
