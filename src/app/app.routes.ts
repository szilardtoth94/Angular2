import { Routes } from '@angular/router';
import { AboutComponent, HomeComponent, UsersComponent } from 'pages';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: '**',    component: HomeComponent },
];
