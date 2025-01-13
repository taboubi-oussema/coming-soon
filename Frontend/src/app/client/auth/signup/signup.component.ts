import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  states = ['California', 'Texas', 'Florida', 'New York', 'Illinois'];

  signupData = {
    firstName: '',
    lastName: '',
    email: '',
    state: '',
    password: '',
    emailUpdates: false,
    termsAccepted: false,
  };

  submitForm() {
    if (
      this.signupData.firstName !== '' &&
      this.signupData.lastName !== '' &&
      this.signupData.email !== '' &&
      this.signupData.state !== '' &&
      this.signupData.password !== '' &&
      this.signupData.password.length >= 8 &&
      this.signupData.termsAccepted
    ) {
      console.log(this.signupData);
    } else {
      alert(
        'Please fill in all the required fields and make sure all the data is valid.'
      );
    }
  }
}
