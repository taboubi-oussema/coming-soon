import { Component } from '@angular/core';
import { APISService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  id: any;
  constructor(private API: APISService) { 
    this.id = API.userId;
  }
}
