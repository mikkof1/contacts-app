import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {UserService} from "../servises/user.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: string;
  password: string;
  errorText: string;

  constructor(private router: Router, private userService: UserService, private app: AppComponent) {
    this.errorText = '';
  }

  ngOnInit() {
  }

  openContactsPage() {

    let useApiStorage: boolean = environment.envName == 'api';
    if (this.account && this.password) {
      if (useApiStorage) {
        this.userService.signUserIn(this.account, this.password).subscribe(data => {
          this.app.user = data.json();
          this.router.navigate(['contacts']);

        }, error => {
          if(error.status==401||error.status==403) {
            this.errorText = 'Wrong Username or Password';
          }
          else{
            this.errorText ='Oops, something went wrong';
          }
          console.log('error login: ' + error.status + ' ' + error.statusText);
        });
      }
      else { //local strorage use
        console.log('local use only');
        this.router.navigate(['contacts']);
      }
    }

    this.account = '';
    this.password = '';
    this.errorText = '';
  }


}
