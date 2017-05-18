import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthenticationService {

  private url = environment.storageUrl + "/user";

  constructor(private http: HttpService) {
  }

}
