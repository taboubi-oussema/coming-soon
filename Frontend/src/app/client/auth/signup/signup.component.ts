import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APISService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private route:Router,private API:APISService){}
  states = ['California', 'Texas', 'Florida', 'New York', 'Illinois'];
  termsAccepted= false
  signupData = {
    First_Name: '',
    Last_Name: '',
    Email: '',
    State: '',
    Password: '',


  };

  submitForm() {
    if (
      this.signupData.First_Name !== '' &&
      this.signupData.Last_Name !== '' &&
      this.signupData.Email !== '' &&
      this.signupData.State !== '' &&
      this.signupData.Password !== '' &&
      this.signupData.Password.length >= 8

    ) {
      alert('new user success')
      this.API.addUsers(this.signupData).subscribe(()=>this.route.navigate( ['/login']))

    } else {
      alert(
        'Please fill in all the required fields and make sure all the data is valid.'
      );
    }
  }
}
