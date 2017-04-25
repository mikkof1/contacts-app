import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sidenavMode: string;

  constructor(private router: Router) {
    this.onWindowResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    let width = event ? event.target.innerWidth : window.innerWidth;
    this.sidenavMode = width >= 600 ? 'side' : 'over';
  }

  navigateHome(sideNav) {
    this.router.navigate(['login']);
    if (this.sidenavMode == 'over') {
      sideNav.toggle();
    }
  }

  navigateContacts(sideNav) {
    this.router.navigate(['contacts']);
    if (this.sidenavMode == 'over') {
      sideNav.toggle();
    }
  }

}
