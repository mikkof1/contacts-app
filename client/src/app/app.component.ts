import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sidenavMode;

  constructor() {

  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    console.log('rezizeeeee: '+ this.sidenavMode);
    let width = event ? event.target.innerWidth : window.innerWidth;
    this.sidenavMode = width >= 600 ? 'side' : 'over';
  }


}
