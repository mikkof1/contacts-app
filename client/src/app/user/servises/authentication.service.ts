import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpService} from "../../utils/http.service";
import {promise} from "selenium-webdriver";
import {Response} from "@angular/http";

@Injectable()
export class AuthenticationService {

  private url = environment.storageUrl + "/auth";


  constructor(private http: HttpService) {//

  }

  signIn(userName: string, password: string) {
    console.log('signIn now');
    return this.http.post(this.url, {
      userName:userName,
      password:password
    }).map((response: Response) => {
      let data = response.json();
      this.http.saveToken(data.token);
      console.log("tookkeni: " + data.token);
      return data.id;
    });

  }


}
