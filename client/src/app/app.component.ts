import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {MdSidenav} from "@angular/material";
import {User} from "./user/user";
import {HttpService} from "./utils/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sidenavMode: string;
  toolbarDisabled: boolean;
  user: User = {id: 0, userName: 'Local', password: 'pass', email: 'email@local'};

  @ViewChild('sidenav') sidenav: MdSidenav;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    let width = event ? event.target.innerWidth : window.innerWidth;
    this.sidenavMode = width >= 600 ? 'side' : 'over';
  }

  constructor(private router: Router, private http: HttpService) {
    this.onWindowResize(null);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects == '/login' || event.urlAfterRedirects == '/') {
          this.toolbarDisabled = true;
        }
        else {
          this.toolbarDisabled = false;
          this.onWindowResize(null);
        }
      }
    });
  }

  navigateHome(sideNav) {
    this.router.navigate(['login']);
  }

  navigateContacts(sideNav) {
    this.router.navigate(['contacts']);
  }

  toggleSideNav() {
    this.sidenav.toggle();
  }

  signOut() {
    this.http.signOut();
    this.router.navigate(['login']);
  }

}
