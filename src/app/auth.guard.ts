import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private loginservice: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.loginservice.isLoggedIn) {
      return true;
    } else {
      this.router.navigate([""]);
      return false;
    }
  }
}
