import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpService} from "../../utils/http.service";
import {promise} from "selenium-webdriver";
import {Response} from "@angular/http";

@Injectable()
export class AuthenticationService {

  private url = environment.storageUrl + "/auth";


  constructor(private http: HttpService) {

  }

  signIn(userName: string, password: string) {
    return this.http.post(this.url, {
      UserName:userName,
      Password:password
    }).map((response: Response) => {
      let data = response.json();
      this.http.saveToken(data.token);
      return data.id;
    });

  }


}
