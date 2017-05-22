import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../servises/authentication.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: string;
  password: string;

  constructor(private router: Router, private authService: AuthenticationService) { //
  }

  ngOnInit() {
    console.log('login avattu');
  }

  openContactsPage() {
    console.log('täst lähteeee');

    let useApiStorage: boolean = environment.envName == 'api';
    if (this.account && this.password) {
      if (useApiStorage) {
        this.authService.signIn(this.account, this.password).subscribe(data => {
          console.log("this just came up: " + data);
        });
      }
      else {
         this.router.navigate(['contacts'])
      }
    }

  }






}
