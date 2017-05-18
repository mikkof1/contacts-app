import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable()
export class UserService {

  private url = environment.storageUrl + "/user";

  constructor() { }

}
