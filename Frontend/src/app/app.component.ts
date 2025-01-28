import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Frontend';
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Hide navbar for login and signup pages
      this.showNavbar = !['/login', '/signup','/admin','/Dashboar',"/Dashboar-jobs"].includes(this.router.url);
    });
  }

}
