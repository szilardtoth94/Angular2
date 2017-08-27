import {Routes} from "@angular/router";
import {AboutComponent} from "../pages/platform/about/about.component";
import {JobsComponent} from "../pages/platform/jobs/jobs.component";
import {UsersComponent} from "../pages/platform/users/users.component";
import {UserComponent} from "../pages/platform/users/user/user.component";
import {UserUpdateComponent} from "../pages/platform/users/update/user.update.component";
import {JobComponent} from "../pages/platform/jobs/job/job.component";
import {NotFoundComponent} from "../pages/platform/not.found/not.found.component";
import {PlatformComponent} from "../pages/platform/platform.component";
import {LoginComponent} from "../pages/login/login.component";
import {AuthGuard} from "../services/authguard";

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'platform',
    component: PlatformComponent,
    canActivate: [AuthGuard],
    children: [
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
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'jobs',
        component: JobsComponent
      },
      {
        path: 'jobs/:id',
        component: JobComponent
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
        component: NotFoundComponent
      },
    ]

  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
