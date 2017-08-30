import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('id')&&localStorage.getItem('name')&&localStorage.getItem("password")) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return img and return false
    this.router.navigate(['login']);
    return false;
  }
}
