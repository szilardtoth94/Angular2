import { BrowserModule } from '@angular/platform-browser';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdMenuModule, MdSidenavModule, MdToolbar,
  MdToolbarModule
} from '@angular/material';
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
import {UserComponent} from "../pages/users/user/user.component";;

import { UsersService } from "../services/user.service/users.service";
import { JobsService } from "../services/job.service/jobs.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout"

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AboutComponent,
    JobsComponent,
    UserComponent,
    UsersComponent,

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
  ]
})
export class AppModule {}
