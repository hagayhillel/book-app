import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor() {}
  public isLoggedIn = false;
  public registeredUsers = [
    ["hagay", "123"],
    ["dan", "1234"]
  ];

  checkIfUserIsRegistered(userName, password) {
    for (let i = 0; i < this.registeredUsers.length; i++) {
      if (
        this.registeredUsers[i][0] == userName &&
        this.registeredUsers[i][1] == password
      ) {
        this.isLoggedIn = true;
        return true;
      }
    }
  }
}
