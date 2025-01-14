import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private route:Router){}
  email: string = '';
  password: string = '';

  onSubmit() {
    if(this.email=="admin"&&this.password=="admin"){
      this.route.navigate(['/Dashboar'])
    }else{
      alert('Username or Password incorrect')
    }
  }

}
