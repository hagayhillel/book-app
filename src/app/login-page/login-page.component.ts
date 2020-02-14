import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  loginForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  public userErrorMessage = false;

  actionsIfUserValid() {
    this.checkUserDetails()
      ? this.router.navigate(["/home"])
      : (this.userErrorMessage = true),
      setTimeout(i => {
        this.userErrorMessage = false;
      }, 3000);
  }

  checkUserDetails() {
    return this.loginService.checkIfUserIsRegistered(
      this.loginForm.controls["userName"].value,
      this.loginForm.controls["password"].value
    );
  }
}
