

import {Routes} from "@angular/router";
import {AboutComponent} from "../pages/about/about.component";
import {HomeComponent} from "../pages/home/home.component";
import {JobsComponent} from "../pages/jobs/jobs.component";
import {UsersComponent} from "../pages/users/users.component";
import {UserComponent} from "../pages/users/user/user.component";

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];
