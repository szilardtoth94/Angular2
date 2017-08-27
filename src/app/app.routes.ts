import {Routes} from "@angular/router";
import {AboutComponent} from "../pages/about/about.component";
import {JobsComponent} from "../pages/jobs/jobs.component";
import {UsersComponent} from "../pages/users/users.component";
import {UserComponent} from "../pages/users/user/user.component";
import {UserUpdateComponent} from "../pages/users/update/user.update.component";

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
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
    component: AboutComponent
  },
];
