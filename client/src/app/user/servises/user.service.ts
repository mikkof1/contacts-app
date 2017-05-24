import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {AuthenticationService} from "./authentication.service";
import {HttpService} from "../../utils/http.service";
import {User} from "../user";

@Injectable()
export class UserService {

  private url = environment.storageUrl + "/user";

  constructor(private authService: AuthenticationService, private http: HttpService) {
  }

  signUserIn(userName: string, password: string) {
    return this.authService.signIn(userName, password).flatMap(data => {
      return this.http.put(this.url, null);
    });

  }

}
