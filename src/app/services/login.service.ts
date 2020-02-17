import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor() {}
  public isLoggedIn = false;
  public registeredUsers = [["hagay", "123"]];

  checkIfUserIsRegistered(userName, password) {
    for (let i = 0; i < this.checkIfUserIsRegistered.length; i++) {
      if (
        this.registeredUsers[i][0] == userName &&
        this.registeredUsers[i][1] == password
      ) {
        this.isLoggedIn = true;
        return true;
      }
      return false;
    }
  }
}
