import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {UserService} from "../servises/user.service";
import {User} from "../user";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: string;
  password: string;

  constructor(private router: Router, private userService: UserService, private comp: AppComponent) {

  }

  ngOnInit() {
  }

  openContactsPage() {

    let useApiStorage: boolean = environment.envName == 'api';
    if (this.account && this.password) {
      if (useApiStorage) {
        this.userService.signUserIn(this.account, this.password).subscribe(data => {
          this.comp.user = data.json();

          this.router.navigate(['contacts']);

        });

      }
      else {
        this.router.navigate(['contacts']);
      }
    }

  }


}
