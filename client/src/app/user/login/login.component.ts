import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openContactsPage(){
    if(this.account&&this.password){
      this.router.navigate(['contacts'])
    }

  }


}
