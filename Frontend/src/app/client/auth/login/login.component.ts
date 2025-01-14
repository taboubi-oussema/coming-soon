import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APISService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private API: APISService) {}

  loginData = {
    email: '',
    password: '',
    rememberMe: false,
  };

  logFormData() {
    this.API.getUsers().subscribe((data: any) => {
      const user = data.find(
        (u: any) =>
          u.Email === this.loginData.email &&
          u.Password === this.loginData.password
      );
      if (user) {
        const userId = user._id;
        this.API.userId=userId

        alert('Login successful');
        this.router.navigate(['/Home'], { queryParams: { id: userId } });
      } else {
        alert('Invalid email or password');
      }
    });
  }
}
