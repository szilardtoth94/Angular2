import { BrowserModule } from '@angular/platform-browser';
import { MdSidenavModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import {ROUTES1} from "../pages/users/users.routes"

import { AppComponent } from './app.component';

import '../styles/styles.scss';
import '../styles/headings.css';

import  {NavigationComponent} from "navigation"
import {AboutComponent, HomeComponent, UsersComponent } from 'pages';

import {UsersService} from "../services/user.service/users.service";
import {UserComponent} from "../pages/users/user/user.component";
import {JobsComponent} from "../pages/jobs/jobs.component";

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    NavigationComponent,
    UserComponent,
    UsersComponent,
    AboutComponent,
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    MdSidenavModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),

  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    UsersService,
  ]
})
export class AppModule {}
