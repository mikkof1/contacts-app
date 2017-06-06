import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {AuthenticationService} from "./authentication.service";
import {HttpService} from "../../utils/http.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  private url = environment.storageUrl + "/user";
  private loggedIn: boolean;

  constructor(private authService: AuthenticationService, private http: HttpService) {
  }

  signUserIn(userName: string, password: string) {
    return this.authService.signIn(userName, password).flatMap(() => {
      this.loggedIn = true;
      return this.http.put(this.url, null);
    }).catch(error => {
      this.loggedIn = false;
      console.log('AuthService error: ' + error.status + ' ' + error.statusText);
      return Observable.throw(error);
    });
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  signOut() {
    this.loggedIn = false;
  }


}
