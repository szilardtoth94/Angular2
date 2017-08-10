import { BrowserModule } from '@angular/platform-browser';
import { MdSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';

import '../styles/styles.scss';
import '../styles/headings.css';

import  { NavigationComponent } from "navigation"
import { AboutComponent, UsersComponent } from 'pages';
import {JobsComponent} from "../pages/jobs/jobs.component";
import {UserComponent} from "../pages/users/user/user.component";
import {PersonalInformationComponent} from "../navigation/personal.information/personal.information.component";
import {MenuComponent} from "../navigation/menu/menu.component";

import { UsersService } from "../services/user.service/users.service";
import { JobsService } from "../services/job.service/jobs.service";

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AboutComponent,
    JobsComponent,
    MenuComponent,
    NavigationComponent,
    PersonalInformationComponent,
    UserComponent,
    UsersComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdSidenavModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    UsersService,
    JobsService,
  ]
})
export class AppModule {}
